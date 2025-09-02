import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function PortfolioPage() {
  const projects = [
    {
      id: 1,
      title: "Modern Music Studio",
      location: "Hollywood, FL",
      type: "Music Studio",
      duration: "6 weeks",
      description:
        "Complete transformation of a 2-car garage into a professional recording studio with acoustic treatment, soundproofing, and climate control.",
      features: [
        "Acoustic foam panels",
        "Floating floor system",
        "Professional lighting",
        "Climate control",
        "Electrical upgrades",
      ],
      image: "/modern-music-studio-garage-conversion-with-acousti.png",
    },
    {
      id: 2,
      title: "Artist's Creative Workshop",
      location: "Fort Lauderdale, FL",
      type: "Art Studio",
      duration: "4 weeks",
      description:
        "Bright, airy art studio with natural lighting, ventilation system, and custom storage solutions for a professional artist.",
      features: [
        "Skylights installation",
        "Ventilation system",
        "Custom storage",
        "Easy-clean flooring",
        "Paint booth area",
      ],
      image: "/bright-art-studio-garage-conversion-with-skylights.png",
    },
    {
      id: 3,
      title: "Multi-Purpose Creative Space",
      location: "Miami-Dade County",
      type: "Multi-Purpose",
      duration: "5 weeks",
      description:
        "Flexible space that serves as both a woodworking shop and photography studio with modular design elements.",
      features: [
        "Modular workbenches",
        "Retractable backdrop system",
        "Dust collection",
        "Flexible lighting",
        "Tool storage",
      ],
      image: "/flexible-garage-workshop-with-modular-furniture-an.png",
    },
    {
      id: 4,
      title: "Home Recording Studio",
      location: "Broward County",
      type: "Music Studio",
      duration: "7 weeks",
      description:
        "Intimate recording space with vocal booth, control room, and professional acoustic treatment for a singer-songwriter.",
      features: [
        "Vocal isolation booth",
        "Control room setup",
        "Bass traps",
        "Diffusion panels",
        "Professional wiring",
      ],
      image: "/home-recording-studio-with-vocal-booth-and-mixing-.png",
    },
    {
      id: 5,
      title: "Pottery & Ceramics Studio",
      location: "Palm Beach County",
      type: "Art Studio",
      duration: "6 weeks",
      description: "Specialized ceramics studio with kiln room, pottery wheels, and proper ventilation for clay work.",
      features: ["Kiln installation", "Pottery wheel stations", "Clay storage", "Ventilation system", "Wash station"],
      image: "/pottery-studio-garage-conversion-with-pottery-whee.png",
    },
    {
      id: 6,
      title: "Dance & Movement Studio",
      location: "Hollywood, FL",
      type: "Dance Studio",
      duration: "4 weeks",
      description:
        "Open dance studio with mirrors, professional flooring, and sound system for dance instruction and practice.",
      features: ["Mirror walls", "Sprung dance floor", "Sound system", "Ballet barres", "Storage cubbies"],
      image: "/dance-studio-garage-conversion-with-mirrors-and-ba.png",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Our <span className="text-primary">Portfolio</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty">
            Explore our recent garage studio transformations and see how we've helped clients bring their creative
            visions to life.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <Badge variant="secondary">Music Studios</Badge>
            <Badge variant="secondary">Art Workshops</Badge>
            <Badge variant="secondary">Dance Studios</Badge>
            <Badge variant="secondary">Multi-Purpose</Badge>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-muted">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline">{project.type}</Badge>
                    <span className="text-sm text-muted-foreground">{project.duration}</span>
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">{project.location}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Key Features:</h4>
                    <ul className="text-xs space-y-1">
                      {project.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="text-muted-foreground">
                          • {feature}
                        </li>
                      ))}
                      {project.features.length > 3 && (
                        <li className="text-muted-foreground">• +{project.features.length - 3} more features</li>
                      )}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Ready to Transform Your Garage?</h2>
          <p className="text-lg text-muted-foreground mb-8 text-pretty">
            Every project starts with understanding your vision. Let's discuss how we can create your perfect creative
            space.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="text-lg px-8">
                Start Your Project
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                View Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
