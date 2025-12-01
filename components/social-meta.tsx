import Head from "next/head"

interface SocialMetaProps {
  title: string
  description: string
  imageUrl: string
  url: string
}

export default function SocialMeta({ title, description, imageUrl, url }: SocialMetaProps) {
  const fullImageUrl = imageUrl.startsWith("http") ? imageUrl : `https://theeatery.com${imageUrl}`
  const fullUrl = url.startsWith("http") ? url : `https://theeatery.com${url}`

  return (
    <Head>
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:site_name" content="The Eatery" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={fullImageUrl} />

      {/* Additional helpful meta tags */}
      <link rel="canonical" href={fullUrl} />
    </Head>
  )
}
