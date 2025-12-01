/** @type {import('next').NextConfig} */
const nextConfig = {
eslint: {
  ignoreDuringBuilds: true,
},
typescript: {
  ignoreBuildErrors: true,
},
images: {
  unoptimized: true,
},
async headers() {
  const securityHeaders = [
    // Content Security Policy (CSP)
    // Start with a restrictive policy and gradually open it up as needed.
    // This is a basic example; you'll need to customize it for your specific scripts, styles, and resources.
    // Consider using a nonce-based or hash-based approach for inline scripts/styles if necessary.
    {
      key: 'Content-Security-Policy',
      value: `
            default-src 'self';
            script-src 'self' 'unsafe-eval' 'unsafe-inline' *.vercel-insights.com vercel.live;
            style-src 'self' 'unsafe-inline';
            img-src 'self' data: blob: https://blob.v0.dev *.google.com *.googleapis.com;
            font-src 'self';
            object-src 'none';
            base-uri 'self';
            form-action 'self';
            frame-ancestors 'none';
            connect-src 'self' *.vercel-insights.com;
            media-src 'self' https://assets.mixkit.co;
          `.replace(/\s{2,}/g, ' ').trim(), // Minify the policy string
    },
    // HTTP Strict Transport Security (HSTS)
    // Tells browsers to always use HTTPS.
    // Set a long max-age (e.g., 2 years) after confirming everything works.
    // Add `preload` if you plan to submit your site to the HSTS preload list.
    {
      key: 'Strict-Transport-Security',
      value: 'max-age=63072000; includeSubDomains; preload',
    },
    // X-Frame-Options (XFO)
    // Prevents clickjacking by controlling if your site can be embedded in iframes.
    {
      key: 'X-Frame-Options',
      value: 'SAMEORIGIN', // Or 'DENY' if you don't want it framed at all
    },
    // X-Content-Type-Options
    // Prevents browsers from MIME-sniffing a response away from the declared content-type.
    {
      key: 'X-Content-Type-Options',
      value: 'nosniff',
    },
    // Referrer-Policy
    // Controls how much referrer information is sent with requests.
    {
      key: 'Referrer-Policy',
      value: 'origin-when-cross-origin', // A common and reasonable default
    },
    // Permissions-Policy (formerly Feature-Policy)
    // Allows you to control which browser features can be used.
    {
      key: 'Permissions-Policy',
      value: 'camera=(), microphone=(), geolocation=(), payment=()', // Example: disable common sensitive APIs
    },
    // Cross-Origin-Opener-Policy (COOP)
    // Helps isolate your site from cross-origin windows.
    {
      key: 'Cross-Origin-Opener-Policy',
      value: 'same-origin', // Or 'same-origin-allow-popups'
    },
    // Cross-Origin-Embedder-Policy (COEP)
    // Prevents a document from loading any cross-origin resources that don't explicitly grant permission.
    // This can be restrictive; enable with caution and test thoroughly.
    // {
    //   key: 'Cross-Origin-Embedder-Policy',
    //   value: 'require-corp', // or 'credentialless'
    // },
  ];

  return [
    {
      source: '/:path*', // Apply these headers to all routes
      headers: securityHeaders,
    },
  ];
},
}

export default nextConfig
