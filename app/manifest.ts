import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "The Eatery - Homestyle Cooking in Westerly, RI",
    short_name: "The Eatery",
    description: "The Eatery serves homestyle comfort food in a warm, inviting atmosphere in Westerly, RI.",
    start_url: "/",
    display: "standalone",
    background_color: "#2B4562",
    theme_color: "#2B4562",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any", // .ico can contain multiple sizes like 16x16, 32x32, 48x48
        type: "image/x-icon",
      },
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      // If you have a specific maskable icon, you can add it here.
      // For example, if android-chrome-512x512.png is designed to be maskable:
      // {
      //   src: "/android-chrome-512x512.png",
      //   sizes: "512x512",
      //   type: "image/png",
      //   purpose: "maskable",
      // }
    ],
  }
}
