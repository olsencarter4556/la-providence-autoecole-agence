"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Phone, MessageCircle } from "lucide-react"
import { Logo } from "./logo"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "À Propos" },
  { href: "/services", label: "Nos Services" },
  { href: "/galerie", label: "Galerie" },
  { href: "/actualites", label: "Actualités" },
  { href: "/contact", label: "Contact" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      isScrolled ? "bg-white shadow-md" : "bg-white"
    )}>
      {/* Top bar */}
      <div className="hidden bg-[#8B0000] text-white md:block">
        <div className="container mx-auto flex items-center justify-between px-4 py-2 text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+24176592517" className="flex items-center gap-2 hover:text-gray-200">
              <Phone className="h-4 w-4" />
              <span>076 592 517</span>
            </a>
            <a href="tel:+24166163118" className="flex items-center gap-2 hover:text-gray-200">
              <Phone className="h-4 w-4" />
              <span>066 163 118</span>
            </a>
            <a href="tel:+24177374609" className="flex items-center gap-2 hover:text-gray-200">
              <Phone className="h-4 w-4" />
              <span>077 374 609</span>
            </a>
          </div>
          <a
            href="https://wa.me/24176592517"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-gray-200"
          >
            <MessageCircle className="h-4 w-4" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <Logo />

          {/* Desktop nav */}
          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-[#8B0000]",
                  pathname === link.href
                    ? "text-[#8B0000] border-b-2 border-[#8B0000] pb-1"
                    : "text-gray-700"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="rounded-md bg-[#8B0000] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#6B0000]"
            >
              S'inscrire
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-md p-2 text-gray-700 lg:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile nav */}
        {isOpen && (
          <div className="border-t border-gray-100 py-4 lg:hidden">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-base font-medium transition-colors",
                    pathname === link.href
                      ? "text-[#8B0000]"
                      : "text-gray-700 hover:text-[#8B0000]"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-2 rounded-md bg-[#8B0000] px-6 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-[#6B0000]"
              >
                S'inscrire
              </Link>
              <div className="mt-4 flex flex-col gap-2 border-t border-gray-100 pt-4 text-sm text-gray-600">
                <a href="tel:+24176592517" className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>076 592 517</span>
                </a>
                <a
                  href="https://wa.me/24176592517"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-green-600"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
