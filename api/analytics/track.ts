import fs from "fs/promises";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "analytics_data.json");

const DEFAULT_DATA = {
  unconventional: { launches: 0, timeSpent: 0, scrolledBottom: 0, clickedYes: 0, clickedNo: 0 },
  conventional: { launches: 0, timeSpent: 0, scrolledBottom: 0, clickedYes: 0, clickedNo: 0 }
};

async function readData() {
  try {
    const data = await fs.readFile(DATA_FILE, "utf-8");
    return JSON.parse(data);
  } catch {
    return DEFAULT_DATA;
  }
}

async function writeData(data: any) {
  await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2));
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { variant, event, value } = req.body;

  if (!variant || !event) {
    return res.status(400).json({ error: "Missing variant or event" });
  }

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
}
