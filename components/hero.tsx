// components/HeroSection.tsx
"use client";

import Image from "next/image";
import React from "react";

export default function HeroSection() {
  const leftChars = [
    "/images/WhatsApp Image 2025-07-21 at 12.00.43.png",
    "/images/WhatsApp Image 2025-07-21 at 12.00.43 (1).png",
    "/images/WhatsApp Image 2025-07-21 at 12.00.39.png",
  ];
  const rightChars = [
    "/images/WhatsApp Image 2025-07-21 at 12.00.37.png",
    "/images/WhatsApp Image 2025-07-21 at 12.00.44 (1).png",
    "/images/WhatsApp Image 2025-07-21 at 12.00.57.png",
  ];

  return (
    <section
      id="hero"
      className="relative w-full h-screen overflow-hidden snap-start"
    >
      {/* BG */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/Untitled-1_1.png"
          alt="Templars Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Başlık */}
      <div className="absolute inset-x-0 top-1/3 md:top-[20%] flex flex-col items-center px-4 text-center">
        <h1
          className="font-pixel uppercase text-white 
                     text-[8vw] sm:text-[6rem] md:text-[70px] 
                     leading-tight"
          style={{ textShadow: "-4px 5px 0px #CF3912" }}
        >
          Tempered by Fire
          <br />
          Bound by Oath
        </h1>
        <p className="font-pixel uppercase text-white 
                      text-[4vw] sm:text-xl md:text-[32px] mt-2">
          We serve no king, only the flame beneath.
        </p>
      </div>

    
      <div className="absolute bottom-0 inset-x-0 flex justify-center items-end space-x-12">
        
        <div className="flex items-end space-x-[-0.5rem]">
          {leftChars.map((src, i) => (
            <div
              key={i}
              className="relative w-[15vw] max-w-[109px] md:w-[10vw] md:max-w-[136px]"
            >
              <Image
                src={src}
                alt={`Chameleon L${i}`}
                width={200}
                height={200}
                className="object-contain"
                priority
              />
            </div>
          ))}
        </div>

        {/* Sağ grup: sol grupla simetrik oran, birbirine biraz yakın */}
        <div className="flex items-end space-x-[-0.5rem]">
          {rightChars.map((src, i) => (
            <div
              key={i}
              className="relative w-[15vw] max-w-[109px] md:w-[10vw] md:max-w-[136px]"
            >
              <Image
                src={src}
                alt={`Chameleon R${i}`}
                width={200}
                height={200}
                className="object-contain"
                priority
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
