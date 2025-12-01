import Link from "next/link"
import type { Metadata } from "next"
import Header from "@/components/header"

export const metadata: Metadata = {
  title: "Privacy Policy | The Eatery",
  description: "Privacy policy for The Eatery restaurant in Westerly, RI.",
}

export default function PrivacyPolicy() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 pt-20">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold mb-6 text-foreground">Privacy Policy</h1>
          <div className="prose prose-lg max-w-none text-foreground">
            <p>Last updated: May 26, 2025</p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">Introduction</h2>
            <p>
              The Eatery ("we," "our," or "us") respects your privacy and is committed to protecting it through our
              compliance with this policy. This policy describes the types of information we may collect from you or
              that you may provide when you visit our website and our practices for collecting, using, maintaining,
              protecting, and disclosing that information.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">Information We Collect</h2>
            <p>We collect several types of information from and about users of our website, including information:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>
                By which you may be personally identified, such as name, email address, telephone number ("personal
                information");
              </li>
              <li>That is about you but individually does not identify you, such as your preferences; and</li>
              <li>About your internet connection, the equipment you use to access our website, and usage details.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">How We Use Your Information</h2>
            <p>
              We use information that we collect about you or that you provide to us, including any personal
              information:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>To present our website and its contents to you;</li>
              <li>To provide you with information, products, or services that you request from us;</li>
              <li>To fulfill any other purpose for which you provide it;</li>
              <li>To carry out our obligations and enforce our rights;</li>
              <li>To notify you about changes to our website or any products or services we offer;</li>
              <li>In any other way we may describe when you provide the information;</li>
              <li>For any other purpose with your consent.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">Contact Information</h2>
            <p>To ask questions or comment about this privacy policy and our privacy practices, contact us at:</p>
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
