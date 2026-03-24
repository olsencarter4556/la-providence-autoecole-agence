"use client"

import Link from "next/link"
import Image from "next/image"

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center gap-3 ${className}`}>
      <Image
        src="/WhatsApp Image 2026-03-21 at 13.37.51.jpeg"
        alt="Auto-École La Providence"
        width={60}
        height={60}
        className="rounded-full"
        priority
      />
      <div className="flex flex-col">
        <span className="font-serif text-lg font-bold leading-tight text-[#8B0000]">
          AUTO-ÉCOLE
        </span>
        <span className="font-serif text-xl font-bold leading-tight text-[#8B0000]">
          LA PROVIDENCE
        </span>
        <span className="text-[10px] tracking-wider text-gray-600">
          Diligence - Efficacité - Résultat
        </span>
      </div>
    </Link>
  )
}