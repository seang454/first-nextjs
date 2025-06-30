import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   images: {
    domains: ['images.unsplash.com','cdn.dummyjson.com','cdn.pixabay.com'], // 👈 Add this line
  },
  
  /* config options here */
};

export default nextConfig;
