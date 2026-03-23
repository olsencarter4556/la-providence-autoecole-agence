"use client"

import Link from "next/link"

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center gap-3 ${className}`}>
      <div className="relative flex h-14 w-14 items-center justify-center rounded-full border-3 border-[#8B0000] bg-white">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="h-8 w-8 text-[#8B0000]"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
          />
        </svg>
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 rounded bg-[#8B0000] px-1 py-0.5">
          <span className="text-[6px] font-bold text-white">PERMIS</span>
        </div>
      </div>
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
