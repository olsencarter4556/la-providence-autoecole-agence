type IconProps = { className?: string }

/** Illustrations services — volumes & dégradés */
export function IconFormation({ className = "h-full w-full" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <defs>
        <linearGradient id="svc-car-body" x1="8" y1="20" x2="56" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#b91c1c" />
          <stop offset="1" stopColor="#7f1d1d" />
        </linearGradient>
        <linearGradient id="svc-car-glass" x1="22" y1="28" x2="40" y2="36" gradientUnits="userSpaceOnUse">
          <stop stopColor="#93c5fd" />
          <stop offset="1" stopColor="#3b82f6" />
        </linearGradient>
      </defs>
      <ellipse cx="32" cy="52" rx="26" ry="4" fill="#000" opacity="0.12" />
      <path d="M8 38c0-2 2-4 5-4h38c3 0 5 2 5 4v2H8v-2z" fill="url(#svc-car-body)" />
      <path d="M12 34l4-10c1-2 3-3 6-3h20c3 0 5 1 6 3l4 10" stroke="#fecaca" strokeWidth="1.5" fill="none" opacity="0.6" />
      <path d="M18 30h28v8H18v-8z" fill="url(#svc-car-glass)" opacity="0.85" />
      <circle cx="18" cy="40" r="5" fill="#1f2937" stroke="#374151" strokeWidth="1.5" />
      <circle cx="18" cy="40" r="2" fill="#6b7280" />
      <circle cx="46" cy="40" r="5" fill="#1f2937" stroke="#374151" strokeWidth="1.5" />
      <circle cx="46" cy="40" r="2" fill="#6b7280" />
      <path d="M26 22h12l-1 5H27l-1-5z" fill="#fca5a5" opacity="0.9" />
    </svg>
  )
}

export function IconAssurance({ className = "h-full w-full" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <defs>
        <linearGradient id="svc-shield" x1="32" y1="8" x2="32" y2="52" gradientUnits="userSpaceOnUse">
          <stop stopColor="#22c55e" />
          <stop offset="0.5" stopColor="#16a34a" />
          <stop offset="1" stopColor="#15803d" />
        </linearGradient>
      </defs>
      <path
        d="M32 6L10 14v18c0 14 9 24 22 28 13-4 22-14 22-28V14L32 6z"
        fill="url(#svc-shield)"
        stroke="#14532d"
        strokeWidth="1.2"
      />
      <path d="M24 32l6 6 12-14" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      <ellipse cx="32" cy="48" rx="8" ry="3" fill="#000" opacity="0.15" />
    </svg>
  )
}

export function IconCarteGrise({ className = "h-full w-full" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <defs>
        <linearGradient id="svc-doc" x1="14" y1="12" x2="50" y2="52" gradientUnits="userSpaceOnUse">
          <stop stopColor="#f8fafc" />
          <stop offset="1" stopColor="#e2e8f0" />
        </linearGradient>
      </defs>
      <rect x="12" y="8" width="40" height="48" rx="3" fill="url(#svc-doc)" stroke="#94a3b8" strokeWidth="1.5" />
      <rect x="18" y="16" width="28" height="3" rx="1" fill="#cbd5e1" />
      <rect x="18" y="24" width="20" height="2" rx="1" fill="#e2e8f0" />
      <rect x="18" y="30" width="24" height="2" rx="1" fill="#e2e8f0" />
      <circle cx="44" cy="42" r="10" fill="#8B0000" opacity="0.9" />
      <path d="M40 42l3 3 6-7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="18" y="36" width="14" height="2" rx="1" fill="#cbd5e1" />
    </svg>
  )
}

export function IconPlaque({ className = "h-full w-full" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <defs>
        <linearGradient id="svc-plate" x1="8" y1="24" x2="56" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#facc15" />
          <stop offset="1" stopColor="#eab308" />
        </linearGradient>
      </defs>
      <rect x="6" y="22" width="52" height="20" rx="2" fill="#1e293b" stroke="#0f172a" strokeWidth="2" />
      <rect x="10" y="26" width="44" height="12" rx="1" fill="url(#svc-plate)" stroke="#ca8a04" strokeWidth="0.5" />
      <text x="32" y="35" textAnchor="middle" dominantBaseline="middle" fill="#0f172a" fontSize="9" fontWeight="700" fontFamily="system-ui,sans-serif">
        LP · GA
      </text>
      <rect x="28" y="14" width="8" height="6" rx="1" fill="#3b82f6" />
    </svg>
  )
}

export function IconAcquisition({ className = "h-full w-full" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <defs>
        <linearGradient id="svc-buy-car" x1="12" y1="36" x2="48" y2="52" gradientUnits="userSpaceOnUse">
          <stop stopColor="#dc2626" />
          <stop offset="1" stopColor="#991b1b" />
        </linearGradient>
      </defs>
      <path d="M10 44h44v6H10v-6z" fill="#374151" />
      <path d="M14 40l3-8h30l3 8" stroke="#6b7280" strokeWidth="1.5" fill="none" />
      <path d="M16 36h32v8H16v-8z" fill="url(#svc-buy-car)" />
      <rect x="22" y="30" width="20" height="8" rx="1" fill="#93c5fd" opacity="0.9" />
      <circle cx="20" cy="48" r="4" fill="#111827" />
      <circle cx="44" cy="48" r="4" fill="#111827" />
      <circle cx="48" cy="14" r="9" stroke="#8B0000" strokeWidth="2.2" fill="none" />
      <path d="M51 23v4M48 26h6" stroke="#8B0000" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export function IconAdministratif({ className = "h-full w-full" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <defs>
        <linearGradient id="svc-admin" x1="18" y1="10" x2="46" y2="54" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fef3c7" />
          <stop offset="1" stopColor="#fde68a" />
        </linearGradient>
      </defs>
      <rect x="14" y="12" width="36" height="44" rx="2" fill="url(#svc-admin)" stroke="#d97706" strokeWidth="1.2" />
      <rect x="20" y="20" width="24" height="2" rx="1" fill="#b45309" opacity="0.35" />
      <rect x="20" y="26" width="18" height="2" rx="1" fill="#b45309" opacity="0.25" />
      <rect x="20" y="32" width="22" height="2" rx="1" fill="#b45309" opacity="0.25" />
      <rect x="22" y="42" width="20" height="10" rx="1" fill="#8B0000" />
      <text x="32" y="50" textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="7" fontWeight="700" fontFamily="system-ui">
        OK
      </text>
      <path d="M38 8v8M34 12h8" stroke="#92400e" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export function IconProjectorRich({ className = "h-full w-full" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <defs>
        <linearGradient id="adv-proj" x1="8" y1="40" x2="28" y2="48" gradientUnits="userSpaceOnUse">
          <stop stopColor="#64748b" />
          <stop offset="1" stopColor="#334155" />
        </linearGradient>
        <linearGradient id="adv-beam" x1="28" y1="20" x2="56" y2="36" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fef08a" stopOpacity="0.9" />
          <stop offset="1" stopColor="#fef08a" stopOpacity="0.12" />
        </linearGradient>
      </defs>
      <path d="M6 38h22v12H6V38z" fill="url(#adv-proj)" />
      <circle cx="10" cy="44" r="2" fill="#fbbf24" />
      <path d="M28 24L56 12v36L28 24z" fill="url(#adv-beam)" />
      <rect x="30" y="14" width="26" height="32" rx="2" fill="#1e293b" stroke="#8B0000" strokeWidth="1.5" />
      <rect x="34" y="20" width="18" height="10" rx="1" fill="#3b82f6" opacity="0.55" />
      <rect x="34" y="34" width="14" height="2" fill="#94a3b8" />
      <rect x="34" y="38" width="10" height="2" fill="#94a3b8" />
    </svg>
  )
}

export function IconClimRich({ className = "h-full w-full" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <defs>
        <linearGradient id="adv-clim" x1="32" y1="8" x2="32" y2="56" gradientUnits="userSpaceOnUse">
          <stop stopColor="#38bdf8" />
          <stop offset="1" stopColor="#0284c7" />
        </linearGradient>
      </defs>
      <rect x="10" y="18" width="44" height="28" rx="4" fill="#f1f5f9" stroke="#64748b" strokeWidth="2" />
      <circle cx="32" cy="32" r="12" fill="url(#adv-clim)" opacity="0.35" />
      <path
        d="M32 20v24M24 26l16 12M40 26L24 38M24 32h16"
        stroke="#0ea5e9"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path d="M18 10h28v6H18z" fill="#8B0000" />
      <text x="32" y="15" textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="6" fontWeight="700" fontFamily="system-ui">
        A/C
      </text>
    </svg>
  )
}

export function IconLanguagesRich({ className = "h-full w-full" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <circle cx="32" cy="32" r="22" fill="#e0f2fe" stroke="#0369a1" strokeWidth="2" />
      <path d="M20 28c4-6 10-8 12-8s8 2 12 8" stroke="#0369a1" strokeWidth="2" fill="none" />
      <circle cx="26" cy="34" r="3" fill="#1d4ed8" />
      <circle cx="38" cy="34" r="3" fill="#b91c1c" />
      <path d="M24 44h16" stroke="#334155" strokeWidth="2" strokeLinecap="round" />
      <text x="32" y="24" textAnchor="middle" dominantBaseline="middle" fill="#0f172a" fontSize="9" fontWeight="800" fontFamily="system-ui">
        EN
      </text>
      <text x="32" y="52" textAnchor="middle" dominantBaseline="middle" fill="#64748b" fontSize="7" fontWeight="600" fontFamily="system-ui">
        FR
      </text>
    </svg>
  )
}

export function IconSuiviRich({ className = "h-full w-full" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <defs>
        <linearGradient id="adv-suivi" x1="20" y1="14" x2="44" y2="50" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fecdd3" />
          <stop offset="1" stopColor="#fda4af" />
        </linearGradient>
      </defs>
      <circle cx="28" cy="22" r="10" fill="url(#adv-suivi)" stroke="#8B0000" strokeWidth="1.5" />
      <path d="M18 46c2-8 8-12 10-12h2c2 0 8 4 10 12" fill="#fecdd3" stroke="#8B0000" strokeWidth="1.2" />
      <circle cx="46" cy="38" r="12" fill="#22c55e" stroke="#15803d" strokeWidth="1.5" />
      <path d="M41 38l4 4 8-9" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
