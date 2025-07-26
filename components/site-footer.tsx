// components/site-footer.tsx
'use client'

import Image from 'next/image'
import Link from 'next/link'

export function SiteFooter() {
  return (
    <footer className="relative w-full overflow-hidden">
      {/* 1) Full‑bleed footer background (1448×466) */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1448px] h-[466px] -z-10">
        <Image
          src="/images/ChatGPT Image 21 Tem 2025 15_24_49.png"
          alt="Footer background"
          fill
          className="object-cover object-bottom"
          priority
        />
      </div>

      {/* 2) Frame 8 container (1200×148) */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1200px] h-[148px] relative">
        {/* 2a) Asset 20 @ left:552.54px, top:24px */}
        <div className="absolute left-[552.54px] top-[24px] w-[94.96px] h-[60px]">
          <Image
            src="/images/Asset 20.png"
            alt="Asset 20"
            fill
            className="object-contain"
            priority
          />
        </div>
        {/* 2b) Asset 10 @ left:536.83px, top:36.75px */}
        <div className="absolute left-[536.83px] top-[36.75px] w-[126.35px] h-[34.51px]">
          <Image
            src="/images/Asset 10.png"
            alt="Asset 10"
            fill
            className="object-contain"
            priority
          />
        </div>
        {/* 2c) X ikonu (Frame 7169) @ center, top:56px */}
        <div className="absolute left-1/2 top-[90px] -translate-x-1/2">
          <Link
            href="https://x.com/templarsbtc"
            target="_blank"
            aria-label="X"
            className="
              inline-flex items-center justify-center
              w-7 h-7
              bg-black/50 backdrop-blur-sm
              rounded-full
              hover:bg-black/70
              transition
            "
          >
            <Image
              src="/images/fi_5968958.png"
              alt="X"
              width={24}
              height={24}
              priority
            />
          </Link>
        </div>

        {/* 3) Sol üst NFT (Group 4 item1) @ left:350px, top:-5px */}
        <div className="absolute left-[350px] top-[-5px] w-[153px] h-[153px]">
          <Image
            src="/images/WhatsApp Image 2025-07-21 at 12.00.38.png"
            alt="NFT Left Top"
            fill
            className="object-contain"
            priority
          />
        </div>
        {/* 4) Sol alt NFT (Group 4 item2) @ left:245px, top:4px */}
        <div className="absolute left-[245px] top-[4px] w-[144px] h-[144px]">
          <Image
            src="/images/WhatsApp Image 2025-07-21 at 12.00.57 (3).png"
            alt="NFT Left Bottom"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* 5) Sağ üst NFT (Group 5 item1, ayna) @ left:692px, top:7px */}
        <div className="absolute left-[692px] top-[7px] w-[141px] h-[141px] -scale-x">
          <Image
            src="/images/WhatsApp Image 2025-07-21 at 12.00.44.png"
            alt="NFT Right Top"
            fill
            className="object-contain"
            priority
          />
        </div>
        {/* 6) Sağ alt NFT (Group 5 item2, ayna) @ left:784px, top:3px */}
        <div className="absolute left-[784px] top-[3px] w-[144px] h-[145px] -scale-x">
          <Image
            src="/images/WhatsApp Image 2025-07-21 at 12.00.57 (1).png"
            alt="NFT Right Bottom"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </footer>
  )
}
