import {  Linkedin, Twitter, Facebook, Instagram, Mail } from 'lucide-react';
import heroImage from "../../public/heroimage.png"
import {Link} from "react-router-dom"

export default function CoWorkingWebsite() {
  return (
    <div className="flex flex-col min-h-screen">

      <div className="relative">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>

        {/* Optional overlay for better text readability */}
        <div className="absolute inset-0 bg-black opacity-30 z-0"></div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center px-6 py-32">
          <h1 className="text-white text-5xl font-bold mb-10 text-center">About Us</h1>

          <div className="max-w-3xl text-white text-center ">
            <p className="mb-6 text-lg">At BSoft IT Solutions, we specialize in academic and PhD projects, research assistance, paper publishing, AI-free content creation, content moderation, technical support, and professional presentations.</p>

            <p className="text-lg">
              With a commitment to excellence, we deliver high-quality, original, and customized solutions for students, researchers, and professionals. Our expertise ensures precision, reliability, and innovation in every project.</p>
          </div>
        </div>

        {/* Curved bottom edge */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 80" fill="#ffffff">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,80L1360,80C1280,80,1120,80,960,80C800,80,640,80,480,80C320,80,160,80,80,80L0,80Z"></path>
          </svg>
        </div>
      </div>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl font-bold mb-6">About BSoft IT Solutions</h2>
              <p className="mb-4">
                At BSoft IT Solutions, we are dedicated to delivering top-tier academic and PhD projects, research assistance, paper publishing, AI-free content creation, content moderation, technical support, and professional presentations.

              </p>
              <p className="mb-6">
                Our mission is to empower students, researchers, and
                professionals with precise, reliable, and innovative solutions
                tailored to their unique needs. Whether it's technical work,
                content development, or research guidance, we ensure
                excellence in every service we provide.
              </p>
              <p className="font-medium mb-4">
                Your success is our priority!
              </p>
              {/* <Button className="bg-green-600 hover:bg-green-700 text-white flex items-center gap-2 mt-2">
                Get Your Place <ArrowRight size={16} />
              </Button> */}
            </div>
            <div className="w-full md:w-1/2 bg-gray-100 rounded-lg p-4">
              <img src="../../public/heroimage.png" alt="" className='rounded-lg' /></div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Our Team</h2>
          <p className="max-w-3xl mx-auto mb-12">
            At BSoft IT Solutions, we provide expert academic and PhD projects, research
            support, paper publishing, AI-free content creation, and technical services.
            With a focus on quality, originality, and innovation, we empower students,
            researchers, and professionals with tailored solutions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-gray-300 rounded-full mb-4"></div>
              <h3 className="text-xl font-bold">Adinarayan</h3>
              <p className="text-sm text-gray-600 mb-3">Founder</p>
              <div className="flex space-x-2">
                <div className="w-6 h-6 rounded-full bg-green-600 flex items-center justify-center text-white">
                  <Facebook size={14} />
                </div>
                <div className="w-6 h-6 rounded-full bg-green-600 flex items-center justify-center text-white">
                  <Twitter size={14} />
                </div>
                <div className="w-6 h-6 rounded-full bg-green-600 flex items-center justify-center text-white">
                  <Linkedin size={14} />
                </div>
                <div className="w-6 h-6 rounded-full bg-green-600 flex items-center justify-center text-white">
                  <Mail size={14} />
                </div>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-gray-300 rounded-full mb-4"></div>
              <h3 className="text-xl font-bold">Chandra</h3>
              <p className="text-sm text-gray-600 mb-3">Co-Founder</p>
              <div className="flex space-x-2">
                <div className="w-6 h-6 rounded-full bg-green-600 flex items-center justify-center text-white">
                  <Facebook size={14} />
                </div>
                <div className="w-6 h-6 rounded-full bg-green-600 flex items-center justify-center text-white">
                  <Twitter size={14} />
                </div>
                <div className="w-6 h-6 rounded-full bg-green-600 flex items-center justify-center text-white">
                  <Linkedin size={14} />
                </div>
                <div className="w-6 h-6 rounded-full bg-green-600 flex items-center justify-center text-white">
                  <Mail size={14} />
                </div>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-gray-300 rounded-full mb-4"></div>
              <h3 className="text-xl font-bold">Babu</h3>
              <p className="text-sm text-gray-600 mb-3">CTO</p>
              <div className="flex space-x-2">
                <div className="w-6 h-6 rounded-full bg-green-600 flex items-center justify-center text-white">
                  <Facebook size={14} />
                </div>
                <div className="w-6 h-6 rounded-full bg-green-600 flex items-center justify-center text-white">
                  <Twitter size={14} />
                </div>
                <div className="w-6 h-6 rounded-full bg-green-600 flex items-center justify-center text-white">
                  <Linkedin size={14} />
                </div>
                <div className="w-6 h-6 rounded-full bg-green-600 flex items-center justify-center text-white">
                  <Mail size={14} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2">
              <img src="../../public/heroimage.png" alt="Coworking space with people collaborating" className="w-full rounded-lg" />
            </div>
            <div className="w-full bg-green-600 rounded-r-lg text-white p-8">
              <h2 className="text-2xl font-bold mb-4">Make an Impact with Your Work</h2>
              <p className="mb-6">
                At BSoft, we create the perfect environment for you to showcase your expertise and push boundaries in your academic projects, PhD research, content writing, and technical work. Whether you’re crafting impactful papers, exploring new ideas through research projects, or engaging in content moderation and humanized content creation, we are here to support you.
              </p>
              {/* <Button className="bg-green-600 text-white border border-white hover:bg-green-600 flex items-center gap-2">
                Get Your Place <ArrowRight size={16} />
              </Button> */}
            </div>
          </div>
        </div>
      </section>



      {/* Footer */}
      <footer className="bg-green-600 text-white py-12 mt-auto">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">BSoft IT Solutions</h3>
              <p className="text-sm">
                Your Idea Our Implementaion
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
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
              <h3 className="font-bold text-lg mb-4">Let's Connect!</h3>
              <p className="text-sm mb-4">
                Connect with our team, share your ideas and success stories, make great impact and build amazing connections!
              </p>
              <div className="flex space-x-3">
                <div className='rounded-full bg-green-2'><a href="#" className="hover:text-gray-300"><Facebook size={20} /></a></div>
                <a href="#" className="hover:text-gray-300"><Twitter size={20} /></a>
                <a href="#" className="hover:text-gray-300"><Instagram size={20} /></a>
                <a href="#" className="hover:text-gray-300"><Linkedin size={20} /></a>
              </div>
            </div>
          </div>

          <div className="border-t border-green-500 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">Copyright © 2025 BSoftITSolutions</p>
            <p className="text-sm">Powered by BSoftITSolutions</p>
          </div>
        </div>
      </footer>
    </div>
  );
}