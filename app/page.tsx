import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, BookOpen, Handshake } from "lucide-react"
import Image from "next/image"
import { TestimonialCarousel } from "@/components/TestimonialCarousel"
import { NewsletterSignup } from "@/components/newsletter-signup"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-white py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            {/* Main Headline */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-8">
                DESPERATION IS REQUIRED!
              </h1>
            </div>

            {/* Two Column Layout */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Column - Text Content */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl md:text-4xl font-normal text-slate-900 mb-4">
                    Hi, We're Rooftop Ministries.
                  </h2>
                  <h3 className="text-3xl md:text-4xl font-normal text-slate-900 mb-8">So good to have you here.</h3>
                </div>

                <p className="text-lg text-slate-700 leading-relaxed max-w-lg">
                  Rooftop Ministries started with two friends who found freedom. They met, became best friends, and
                  we're deeply touched by the love of Yeshua (Jesus). So, Mark 2 and Isaiah 61 converged to make a mark
                  on their lives and the lives of those around them.
                </p>

                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white px-8 py-3"
                >
                  <Link href="/about">Read More</Link>
                </Button>
              </div>

              {/* Right Column - Logo Rounded Rectangle */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative w-80 h-96 md:w-96 md:h-[480px]">
                  <Image
                    src="/images/hero-logo-bg.png"
                    alt="Rooftop Ministries Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Preview */}
      <section className="py-16 md:py-24 bg-blush-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Mission</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We're passionate about creating authentic community where people can grow in faith, find purpose, and make
              a lasting impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <Card className="text-center border-0 shadow-lg bg-white hover:shadow-xl transition-shadow">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 bg-coral-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-coral-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Spirtual Coaching</h3>
                <p className="text-slate-600">
                  Spiritual Coaching will help you be encouraged in your walk of life no matter what road you're on. This
                  includes singles, marrieds, young adults and children.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg bg-white hover:shadow-xl transition-shadow">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 bg-powder-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-powder-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Apostolic Coaching</h3>
                <p className="text-slate-600">
                  Counseling is a little different than coaching, but we want to lead you to the Great Counselor, The
                  Holy Spirit.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg bg-white hover:shadow-xl transition-shadow">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 bg-blush-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-blush-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Freedom</h3>
                <p className="text-slate-600">
                  Most ministers need a coach or a counselor, we want to provide you with a minister to minister safe
                  environment to be encouraged and heard.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg bg-white hover:shadow-xl transition-shadow">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Handshake className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Healing & Deliverance</h3>
                <p className="text-slate-600">
                  Inner Healing & Deliverance is a big part of realignment from our past trauma's. We're both trained to
                  do RTF sessions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter Signup Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto">
            <NewsletterSignup />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-powder-50 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What People Are Saying</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Hear from community members whose lives have been transformed through our ministry.
            </p>
          </div>

          <TestimonialCarousel />

          <div className="text-center mt-12">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-powder-300 text-powder-700 hover:bg-powder-100"
            >
              <Link href="/contact">Share Your Story</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-coral-500 py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Join Our Community?</h2>
          <p className="text-xl text-coral-100 mb-8 max-w-2xl mx-auto">
            Whether you're exploring faith for the first time or looking for a prayer request, we'd love to connect with
            you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-white text-coral-600 hover:bg-coral-50">
              <Link href="/about">Meet Our Pastors</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-coral-600"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
