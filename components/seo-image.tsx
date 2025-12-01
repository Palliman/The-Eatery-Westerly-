import Image from "next/image"
import type { ImageProps } from "next/image"

interface SeoImageProps extends Omit<ImageProps, "alt"> {
  alt: string
  title?: string
  caption?: string
}

export default function SeoImage({ alt, title, caption, ...props }: SeoImageProps) {
  // Ensure alt text is always provided and meaningful
  const safeAlt = alt || "Image at The Eatery restaurant"

  return (
    <figure className="relative">
      <Image alt={safeAlt} {...props} />
      {caption && <figcaption className="text-xs text-muted-foreground mt-1 text-center">{caption}</figcaption>}
      {/* Add structured data for the image */}
      {props.src && typeof props.src === "string" && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ImageObject",
              contentUrl: props.src,
              name: title || safeAlt,
              description: caption || safeAlt,
            }),
          }}
        />
      )}
    </figure>
  )
}
