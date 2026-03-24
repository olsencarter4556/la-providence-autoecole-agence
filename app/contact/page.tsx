"use client"

import { useState } from "react"
import { PageHero } from "@/components/shared/page-hero"
import { Phone, MapPin, Clock, MessageCircle, Facebook, Instagram, Send, CheckCircle } from "lucide-react"
import { whatsappChatUrl } from "@/lib/whatsapp"

const contactInfo = [
  {
    icon: Phone,
    title: "Téléphone",
    lines: ["076 592 517", "066 163 118", "077 374 609"],
    href: "tel:+24176592517",
  },
  {
    icon: MapPin,
    title: "Adresse",
    lines: ["Okala Auberge", "Libreville, Gabon"],
    href: "#map",
  },
  {
    icon: Clock,
    title: "Horaires",
    lines: ["Lundi - Samedi", "8h00 - 18h00"],
    href: null,
  },
]

const subjects = [
  { value: "inscription", label: "Inscription" },
  { value: "renseignement", label: "Renseignement" },
  { value: "devis", label: "Devis" },
  { value: "autre", label: "Autre" },
]

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would send the form data to a server
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormState({ name: "", phone: "", email: "", subject: "", message: "" })
    }, 3000)
  }

  return (
    <>
      <PageHero
        title="Contactez-Nous"
        subtitle="Nous sommes à votre écoute pour toute question ou demande d'information"
        backgroundImage="https://images.unsplash.com/photo-1449965408869-ebd3fee56ce2?q=80&w=2070"
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Contact Info Cards */}
            <div className="space-y-6">
              {contactInfo.map((info) => (
                <div
                  key={info.title}
                  className="flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-6 transition-all hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-[#8B0000]/10 text-[#8B0000]">
                    <info.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-gray-900">{info.title}</h3>
                    {info.lines.map((line) => (
                      <p key={line} className="text-gray-600">
                        {info.href ? (
                          <a href={info.href} className="hover:text-[#8B0000]">
                            {line}
                          </a>
                        ) : (
                          line
                        )}
                      </p>
                    ))}
                  </div>
                </div>
              ))}

              {/* WhatsApp Button */}
              <a
                href={whatsappChatUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 rounded-xl bg-green-500 p-6 text-white transition-colors hover:bg-green-600"
              >
                <MessageCircle className="h-6 w-6" />
                <span className="text-lg font-semibold">WhatsApp Direct</span>
              </a>

              {/* Social Links */}
              <div className="rounded-xl bg-gray-50 p-6">
                <h3 className="mb-4 font-semibold text-gray-900">Suivez-nous</h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-gray-600 shadow-sm transition-colors hover:bg-[#8B0000] hover:text-white"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-gray-600 shadow-sm transition-colors hover:bg-[#8B0000] hover:text-white"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href={whatsappChatUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-gray-600 shadow-sm transition-colors hover:bg-green-500 hover:text-white"
                  >
                    <MessageCircle className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="rounded-xl border border-gray-200 bg-white p-8">
                <h2 className="mb-6 font-serif text-2xl font-bold text-gray-900">
                  Envoyez-nous un message
                </h2>

                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <CheckCircle className="mb-4 h-16 w-16 text-green-500" />
                    <h3 className="mb-2 text-xl font-semibold text-gray-900">
                      Message envoyé !
                    </h3>
                    <p className="text-gray-600">
                      Nous vous répondrons dans les plus brefs délais.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <label
                          htmlFor="name"
                          className="mb-2 block text-sm font-medium text-gray-700"
                        >
                          Nom complet *
                        </label>
                        <input
                          type="text"
                          id="name"
                          required
                          value={formState.name}
                          onChange={(e) =>
                            setFormState({ ...formState, name: e.target.value })
                          }
                          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 transition-colors focus:border-[#8B0000] focus:outline-none focus:ring-1 focus:ring-[#8B0000]"
                          placeholder="Votre nom"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="mb-2 block text-sm font-medium text-gray-700"
                        >
                          Téléphone *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          required
                          value={formState.phone}
                          onChange={(e) =>
                            setFormState({ ...formState, phone: e.target.value })
                          }
                          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 transition-colors focus:border-[#8B0000] focus:outline-none focus:ring-1 focus:ring-[#8B0000]"
                          placeholder="Votre numéro"
                        />
                      </div>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <label
                          htmlFor="email"
                          className="mb-2 block text-sm font-medium text-gray-700"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          value={formState.email}
                          onChange={(e) =>
                            setFormState({ ...formState, email: e.target.value })
                          }
                          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 transition-colors focus:border-[#8B0000] focus:outline-none focus:ring-1 focus:ring-[#8B0000]"
                          placeholder="votre@email.com"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="subject"
                          className="mb-2 block text-sm font-medium text-gray-700"
                        >
                          Sujet *
                        </label>
                        <select
                          id="subject"
                          required
                          value={formState.subject}
                          onChange={(e) =>
                            setFormState({ ...formState, subject: e.target.value })
                          }
                          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 transition-colors focus:border-[#8B0000] focus:outline-none focus:ring-1 focus:ring-[#8B0000]"
                        >
                          <option value="">Sélectionnez un sujet</option>
                          {subjects.map((subject) => (
                            <option key={subject.value} value={subject.value}>
                              {subject.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="mb-2 block text-sm font-medium text-gray-700"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        value={formState.message}
                        onChange={(e) =>
                          setFormState({ ...formState, message: e.target.value })
                        }
                        className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 text-gray-900 transition-colors focus:border-[#8B0000] focus:outline-none focus:ring-1 focus:ring-[#8B0000]"
                        placeholder="Votre message..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#8B0000] py-4 font-semibold text-white transition-colors hover:bg-[#6B0000]"
                    >
                      <Send className="h-5 w-5" />
                      Envoyer le message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section id="map" className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center font-serif text-3xl font-bold text-gray-900">
            Notre Emplacement
          </h2>
          <div className="overflow-hidden rounded-xl shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15959.025891879842!2d9.4295!3d0.4164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x107f3b8e8af4f8e7%3A0x7c3f9d9e8c0b9a7f!2sOkala%2C%20Libreville%2C%20Gabon!5e0!3m2!1sfr!2sfr!4v1709900000000!5m2!1sfr!2sfr"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localisation La Providence Auto-École"
            />
          </div>
        </div>
      </section>
    </>
  )
}
