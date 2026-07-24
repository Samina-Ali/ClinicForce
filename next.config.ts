import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* output: "export" removed — static export disables API routes,
     and this app needs a server for SQLite writes + file uploads */
};

export default nextConfig;
