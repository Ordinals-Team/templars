"use client";

import Image from "next/image";
import { useState } from "react";
import { checkWl } from "@/service/checkWl";

type Result = { ok: boolean; msg: string };

export default function CheckerSection() {
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<Result | null>(null);

  const handleCheck = async () => {
    const addr = address.trim();
    if (!addr) {
      setResult({ ok: false, msg: "Please enter an address." });
      return;
    }

    setLoading(true);
    try {
      const res = await checkWl(addr);

      // wlType KULLANMADAN karar ver: doc varsa "whitelisted" say
      const isWhitelisted = !!(res?.success && res.data);

      if (isWhitelisted) {
        setResult({ ok: true, msg: "See you at launch!" });
      } else if (res?.success) {
        setResult({ ok: false, msg: "Not whitelisted (for now)." });
      } else {
        setResult({
          ok: false,
          msg: res?.error || "Query failed. Please try again.",
        });
      }
    } catch {
      setResult({ ok: false, msg: "Could not check right now. Try again." });
    } finally {
      setLoading(false);
    }
  };

  const onKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") handleCheck();
  };

  const shareOnX = () => {
    const text = encodeURIComponent(
      `Checked my whitelist for @templarsbtc — I'm in! ⚔️🔥

https://x.com/templarsbtc`
    );
    window.open(`https://x.com/intent/tweet?text=${text}`, "_blank");
  };

  return (
    <section
      id="checker"
      className="relative w-full bg-[#01020E] pt-80 pb-52 overflow-hidden"
    >
      {/* full-bleed background + soft overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/ChatGPT Image 21 Tem 2025 13_19_47.png"
          alt="Checker background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* content */}
      <div className="relative z-10 flex flex-col items-center -mt-20">
        <h2
          className="uppercase font-pixel text-[4rem] md:text-[70px] text-[#E9731D] text-center mb-6"
          style={{ textShadow: "-4px 5px 0px #801D00" }}
        >
          WL Checker
        </h2>

        {/* Form */}
        <div className="flex flex-col items-center w-full max-w-[622px] px-4">
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            onKeyDown={onKeyDown}
            placeholder="Enter address"
            className="
              w-full h-[61px]
              bg-[rgba(233,115,29,0.1)] backdrop-blur-[2.75px]
              rounded-lg border border-transparent
              uppercase text-white text-[20px] sm:text-[24px] leading-[29px]
              text-center placeholder-white/70
              focus:outline-none focus:ring-2 focus:ring-[#E9731D]/60
            "
          />

          <div className="h-8" />

          <button
            onClick={handleCheck}
            disabled={loading}
            className="
              w-[224px] h-[43px]
              bg-[#E9731D] backdrop-blur-[2.75px]
              rounded-lg uppercase font-pixel text-[16px] leading-[19px]
              text-white
              hover:opacity-90 active:scale-[0.99]
              disabled:opacity-50 disabled:cursor-not-allowed
              transition
            "
          >
            {loading ? "Checking..." : "Check"}
          </button>
        </div>
      </div>

      
      {result && (
        <div
          onClick={() => setResult(null)}
          className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-[420px] rounded-2xl p-[1px]
                       bg-gradient-to-r from-[#F16B04] to-[#FFD727] shadow-2xl"
          >
            <div className="relative rounded-2xl bg-[#0D1B2A] text-white">
              <div className="pointer-events-none absolute inset-0 opacity-30
                              bg-[radial-gradient(80%_60%_at_50%_-20%,#F16B04_0%,transparent_60%)]" />

              <div className="relative p-6 sm:p-8 text-center">
                <h3
                  className="font-pixel uppercase tracking-wide mb-2
                             text-[26px] sm:text-[32px] text-[#FFD727]
                             [text-shadow:-3px_4px_0_#801D00]"
                >
                  {result.ok ? "You're on the list!" : "Not this time"}
                </h3>

                <p className="mb-6 text-white/90">{result.msg}</p>

                <div className="flex justify-center gap-3">
                  {result.ok && (
                    <button
                      onClick={shareOnX}
                      className="px-4 py-2 rounded-md font-pixel uppercase
                                 bg-gradient-to-r from-[#F16B04] to-[#FFD727]
                                 text-[#100A0A] hover:brightness-110 transition"
                    >
                      Share on X
                    </button>
                  )}
                  <button
                    onClick={() => setResult(null)}
                    className="px-4 py-2 rounded-md font-pixel uppercase
                               border border-white/20 text-[#FFD727]
                               bg-black/30 hover:bg-black/50 transition"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* soft fade bottom */}
      <div
        aria-hidden
        className="pointer-events-none select-none absolute inset-x-0 bottom-0 h-[20px]
                   bg-gradient-to-t from-[#01020E] to-transparent"
      />
    </section>
  );
}