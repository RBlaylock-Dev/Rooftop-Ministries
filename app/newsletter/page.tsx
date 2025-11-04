import { Card, CardContent } from "@/components/ui/card"
import { NewsletterSignup } from "@/components/newsletter-signup"
import { Mail, Calendar, Heart, Users, BookOpen, Bell } from "lucide-react"

export default function NewsletterPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Newsletter</h1>
            <p className="text-xl text-slate-600">
              Stay connected with our community through weekly encouragement, ministry updates, and inspirational
              content delivered directly to your inbox.
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto">
            <NewsletterSignup />
          </div>
        </div>
      </section>

      {/* What You'll Receive */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">What You'll Receive</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-6 w-6 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">Weekly Encouragement</h3>
                  <p className="text-slate-600 text-sm">
                    Uplifting messages and biblical insights to inspire your faith journey throughout the week.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="h-6 w-6 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">Event Updates</h3>
                  <p className="text-slate-600 text-sm">
                    Be the first to know about upcoming gatherings, special events, and community service opportunities.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-6 w-6 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">Community Stories</h3>
                  <p className="text-slate-600 text-sm">
                    Read testimonials and stories from community members about their faith journey and transformation.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="h-6 w-6 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">Teaching Resources</h3>
                  <p className="text-slate-600 text-sm">
                    Access to exclusive content, study guides, and resources for spiritual growth and learning.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Bell className="h-6 w-6 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">Prayer Requests</h3>
                  <p className="text-slate-600 text-sm">
                    Join our community in prayer with shared requests and opportunities to support one another.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-6 w-6 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">Pastor's Notes</h3>
                  <p className="text-slate-600 text-sm">
                    Personal messages from Hannah and Marissa with insights, reflections, and pastoral care.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Frequency & Privacy */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">Newsletter Frequency</h3>
                <p className="text-slate-600 mb-4">
                  Our newsletter is sent weekly, typically on Wednesdays, to help you prepare your heart for the weekend
                  and carry encouragement through the week.
                </p>
                <p className="text-slate-600">
                  During special seasons or events, you may receive additional updates, but we respect your inbox and
                  won't overwhelm you with emails.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">Your Privacy Matters</h3>
                <p className="text-slate-600 mb-4">
                  We take your privacy seriously. Your email address will never be shared, sold, or used for any purpose
                  other than sending you our newsletter and ministry updates.
                </p>
                <p className="text-slate-600">
                  You can unsubscribe at any time with a single click, and we'll respect your decision immediately.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary-500 py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Stay Connected?</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of others who receive weekly encouragement and stay connected with our growing community.
          </p>
          <div className="max-w-md mx-auto">
            <NewsletterSignup variant="inline" className="justify-center" />
          </div>
        </div>
      </section>
    </div>
  )
}
