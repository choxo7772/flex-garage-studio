import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Terms of Service</h1>
          <p className="text-muted-foreground">Last updated: April 12, 2025</p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Agreement to Terms</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                These Terms of Service ("Terms") govern your use of the website and services provided by FLEX GARAGE
                STUDIO LLC ("Company," "we," "our," or "us"), a Florida Limited Liability Company incorporated on
                December 26, 2023. By accessing our website or using our services, you agree to be bound by these Terms.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Description of Services</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                Flex Garage Studio provides garage transformation and studio conversion services, including but not
                limited to:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Music studio conversions and soundproofing</li>
                <li>Art workshop and creative space design</li>
                <li>Multi-purpose studio installations</li>
                <li>Consultation and design services</li>
                <li>Construction and renovation services</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Eligibility and Account Registration</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                You must be at least 18 years old and have the legal capacity to enter into contracts to use our
                services. By using our services, you represent and warrant that you meet these requirements and that all
                information you provide is accurate and complete.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Service Terms and Conditions</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <h3 className="text-lg font-semibold mb-3">Project Agreements</h3>
              <p>
                All projects require a signed contract detailing scope of work, timeline, materials, and payment terms.
                Changes to the original scope may result in additional charges.
              </p>

              <h3 className="text-lg font-semibold mb-3 mt-6">Payment Terms</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Consultation fees are due at the time of service</li>
                <li>Project deposits are required before work begins</li>
                <li>Final payment is due upon project completion</li>
                <li>Late payments may incur additional fees</li>
              </ul>

              <h3 className="text-lg font-semibold mb-3 mt-6">Permits and Compliance</h3>
              <p>
                Client is responsible for obtaining necessary permits unless otherwise specified in the contract. All
                work will comply with local building codes and regulations in Florida.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Intellectual Property Rights</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                All content on our website, including text, graphics, logos, and images, is the property of FLEX GARAGE
                STUDIO LLC and is protected by copyright and other intellectual property laws. Custom designs created
                for clients become the property of the client upon full payment.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>User Responsibilities</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>You agree to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Provide accurate and complete information</li>
                <li>Maintain the confidentiality of any account credentials</li>
                <li>Use our services only for lawful purposes</li>
                <li>Respect our intellectual property rights</li>
                <li>Provide safe and accessible work environments</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Prohibited Uses</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>You may not use our services to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon the rights of others</li>
                <li>Transmit harmful or malicious content</li>
                <li>Interfere with the operation of our services</li>
                <li>Attempt to gain unauthorized access to our systems</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Warranties and Disclaimers</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <h3 className="text-lg font-semibold mb-3">Limited Warranty</h3>
              <p>
                We warrant our workmanship for a period of one (1) year from project completion. This warranty covers
                defects in materials and workmanship under normal use conditions.
              </p>

              <h3 className="text-lg font-semibold mb-3 mt-6">Disclaimer</h3>
              <p>
                Except as expressly stated, our services are provided "as is" without warranties of any kind. We
                disclaim all implied warranties, including merchantability and fitness for a particular purpose.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Limitation of Liability</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                To the maximum extent permitted by law, Flex Garage Studio shall not be liable for any indirect,
                incidental, special, or consequential damages arising from the use of our services. Our total liability
                shall not exceed the amount paid for the specific service giving rise to the claim.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Indemnification</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                You agree to indemnify and hold harmless Flex Garage Studio from any claims, damages, or expenses
                arising from your use of our services, violation of these Terms, or infringement of any third-party
                rights.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Termination</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                We reserve the right to terminate or suspend access to our services at any time, with or without cause.
                Upon termination, your right to use our services will cease immediately. Ongoing projects will be
                completed according to existing contracts.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Dispute Resolution</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                Any disputes arising from these Terms or our services shall be resolved through binding arbitration in
                accordance with the rules of the American Arbitration Association. The arbitration shall take place in
                Broward County, Florida.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Governing Law</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the State of Florida,
                without regard to its conflict of law provisions.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Changes to Terms</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                We reserve the right to modify these Terms at any time. We will notify users of any material changes by
                posting the updated Terms on our website. Your continued use of our services after such modifications
                constitutes acceptance of the updated Terms.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>If you have any questions about these Terms of Service, please contact us:</p>
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
