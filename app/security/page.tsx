import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Lock, Eye, Server, AlertTriangle, CheckCircle } from "lucide-react"

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <Shield className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold text-foreground">Security</h1>
          </div>
          <p className="text-muted-foreground">Last updated: April 12, 2025</p>
          <p className="text-lg text-muted-foreground mt-2">
            Your security and privacy are our top priorities. Learn about our comprehensive security measures and best
            practices.
          </p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Lock className="h-5 w-5 text-primary" />
                <span>Data Protection</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                Flex Garage Studio implements industry-standard security measures to protect your personal and business
                information:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>
                  <strong>Encryption:</strong> All data transmission is secured using SSL/TLS encryption protocols
                </li>
                <li>
                  <strong>Secure Storage:</strong> Personal information is stored in encrypted databases with restricted
                  access
                </li>
                <li>
                  <strong>Access Controls:</strong> Multi-factor authentication and role-based access for all team
                  members
                </li>
                <li>
                  <strong>Regular Audits:</strong> Periodic security assessments and vulnerability testing
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Server className="h-5 w-5 text-primary" />
                <span>Website Security</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Security Features</span>
                  </h3>
                  <ul className="space-y-2">
                    <li>• HTTPS encryption on all pages</li>
                    <li>• Regular security updates</li>
                    <li>• Firewall protection</li>
                    <li>• DDoS mitigation</li>
                    <li>• Secure hosting infrastructure</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center space-x-2">
                    <Eye className="h-4 w-4 text-primary" />
                    <span>Monitoring</span>
                  </h3>
                  <ul className="space-y-2">
                    <li>• 24/7 security monitoring</li>
                    <li>• Automated threat detection</li>
                    <li>• Real-time alerts</li>
                    <li>• Activity logging</li>
                    <li>• Incident response procedures</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Physical Security</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>Our physical operations and client projects are protected through:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>
                  <strong>Secure Office Location:</strong> Our Hollywood, FL office maintains controlled access and
                  security systems
                </li>
                <li>
                  <strong>Document Security:</strong> Physical contracts and sensitive documents are stored in locked,
                  fireproof cabinets
                </li>
                <li>
                  <strong>Equipment Protection:</strong> Tools and equipment are secured during transport and storage
                </li>
                <li>
                  <strong>Site Security:</strong> Client project sites are secured according to industry best practices
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Privacy and Confidentiality</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>We maintain strict confidentiality standards:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Client project details and designs are kept confidential</li>
                <li>Non-disclosure agreements available upon request</li>
                <li>Limited access to client information on a need-to-know basis</li>
                <li>Secure disposal of sensitive documents and materials</li>
                <li>Regular staff training on privacy and security protocols</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Payment Security</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>Your financial information is protected through:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>PCI DSS compliant payment processing</li>
                <li>Encrypted payment transactions</li>
                <li>Secure payment gateways</li>
                <li>No storage of credit card information on our systems</li>
                <li>Fraud detection and prevention measures</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Insurance and Licensing</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>Flex Garage Studio maintains comprehensive protection:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div>
                  <h3 className="font-semibold mb-2">Insurance Coverage</h3>
                  <ul className="space-y-1">
                    <li>• General liability insurance</li>
                    <li>• Professional liability coverage</li>
                    <li>• Workers' compensation</li>
                    <li>• Property damage protection</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Legal Compliance</h3>
                  <ul className="space-y-1">
                    <li>• Florida state licensing</li>
                    <li>• Local permit compliance</li>
                    <li>• Building code adherence</li>
                    <li>• Safety regulation compliance</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <AlertTriangle className="h-5 w-5 text-primary" />
                <span>Incident Response</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>In the event of a security incident, we have established procedures to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Immediately assess and contain the incident</li>
                <li>Notify affected parties within 72 hours when required</li>
                <li>Investigate the root cause and implement corrective measures</li>
                <li>Cooperate with law enforcement and regulatory authorities</li>
                <li>Provide regular updates on incident resolution</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Best Practices for Clients</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>Help us maintain security by following these recommendations:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Keep your contact information up to date</li>
                <li>Use strong, unique passwords for any online accounts</li>
                <li>Be cautious of phishing attempts or suspicious communications</li>
                <li>Report any security concerns immediately</li>
                <li>Verify our identity before sharing sensitive information</li>
                <li>Secure your property during project work</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Reporting Security Issues</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                If you discover a security vulnerability or have concerns about our security practices, please contact
                us immediately:
              </p>
              <div className="mt-4 space-y-2">
                <p>
                  <strong>Security Contact:</strong>
                </p>
                <p>Email: info@flexgaragestudiollc.com</p>
                <p>Phone: (813) 278-9380 (Emergency Line)</p>
                <p>Address: 1421 N 71st Ter, Hollywood, FL 33024</p>
              </div>
              <p className="mt-4">
                We take all security reports seriously and will respond within 24 hours during business days.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Compliance and Certifications</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>Flex Garage Studio adheres to relevant security standards and regulations:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Florida state business regulations</li>
                <li>Local building and safety codes</li>
                <li>OSHA workplace safety standards</li>
                <li>Environmental protection guidelines</li>
                <li>Industry best practices for construction and renovation</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  )
}
