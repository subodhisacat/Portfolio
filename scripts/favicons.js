import sharp from "sharp";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const sizes = [
  { size: 16, name: "favicon-16x16.png" },
  { size: 32, name: "favicon-32x32.png" },
  { size: 180, name: "apple-touch-icon.png" },
  { size: 192, name: "android-chrome-192x192.png" },
  { size: 512, name: "android-chrome-512x512.png" },
  { size: 512, name: "maskable-icon.png" },
];

const splashScreens = [
  { width: 2048, height: 2732, name: "apple-splash-2048-2732.png" },
  { width: 1668, height: 2388, name: "apple-splash-1668-2388.png" },
  { width: 1536, height: 2048, name: "apple-splash-1536-2048.png" },
  { width: 1125, height: 2436, name: "apple-splash-1125-2436.png" },
];

async function generateFavicons() {
  const inputFile = join(__dirname, "../public/name.svg");

  try {
    for (const { size, name } of sizes) {
      const outputFile = join(__dirname, "../public", name);

      await sharp(inputFile)
        .resize(size, size, {
          fit: "contain",
          background: { r: 255, g: 255, b: 255, alpha: 0 },
        })
        .png()
        .toFile(outputFile);

      console.log(`Generated ${name} (${size}x${size})`);
    }

    console.log("All favicons generated successfully!");
  } catch (error) {
    console.error("Error generating favicons:", error);
  }
}

async function generateSplashScreens() {
  const inputFile = join(__dirname, "../public/name.svg");
  const outputDir = join(__dirname, "../public/splash");

  try {
    await fs.promises.mkdir(outputDir, { recursive: true });

    for (const { width, height, name } of splashScreens) {
      const outputFile = join(outputDir, name);

      await sharp(inputFile)
        .resize(width, height, {
          fit: "contain",
          background: { r: 15, g: 15, b: 17, alpha: 1 }, // #0f0f11 background
        })
        .png()
        .toFile(outputFile);

      console.log(`Generated splash screen ${name} (${width}x${height})`);
    }

    console.log("All splash screens generated successfully!");
  } catch (error) {
    console.error("Error generating splash screens:", error);
  }
}

async function generate() {
  await generateFavicons();
  await generateSplashScreens();
}

generate();
