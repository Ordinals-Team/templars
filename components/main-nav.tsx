'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const LETTERS = ['T', 'E', 'M', 'P', 'L', 'A', 'R', 'S'];

// Layer backgrounds: 3 solids, 1 gold→orange, 1 pale, 1 orange→gold
const LAYERS = [
  'bg-[#2C2930]',
  'bg-[#323232]',
  'bg-[#181818]',
  'bg-[length:100%_100%] bg-[center] bg-clip-text text-transparent bg-[linear-gradient(0deg,#FFD727_-3.46%,#F16B04_100.17%)]',
  'bg-[#F9CB82]',
  'bg-[length:100%_100%] bg-[center] bg-clip-text text-transparent bg-[linear-gradient(0deg,#F16B04_-3.68%,#FFD727_100.18%)]',
];

export function MainNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
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
          ${scrolled ? 'bg-black' : 'bg-transparent'}
        `}
      >
        {/* LOGO */}
        <Link
          href="/"
          onClick={goHome}
          aria-label="Go to homepage"
          className="relative w-[96px] h-[60px] flex-none transition-transform duration-300 hover:-translate-y-1 hover:scale-105"
        >
          {/* Base PNG */}
          <Image
            src="/images/Asset__20.png"
            alt="Templars Logo"
            width={96}
            height={60}
            className="absolute inset-0 object-contain"
            priority
          />

          {/* Stacked letter layers */}
          {LAYERS.map((layer, i) => (
            <div
              key={i}
              className={`
                absolute left-0 top-[23px] w-[95px] h-[20px] flex
                bg-clip-text text-transparent
                ${layer}
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
        <div className="flex items-center gap-10">
          {/* Social */}
          <a
            href="https://x.com/templarsbtc"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="transition-transform hover:scale-105 hover:opacity-80"
          >
            <Image
              src="/images/fi_5968958.png"
              alt="X"
              width={24}
              height={24}
              priority
            />
          </a>

          {/* Desktop button */}
          <button
            onClick={() => setAlertOpen(true)}
            aria-label="Templars"
            className="
              hidden lg:flex items-center justify-center
              w-[139px] h-[39px]
              bg-[#E9731D] text-[#100A0A]
              font-bold uppercase text-sm tracking-wider
              rounded-md shadow-md
              transition-transform hover:scale-105 hover:opacity-90
            "
          >
            TEMPLARS
          </button>

          {/* Mobile burger */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="
              lg:hidden flex flex-col justify-between items-center
              w-[32px] h-[24px] p-1 rounded-[4px]
              transition-colors transition-transform
              hover:bg-white/10 hover:scale-105
            "
          >
            <span
              className={`
                block w-full h-[3px] bg-white transition-transform duration-300
                ${open ? 'translate-y-[9px] rotate-45' : ''}
              `}
            />
            <span
              className={`
                block w-full h-[3px] bg-white transition-opacity duration-300
                ${open ? 'opacity-0' : 'opacity-100'}
              `}
            />
            <span
              className={`
                block w-full h-[3px] bg-white transition-transform duration-300
                ${open ? '-translate-y-[9px] -rotate-45' : ''}
              `}
            />
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <nav className="fixed inset-0 top-[96px] z-30 flex flex-col items-center gap-6 p-6 bg-black">
          <a
            href="https://x.com/punkameleonbtc"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="transition-transform hover:scale-105 hover:opacity-80"
          >
            <Image
              src="/images/fi_5968958.png"
              alt="X"
              width={24}
              height={24}
              priority
            />
          </a>
          <button
            onClick={() => setAlertOpen(true)}
            aria-label="Templars"
            className="
              flex items-center justify-center
              w-[139px] h-[39px]
              bg-[#E9731D] text-[#100A0A]
              font-bold uppercase text-sm tracking-wider
              rounded-md shadow-md
              transition-transform hover:scale-105 hover:opacity-90
            "
          >
            TEMPLARS
          </button>
        </nav>
      )}

      {/* COMING SOON MODAL */}
      {alertOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6">
          <div className="bg-[#F3E5AE] text-[#100A0A] p-8 rounded-xl shadow-xl max-w-md w-full text-center">
            <h2 className="font-bold text-3xl md:text-4xl mb-4">Coming Soon</h2>
            <button
              onClick={() => setAlertOpen(false)}
              className="mt-4 px-8 py-3 bg-[#100A0A] text-[#F3E5AE] rounded-md hover:opacity-90 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
