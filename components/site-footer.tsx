// components/SiteFooter.tsx
"use client";
import Image from "next/image";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="relative w-full overflow-hidden pt-[150px]">
      {/* 1) Full‑bleed footer background */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1448px] h-[466px] -z-10">
        <Image
          src="/images/ChatGPT Image 21 Tem 2025 15_24_49.png"
          alt="Footer BG"
          fill
          className="object-cover object-bottom"
          priority
        />
      </div>

      {/* 2) Frame 8 içeriği */}
      <div className="relative mx-auto w-[1200px] max-w-full h-[148px] flex flex-col justify-center items-center gap-4">
        {/* Asset20 */}
        <div className="relative w-[95px] h-[60px]">
          <Image
            src="/images/Asset__20.png"
            alt="Asset20"
            fill
            className="object-contain"
            priority
          />
        </div>
        {/* Asset10 */}
        <div className="relative w-[126px] h-[35px]">
          <Image
            src="/images/Asset_10.png"
            alt="Asset10"
            fill
            className="object-contain"
            priority
          />
        </div>
        {/* X ikonu */}
        <Link
          href="https://x.com/templarsbtc"
          target="_blank"
          className="inline-flex items-center justify-center w-7 h-7 bg-black/50 backdrop-blur-sm rounded-full hover:bg-black/70 transition"
        >
          <Image
            src="/images/fi_5968958.png"
            alt="X"
            width={24}
            height={24}
            priority
          />
        </Link>

        {/* NFT1 – gizli mobilde, göster sm+ */}
        <div className="absolute left-[300px] bottom-0 w-[258px] h-[153px] hidden sm:block">
          <Image
            src="/images/WhatsApp Image 2025-07-21 at 12.00.38.png"
            fill
            alt="NFT1"
            className="object-contain"
            priority
          />
        </div>

        {/* NFT2 – daima görünür (mobilde sol) */}
        <div className="absolute left-[245px] bottom-[5px] w-[144px] h-[144px]">
          <Image
            src="/images/WhatsApp Image 2025-07-21 at 12.00.57 (3).png"
            fill
            alt="NFT2"
            className="object-contain"
            priority
          />
        </div>

        {/* NFT3 – gizli mobilde, göster sm+ */}
        <div className="absolute left-[692px] bottom-[7px] w-[141px] h-[141px] -scale-x hidden sm:block">
          <Image
            src="/images/WhatsApp Image 2025-07-21 at 12.00.44.png"
            fill
            alt="NFT3"
            className="object-contain"
            priority
          />
        </div>

        {/* NFT4 – daima görünür (mobilde sağ) */}
        <div className="absolute left-[784px] bottom-[3px] w-[144px] h-[145px] -scale-x">
          <Image
            src="/images/WhatsApp Image 2025-07-21 at 12.00.57 (1).png"
            fill
            alt="NFT4"
            className="object-contain"
            priority
          />
        </div>
      </div>
    </footer>
  );
}