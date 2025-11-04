import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Coffee, Handshake, MessageCircle, Music, Users } from "lucide-react"
import Link from "next/link"

export default function WhatWeDoPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">What We Do</h1>
            <p className="text-xl text-slate-600">
              We're reimagining what ministry looks like in the 21st century. Through innovative programs and authentic
              community, we're creating spaces where faith comes alive.
            </p>
          </div>
        </div>
      </section>

      {/* Main Programs */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary-600" />
                </div>
                <CardTitle className="text-xl">Community Gatherings</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Weekly gatherings that blend worship, teaching, and authentic conversation. We meet in homes,
                  community centers, and outdoor spaces.
                </p>
                <ul className="text-sm text-slate-500 space-y-1">
                  <li>• Sunday community worship</li>
                  <li>• Midweek small groups</li>
                  <li>• Monthly outdoor services</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <Handshake className="h-6 w-6 text-primary-600" />
                </div>
                <CardTitle className="text-xl">Community Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Putting faith into action through local partnerships and service projects that address real needs in
                  our community.
                </p>
                <ul className="text-sm text-slate-500 space-y-1">
                  <li>• Food bank partnerships</li>
                  <li>• Homeless outreach</li>
                  <li>• Environmental stewardship</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <MessageCircle className="h-6 w-6 text-primary-600" />
                </div>
                <CardTitle className="text-xl">Life Groups</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Intimate groups where people can share their stories, ask hard questions, and support each other
                  through life's journey.
                </p>
                <ul className="text-sm text-slate-500 space-y-1">
                  <li>• Young adults (20s-30s)</li>
                  <li>• Families with children</li>
                  <li>• Seniors and retirees</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <Coffee className="h-6 w-6 text-primary-600" />
                </div>
                <CardTitle className="text-xl">Coffee & Conversations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Casual meetups at local coffee shops where we discuss faith, culture, and current events in a relaxed
                  setting.
                </p>
                <ul className="text-sm text-slate-500 space-y-1">
                  <li>• Weekly theology discussions</li>
                  <li>• Book clubs</li>
                  <li>• Guest speaker events</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <Music className="h-6 w-6 text-primary-600" />
                </div>
                <CardTitle className="text-xl">Creative Worship</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Worship experiences that incorporate music, art, poetry, and multimedia to create meaningful
                  encounters with the divine.
                </p>
                <ul className="text-sm text-slate-500 space-y-1">
                  <li>• Contemporary music</li>
                  <li>• Visual arts integration</li>
                  <li>• Interactive prayer stations</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-primary-600" />
                </div>
                <CardTitle className="text-xl">Special Events</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  Seasonal celebrations, retreats, and special programs that bring our community together and welcome
                  newcomers.
                </p>
                <ul className="text-sm text-slate-500 space-y-1">
                  <li>• Annual retreat weekends</li>
                  <li>• Holiday celebrations</li>
                  <li>• Community festivals</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">Our Approach</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">Authentic & Inclusive</h3>
                <p className="text-slate-600 mb-6">
                  We believe everyone has a place at the table. Our ministry welcomes people from all backgrounds,
                  denominations, and stages of faith. We create safe spaces for honest questions and genuine spiritual
                  exploration.
                </p>
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">Practical & Relevant</h3>
                <p className="text-slate-600">
                  Faith isn't just for Sundays. We focus on how ancient wisdom applies to modern challenges like
                  relationships, work, social justice, and personal growth.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">Community-Centered</h3>
                <p className="text-slate-600 mb-6">
                  We're not just building a church; we're building a movement. Our ministry extends beyond our walls to
                  serve our neighbors and address community needs.
                </p>
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">Innovation-Minded</h3>
                <p className="text-slate-600">
                  We embrace new ways of doing ministry while honoring timeless truths. From digital engagement to
                  creative worship, we're always exploring fresh approaches.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Want to Get Involved?</h2>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            There are many ways to connect with our community. Whether you're looking to serve, learn, or simply belong,
            we'd love to help you find your place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary-500 hover:bg-primary-600">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/about">Meet Our Team</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
