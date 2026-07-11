import type { NextConfig } from "next";

const configuredBasePath = process.env.STATIC_SITE_BASE_PATH?.trim() ?? "";
const staticBasePath = configuredBasePath.startsWith("/")
  ? configuredBasePath
  : configuredBasePath
    ? `/${configuredBasePath}`
    : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: staticBasePath || undefined,
  assetPrefix: staticBasePath ? `${staticBasePath}/` : undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: staticBasePath,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
