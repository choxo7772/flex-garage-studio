import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Wrench, Lightbulb, Users, Star, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4">
            Established 2023 • Florida Licensed LLC
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Transform Your Garage Into a<span className="text-orange-500"> Professional Studio</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
            <span className="font-semibold">
              FLEX GARAGE <span className="text-orange-500">STUDIO</span>
            </span>{" "}
            LLC specializes in converting ordinary garages into extraordinary creative spaces. From music studios to art
            workshops, we bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="text-lg px-8">
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                View Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Studio Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional garage transformations tailored to your creative needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Wrench className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Music Studios</CardTitle>
                <CardDescription>
                  Professional soundproofing, acoustic treatment, and equipment installation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Sound isolation & treatment</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Professional wiring & outlets</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Climate control systems</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Art Workshops</CardTitle>
                <CardDescription>
                  Bright, ventilated spaces perfect for painting, sculpting, and crafting
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Natural & LED lighting</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Ventilation systems</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Storage solutions</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Multi-Purpose Studios</CardTitle>
                <CardDescription>Flexible spaces that adapt to various creative and professional needs</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Modular design elements</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Flexible lighting options</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Convertible workspaces</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Choose{" "}
                <span className="font-bold">
                  FLEX GARAGE <span className="text-orange-500">STUDIO</span>
                </span>
                ?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Florida Licensed & Insured</h3>
                    <p className="text-muted-foreground">
                      Fully licensed LLC established in 2023, operating with complete insurance coverage
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Local Hollywood Expertise</h3>
                    <p className="text-muted-foreground">
                      Based in Hollywood, FL, we understand local building codes and climate considerations
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Custom Solutions</h3>
                    <p className="text-muted-foreground">
                      Every project is tailored to your specific needs, space, and budget
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-card rounded-lg p-8 border border-border">
              <div className="text-center mb-6">
                <div className="flex justify-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-lg font-semibold text-foreground">Trusted by Local Creatives</p>
              </div>
              <blockquote className="text-muted-foreground italic text-center mb-4">
                <span className="font-semibold">
                  FLEX GARAGE <span className="text-orange-500">STUDIO</span>
                </span>{" "}
                transformed our garage into an amazing music studio. The attention to detail and professional quality
                exceeded our expectations.
              </blockquote>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-8 h-8 rounded-full overflow-hidden">
                  <Image
                    src="/sarah-m-testimonial.png"
                    alt="Sarah M."
                    width={32}
                    height={32}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-sm text-muted-foreground">- Sarah M., Hollywood Resident</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Transform Your Garage?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Contact us today for a free consultation and let's bring your studio vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="tel:+18132789380">
              <Button variant="secondary" size="lg" className="text-lg px-8">
                Call (813) 278-9380
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                Schedule Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
