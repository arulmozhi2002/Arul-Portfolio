import React from 'react'

const row1 = [
  'Vilvah', 'Dudeme', 'Siebentech', 'Botanic Boost', 'Mayon Auto',
  'Gharana India', 'Oorla', 'Studio Thari', 'Tenanchoice', 'Lehanza', 'Moon Chocolates',
]

const row2 = [
  'Moon Chocolates', 'Tenanchoice', 'Lehanza', 'Studio Thari', 'Oorla',
  'Gharana India', 'Mayon Auto', 'Botanic Boost', 'Siebentech', 'Dudeme', 'Vilvah',
]

function MarqueeRow({ brands, reverse = false }) {
  const items = [...brands, ...brands]
  return (
    <div className="overflow-hidden py-1">
      <div
        className="flex items-center animate-marquee"
        style={{ animationDirection: reverse ? 'reverse' : 'normal', animationDuration: '32s' }}
      >
        {items.map((name, i) => (
          <span key={i} className="flex items-center flex-shrink-0">
            <span className="mx-5 text-sm font-medium tracking-wide whitespace-nowrap cursor-default text-white/25 hover:text-white/70 transition-colors duration-200">
              {name}
            </span>
            <span className="text-violet-500/40 text-[9px] select-none">◆</span>
          </span>
        ))}
      </div>
    </div>
  )
}

export default function BrandMarquee() {
  return (
    <div className="flex flex-col gap-1">
      <MarqueeRow brands={row1} />
      <MarqueeRow brands={row2} reverse />
    </div>
  )
}
