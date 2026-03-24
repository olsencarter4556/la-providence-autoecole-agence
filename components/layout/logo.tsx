"use client"

import Link from "next/link"
import Image from "next/image"

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center gap-3 md:gap-4 ${className}`}>
      <Image
        src="/la-providence-logo.jpeg"
        alt="Auto-École La Providence"
        width={200}
        height={200}
        quality={100}
        className="h-[72px] w-[72px] shrink-0 rounded-full object-cover ring-2 ring-[#8B0000]/20 md:h-[96px] md:w-[96px]"
        priority
        sizes="(max-width: 768px) 72px, 96px"
      />
      <div className="flex min-w-0 flex-col">
        <span className="font-serif text-base font-bold leading-tight text-[#8B0000] md:text-lg">
          AUTO-ÉCOLE
        </span>
        <span className="font-serif text-lg font-bold leading-tight text-[#8B0000] md:text-2xl">
          LA PROVIDENCE
        </span>
        <span className="text-[10px] tracking-wider text-gray-600 md:text-xs">
          Diligence - Efficacité - Résultat
        </span>
      </div>
    </Link>
  )
}
