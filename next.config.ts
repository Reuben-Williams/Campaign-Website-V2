import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const repoBasePath = "/Campaign-Website-V2";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isGitHubPages ? repoBasePath : undefined,
  assetPrefix: isGitHubPages ? `${repoBasePath}/` : undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: isGitHubPages ? repoBasePath : "",
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
