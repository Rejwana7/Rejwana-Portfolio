import type { NextConfig } from "next";

const pagesBasePath = process.env.PAGES_BASE_PATH ?? "";
const isGitHubPagesBuild = Boolean(pagesBasePath);

const nextConfig: NextConfig = {
  ...(isGitHubPagesBuild ? { output: "export" as const } : {}),
  basePath: pagesBasePath,
  trailingSlash: isGitHubPagesBuild,
  images: {
    unoptimized: isGitHubPagesBuild,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: pagesBasePath,
  },
};

export default nextConfig;
