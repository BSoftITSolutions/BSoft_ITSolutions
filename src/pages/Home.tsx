import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Link, useNavigate } from "react-router-dom"
import { ArrowRight, Share2, Gauge, Newspaper, Check, BookText, Info, Box, Waypoints, PersonStanding, Users, X } from "lucide-react"

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}


      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          {/* Background Image */}
          <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: `url('/public/heroimage1.png')` }}></div>

          {/* Optional overlay for better text readability */}
          <div className="absolute inset-0 bg-black opacity-30 z-0"></div>

          {/* Hero Content */}
          <div className="relative z-10 flex flex-col items-center justify-center px-6 py-32">
            <div className="max-w-2xl space-y-6 text-white text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Bring Your Ideas To Life
              </h1>
              <p className="text-lg text-white/90">
                Got an amazing idea but don’t know how to turn it into reality? I can help! Whether it’s a web app, an automation tool, an AI-driven solution, or something unique, I’ll bring your vision to life.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {/* <Button size="lg" className="bg-green-500 hover:bg-green-600">
                  Get Started
                </Button>
                <Button size="lg" variant="outline" className="bg-white/10 text-white hover:bg-white/20">
                  Learn More
                </Button> */}
              </div>
            </div>
          </div>

          {/* Curved Bottom SVG */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 80" fill="#ffffff">
              <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,80L1360,80C1280,80,1120,80,960,80C800,80,640,80,480,80C320,80,160,80,80,80L0,80Z"></path>
            </svg>
          </div>
        </section>


        <section className="container py-16">
          <div className="text-center space-y-2 mb-12">
            <h2 className="text-3xl font-bold">A Place That Helps Your Growth</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We empower students, researchers, and professionals by providing top-notch technical support, content services, and academic assistance.
              Whether you’re working on a Ph.D. project, research paper, presentation, or any technical task, we’ve got you covered!

            </p>
            <Button className="text-sm font-medium text-foreground bg-transparent bg-green-600 hover:bg-green-600 text-white shadow-none" onClick={() => navigate("/about-us")}>About us <ArrowRight /></Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <Card className="border shadow-sm">
              <CardContent className="p-6 space-y-2">
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <Share2 className="text-green-600" size={24} />
                </div>
                <h3 className="font-medium text-lg">Academic </h3>
                <p className="text-muted-foreground">
                  Assistance with final-year projects, Ph.D. thesis work, and cutting-edge research projects.      </p>
              </CardContent>
              <CardFooter className="px-6 pb-6 pt-0">

              </CardFooter>
            </Card>

            {/* Card 2 */}
            <Card className="border shadow-sm">
              <CardContent className="p-6 space-y-2">
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <Newspaper className="text-green-600" size={24} />
                </div>
                <h3 className="font-medium text-lg">Research Projects & Paper Publishing                </h3>
                <p className="text-muted-foreground">
                  Get expert guidance in writing and publishing research papers in reputed journals.</p>
              </CardContent>
              <CardFooter className="px-6 pb-6 pt-0">

              </CardFooter>
            </Card>

            {/* Card 3 */}
            <Card className="border shadow-sm">
              <CardContent className="p-6 space-y-2">
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <Gauge className="text-green-600" size={24} />
                </div>
                <h3 className="font-medium text-lg">Content Moderation & Humanized Content                </h3>
                <p className="text-muted-foreground">
                  Transform AI-generated text into engaging, natural, and plagiarism-free content.</p>
              </CardContent>
              <CardFooter className="px-6 pb-6 pt-0">

              </CardFooter>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {/* Card 1 */}
            <Card className="border shadow-sm">
              <CardContent className="p-6 space-y-2">
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <Check className="h-6 w-6 text-green-500" />
                </div>
                <h3 className="font-medium text-lg">Technical Assistance</h3>
                <p className="text-muted-foreground">
                  From software development to debugging and project execution, we help with all tech-related challenges.
                </p>
              </CardContent>
              <CardFooter className="px-6 pb-6 pt-0">

              </CardFooter>
            </Card>

            {/* Card 2 */}
            <Card className="border shadow-sm">
              <CardContent className="p-6 space-y-2">
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <BookText className="h-6 w-6 text-green-500" />
                </div>
                <h3 className="font-medium text-lg">Presentations & Reports                </h3>
                <p className="text-muted-foreground">
                  Professionally crafted presentations and reports to showcase your work effectively.</p>
              </CardContent>
              <CardFooter className="px-6 pb-6 pt-0">

              </CardFooter>
            </Card>
          </div>

        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white">
          <div className="container">
            <div className="grid grid-cols md:grid-cols-2  items-center">
              <div>
                <img
                  src="/public/heroimage1.png"
                  alt="Co-working space interior"
                  className="rounded-lg w-full object-cover"
                />
              </div>
              <div className="bg-green-500 p-8 w-full rounded-r-lg text-white">
                <h2 className="text-2xl font-bold mb-4">Make an Impact with Your Work.</h2>
                <p className="mb-6">
                  At BSoft, we create the perfect environment for you to showcase your expertise and push boundaries in your academic projects, PhD research, content writing, and technical work. Whether you’re crafting impactful papers, exploring new ideas through research projects, or engaging in content moderation and humanized content creation, we are here to support you.

                </p>
                <Button size="lg" className="bg-transparent border border-white text-white hover:bg-transparent">
                  Get Your Place
                </Button>
              </div>
            </div>
          </div>
        </section>


        <div className="container mx-auto px-6 py-12 space-y-12">
          {/* Header Section */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl font-bold leading-tight">
                We Provide All The Tools For Your Academic And Technical Success.
              </h1>
              <p className="text-muted-foreground mt-4">
                At BSoft IT Solutions, we offer a professional environment tailored for those committed to academic excellence, technical precision, and impactful research. Whether you’re working on PhD projects, research studies, or technical content, we create a space where ideas thrive and creativity flourishes.</p>
              <p>Our services, ranging from paper publishing, content moderation, humanized content creation, to AI-free writing, are designed to support you in every aspect of your academic and professional journey. With a focus on quality and collaboration, we ensure that your work is presented at its very best.</p>

              <div className="flex items-center gap-4 mt-4">
                <div className="flex items-center gap-2">
                  <Box className="text-green-600" />
                  <span>Flexible Features</span>
                </div>
                <div className="flex items-center gap-2">
                  <Waypoints className="text-green-600" />
                  <span>Fully Custom Projects</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="../../public/heroimage1.png"
                alt="Academic work"
                className="rounded-xl shadow-md"
              />
              <Card className="relative bottom-8 right-32 w-3/4 rounded-xl border border-green-500 shadow-2xl bg-green-500 text-white">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2">
                    <Info size={20} />
                    <h3 className="text-lg font-semibold">Anything You Need</h3>
                  </div>
                  <p className="text-sm mt-1">
                    We offer tailored support for your academic, research, and technical needs.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Pricing Section */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <img
                src="../../public/heroimage.png"
                alt="Affordable solutions"
                className="rounded-lg shadow-md"
              />
              <Card className="relative top-[-28rem] left-48 shadow-2xl bg-green-500 text-white w-3/4">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2">
                    <Info size={20} />
                    <h3 className="text-lg font-semibold">Friendly Price Package</h3>
                  </div>
                  <p className="text-sm mt-1">
                    High-quality solutions at competitive prices for
                    your academic and research needs.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div>
              <h2 className="text-2xl font-bold leading-tight">
                Affordable Solutions For Your Academic And Technical Needs
              </h2>
              <p className="text-muted-foreground mt-4">
                We offer the most affordable and effective solutions for your academic projects, research, and technical tasks. Whether you need paper publishing assistance, help with content creation, or technical support, we are committed to providing services that meet your needs without breaking the bank. We offer flexible packages designed for your unique requirements, making high-quality support accessible to everyone. Let us assist you in making your projects stand out and achieve your goals.</p>
              <div className="flex items-center gap-4 mt-4">
                <div className="flex items-center gap-2">
                  <PersonStanding className="text-green-600" />
                  <span>Membership Package</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="text-green-600" />
                  <span>Dedicated Office Package</span>
                </div>
              </div>

            </div>
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="bg-green-500 text-white">
        <div className="container py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">BSoft IT Solutions</h3>
              <p className="text-white/80 mb-4">
                Your Idea Our Implementaion
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-white/80 hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about-us" className="text-white/80 hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-white/80 hover:text-white">
                    Services
                  </Link>
                </li>

                <li>
                  <Link to="/contact" className="text-white/80 hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            {/* <div>
              <h4 className="font-medium mb-4">Important Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/terms" className="text-white/80 hover:text-white">
                    Terms and Conditions
                  </Link>
                </li>
                <li>
                  <Link to="/legal" className="text-white/80 hover:text-white">
                    Legal
                  </Link>
                </li>
                <li>
                  <Link to="/business" className="text-white/80 hover:text-white">
                    Business
                  </Link>
                </li>
                <li>
                  <Link to="/partners" className="text-white/80 hover:text-white">
                    Partners
                  </Link>
                </li>
              </ul>
            </div> */}
            <div>
              <h4 className="font-medium mb-4">Let's Connect!</h4>
              <p className="text-white/80 mb-4">Connect with our team, share your ideas and success stories, make great impact and build amazing connections!</p>
              <div className="flex gap-4">
                <Link
                  to="#"
                  className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30"
                >

                  <X />
                </Link>
                <Link
                  to="#"
                  className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                  </svg>
                </Link>
                <Link
                  to="#"
                  className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                  </svg>
                </Link>
                <Link
                  to="#"
                  className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-white/80">Copyright © 2025 BSoft IT Solutions</p>
            <p className="text-sm text-white/80">Powered by BSoft</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

