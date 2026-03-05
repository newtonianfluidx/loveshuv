import fs from "fs/promises";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "analytics_data.json");

export default async function handler(req, res) {
  try {
    const data = await fs.readFile(DATA_FILE, "utf-8");
    res.json(JSON.parse(data));
  } catch {
    res.json({});
  }
}
