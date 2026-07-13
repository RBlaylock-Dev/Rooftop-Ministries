import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { NewsletterSignup } from "@/components/newsletter-signup"
import { ContactForm } from "@/components/contact-form"
import { TestimonialCarousel } from "@/components/TestimonialCarousel"
import { RichText } from "@payloadcms/richtext-lexical/react"
import * as LucideIcons from "lucide-react"
import type { LucideIcon } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Page } from "@/payload-types"

type Block = NonNullable<Page["blocks"]>[number]

function Icon({ name, className }: { name?: string | null; className?: string }) {
  if (!name) return null
  const IconComponent = (LucideIcons as unknown as Record<string, LucideIcon>)[name]
  if (!IconComponent) return null
  return <IconComponent className={className} />
}

export function PageBlocks({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((block, i) => {
        switch (block.blockType) {
          case "hero":
            return (
              <section key={i} className="bg-slate-50 py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                  <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">{block.heading}</h1>
                    {block.subheading && <p className="text-xl text-slate-600">{block.subheading}</p>}
                  </div>
                </div>
              </section>
            )

          case "richtext":
            return (
              <section key={i} className="py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                  <div className="max-w-3xl mx-auto prose text-slate-600">
                    {block.content && <RichText data={block.content} />}
                  </div>
                </div>
              </section>
            )

          case "cardGrid": {
            const bgClass =
              block.background === "blush" ? "bg-blush-50" : block.background === "white" ? "bg-white" : "bg-slate-50"
            const colsClass = block.columns === "4" ? "lg:grid-cols-4" : "lg:grid-cols-3"
            const maxWClass = block.columns === "4" ? "max-w-5xl" : "max-w-4xl"
            return (
              <section key={i} className={`${bgClass} py-16 md:py-24`}>
                <div className="container mx-auto px-4 md:px-6">
                  <div className={`${maxWClass} mx-auto`}>
                    {block.heading && (
                      <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-4">{block.heading}</h2>
                    )}
                    {block.subheading && (
                      <p className="text-lg text-slate-600 max-w-2xl mx-auto text-center mb-12">{block.subheading}</p>
                    )}
                    <div className={`grid md:grid-cols-2 ${colsClass} gap-8`}>
                      {(block.cards || []).map((card, j) => (
                        <Card key={j} className="border-0 shadow-lg text-center">
                          <CardContent className="p-6">
                            <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                              <Icon name={card.icon} className="h-6 w-6 text-primary-600" />
                            </div>
                            <h3 className="text-lg font-semibold mb-3">{card.title}</h3>
                            {card.description && <p className="text-slate-600 text-sm mb-4">{card.description}</p>}
                            {card.items && card.items.length > 0 && (
                              <ul className="text-sm text-slate-500 space-y-1 text-left">
                                {card.items.map((item, k) => (
                                  <li key={k}>• {item.text}</li>
                                ))}
                              </ul>
                            )}
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            )
          }

          case "homeHero": {
            const image = typeof block.image === "object" ? block.image : null
            return (
              <section key={i} className="relative bg-white py-20 md:py-32">
                <div className="container mx-auto px-4 md:px-6">
                  <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-8">
                        {block.headline}
                      </h1>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                      <div className="space-y-8">
                        <div>
                          {block.greetingLine1 && (
                            <h2 className="text-3xl md:text-4xl font-normal text-slate-900 mb-4">{block.greetingLine1}</h2>
                          )}
                          {block.greetingLine2 && (
                            <h3 className="text-3xl md:text-4xl font-normal text-slate-900 mb-8">{block.greetingLine2}</h3>
                          )}
                        </div>
                        {block.body && <p className="text-lg text-slate-700 leading-relaxed max-w-lg">{block.body}</p>}
                        {block.buttonLabel && block.buttonHref && (
                          <Button
                            asChild
                            variant="outline"
                            size="lg"
                            className="border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white px-8 py-3"
                          >
                            <Link href={block.buttonHref}>{block.buttonLabel}</Link>
                          </Button>
                        )}
                      </div>
                      {image?.url && (
                        <div className="flex justify-center lg:justify-end">
                          <div className="relative w-80 h-96 md:w-96 md:h-[480px]">
                            <Image src={image.url} alt={image.alt || ""} fill className="object-contain" priority />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </section>
            )
          }

          case "testimonials":
            return (
              <section key={i} className="bg-powder-50 py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                  <div className="text-center mb-12">
                    {block.heading && <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{block.heading}</h2>}
                    {block.subheading && (
                      <p className="text-lg text-slate-600 max-w-2xl mx-auto">{block.subheading}</p>
                    )}
                  </div>
                  <TestimonialCarousel />
                  {block.buttonLabel && block.buttonHref && (
                    <div className="text-center mt-12">
                      <Button asChild variant="outline" size="lg" className="border-powder-300 text-powder-700 hover:bg-powder-100">
                        <Link href={block.buttonHref}>{block.buttonLabel}</Link>
                      </Button>
                    </div>
                  )}
                </div>
              </section>
            )

          case "approachGrid":
            return (
              <section key={i} className="bg-slate-50 py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                  <div className="max-w-4xl mx-auto">
                    {block.heading && (
                      <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
                        {block.heading}
                      </h2>
                    )}
                    <div className="grid md:grid-cols-2 gap-12">
                      {(block.items || []).map((item, j) => (
                        <div key={j}>
                          <h3 className="text-2xl font-semibold text-slate-900 mb-4">{item.heading}</h3>
                          {item.body && <p className="text-slate-600 mb-6">{item.body}</p>}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            )

          case "twoColumnText":
            return (
              <section key={i} className="py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                  <div className="max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12">
                      <div>
                        {block.columnOne?.heading && (
                          <h3 className="text-2xl font-semibold text-slate-900 mb-4">{block.columnOne.heading}</h3>
                        )}
                        {block.columnOne?.body && <p className="text-slate-600">{block.columnOne.body}</p>}
                      </div>
                      <div>
                        {block.columnTwo?.heading && (
                          <h3 className="text-2xl font-semibold text-slate-900 mb-4">{block.columnTwo.heading}</h3>
                        )}
                        {block.columnTwo?.body && <p className="text-slate-600">{block.columnTwo.body}</p>}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )

          case "newsletterSignup": {
            const variant = block.variant || "default"
            if (variant === "inline") {
              return (
                <section key={i} className="bg-primary-500 py-16 md:py-20">
                  <div className="container mx-auto px-4 md:px-6 text-center">
                    {block.heading && <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{block.heading}</h2>}
                    {block.body && <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">{block.body}</p>}
                    <div className="max-w-md mx-auto">
                      <NewsletterSignup variant="inline" className="justify-center" />
                    </div>
                  </div>
                </section>
              )
            }
            return (
              <section key={i} className="py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                  <div className="max-w-2xl mx-auto">
                    <NewsletterSignup variant={variant === "compact" ? "compact" : "default"} />
                  </div>
                </div>
              </section>
            )
          }

          case "cta": {
            const light = block.background === "light"
            return (
              <section key={i} className={light ? "py-16 md:py-20" : "bg-primary-500 py-16 md:py-20"}>
                <div className="container mx-auto px-4 md:px-6 text-center">
                  <h2 className={light ? "text-3xl md:text-4xl font-bold text-slate-900 mb-4" : "text-3xl md:text-4xl font-bold text-white mb-4"}>
                    {block.heading}
                  </h2>
                  {block.body && (
                    <p className={light ? "text-xl text-slate-600 mb-8 max-w-2xl mx-auto" : "text-xl text-primary-100 mb-8 max-w-2xl mx-auto"}>
                      {block.body}
                    </p>
                  )}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    {block.buttonLabel && block.buttonHref && (
                      <Button asChild size="lg" className={light ? "bg-primary-500 hover:bg-primary-600" : "bg-white text-coral-600 hover:bg-coral-50"}>
                        <a href={block.buttonHref}>{block.buttonLabel}</a>
                      </Button>
                    )}
                    {block.buttonLabel2 && block.buttonHref2 && (
                      <Button asChild variant="outline" size="lg">
                        <a href={block.buttonHref2}>{block.buttonLabel2}</a>
                      </Button>
                    )}
                  </div>
                </div>
              </section>
            )
          }

          case "contactSection":
            return (
              <section key={i} className="py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                  <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
                    <div className="lg:col-span-2">
                      <Card className="border-0 shadow-lg">
                        <CardHeader>
                          <CardTitle className="text-2xl">{block.formHeading || "Send Us a Message"}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ContactForm />
                        </CardContent>
                      </Card>
                    </div>

                    <div className="space-y-6">
                      <Card className="border-0 shadow-lg">
                        <CardHeader>
                          <CardTitle className="text-xl">Get In Touch</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          {block.address && (
                            <div className="flex items-start gap-3">
                              <Icon name="MapPin" className="h-5 w-5 text-primary-600 mt-1 flex-shrink-0" />
                              <div>
                                <p className="font-medium text-slate-900">Location</p>
                                <p className="text-sm text-slate-600 whitespace-pre-line">{block.address}</p>
                              </div>
                            </div>
                          )}
                          {block.phone && (
                            <div className="flex items-start gap-3">
                              <Icon name="Phone" className="h-5 w-5 text-primary-600 mt-1 flex-shrink-0" />
                              <div>
                                <p className="font-medium text-slate-900">Phone</p>
                                <p className="text-sm text-slate-600">{block.phone}</p>
                              </div>
                            </div>
                          )}
                          {block.email && (
                            <div className="flex items-start gap-3">
                              <Icon name="Mail" className="h-5 w-5 text-primary-600 mt-1 flex-shrink-0" />
                              <div>
                                <p className="font-medium text-slate-900">Email</p>
                                <p className="text-sm text-slate-600">{block.email}</p>
                              </div>
                            </div>
                          )}
                          {block.hours && (
                            <div className="flex items-start gap-3">
                              <Icon name="Clock" className="h-5 w-5 text-primary-600 mt-1 flex-shrink-0" />
                              <div>
                                <p className="font-medium text-slate-900">Office Hours</p>
                                <p className="text-sm text-slate-600 whitespace-pre-line">{block.hours}</p>
                              </div>
                            </div>
                          )}
                        </CardContent>
                      </Card>

                      {(block.noteHeading || block.noteBody) && (
                        <Card className="border-0 shadow-lg bg-primary-50">
                          <CardContent className="pt-6">
                            {block.noteHeading && <h3 className="font-semibold text-slate-900 mb-3">{block.noteHeading}</h3>}
                            {block.noteBody && (
                              <p className="text-sm text-slate-600 whitespace-pre-line">{block.noteBody}</p>
                            )}
                          </CardContent>
                        </Card>
                      )}
                    </div>
                  </div>
                </div>
              </section>
            )

          case "teamGrid":
            return (
              <section key={i} className="bg-slate-50 py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                  {block.heading && (
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">{block.heading}</h2>
                  )}
                  <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {(block.members || []).map((member, j) => {
                      const photo = typeof member.photo === "object" ? member.photo : null
                      return (
                        <Card key={j} className="border-0 shadow-lg overflow-hidden">
                          {photo?.url && (
                            <div className="aspect-square relative bg-slate-200">
                              <Image src={photo.url} alt={photo.alt || member.name} fill className="object-cover" />
                            </div>
                          )}
                          <CardContent className="p-8">
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">{member.name}</h3>
                            {member.title && <p className="text-primary-600 font-medium mb-4">{member.title}</p>}
                            {member.bio && <p className="text-slate-600 mb-6">{member.bio}</p>}
                            <div className="flex gap-3 mt-6">
                              {member.email && (
                                <Button size="sm" variant="outline" className="rounded-full w-10 h-10 p-0" asChild>
                                  <a href={`mailto:${member.email}`}>
                                    <Icon name="Mail" className="h-4 w-4" />
                                  </a>
                                </Button>
                              )}
                              {member.instagram && (
                                <Button size="sm" variant="outline" className="rounded-full w-10 h-10 p-0" asChild>
                                  <a href={member.instagram} target="_blank" rel="noreferrer">
                                    <Icon name="Instagram" className="h-4 w-4" />
                                  </a>
                                </Button>
                              )}
                              {member.facebook && (
                                <Button size="sm" variant="outline" className="rounded-full w-10 h-10 p-0" asChild>
                                  <a href={member.facebook} target="_blank" rel="noreferrer">
                                    <Icon name="Facebook" className="h-4 w-4" />
                                  </a>
                                </Button>
                              )}
                            </div>
                          </CardContent>
                        </Card>
                      )
                    })}
                  </div>
                </div>
              </section>
            )

          case "faq":
            return (
              <section key={i} className="bg-slate-50 py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                  <div className="max-w-4xl mx-auto">
                    {block.heading && (
                      <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
                        {block.heading}
                      </h2>
                    )}
                    <div className="grid md:grid-cols-2 gap-8">
                      {(block.items || []).map((item, j) => (
                        <div key={j}>
                          <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.question}</h3>
                          {item.answer && <p className="text-slate-600 text-sm">{item.answer}</p>}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            )

          default:
            return null
        }
      })}
    </>
  )
}
