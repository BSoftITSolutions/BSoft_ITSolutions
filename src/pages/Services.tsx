import { Link } from "react-router-dom";
// import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { BookCopy, Cpu, HeartHandshake, ArrowDownAZ, Package2, Trash2, StickyNote, Clock, User2 } from "lucide-react"
export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          {/* Background Image */}
          <div className="absolute inset-0 bg-cover bg-center z-0 ">
            <img src="/public/heroimage.png" alt="Background" className="w-full h-full object-cover" />
          </div>

          {/* Optional overlay for better text readability */}
          <div className="absolute inset-0 bg-black opacity-30 z-0"></div>

          {/* Hero Content */}
          <div className="relative z-10 flex flex-col items-center justify-center px-6 py-32 text-center">
            <h1 className="text-white text-5xl md:text-6xl font-bold mb-8">Our Services</h1>

            <div className="max-w-3xl text-white">
              <p className="text-lg mb-4">
                At BSoft, we pride ourselves on delivering exceptional support for academic, research, and technical projects. Our expert team offers tailored solutions, ensuring top-quality outcomes that meet your specific needs.
              </p>
              <p className="text-lg">
                With our commitment to excellence and client satisfaction, we are the trusted choice for those seeking reliable, professional assistance.
              </p>
            </div>
          </div>

          {/* Curved bottom edge */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 80" fill="#ffffff">
              <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,80L1360,80C1280,80,1120,80,960,80C800,80,640,80,480,80C320,80,160,80,80,80L0,80Z"></path>
            </svg>
          </div>
        </section>


        {/* Services Overview */}
        <section className="container py-16">
          <div className="text-center space-y-2 mb-12">
            <h2 className="text-3xl font-bold">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              At BSoft, we deliver exceptional, tailored support for academic, research, and technical projects, ensuring top-quality outcomes and client satisfaction. We’re the trusted choice for reliable, professional assistance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Academic Projects",
                description:
                  "Assistance with final-year projects, thesis work, and cutting-edge research projects.",
                image: "/public/heroimage1.png",
              },
              {
                title: "Technical Assistance",
                description:
                  "From software development to debugging and project execution, we help with all tech-related challenges.",
                image: "/public/heroimage.png",
              },
              {
                title: "Presentations & Reports",
                description:
                  "Professionally crafted presentations and reports to showcase your work effectively.",
                image: "/public/abouthero.png",
              },
            ].map((service, index) => (
              <Card key={index} className="overflow-hidden border shadow-sm">
                <div className="aspect-video relative">
                  <img src={service.image || "/placeholder.svg"} alt={service.title} className="object-cover" />
                  <div className="absolute bottom-4 right-4">

                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
                <CardFooter className="px-6 pb-6 pt-0">

                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* Features Grid */}
        <section className="container py-16 bg-gray-50">
          <div className="text-center space-y-2 mb-12">
            <h2 className="text-3xl font-bold">What We Have For You</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our workspace comes equipped with everything you need to run your business efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Customized projects",
                description:
                  "Assistance with final-year projects, Ph.D. thesis work, and cutting-edge research projects.",
                icon: <User2 className="w-4 h-4" />,
              },
              {
                title: "24/7 Access",
                description:
                  "We offer 24x7 support and service, our team will support at any time.",
                icon: <Clock />,
              },
              {
                title: "Paper Publishing",
                description:
                  "Get expert guidance in writing and publishing research papers in reputed journals.",
                icon: <StickyNote className="w-4 h-4" />,
              },
              {
                title: "Interview Preparation",
                description:
                  "We guide you to crack your interviews, we offer mock interviews that actually held on top MNC's.",
                icon: <ArrowDownAZ className="w-4 h-4" />,
              },
              {
                title: "Homework Help",
                description:
                  "Get experts help on your specific task, exercises.",
                icon: <HeartHandshake className="w-4 h-4" />,
              },
              {
                title: "On Time Delivery",
                description:
                  "We ensure the fastest delivery of your product at any cost.",
                icon: <Package2 className="w-4 h-4" />,
              },
              {
                title: "Technical Assistance",
                description:
                  "From software development to debugging and project execution, we help with all tech-related challenges.",
                icon: <Cpu className="w-4 h-4" />,
              },
              {
                title: "Reports and Presentations",
                description:
                  "Professionally crafted presentations and reports to showcase your work effectively.",
                icon: <BookCopy className="w-4 h-4" />,
              },
              {
                title: "Content Moderation and Humanized Content",
                description:
                  "Transform AI-generated text into engaging, natural, and plagiarism-free content.",
                icon: <Trash2 className="w-4 h-4" />,
              },
            ].map((feature, index) => (
              <Card key={index} className="border shadow-sm">
                <CardContent className="p-6">
                  <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="font-medium text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-white mb-8">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center w-full">
              <div>
                <img
                  src="/public/heroimage.png"
                  alt="Co-working"
                  className="rounded-lg w-full"
                />
              </div>
              <div className="bg-green-500 p-8 w-full rounded-r-lg text-white">
                <h2 className="text-2xl font-bold mb-4">Make an Impact with Your Work.</h2>
                <p className="mb-6">
                  At BSoft, we create the perfect environment for you to showcase your expertise and push boundaries in your academic projects, PhD research, content writing, and technical work. Whether you’re crafting impactful papers, exploring new ideas through research projects, or engaging in content moderation and humanized content creation, we are here to support you.
                </p>
                {/* <Button size="lg" className="bg-green-500 text-white border border-white hover:bg-green-500">
                  Get your Place <ArrowRight />
                </Button> */}
              </div>
            </div>
          </div>
        </section>

       
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
                {/* <li>
                  <Link to="/pricing" className="text-white/80 hover:text-white">
                    Pricing
                  </Link>
                </li> */}
                <li>
                  <Link to="/contact" className="text-white/80 hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
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
            </div>
            <div>
              <h4 className="font-medium mb-4">Let's Connect!</h4>
              <p className="text-white/80 mb-4">Connect with our team, bring your ideas to life.</p>
              <div className="flex gap-4">
                <Link
                  to="#"
                  className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
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

