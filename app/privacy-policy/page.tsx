import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground">Last updated: April 12, 2025</p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Introduction</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                Flex Garage Studio ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy
                explains how we collect, use, disclose, and safeguard your information when you visit our website or use
                our services.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Information We Collect</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <h3 className="text-lg font-semibold mb-3">Personal Information</h3>
              <p>We may collect personal information that you voluntarily provide to us when you:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Request a consultation or quote</li>
                <li>Contact us via phone, email, or contact forms</li>
                <li>Subscribe to our newsletter or marketing communications</li>
                <li>Engage with our services</li>
              </ul>

              <h3 className="text-lg font-semibold mb-3 mt-6">Automatically Collected Information</h3>
              <p>When you visit our website, we may automatically collect certain information, including:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>IP address and browser information</li>
                <li>Device and operating system information</li>
                <li>Pages visited and time spent on our website</li>
                <li>Referring website information</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>How We Use Your Information</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Provide, maintain, and improve our services</li>
                <li>Process and respond to your inquiries and requests</li>
                <li>Send you marketing communications (with your consent)</li>
                <li>Analyze website usage and improve user experience</li>
                <li>Comply with legal obligations and protect our rights</li>
                <li>Prevent fraud and ensure security</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Information Sharing and Disclosure</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                We do not sell, trade, or rent your personal information to third parties. We may share your information
                in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>With service providers who assist us in operating our business</li>
                <li>When required by law or to protect our legal rights</li>
                <li>In connection with a business transfer or merger</li>
                <li>With your explicit consent</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Data Security</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                We implement appropriate technical and organizational security measures to protect your personal
                information against unauthorized access, alteration, disclosure, or destruction. However, no method of
                transmission over the internet or electronic storage is 100% secure.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Your Rights and Choices</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Access, update, or delete your personal information</li>
                <li>Opt-out of marketing communications</li>
                <li>Request information about how we use your data</li>
                <li>File a complaint with relevant authorities</li>
              </ul>
              <p className="mt-4">To exercise these rights, please contact us at the information provided below.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Cookies and Tracking Technologies</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                Our website may use cookies and similar tracking technologies to enhance your browsing experience and
                analyze website traffic. You can control cookie settings through your browser preferences.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Third-Party Links</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                Our website may contain links to third-party websites. We are not responsible for the privacy practices
                or content of these external sites. We encourage you to review their privacy policies.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Children's Privacy</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                Our services are not intended for children under 13 years of age. We do not knowingly collect personal
                information from children under 13. If we become aware that we have collected such information, we will
                take steps to delete it.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Changes to This Privacy Policy</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the
                new Privacy Policy on this page and updating the "Last updated" date. Your continued use of our services
                after any modifications constitutes acceptance of the updated Privacy Policy.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>If you have any questions about this Privacy Policy, please contact us:</p>
              <div className="mt-4 space-y-2">
                <p>
                  <strong>Flex Garage Studio</strong>
                </p>
                <p>1421 N 71st Ter, Hollywood, FL 33024</p>
                <p>Phone: (813) 278-9380</p>
                <p>Email: info@flexgaragestudiollc.com</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  )
}
