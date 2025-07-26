// components/Faqs.tsx
"use client";

import { useState } from "react";

const faqItems = [
  { id: 1, q: "How much is total supply?", a: "3,333" },
  { id: 2, q: "When minting?", a: "July 23, 2025" },
  { id: 3, q: "Which Launchpad?", a: "Ordinal Genesis" },
  {
    id: 4,
    q: "What is $CHAMEL & how do I get it?",
    a: "$CHAMEL is the official BRC-2.0 token of the Punkameleons ecosystem. It will be airdropped to holders post-mint. Hodl strong.",
  },
  {
    id: 5,
    q: "Is there utility beyond art?",
    a: "Yes. We're cooking staking, trait mutation mechanics, dynamic upgrades, and more. Punkameleons don’t just flex, they evolve.",
  },
  { id: 6, q: "Are all spots FCFS?", a: "There will be GTD phase" },
];

export default function Faqs() {
  const [openId, setOpenId] = useState<number | null>(null);
  const toggle = (id: number) => setOpenId(openId === id ? null : id);

  return (
    <section
      id="faqs"
      className="
        relative mx-auto
        mt-12 sm:mt-16 md:mt-20 lg:mt-[100px]
        w-full max-w-[1440px]
        px-4 sm:px-8 md:px-12 lg:px-[144px]
        flex flex-col items-center
        gap-4 sm:gap-6 md:gap-8 lg:gap-[16px]
        overflow-visible
        mb-12
      "
    >
      <h2
        className="
          w-full max-w-[1152px]
          text-3xl sm:text-4xl md:text-5xl lg:text-[75.96px]
          leading-tight lg:leading-[72px]
          text-center uppercase font-after-punk text-[#DB451D]
        "
      >
        FAQS
      </h2>

      <div
        className="
          w-full max-w-[1152px]
          flex flex-col gap-2 sm:gap-[10px]
          overflow-visible
        "
      >
        {faqItems.map((item) => {
          const isOpen = openId === item.id;
          return (
            <div key={item.id} className="w-full">
              <button
                onClick={() => toggle(item.id)}
                className="
                  w-full flex items-center
                  px-4 sm:px-6 lg:px-[16px]
                  py-3 sm:py-[12px]
                  gap-2 sm:gap-[10px]
                  bg-[rgba(243,229,174,0.1)] rounded-[4px]
                  text-base sm:text-xl md:text-2xl lg:text-[32px]
                  leading-tight lg:leading-[30px]
                  font-after-punk text-[#F3E5AE]
                "
              >
                {item.q}
                <span className="ml-auto">
                  {isOpen ? "–" : "+"}
                </span>
              </button>

              {isOpen && (
                <div
                  className="
                    mt-2 sm:mt-[10px] mx-auto flex flex-col items-start
                    px-6 sm:px-[16px] py-4 sm:py-[12px]
                    gap-4 sm:gap-[24px]
                    w-full max-w-[1152px]
                    bg-[#F3E5AE] rounded-[4px]
                    overflow-visible
                  "
                >
                  <p
                    className="
                      text-base sm:text-lg md:text-xl lg:text-[24px]
                      leading-tight lg:leading-[23px]
                      text-start font-after-punk text-[#100A0A]
                      w-full max-w-[1040px]
                    "
                  >
                    {item.a}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}