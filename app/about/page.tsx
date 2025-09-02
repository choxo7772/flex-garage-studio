import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Award, Users, Clock } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-4">
            Established 2023 • Florida Licensed LLC
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            About{" "}
            <span className="font-bold">
              FLEX GARAGE <span className="text-orange-500">STUDIO</span>
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty">
            We're passionate about transforming ordinary garages into extraordinary creative spaces that inspire and
            empower your artistic vision.
          </p>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Founded in December 2023,{" "}
                <span className="font-semibold">
                  FLEX GARAGE <span className="text-orange-500">STUDIO</span>
                </span>{" "}
                LLC emerged from a simple belief: every creative person deserves a dedicated space to pursue their
                passion. Based in Hollywood, Florida, we specialize in converting underutilized garages into
                professional-grade studios.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Our founder, Andres Nieto, recognized the growing need for affordable creative spaces in South Florida.
                With a background in construction and a passion for the arts, he established{" "}
                <span className="font-semibold">
                  FLEX GARAGE <span className="text-orange-500">STUDIO</span>
                </span>{" "}
                to help artists, musicians, and creators transform their vision into reality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg">Start Your Project</Button>
                </Link>
                <Link href="/services">
                  <Button variant="outline" size="lg">
                    View Services
                  </Button>
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center">
                <CardHeader>
                  <Award className="h-8 w-8 text-primary mx-auto mb-2" />
                  <CardTitle className="text-2xl">Licensed</CardTitle>
                  <CardDescription>Florida LLC L24000002723</CardDescription>
                </CardHeader>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                  <CardTitle className="text-2xl">Local</CardTitle>
                  <CardDescription>Hollywood, FL Based</CardDescription>
                </CardHeader>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <CheckCircle className="h-8 w-8 text-primary mx-auto mb-2" />
                  <CardTitle className="text-2xl">Insured</CardTitle>
                  <CardDescription>Fully Covered</CardDescription>
                </CardHeader>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
                  <CardTitle className="text-2xl">Est. 2023</CardTitle>
                  <CardDescription>Fresh & Innovative</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Quality First</h3>
              <p className="text-muted-foreground">
                We never compromise on materials, craftsmanship, or attention to detail
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Client-Focused</h3>
              <p className="text-muted-foreground">Your vision drives every decision we make throughout the project</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Professional</h3>
              <p className="text-muted-foreground">Licensed, insured, and committed to exceeding industry standards</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Let's Build Your Dream Studio</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Ready to transform your garage into the creative space you've always wanted? Contact us today.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
                  <p>
                    <strong>Phone:</strong> (813) 278-9380
                  </p>
                  <p>
                    <strong>Address:</strong> 1421 N 71st Ter, Hollywood, FL 33024
                  </p>
                  <p>
                    <strong>License:</strong> FL LLC L24000002723
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Service Area</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p>Serving South Florida including:</p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Hollywood</li>
                  <li>Fort Lauderdale</li>
                  <li>Miami-Dade County</li>
                  <li>Broward County</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="tel:+18132789380">
              <Button size="lg" className="text-lg px-8">
                Call Now
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                Get Free Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
