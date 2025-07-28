'use client'

import Image from 'next/image'
import Link  from 'next/link'

/* ——— Assets road ——— */
const BG      = '/images/ChatGPT Image 21 Tem 2025 15_24_49.png'
const ASSET20 = '/images/Asset__20.png'
const ASSET10 = '/images/Asset_10.png'
const xIcon   = '/images/fi_5968958.png'

/* 2 + 2 hero */
const groupLeft = [
  '/images/WhatsApp Image 2025-07-21 at 12.00.57 (3).png',
  '/images/WhatsApp Image 2025-07-21 at 12.00.38.png',
]
const groupRight = [
  '/images/WhatsApp Image 2025-07-21 at 12.00.44.png',
  '/images/WhatsApp Image 2025-07-21 at 12.00.57 (1).png',
  
]

/* ——— Hero box */
type BoxProps = { src: string; idx: number; side: 'left' | 'right' }

const NftBox = ({ src, idx, side }: BoxProps) => {
  /* */
  const overlap =
    idx === 0
      ? ''
      : side === 'left'
          ? '-ml-[6vw] sm:-ml-[4vw] md:-ml-[3vw] lg:-ml-8'
          : '-mr-[6vw] sm:-mr-[4vw] md:-mr-[3vw] lg:-mr-8'

  return (
    <div
      className={`
        relative
        w-[26vw]  max-w-[85px]  aspect-square       
        max-[375px]:w-[24vw] max-[375px]:max-w-[78px]
        sm:w-[20vw] sm:max-w-[120px]
        md:w-[15vw] md:max-w-[136px]
        lg:w-[144px]
        ${overlap}
        transition-transform hover:scale-105
      `}
    >
      <Image src={src} alt={'nft-' + idx} fill priority className="object-contain" />
    </div>
  )
}

export function SiteFooter() {
  return (
    <footer className="relative isolate w-full overflow-hidden pt-24 sm:pt-32 lg:pt-40">
      {/* BG */}
      <Image
        src={BG}
        alt="footer‑bg"
        fill
        sizes="100vw"
        priority
        className="
          pointer-events-none select-none
          object-cover object-bottom min-h-[300px] z-0
        "
      />

      {/* Crest & X */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-col items-center gap-4 px-4">
        <div className="relative -top-12 sm:-top-[68px] lg:-top-24">
          <Image
            src={ASSET20}
            alt="templars‑crest"
            width={95}
            height={60}
            priority
            className="mx-auto w-[32vw] max-[375px]:w-[38vw] sm:w-[95px] h-auto"
          />
          <Image
            src={ASSET10}
            alt="templars‑wordmark"
            width={126}
            height={35}
            priority
            className="
              absolute left-1/2 top-1/2 w-[42vw] max-[375px]:w-[48vw] sm:w-[126px]
              -translate-x-1/2 -translate-y-1/2
            "
          />
        </div>

        <Link
          href="https://x.com/templarsbtc"
          target="_blank"
          className="
            inline-flex h-9 w-9 items-center justify-center rounded-full
            bg-black/50 backdrop-blur transition hover:bg-black/70
            -mt-12 sm:-mt-[68px] lg:-mt-24
            z-10
          "
        >
          <Image src={xIcon} alt="twitter‑x" width={24} height={24} priority />
        </Link>
      </div>

      {/* left */}
      <div className="absolute bottom-0 left-0 z-10 flex items-end pl-6 sm:pl-12 lg:pl-20">
        {groupLeft.map((src, i) => (
          <NftBox key={i} src={src} idx={i} side="left" />
        ))}
      </div>

      {/* right group*/}
      <div
        className="
          absolute bottom-0 right-0 z-10 flex items-end
          pr-1 max-[375px]:pr-0   sm:pr-6 lg:pr-10
        "
      >
        {groupRight.map((src, i) => (
          <NftBox key={i} src={src} idx={i} side="right" />
        ))}
      </div>
    </footer>
  )
}
