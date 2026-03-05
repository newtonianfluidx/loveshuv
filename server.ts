import express from "express";
import { createServer as createViteServer } from "vite";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_FILE = path.join(__dirname, "analytics_data.json");

const DEFAULT_DATA = {
  unconventional: { launches: 0, timeSpent: 0, scrolledBottom: 0, clickedYes: 0, clickedNo: 0 },
  conventional: { launches: 0, timeSpent: 0, scrolledBottom: 0, clickedYes: 0, clickedNo: 0 }
};

async function readData() {
  try {
    const data = await fs.readFile(DATA_FILE, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    // If file doesn't exist or is invalid, return default data
    return DEFAULT_DATA;
  }
}

async function writeData(data: any) {
  await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2), "utf-8");
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.get("/api/analytics", async (req, res) => {
    const data = await readData();
    res.json(data);
  });

  app.post("/api/analytics/track", async (req, res) => {
    const { variant, event, value } = req.body;
    
    if (!variant || !event) {
      return res.status(400).json({ error: "Missing variant or event" });
    }

    try {
      const data = await readData();
      
      if (!data[variant]) {
        data[variant] = { launches: 0, timeSpent: 0, scrolledBottom: 0, clickedYes: 0, clickedNo: 0 };
      }

      if (event === "timeSpent") {
        data[variant].timeSpent += (value || 1);
      } else {
        data[variant][event] += 1;
      }

      await writeData(data);
      res.json({ success: true });
    } catch (error) {
      console.error("Error tracking analytics:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  app.post("/api/analytics/reset", async (req, res) => {
    try {
      await writeData(DEFAULT_DATA);
      res.json({ success: true });
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Serve static files in production
    app.use(express.static(path.join(__dirname, "dist")));
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
