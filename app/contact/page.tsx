import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Get Your <span className="text-primary">Free Consultation</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty">
            Ready to transform your garage into the perfect studio space? Contact us today for a free consultation and
            detailed quote.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Request Your Free Consultation</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24 hours to schedule your consultation.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="info@flexgaragestudiollc.com" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="(813) 278-9380" />
                  </div>
                  <div>
                    <Label htmlFor="address">Property Address</Label>
                    <Input id="address" placeholder="123 Main St, Hollywood, FL 33024" />
                  </div>
                  <div>
                    <Label htmlFor="projectType">Project Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your studio type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="music">Music Studio</SelectItem>
                        <SelectItem value="art">Art Workshop</SelectItem>
                        <SelectItem value="multipurpose">Multi-Purpose Studio</SelectItem>
                        <SelectItem value="other">Other / Custom</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="budget">Estimated Budget</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-10k">Under $10,000</SelectItem>
                        <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                        <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                        <SelectItem value="over-50k">Over $50,000</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="message">Project Details</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your vision, timeline, and any specific requirements..."
                      rows={4}
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    Request Free Consultation
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                  <CardDescription>Get in touch with us directly or schedule a consultation</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <a href="tel:+18132789380" className="text-muted-foreground hover:text-primary">
                        (813) 278-9380
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-muted-foreground">
                        1421 N 71st Ter
                        <br />
                        Hollywood, FL 33024
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Business Hours</p>
                      <p className="text-muted-foreground">
                        Monday - Friday: 8:00 AM - 6:00 PM
                        <br />
                        Saturday: 9:00 AM - 4:00 PM
                        <br />
                        Sunday: By Appointment
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Service Areas</CardTitle>
                  <CardDescription>We proudly serve South Florida</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Hollywood, FL</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Fort Lauderdale, FL</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Miami-Dade County</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Broward County</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Palm Beach County</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-primary text-primary-foreground">
                <CardHeader>
                  <CardTitle>Why Choose Us?</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>✓ Florida Licensed LLC (L24000002723)</li>
                    <li>✓ Fully Insured & Bonded</li>
                    <li>✓ Free Consultations & Quotes</li>
                    <li>✓ Local Hollywood, FL Based</li>
                    <li>✓ Custom Design Solutions</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
