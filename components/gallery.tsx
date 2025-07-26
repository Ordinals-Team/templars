// components/Gallery.tsx
'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Keyboard, A11y } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './gallery.module.css';

export function Gallery() {
  const images = [
    '/images/204.png',
    '/images/205.png',
    '/images/206.png',
    '/images/348.png',
    '/images/349.png',
    '/images/350.png',
    '/images/351.png',
    '/images/352.png',
    '/images/353.png',
    '/images/354.png',
    '/images/355.png',
    '/images/356.png',
    '/images/489.png',
    '/images/490.png',
    '/images/491.png',
    '/images/492.png',
    '/images/493.png',
    '/images/494.png',
    '/images/496.png',
    '/images/497.png',
    '/images/498.png',
  ];

  return (
    <section id="gallery" className={styles.gallery}>
      {/* Background */}
      <div className={styles.bg}>
        <Image src="/images/bg-g-1.png" alt="" fill priority />
      </div>

      {/* Header */}
      <header className={styles.head}>
        <h2 className={styles.title}>GALLERY</h2>
        <p className={styles.subtitle}>
          Meet the Punks. So rare, even we forget what we made.
        </p>
      </header>

      {/* Slider */}
      <div className={styles.sliderContainer}>
        <Swiper
          modules={[Navigation, Pagination, Autoplay, Keyboard, A11y]}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          keyboard={{ enabled: true }}
          a11y={{
            prevSlideMessage: 'prev',
            nextSlideMessage: 'next'
          }}
          spaceBetween={16}
          breakpoints={{
            0: { slidesPerView: 1 },
            600: { slidesPerView: 2 },
            900: { slidesPerView: 4 }
          }}
        >
          {images.map((src, idx) => (
            <SwiperSlide key={idx} className={styles.slide}>
              <Image
                src={src}
                alt={`Slide ${idx + 1}`}
                fill
                style={{ objectFit: 'cover' }}
                placeholder="blur"
                blurDataURL="/images/placeholder.png"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}