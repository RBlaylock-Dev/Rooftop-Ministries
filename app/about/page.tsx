import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Instagram, Facebook, MessageCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">About Us</h1>
            <p className="text-xl text-slate-600">
              Meet the pastoral team behind this ministry startup. We're passionate about reimagining what church can be
              in the modern world.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">Our Story</h2>
            <div className="prose prose-lg max-w-none text-slate-600">
              <p className="text-xl leading-relaxed mb-6">
                Our ministry was born from a simple conviction: the church has the power to transform communities, but
                it needs to evolve to meet people where they are today.
              </p>
              <p className="leading-relaxed mb-6">
                After years of serving in traditional church settings, we felt called to start something new—a ministry
                that honors the timeless truths of faith while embracing innovative approaches to community, worship,
                and service. We believe the gospel is as relevant today as it was 2,000 years ago, but the way we share
                it must speak to contemporary hearts and minds.
              </p>
              <p className="leading-relaxed mb-6">
                Our vision is to create authentic community where people can explore faith without pretense, ask hard
                questions without judgment, and find their purpose in serving others. We're not trying to reinvent
                Christianity; we're trying to rediscover its revolutionary heart.
              </p>
              <p className="leading-relaxed">
                This ministry startup represents our commitment to building something that matters—a community that
                transforms lives, serves neighbors, and demonstrates the love of Christ in practical, meaningful ways.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pastor Profiles */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">Meet Our Pastoral Team</h2>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Pastor 1 */}
            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="aspect-square relative bg-slate-200">
                <Image src="/images/marissa-dicus.avif" alt="Pastor Marissa Dicus" fill className="object-cover" />
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Pastor Marissa Dicus</h3>
                <p className="text-primary-600 font-medium mb-4">Pastor & Coach</p>
                <p className="text-slate-600 mb-6">
                  Marissa became an Ordained Minister through Transformation Ministries in Birmingham, Alabama. Marissa
                  graduated from TM School of Ministries in May of 2019. Marissa graduated from University of Memphis
                  with a bachelors degree of Child Development in 2009. Marissa enjoys watching the Chosen TV Series,
                  laughing and having fun, and watching people receive healing that transforms their hearts and lives.
                </p>
                <div className="space-y-3">
                  <h4 className="font-semibold text-slate-900">Background & Calling</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• </li>
                    <li>• </li>
                    <li>• </li>
                    <li>• </li>
                  </ul>
                </div>
                <div className="flex gap-3 mt-6">
                  <Button size="sm" variant="outline" className="rounded-full w-10 h-10 p-0">
                    <Mail className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline" className="rounded-full w-10 h-10 p-0">
                    <Instagram className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline" className="rounded-full w-10 h-10 p-0">
                    <Facebook className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline" className="rounded-full w-10 h-10 p-0">
                    <MessageCircle className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Pastor 2 */}
            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="aspect-square relative bg-slate-200">
                <Image src="/images/hannah-campbell.avif" alt="Hannah Campbell" fill className="object-cover" />
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Hannah Campbell</h3>
                <p className="text-primary-600 font-medium mb-4">Co-Founder & Admistrator/Coach</p>
                <p className="text-slate-600 mb-6">
                  Hannah Campbell graduated from TM School of Ministries in December of 2019. Hannah graduated from the
                  University of Memphis with a bachelors degree in Child Development in 2010. Hannah has worked in Kids
                  Ministry for many years and has a passion for foster care and adoption. Hannah has a passion to bring
                  hope to the hopeless. Hannah enjoys listening to music, laughing and having fun, and traveling.
                </p>
                <div className="space-y-3">
                  <h4 className="font-semibold text-slate-900">Background & Calling</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• </li>
                    <li>• </li>
                    <li>• </li>
                    <li>• </li>
                  </ul>
                </div>
                <div className="flex gap-3 mt-6">
                  <Button size="sm" variant="outline" className="rounded-full w-10 h-10 p-0">
                    <Mail className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline" className="rounded-full w-10 h-10 p-0">
                    <Instagram className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline" className="rounded-full w-10 h-10 p-0">
                    <Facebook className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline" className="rounded-full w-10 h-10 p-0">
                    <MessageCircle className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">Our Core Values</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Authenticity</h3>
                  <p className="text-slate-600">
                    We believe in being real about our struggles, questions, and journey of faith. No masks, no
                    pretense—just honest community.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Inclusion</h3>
                  <p className="text-slate-600">
                    Everyone is welcome at our table. We celebrate diversity and believe that our differences make us
                    stronger as a community.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Innovation</h3>
                  <p className="text-slate-600">
                    We're not afraid to try new approaches to ministry while staying grounded in timeless biblical
                    truths.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Service</h3>
                  <p className="text-slate-600">
                    Faith without action is incomplete. We're committed to serving our community and addressing real
                    needs around us.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Growth</h3>
                  <p className="text-slate-600">
                    We're all on a journey of spiritual growth. We create spaces for learning, questioning, and
                    deepening our faith together.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Hope</h3>
                  <p className="text-slate-600">
                    In a world that can feel overwhelming, we offer hope through the transformative power of God's love
                    and community.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary-500 py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Let's Connect</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            We'd love to hear from you. Whether you have questions about our ministry, want to get involved, or just
            want to chat, don't hesitate to reach out.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
