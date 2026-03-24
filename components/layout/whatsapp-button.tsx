"use client"

import { useEffect, useState } from "react"
import { createPortal } from "react-dom"

/** Numéro international sans + ni espaces (Gabon) */
const WHATSAPP_PHONE = "24176592517"

/** Lien court : ouvre l’app / WhatsApp Web (sans target=_blank pour navigateurs intégrés) */
const whatsappHref = `https://wa.me/${WHATSAPP_PHONE}`

export function WhatsAppButton() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const node = (
    <a
      href={whatsappHref}
      rel="noopener noreferrer"
      className="group fixed bottom-6 right-6 flex h-16 w-16 cursor-pointer touch-manipulation items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-transform hover:scale-110 active:scale-95"
      style={{ zIndex: 2147483647 }}
      aria-label="Contactez-nous sur WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        className="pointer-events-none h-10 w-10"
        aria-hidden
      >
        <circle cx="24" cy="24" r="24" fill="#25D366" />
        <path
          fill="white"
          d="M24 10C16.27 10 10 16.27 10 24c0 2.45.65 4.75 1.78 6.75L10 38l7.5-1.75A13.9 13.9 0 0 0 24 38c7.73 0 14-6.27 14-14S31.73 10 24 10zm0 25.5c-2.1 0-4.08-.55-5.8-1.5l-.4-.25-4.45 1.05 1.05-4.3-.28-.43A11.44 11.44 0 0 1 12.5 24c0-6.35 5.15-11.5 11.5-11.5S35.5 17.65 35.5 24 30.35 35.5 24 35.5zm6.3-8.6c-.35-.17-2.05-1.02-2.37-1.13-.32-.12-.55-.17-.78.17-.23.35-.88 1.13-1.08 1.37-.2.23-.4.26-.75.09-.35-.17-1.48-.55-2.82-1.75-1.04-.93-1.75-2.08-1.95-2.43-.2-.35-.02-.54.15-.71.15-.15.35-.4.52-.6.17-.2.23-.35.35-.58.12-.23.06-.43-.02-.6-.09-.17-.78-1.88-1.07-2.57-.28-.68-.57-.58-.78-.59h-.67c-.23 0-.6.09-.92.43-.32.35-1.2 1.17-1.2 2.85s1.23 3.3 1.4 3.53c.17.23 2.42 3.7 5.87 5.18.82.35 1.46.56 1.96.72.82.26 1.57.22 2.16.13.66-.1 2.05-.84 2.34-1.65.29-.8.29-1.5.2-1.64-.08-.15-.3-.23-.65-.4z"
        />
      </svg>
      <span className="pointer-events-none absolute bottom-full right-0 mb-2 hidden whitespace-nowrap rounded bg-gray-900 px-3 py-2 text-sm text-white group-hover:block group-focus-visible:block">
        Contactez-nous sur WhatsApp
      </span>
    </a>
  )

  if (!mounted) {
    return null
  }

  return createPortal(node, document.body)
}
