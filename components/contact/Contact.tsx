import Link from "next/link";
import ContactForm from "./ContactForm";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { EMAIL, GITHUB, LINKED_IN, PHONE } from "@/data/personal-info";

export default function Contact() {
  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gradient mb-6">
            Let&apos;s Work Together
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to lead your next project or contribute to your team&apos;s success
          </p>
          <div className="w-20 h-1 bg-linear-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-6" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="card-gradient rounded-2xl p-8">
              <div className="text-2xl font-bold text-gray-100 mb-6">
                Get In Touch
              </div>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center">
                    <Mail className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-gray-300 font-medium">Email</p>
                    <Link href={`mailto:${EMAIL}`} className="text-gray-400">
                      {EMAIL}
                    </Link>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center">
                    <Phone className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-gray-300 font-medium">Phone</p>
                    <Link href={`tel:${PHONE}`} className="text-gray-400">
                      {PHONE}
                    </Link>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-600/20 rounded-full flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-green-400" />
                  </div>
                  <div>
                    <p className="text-gray-300 font-medium">Location</p>
                    <p className="text-gray-400">
                      Available globally (Remote/On-site)
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-700">
                <p className="text-lg font-semibold text-gray-200 mb-4">
                  Connect with me
                </p>
                <div className="flex space-x-4">
                  <a
                    href={GITHUB}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="GitHub Profile"
                    aria-label="GitHub Profile"
                    className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-blue-400 hover:bg-gray-700 transition-all duration-300"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href={LINKED_IN}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="LinkedIn Profile"
                    aria-label="LinkedIn Profile"
                    className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-blue-400 hover:bg-gray-700 transition-all duration-300"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card-gradient rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-100 mb-6">
              Send a Message
            </h3>

            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
