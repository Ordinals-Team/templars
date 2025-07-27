// components/GallerySection.tsx
"use client";

import Image from "next/image";

export default function GallerySection() {
  const frame5 = [
    "/images/gallery/WhatsApp Image 2025-07-21 at 12.00.56 (3).png",
    "/images/gallery/WhatsApp Image 2025-07-21 at 12.00.56 (4).png",
    "/images/gallery/WhatsApp Image 2025-07-21 at 12.00.56 (5).png",
    "/images/gallery/WhatsApp Image 2025-07-21 at 12.00.56 (6).png",
    "/images/gallery/WhatsApp Image 2025-07-21 at 12.00.56 (7).png",
    "/images/gallery/WhatsApp Image 2025-07-21 at 12.00.55.png",
  ];

  const frame4 = [
    "/images/gallery/WhatsApp Image 2025-07-21 at 12.00.56.png",
    "/images/gallery/WhatsApp Image 2025-07-21 at 12.00.57 (1).png",
    "/images/gallery/WhatsApp Image 2025-07-21 at 12.00.57 (2).png",
    "/images/gallery/WhatsApp Image 2025-07-21 at 12.00.57 (3).png",
    "/images/gallery/WhatsApp Image 2025-07-21 at 12.00.56 (2).png",
    "/images/gallery/WhatsApp Image 2025-07-21 at 12.00.56 (1).png",
  ];

  return (
    <section
      id="gallery"
      className="
        relative w-full bg-[#01020E]
        overflow-x-hidden overflow-y-hidden    /* yatay scroll, dikey gizle */
        pt-48 pb-12
        z-50                                /* footer’ın üstünde */
      "
    >
      {/** MOBILE: sadece iki kare, yatay kaydırılabilir **/}
      <div
        className="
          flex justify-between px-4
          sm:hidden
          overflow-x-auto                  /* lokal yatay scroll */
          scrollbar-hide                   /* scrollbar gizle */
          snap-x snap-mandatory            /* kaydırma snap */
          gap-4
        "
      >
        <div className="w-[240px] h-[240px] flex-none snap-start">
          <Image
            src={frame5[0]}
            alt="mobile-left"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="w-[240px] h-[240px] flex-none snap-start">
          <Image
            src={frame4[frame4.length - 1]}
            alt="mobile-right"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/** DESKTOP: üst üste iki frame **/}
      <div className="hidden sm:flex flex-col items-center space-y-12">
        {/** FRAME 5 **/}
        <div className="relative mx-auto rotate-[-3.28deg] z-10">
          <div
            className="
              w-[90vw] lg:w-[1552px] h-[272px]
              flex items-start gap-4
              px-4 lg:px-0 py-4
              bg-[#E9731D]
            "
          >
            {frame5.map((src, i) => (
              <div
                key={i}
                className="relative w-[240px] h-[240px] flex-none"
              >
                <Image
                  src={src}
                  alt={`f5-${i}`}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            ))}
          </div>
        </div>

        {/** FRAME 4 **/}
        <div className="relative mx-auto rotate-[-3.28deg] z-20 -mb-64 lg:-mb-80">
          <div
            className="
              w-[90vw] lg:w-[1552px] h-[272px]
              flex items-start gap-4
              px-4 lg:px-0 py-4
              bg-[#E9731D]
            "
          >
            {frame4.map((src, i) => (
              <div
                key={i}
                className="relative w-[240px] h-[240px] flex-none"
              >
                <Image
                  src={src}
                  alt={`f4-${i}`}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
