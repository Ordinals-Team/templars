// components/Roadmap.tsx
"use client";

import React, { FC } from "react";
import Image from "next/image";
import styles from "./roadmap.module.css";

interface Step {
  id: string;
  imgSrc: string;
  text: string;
}

interface ParsedText {
  title: string;
  subtitle: string;
}

export const Roadmap: FC = () => {
  const steps: Step[] = [
    {
      id: "01",
      imgSrc: "/images/Layer-5.png",
      text: "Launch & Mint (3,333 Punkameleons enter the jungle. Early support gets early perks.)",
    },
    {
      id: "02",
      imgSrc: "/images/Layer-8.png",
      text: "Ordinal Locking System (Secure your Punks, unlock advanced utility.)",
    },
    {
      id: "03",
      imgSrc: "/images/Layer-9.png",
      text: "BRC-2.0 Airdrop (Claim your $CHAMEL tokens. Holders get rewarded for surviving the wild)",
    },
  ];

  const parseText = (txt: string): ParsedText => {
    const m = txt.match(/^(.+?)\s*\((.+)\)$/);
    return m
      ? { title: m[1].trim(), subtitle: m[2].trim() }
      : { title: txt, subtitle: "" };
  };

  return (
    <section id="roadmap" className={styles.roadmap}>
      <div className={styles.bgWrapper}>
        <Image
          src="/images/group-1.png"
          alt="Roadmap Background"
          fill
          className={styles.bgImage}
          priority
        />
      </div>

      <div className={styles.accentLeft} />
      <div className={styles.accentRight} />

      <div className={styles.content}>
        <h2 className={styles.title}>ROADMAP</h2>
        <p className={styles.subtitle}>
          Shifting shapes. Breaking molds. One block at a time.
        </p>

        <div className={styles.steps}>
          {steps.map((step) => {
            const { title, subtitle } = parseText(step.text);
            return (
              <div key={step.id} className={styles.step}>
                <span className={styles.stepId}>{step.id}</span>
                <div className={styles.stepImage}>
                  <Image
                    src={step.imgSrc}
                    alt={`Step ${step.id}`}
                    width={200}
                    height={50}
                    className={styles.stepImg}
                  />
                </div>
                <p className={styles.stepTitle}>{title}</p>
                {subtitle && (
                  <p className={styles.stepSubtitle}>{subtitle}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};