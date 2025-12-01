import Link from "next/link"
import type { Metadata } from "next"
import Header from "@/components/header"

export const metadata: Metadata = {
  title: "Terms of Service | The Eatery",
  description: "Terms of service for The Eatery restaurant in Westerly, RI.",
}

export default function TermsOfService() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 pt-20">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold mb-6 text-foreground">Terms of Service</h1>
          <div className="prose prose-lg max-w-none text-foreground">
            <p>Last updated: May 26, 2025</p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">Introduction</h2>
            <p>
              These Terms of Service ("Terms") govern your access to and use of The Eatery's website. Please read these
              Terms carefully before using our website.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">Acceptance of Terms</h2>
            <p>
              By accessing or using our website, you agree to be bound by these Terms. If you do not agree to these
              Terms, you may not access or use our website.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">Changes to Terms</h2>
            <p>
              We may revise and update these Terms from time to time in our sole discretion. All changes are effective
              immediately when we post them.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">Intellectual Property Rights</h2>
            <p>
              The website and its entire contents, features, and functionality (including but not limited to all
              information, software, text, displays, images, video, and audio, and the design, selection, and
              arrangement thereof) are owned by The Eatery, its licensors, or other providers of such material and are
              protected by United States and international copyright, trademark, patent, trade secret, and other
              intellectual property or proprietary rights laws.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">Disclaimer of Warranties</h2>
            <p>
              You understand that we cannot and do not guarantee or warrant that files available for downloading from
              the internet or the website will be free of viruses or other destructive code. You are responsible for
              implementing sufficient procedures and checkpoints to satisfy your particular requirements for anti-virus
              protection and accuracy of data input and output, and for maintaining a means external to our site for any
              reconstruction of any lost data.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">Contact Information</h2>
            <p>To ask questions or comment about these Terms and our practices, contact us at:</p>
            <p>
              The Eatery
              <br />
              55 Beach Street
              <br />
              Westerly, RI 02891
              <br />
              (401) 315-0777
              <br />
              theeaterywesterly@gmail.com
            </p>

            <div className="mt-8">
              <Link href="/" className="text-primary hover:underline">
                Return to Home Page
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
