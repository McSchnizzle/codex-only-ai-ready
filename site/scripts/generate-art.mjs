import fs from "fs";
import path from "path";
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config({ path: path.resolve(process.cwd(), ".env.local") });

const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
  console.error("Missing GEMINI_API_KEY in .env.local");
  process.exit(1);
}

const modelName = process.env.GEMINI_IMAGE_MODEL || "gemini-3-pro-image-preview";
const genAI = new GoogleGenerativeAI(apiKey);

const tasks = [
  {
    name: "hero",
    prompt:
      "Create an illustration for a website hero section. Scene: a Portland-style small business street with a coffee shop storefront and a landscaping truck, with subtle AI connection nodes or soft glows around devices. Style: flat, minimal, slightly geometric, calm and professional. Colors: deep forest green, slate blue, teal accents, warm neutral background. Atmosphere: calm competence, not flashy startup. No text. 16:9 aspect ratio.",
    aspectRatio: "16:9",
    imageSize: "2K",
  },
  {
    name: "og",
    prompt:
      "Design a social/share image for AI Support PDX. Composition: calming Pacific Northwest inspired background with abstract connection lines and room for a wordmark at the left. Style: flat, minimal, professional; colors deep forest green, slate blue, teal, warm neutral. No text baked in. 16:9 aspect ratio suitable for 1200x630 crops.",
    aspectRatio: "16:9",
    imageSize: "1K",
  },
  {
    name: "icons",
    prompt:
      "Create a 2x2 grid of flat vector-style icons on a light neutral background. Icons: (1) Strategy & roadmaps — simple path with a flag. (2) Automation & agents — two gears with a small spark or node. (3) Training & enablement — person at a whiteboard with a lightbulb. (4) Private AI & security — shield with small nodes. Style: outlined with minimal fills, modern and professional, colors deep forest green, slate blue, teal accents.",
    aspectRatio: "1:1",
    imageSize: "1K",
  },
];

const requested = process.argv.slice(2);
const queue = requested.length ? tasks.filter((task) => requested.includes(task.name)) : tasks;

async function generate(task) {
  console.log(`Generating ${task.name} with model ${modelName}...`);
  const model = genAI.getGenerativeModel({
    model: modelName,
    generationConfig: {
      responseModalities: ["IMAGE"],
      imageConfig: {
        aspectRatio: task.aspectRatio,
        imageSize: task.imageSize,
      },
    },
  });

  const result = await model.generateContent(task.prompt);
  const part = result.response.candidates?.[0]?.content?.parts?.find((p) => p.inlineData);

  if (!part?.inlineData?.data) {
    throw new Error(`No image returned for task ${task.name}`);
  }

  const buffer = Buffer.from(part.inlineData.data, "base64");
  const outDir = path.join(process.cwd(), "public", "art");
  fs.mkdirSync(outDir, { recursive: true });
  const filePath = path.join(outDir, `${task.name}.png`);
  fs.writeFileSync(filePath, buffer);
  console.log(`Saved ${task.name} -> ${filePath} (${(buffer.length / 1024).toFixed(0)} KB)`);
}

async function run() {
  for (const task of queue) {
    try {
      await generate(task);
    } catch (err) {
      console.error(`Failed to generate ${task.name}:`, err);
    }
  }
}

run();
