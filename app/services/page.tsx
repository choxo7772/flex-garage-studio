import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Wrench, Lightbulb, Users, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Our <span className="text-primary">Studio Services</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty">
            Professional garage transformations tailored to your creative vision and functional needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-border hover:shadow-lg transition-shadow h-full flex flex-col">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Wrench className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Music Studios</CardTitle>
                <CardDescription>
                  Professional soundproofing, acoustic treatment, and equipment installation for recording and practice
                  spaces
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <ul className="space-y-3 mb-6 flex-1">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm">Sound isolation & acoustic treatment</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm">Professional wiring & outlets</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm">Climate control systems</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm">Equipment mounting & cable management</span>
                  </li>
                </ul>
                <Link href="/contact">
                  <Button className="w-full">
                    Get Music Studio Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow h-full flex flex-col">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Art Workshops</CardTitle>
                <CardDescription>
                  Bright, ventilated spaces perfect for painting, sculpting, crafting, and creative work
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <ul className="space-y-3 mb-6 flex-1">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm">Natural & LED lighting systems</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm">Ventilation & air filtration</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm">Custom storage solutions</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm">Easy-clean flooring options</span>
                  </li>
                </ul>
                <Link href="/contact">
                  <Button className="w-full">
                    Get Art Studio Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow h-full flex flex-col">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Multi-Purpose Studios</CardTitle>
                <CardDescription>
                  Flexible spaces that adapt to various creative, professional, and recreational needs
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <ul className="space-y-3 mb-6 flex-1">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm">Modular design elements</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm">Flexible lighting options</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm">Convertible workspaces</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm">Multi-zone functionality</span>
                  </li>
                </ul>
                <Link href="/contact">
                  <Button className="w-full">
                    Get Custom Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Consultation</h3>
              <p className="text-muted-foreground">Free on-site consultation to understand your vision and space</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Design</h3>
              <p className="text-muted-foreground">Custom design plan with 3D renderings and detailed specifications</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Transform</h3>
              <p className="text-muted-foreground">Professional installation and transformation of your space</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Contact us today for a free consultation and detailed quote for your garage studio transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="tel:+18132789380">
              <Button size="lg" className="text-lg px-8">
                Call (813) 278-9380
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
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
