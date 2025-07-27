// components/AboutSection.tsx
"use client";

import { useEffect, useRef, useState } from "react";

const copyBlocks = [
  `Long ago, before the kingdoms of men rose and fell, the goblins were nothing more than
  cunning traders and wild tinkerers until the Temple of the Buried Flame was uncovered
  deep beneath the Scorched Crater. In its heart pulsed a forgotten relic: the Ember Core,
  an ancient fragment of the First Fire said to grant visions of the past and future.`,
    ``,
  `Touched by its power, a secret order formed goblins transformed into something greater:
  Templars. They forged armor not for war, but for guardianship, swearing eternal oath to
  the flame’s silence.`,
  
  `But power whispers.`,
  ``,
  `Now, as empires rise and dark omens stir in the,
  north, the flame trembles and the Templars return to the surface. Clad in relic‑forged,
  steel, silent and eternal, they seek the one who dares to awaken the fire.`,
  ``,
  `Are they protectors of balance?`,
  ``,
  `Or keepers of something best forgotten?`,
];

export default function AboutSection() {
  const refs = useRef<Array<HTMLDivElement | null>>([]);
  const [visible, setVisible] = useState<boolean[]>(
    copyBlocks.map(() => false)
  );

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          const idx = Number(e.target.getAttribute("data-idx"));
          if (e.isIntersecting && idx >= 0) {
            setVisible((v) => {
              if (v[idx]) return v;
              const next = [...v];
              next[idx] = true;
              return next;
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    refs.current.forEach((el) => {
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="about"
      className="relative w-full bg-[#01020E] py-20 overflow-hidden"
    >
      <div className="mx-auto flex max-w-[937px] flex-col items-center gap-[33px] px-4">
        <h2
          className="uppercase font-pixel text-[48px] leading-[58px] text-center text-[#E9731D] transition-opacity duration-700 opacity-100"
          style={{ textShadow: "-4px 5px 0px #801D00" }}
        >
          THE ORDER OF THE BURIED FLAME
        </h2>

        {copyBlocks.map((text, idx) => (
           <div
         key={idx}
         ref={el => {
          refs.current[idx] = el
        }}
            data-idx={idx}
            className={`
              uppercase font-pixel text-[20px] leading-[29px] text-center
              transition-opacity duration-700
              ${visible[idx] ? "opacity-100 text-white" : "opacity-40 text-white"}
            `}
          >
            {text}
          </div>
        ))}
      </div>
    </section>
  );
}
