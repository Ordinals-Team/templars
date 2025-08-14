'use client';

import Image from 'next/image';

export default function GallerySection() {
  const frame5 = [
    '/images/gallery/gallery-1.png',
    '/images/gallery/gallery-2.png',
    '/images/gallery/gallery-3.png',
    '/images/gallery/gallery-4.png',
    '/images/gallery/gallery-5.png',
    '/images/gallery/gallery-6.png',
    '/images/gallery/gallery-13.png',
    '/images/gallery/gallery-15.png',
  ];

  const frame4 = [
    '/images/gallery/gallery-7.png',
    '/images/gallery/gallery-8.png',
    '/images/gallery/gallery-9.png',
    '/images/gallery/gallery-10.png',
    '/images/gallery/gallery-11.png',
    '/images/gallery/gallery-12.png',
    '/images/gallery/gallery-14.png',
    '/images/gallery/gallery-16.png',
  ];

  /* frame */
  const Tile = ({ src, alt }: { src: string; alt: string }) => (
    <div
      className="
        relative shrink-0 snap-start 
        w-[80px] h-[80px]          /* <640px */
        sm:w-[145px] sm:h-[145px]    /* 640–1023 */
        lg:w-[240px] lg:h-[240px]    /* ≥1024   */
      "
    >
      <Image src={src} alt={alt} fill className="object-cover" priority />
    </div>
  );

  /* orange stripe */
  const Strip = ({ imgs, z }: { imgs: string[]; z: number }) => (
    <div
      className={`
        relative w-screen max-w-none
        rotate-[-3.28deg] origin-center
        z-[${z}]
      `}
    >
      <div
        className="
          flex gap-4 px-4 py-4
          bg-[#E9731D] items-start
          overflow-x-auto lg:overflow-x-visible
          snap-x snap-mandatory scrollbar-hide
        "
      >
        {imgs.map((src, i) => (
          <Tile key={i} src={src} alt={`f${z === 20 ? 4 : 5}-${i}`} />
        ))}
      </div>
    </div>
  );

  return (
    <section
      id="gallery"
      className="
        relative w-full bg-[#01020E]
        overflow-x-hidden overflow-y-visible
        pt-44 pb-24
      "
    >
      {/*  Frame 5 */}
      <Strip imgs={frame5} z={10} />

      
      <div className="h-12 sm:h-16 lg:h-20" />

      {/* Frame 4 */}
      <Strip imgs={frame4} z={20} />
    </section>
  );
}
