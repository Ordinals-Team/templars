// app/page.tsx
"use client";

import HeroSection from "@/components/hero";
import CheckerSection from "@/components/checker";
export default function Page() {
  return (
    <>
      <HeroSection />
      <CheckerSection />
      {/* 
        İleride sırasıyla şu şekilde diğer bölümleri ekleyebilirsin:
        <AboutSection />
        <GallerySection />
        
      
      */}
     
    </>
  );
}
