"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/24176592517"
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-all hover:bg-green-600 hover:scale-110"
      aria-label="Contactez-nous sur WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
      <span className="absolute bottom-full right-0 mb-2 hidden whitespace-nowrap rounded bg-gray-900 px-3 py-2 text-sm text-white group-hover:block">
        Contactez-nous sur WhatsApp
      </span>
    </a>
  )
}
