import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

import { campaignImages, navItems, pages } from "@/src/data/campaign";

const publicDir = path.join(process.cwd(), "public");

describe("campaign image contract", () => {
  it("uses local public assets instead of generated remote placeholders", () => {
    const serialized = JSON.stringify({ campaignImages, pages });

    expect(serialized).not.toContain("lh3.googleusercontent.com/aida-public");
    expect(serialized).not.toContain("unsplash.com");
  });

  it("references campaign images that exist in public", () => {
    for (const imagePath of Object.values(campaignImages)) {
      expect(imagePath.startsWith("/images/campaign/")).toBe(true);
      expect(existsSync(path.join(publicDir, imagePath))).toBe(true);
    }
  });
});

describe("campaign navigation", () => {
  it("includes a dedicated home item first", () => {
    expect(navItems[0]).toEqual({ label: "Home", href: "/" });
  });
});

const bannedTerms = ["de" + "mo", "git" + "hub", "ver" + "cel", "supa" + "base"];

function collectFiles(targetPath: string): string[] {
  const stats = statSync(targetPath);

  if (stats.isFile()) {
    return [targetPath];
  }

  return readdirSync(targetPath).flatMap((entry) => {
    const fullPath = path.join(targetPath, entry);
    return collectFiles(fullPath);
  });
}

describe("campaign source copy", () => {
  it("does not mention staging or provider terms", () => {
    const sourceFiles = [
      ...collectFiles(path.join(process.cwd(), "app")),
      ...collectFiles(path.join(process.cwd(), "src")),
      path.join(process.cwd(), "README.md"),
      path.join(process.cwd(), ".env.example"),
      path.join(process.cwd(), "next.config.ts"),
      path.join(process.cwd(), "package.json"),
    ];

    const matches = sourceFiles.flatMap((filePath) => {
      const content = readFileSync(filePath, "utf8").toLowerCase();
      return bannedTerms
        .filter((term) => content.includes(term))
        .map((term) => `${path.relative(process.cwd(), filePath)}:${term}`);
    });

    expect(matches).toEqual([]);
  });
});
