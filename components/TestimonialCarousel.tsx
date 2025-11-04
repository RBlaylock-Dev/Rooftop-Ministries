"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    quote:
      "Hannah & Marissa didn't just counsel me. They became lifelong friends. The way the Holy Spirit works in them, they become a one-two punch in the spirit. They complement each other so well in the sessions. Sometimes the Holy Spirit gives them the same insight at the same time. The Holy Spirit told them things  about me that I couldn't even put into words. I highly recommend them both to everyone. I never knew being this free could be possible and I have seen the difference in my life. It's so great to be free from the enemy and all the traps he has laid on my family line. I highly suggest you give them a try.",
    name: "Stephanie",
    role: "RTF Ministry Receiver",
    image: "/placeholder.svg?height=48&width=48",
  },
  {
    id: 2,
    quote:
      "Hannah's approach to inner healing helped me process trauma I'd carried for years. The RTF sessions were life-changing and brought me so much peace.",
    name: "Michael Rodriguez",
    role: "Community Member",
    image: "/placeholder.svg?height=48&width=48",
  },
  {
    id: 3,
    quote:
      "As a pastor myself, the apostolic coaching provided by Rooftop Ministries gave me the support and guidance I desperately needed. They truly understand ministry challenges.",
    name: "Pastor David Kim",
    role: "Local Pastor",
    image: "/placeholder.svg?height=48&width=48",
  },
  {
    id: 4,
    quote:
      "The community here is unlike anything I've experienced. Everyone is so welcoming and genuine. I've found my spiritual home at Rooftop Ministries.",
    name: "Jennifer Martinez",
    role: "New Member",
    image: "/placeholder.svg?height=48&width=48",
  },
  {
    id: 5,
    quote:
      "The counseling sessions helped me work through some deep personal issues. The pastors create such a safe, non-judgmental space for healing and growth.",
    name: "Robert Thompson",
    role: "Community Member",
    image: "/placeholder.svg?height=48&width=48",
  },
]

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
    }, 5000) // Change every 5 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToPrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false)
    setCurrentIndex(index)
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Main Testimonial Display */}
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
              <Card className="border-0 shadow-lg mx-auto max-w-3xl bg-white">
                <CardContent className="p-8 md:p-12 text-center">
                  <Quote className="h-12 w-12 text-coral-500 mx-auto mb-6" />
                  <blockquote className="text-xl md:text-2xl text-slate-600 italic leading-relaxed mb-8">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-16 h-16 bg-blush-100 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={64}
                        height={64}
                        className="object-cover"
                      />
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-slate-900 text-lg">{testimonial.name}</p>
                      <p className="text-slate-500">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full bg-white shadow-lg border-2 border-powder-200 hover:bg-powder-50 hover:border-powder-300"
        onClick={goToPrevious}
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="h-6 w-6 text-powder-600" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full bg-white shadow-lg border-2 border-powder-200 hover:bg-powder-50 hover:border-powder-300"
        onClick={goToNext}
        aria-label="Next testimonial"
      >
        <ChevronRight className="h-6 w-6 text-powder-600" />
      </Button>

      {/* Dot Indicators */}
      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors duration-200 ${
              index === currentIndex ? "bg-coral-500" : "bg-slate-300 hover:bg-coral-300"
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>

      {/* Auto-play indicator */}
      <div className="text-center mt-4">
        <p className="text-sm text-slate-500">
          {isAutoPlaying ? "Auto-playing" : "Paused"} • {currentIndex + 1} of {testimonials.length}
        </p>
      </div>
    </div>
  )
}
