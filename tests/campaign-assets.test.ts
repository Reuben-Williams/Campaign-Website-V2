import { existsSync } from "node:fs";
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
