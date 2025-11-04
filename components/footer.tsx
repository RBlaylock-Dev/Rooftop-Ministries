import Link from "next/link"
import { Mail, Phone } from "lucide-react"
import Image from "next/image"
import { NewsletterSignup } from "./newsletter-signup"

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-4 mb-4">
              <div className="relative w-16 h-16">
                <Image
                  src="/images/rooftop-logo.png"
                  alt="Rooftop Ministries Logo"
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
              <span className="text-xl font-bold">Rooftop Ministries</span>
            </div>
            <p className="text-white/80 text-sm mb-4">
              Building authentic community through faith, service, and genuine connection.
            </p>
            <div className="space-y-2 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>(256) 577-1602</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>info@rooftopministries.org</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <Link href="/" className="hover:text-coral-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/what-we-do" className="hover:text-coral-400 transition-colors">
                  What We Do
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-coral-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/newsletter" className="hover:text-coral-400 transition-colors">
                  Newsletter
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-coral-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Ministries */}
          <div>
            <h3 className="font-semibold mb-4">Ministries</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>Life Coaching</li>
              <li>Counseling</li>
              <li>Apostolic Coaching</li>
              <li>RTF & Deliverance</li>
              <li>Intercession</li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <NewsletterSignup variant="compact" />
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} Rooftop Ministries. All rights reserved. Built & Maintained by{" "}
            <a href="https://www.rblaylock.dev" className="hover:text-coral-400 transition-colors">
              RB Digital
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  )
}
