import { Link } from "react-router-dom"
import { Card, CardContent } from "@/components/ui/card"


export default function ContactPage() {
    return (
        <div className="flex min-h-screen flex-col">


            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative">
                    {/* Background Image */}
                    <div className="absolute inset-0 z-0">
                        <img
                            src="/public/heroimage1.png"
                            alt="Contact Us"
                            className="w-full h-full object-cover brightness-[0.7]"
                        />
                    </div>

                    {/* Optional overlay */}
                    <div className="absolute inset-0 bg-black opacity-30 z-0"></div>

                    {/* Hero Content */}
                    <div className="container relative z-10 py-24 md:py-32 flex flex-col items-center justify-center text-center space-y-8">
                        <div className="max-w-2xl space-y-4 text-white">
                            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Contact Us</h1>
                            <p className="text-lg text-white/90">
                                At BSoft IT Solutions, we’re here to assist you with all your academic, research, and technical needs. Whether you have a project inquiry, need expert guidance, or require technical support, our team is ready to help.
                            </p>
                        </div>
                    </div>

                    {/* Curved Bottom Edge */}
                    <div className="absolute bottom-0 left-0 right-0">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 80" fill="#ffffff">
                            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,80L1360,80C1280,80,1120,80,960,80C800,80,640,80,480,80C320,80,160,80,80,80L0,80Z" />
                        </svg>
                    </div>
                </section>


                {/* Get In Touch */}
                <section className="container py-16">
                    <div className="text-center space-y-4 mb-12">
                        <h2 className="text-3xl font-bold">Get In Touch</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            At BSoft IT Solutions, we’re here to assist you with all your academic, research, and technical needs. Whether you have a project inquiry, need expert guidance, or require technical support, our team is ready to help.
                        </p>
                        <div className="flex justify-center gap-4 mt-4">
                            <Link
                                to="#"
                                className="h-10 w-10 rounded-full bg-green-500 flex items-center justify-center text-white hover:bg-green-600"
                            >
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                                </svg>
                            </Link>
                            <Link
                                to="#"
                                className="h-10 w-10 rounded-full bg-green-500 flex items-center justify-center text-white hover:bg-green-600"
                            >
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                                </svg>
                            </Link>
                            <Link
                                to="#"
                                className="h-10 w-10 rounded-full bg-green-500 flex items-center justify-center text-white hover:bg-green-600"
                            >
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                                </svg>
                            </Link>
                            <Link
                                to="#"
                                className="h-10 w-10 rounded-full bg-green-500 flex items-center justify-center text-white hover:bg-green-600"
                            >
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"></path>
                                </svg>
                            </Link>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        {/* <Card className="border shadow-sm">
                            <CardContent className="p-6 flex flex-col items-center text-center">
                                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                                    <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </svg>
                                </div>
                                <h3 className="font-bold text-lg mb-2">Our Location</h3>
                                <p className="text-muted-foreground">
                                    68 East 12th Street, 1st Floor
                                    <br />
                                    New York, NY, 10022
                                </p>
                            </CardContent>
                        </Card> */}

                        <Card className="border shadow-sm">
                            <CardContent className="p-6 flex flex-col items-center text-center">
                                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                                    <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                        />
                                    </svg>
                                </div>
                                <h3 className="font-bold text-lg mb-2">Call Us On</h3>
                                <p className="text-muted-foreground">
                                    +91 6281192909
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="border shadow-sm">
                            <CardContent className="p-6 flex flex-col items-center text-center">
                                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                                    <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        />
                                    </svg>
                                </div>
                                <h3 className="font-bold text-lg mb-2">Email Us</h3>
                                <p className="text-muted-foreground">
                                    bsoftitsolutions@gmail.com
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* Map Section */}
                {/* <section className="w-full h-96 relative">
                    <img src="/placeholder.svg?height=600&width=1200&text=Google Map" alt="Map" className="object-cover" />
                </section> */}

                {/* Contact Form */}
                
            </main>

            {/* Footer */}
            <footer className="bg-green-500 text-white">
                <div className="container py-12">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="text-xl font-bold mb-4">BSoft IT Solutions</h3>
                            <p className="text-white/80 mb-4">
                                Your Idea Our Implementation
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
                        <p className="text-sm text-white/80">Copyright © 2025 BSoftITSolutions</p>
                        <p className="text-sm text-white/80">Powered by BSoftITSolutions</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

