"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
const LETTERS = ["T","E","M","P","L","A","R","S"];
const LAYERS = [
  "bg-[#2C2930]",
  "bg-[#323232]",
  "bg-[#181818]",
  "bg-clip-text text-transparent bg-[linear-gradient(0deg,#FFD727_-3.46%,#F16B04_100.17%)]",
  "bg-[#F9CB82]",
  "bg-clip-text text-transparent bg-[linear-gradient(0deg,#F16B04_-3.68%,#FFD727_100.18%)]",
];
export function MainNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);
  const goHome = () => {
    setOpen(false);
    window.scrollTo(0, 0);
  };
  return (
    <div className="relative w-full">
      {/* NAV BAR */}
      <div
        className={`
          fixed inset-x-0 top-0 z-40
          flex items-center justify-between
          px-4 lg:px-[144px] h-[96px]
          transition-colors duration-300 ease-out
          ${scrolled ? "bg-black" : "bg-transparent"}
        `}
      >
        {/* LOGO */}
        <Link href="/" onClick={goHome} aria-label="Go to homepage" className="relative w-[96px] h-[60px] flex-none">
          <Image
            src="/images/Asset__20.png"
            alt="Templars Logo"
            width={96}
            height={60}
            className="absolute inset-0 object-contain"
            priority
          />
          {LAYERS.map((layer, i) => (
            <div
              key={i}
              className={`
                absolute left-0 top-[23px] w-[95px] h-[20px] flex
                bg-clip-text text-transparent ${layer}
              `}
              style={{ zIndex: i + 1 }}
            >
              {LETTERS.map((ltr, j) => (
                <span
                  key={j}
                  className="flex-1 text-[14px] font-bold uppercase flex items-center justify-center"
                >
                  {ltr}
                </span>
              ))}
            </div>
          ))}
        </Link>
        {/* RIGHT SIDE */}
        <div className="flex items-center gap-6">
          {/* Social */}
          <a
            href="https://x.com/templarsbtc"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
            className="transition-transform hover:scale-105"
          >
            <Image
              src="/images/fi_5968958.png"
              alt="X"
              width={24}
              height={24}
              className="invert-[.7] sepia-[1] hue-rotate-[179deg] brightness-[1.1]"
              priority
            />
          </a>
          {/* Desktop button */}
          <button
            onClick={() => setAlertOpen(true)}
            className="hidden lg:flex items-center justify-center w-[139px] h-[39px] bg-gradient-to-r from-[#F16B04] to-[#FFD727] text-white font-bold uppercase text-sm tracking-wider rounded-md shadow-lg"
          >
            $KNIGHT
          </button>
          {/* Mobile burger */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="lg:hidden relative w-[32px] h-[32px] p-1 rounded-md bg-[#0D1B2A] hover:bg-[#1B324A] transition"
          >
            <span
              className={`block absolute left-1 top-1 w-6 h-[3px] bg-[#FFA500] transition-transform ${
                open ? "translate-y-[10px] rotate-45" : ""
              }`}
            />
            <span
              className={`block absolute left-1 top-[13px] w-6 h-[3px] bg-[#FFA500] transition-opacity ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block absolute left-1 top-[25px] w-6 h-[3px] bg-[#FFA500] transition-transform ${
                open ? "-translate-y-[10px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>
      {/* MOBILE DRAWER:TEMPLARS amd X link */}
      {open && (
        <aside className="fixed top-0 right-0 h-full w-3/4 max-w-xs bg-[#0D1B2A] shadow-xl z-50">
          <div className="flex justify-end p-4">
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="text-[#FFD727] text-2xl leading-none"
            >
              &times;
            </button>
          </div>
          <div className="flex flex-col items-center p-6 space-y-4">
            <button
              onClick={() => { setAlertOpen(true); setOpen(false); }}
              className="w-full py-3 bg-gradient-to-r from-[#F16B04] to-[#FFD727] text-black font-bold uppercase rounded-md"
            >
              $KNIGHT
            </button>
            <a
              href="https://x.com/templarsbtc"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              className="text-[#FFD727] text-lg font-semibold"
            >
              X
            </a>
          </div>
        </aside>
      )}
{/* COMING SOON MODAL (gradient frame + dark body) */}
{alertOpen && (
  <div className="fixed inset-0 z-60 grid place-items-center bg-black/80 p-6">
    <div className="relative w-full max-w-[420px] rounded-2xl p-[1px]
                    bg-gradient-to-r from-[#F16B04] to-[#FFD727] shadow-2xl">
      {/* card body */}
      <div className="relative rounded-2xl bg-[#0D1B2A] text-white">
        {/* soft glow */}
        <div className="pointer-events-none absolute inset-0 opacity-30
                        bg-[radial-gradient(80%_60%_at_50%_-20%,#F16B04_0%,transparent_60%)]" />
        <div className="relative p-8 text-center">
          <h2 className="font-pixel uppercase text-[#FFD727] text-3xl sm:text-4xl mb-4
                         [text-shadow:-3px_4px_0_#801D00]">
            Coming Soon
          </h2>
          <button
            onClick={() => setAlertOpen(false)}
            className="mt-2 px-8 py-3 rounded-md font-pixel uppercase
                       border border-white/20 text-[#FFD727]
                       bg-black/30 hover:bg-black/50 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
)}
    </div>
  );
}