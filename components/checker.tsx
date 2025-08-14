"use client";

// import React, { useState } from "react";
import Image from "next/image";
// import { checkWl } from "@/service/checkWl";

export default function CheckerSection() {
  // const [address, setAddress] = useState("");
  // const [loading, setLoading] = useState(false);
  // const [result, setResult] = useState<{
  //   ok: boolean;
  //   wlType?: string;
  //   msg: string;
  // } | null>(null);

  // const handleCheck = async () => {
  //   setLoading(true);
  //   const res = await checkWl(address.trim());
  //   if (res.success && res.data?.wlType && res.data.wlType !== "none") {
  //     setResult({ ok: true, wlType: res.data.wlType, msg: "Congrats — you’re whitelisted!" });
  //   } else if (res.success) {
  //     setResult({ ok: false, msg: "Sorry, this address is not on the whitelist." });
  //   } else {
  //     setResult({ ok: false, msg: res.error || "Query failed." });
  //   }
  //   setLoading(false);
  // };

  // const shareOnX = () => {
  //   const text = encodeURIComponent(
  //     `I just checked my whitelist status for @templarsbtc launch. 🚀

  // I'm on the whitelist!

  // https://x.com/templarsbtc`
  //   );
  //   window.open(`https://x.com/intent/tweet?text=${text}`, "_blank");
  // };

  return (
     <section id="checker" className="relative w-full bg-[#01020E] pt-80 pb-52 overflow-hidden">
      {/* full‑bleed background + gradient */}
      <div className="absolute inset-0">
        <Image
          src="/images/ChatGPT Image 21 Tem 2025 13_19_47.png"
          alt="Checker background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#01020E]/20" />
      </div>

      {/* content wrapper (pulled up a bit) */}
      <div className="relative z-10 flex flex-col items-center -mt-20">
        {/* Title */}
        <h2
          className="uppercase font-pixel text-[4rem] md:text-[70px] text-[#E9731D] text-center mb-4"
          style={{ textShadow: "-4px 5px 0px #801D00" }}
        >
          WL Checker
        </h2>

        {/* Form container: input above button */}
        <div className="flex flex-col items-center w-full max-w-[622px] px-4">
          {/* Input (COMING SOON) */}
          <input
            type="text"
            placeholder="COMING SOON"
            disabled
            className="w-full h-[61px]
                       bg-[rgba(233,115,29,0.1)] backdrop-blur-[2.75px]
                       rounded-lg border border-transparent
                       uppercase text-white text-[24px] leading-[29px]
                       text-center placeholder-white opacity-50 cursor-not-allowed"
          />
          {/* gap between input and button */}
          <div className="h-8" />
          {/* Button */}
          <button
            disabled
            className="w-[224px] h-[43px]
                       bg-[#E9731D] backdrop-blur-[2.75px]
                       rounded-lg uppercase font-pixel text-[16px] leading-[19px]
                       text-white opacity-50 cursor-not-allowed"
          >
            Check
          </button>
        </div>
      </div>

      {/*
      // 4) Modal
      {result && (
        <div
          onClick={() => setResult(null)}
          className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-20"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#f3e5ae] p-8 rounded-xl max-w-sm w-11/12 text-center shadow-lg"
          >
            <h3 className="font-pixel text-2xl mb-4">
              {result.ok ? "Congrats!" : "Oops!"}
            </h3>
            <p className="mb-6">{result.msg}</p>
            <div className="flex justify-center gap-4">
              {result.ok && (
                <button
                  onClick={shareOnX}
                  className="font-pixel uppercase px-4 py-2 bg-black text-white rounded"
                >
                  Share on X
                </button>
              )}
              <button
                onClick={() => setResult(null)}
                className="font-pixel uppercase px-4 py-2 border border-black rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      */}
      <div
  aria-hidden
  className="
    pointer-events-none select-none
    absolute inset-x-0 bottom-0   
    h-[20px]                    
    bg-gradient-to-t from-[#01020E] to-transparent
  "
/>
    </section>
  );
}
