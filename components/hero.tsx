'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function HeroSection() {
 
  /*  images */
  
  const left = [
    '/images/WhatsApp Image 2025-07-21 at 12.00.43.png',
    '/images/WhatsApp Image 2025-07-21 at 12.00.43 (1).png',
    '/images/WhatsApp Image 2025-07-21 at 12.00.39.png',
  ]
  const right = [
    '/images/WhatsApp Image 2025-07-21 at 12.00.37.png',
    '/images/WhatsApp Image 2025-07-21 at 12.00.44 (1).png',
    '/images/WhatsApp Image 2025-07-21 at 12.00.57.png',
  ]

  /*  72 hours */

  const [target] = useState(() => Date.now() + 72 * 60 * 60 * 1000)
  const [leftSecs, setLeftSecs] = useState(() =>
    Math.max(0, Math.floor((target - Date.now()) / 1000)),
  )

  useEffect(() => {
    const id = setInterval(
      () => setLeftSecs((s) => Math.max(0, s - 1)),
      1_000,
    )
    return () => clearInterval(id)
  }, [])

  const days =  String(Math.floor(leftSecs / 86_400)).padStart(2, '0')
  const hrs  =  String(Math.floor((leftSecs % 86_400) / 3_600)).padStart(2, '0')
  const mins =  String(Math.floor((leftSecs % 3_600) / 60)).padStart(2, '0')
  const secs =  String(leftSecs % 60).padStart(2, '0')

 
  const digitCls =
    'font-pixel font-bold uppercase text-[#E9731D]' +
    ' [text-shadow:-4px_5px_0_#CF3912]' +
    ' text-[clamp(42px,12vw,96px)]   sm:text-[clamp(36px,9vw,88px)] lg:text-[80px]'

  const labelCls =
    'font-pixel font-bold uppercase text-white' +
    ' text-[clamp(13px,3.8vw,24px)]  sm:text-[clamp(12px,3vw,22px)] lg:text-[32px]'

  const colonCls =
    'font-pixel font-bold text-white' +
    ' [text-shadow:-4px_5px_0_#CF3912]' +
    ' text-[clamp(42px,12vw,96px)]   sm:text-[clamp(36px,9vw,88px)] lg:text-[80px]'

  const Block = ({ v, lbl }: { v: string; lbl: string }) => (
    <div className="flex flex-col items-center w-[17vw] sm:w-[12vw] md:w-[8vw] max-w-[98px]">
      <span className={digitCls}>{v}</span>
      <span className={labelCls}>{lbl}</span>
    </div>
  )

  /* ———————————————————————————————————————— */
  /*  Render                                                             */
  /* ———————————————————————————————————————— */
  return (
    <section id="hero" className="relative w-full h-screen overflow-hidden snap-start">
      {/* BG */}
      <Image
        src="/images/Untitled-1_1.png"
        alt="Templars BG"
        fill
        priority
        className="object-cover select-none pointer-events-none -z-10"
      />

      {/* header count */}
                  <div
          className="
            absolute inset-x-0
            top-[42%]        /* mobile: slightly below natural centre */
            sm:top-[40%]     /* tablet  */
            lg:top-[36%]     /* desktop */
            -translate-y-1/2 /* keep self‑centred on that anchor      */
            flex flex-col items-center px-4 text-center
          ">   
           <h1
          className="
            font-pixel uppercase text-white leading-tight
            text-[clamp(32px,9vw,96px)] sm:text-[64px] lg:text-[72px]
            [text-shadow:-4px_5px_0_#CF3912]
          "
        >
          Tempered&nbsp;by&nbsp;Fire <br /> Bound&nbsp;by&nbsp;Oath
        </h1>
        
        <p className="mt-5 font-pixel uppercase text-white text-[clamp(12px,4vw,24px)] sm:text-xl lg:text-[32px]">
          We serve no king, only the flame beneath.
        </p>

        <div className="mt-4 flex items-start gap-[2vw] sm:gap-[3vw] lg:gap-6">
          <Block v={days}  lbl="Day"     />
          <span className={colonCls}>:</span>
          <Block v={hrs}   lbl="Hours"   />
          <span className={colonCls}>:</span>
          <Block v={mins}  lbl="Minutes" />
          <span className={colonCls}>:</span>
          <Block v={secs}  lbl="Seconds" />
        </div>

      </div>

     {/* characters ---------------------------------------------------- */}
<div
  className="
    absolute bottom-[0vh] inset-x-0
    flex justify-center items-end gap-[6vw] sm:gap-[5vw] lg:gap-12
  "
>
  {/* left --------------------------------------------------------- */}
  <div
    className="
      flex items-end
      -space-x-[4vw] sm:-space-x-[3vw] lg:-space-x-8
      lg:-translate-x-4                /*  =  -16 px sola */
    "
  >
    {left.map((src, i) => (
      <div
        key={i}
        className="
          relative aspect-square
          w-[26vw]     sm:w-[18vw]     lg:w-[16vw]   
          max-w-[150px] sm:max-w-[170px] lg:max-w-[200px]
        "
      >
        <Image src={encodeURI(src)} alt={`left-${i}`} fill priority className="object-contain"/>
      </div>
    ))}
  </div>

  {/* right --------------------------------------------------------- */}
  <div
    className="
      flex items-end
      -space-x-[4vw] sm:-space-x-[3vw] lg:-space-x-8
      lg:translate-x-4                
    "
  >
    {right.map((src, i) => (
      <div
        key={i}
        className="
          relative aspect-square
          w-[26vw]     sm:w-[18vw]     lg:w-[16vw]
          max-w-[150px] sm:max-w-[170px] lg:max-w-[200px]
        "
      >
        <Image src={encodeURI(src)} alt={`right-${i}`} fill priority className="object-contain"/>
      </div>
    ))}
  </div>
</div>
<div
  aria-hidden
  className="
    pointer-events-none select-none
    absolute inset-x-0 bottom-0   
    h-[10px]                     
    bg-gradient-to-t from-[#01020E] to-transparent
  "
/>
    </section>
  )
}
