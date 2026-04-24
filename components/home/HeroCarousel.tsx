"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface HeroSlide {
  title: string;
  description: string;
  image: string;
  ctaLabel: string;
  ctaHref: string;
  isNew?: boolean;
  newLabel?: string;
}

const AUTO_SLIDE_MS = 6000;

const slides: HeroSlide[] = [
  {
    title: "Hany ElAraby & C",
    description:
      "HANY ELARABY is an Egyptian independent firm established in 2005 of chartered and certified accountants and registered auditors. We provide audit, accounting, tax, and financial advisory services to a wide range of enterprises and companies across many industries.",
    image: "/images/hero.png",
    ctaLabel: "Explore Our Services",
    ctaHref: "#services",
  },
  {
    title: "Capital Markets",
    description:
      "Navigate market volatility with confidence through disciplined capital strategy, institutional risk control, and data-backed investment advisory for listed and growth-stage businesses.",
    image: "/images/capital-markets.png",
    ctaLabel: "Explore Capital Markets",
    ctaHref: "#insights",
    isNew: true,
    newLabel: "New in HELCO",
  },
  {
    title: "Our Services",
    description:
      "From audit and accounting to tax and financial advisory, we provide integrated services tailored to each client's structure, industry, and growth stage.",
    image: "/images/our-services.png",
    ctaLabel: "Explore Our Services",
    ctaHref: "#about",
  },
    {
    title: "Our Team",
    description:
      "Our multidisciplinary team combines deep technical expertise with practical business understanding to deliver reliable audit, accounting, tax, and advisory outcomes.",
    image: "/images/our-team.png",
    ctaLabel: "Meet Our Team",
    ctaHref: "#about",
  },
];

export function HeroCarousel() {
  const isDev = process.env.NODE_ENV !== "production";
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) {
      return;
    }

    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, AUTO_SLIDE_MS);

    return () => clearInterval(timer);
  }, [isPaused]);

  const goPrev = () => {
    setActiveIndex((current) => (current - 1 + slides.length) % slides.length);
  };

  const goNext = () => {
    setActiveIndex((current) => (current + 1) % slides.length);
  };

  return (
    <section className="relative min-h-[calc(100svh-5rem)] w-full overflow-hidden">
      {slides.map((slide, index) => {
        const isActive = index === activeIndex;

        return (
          <div key={slide.title} className="absolute inset-0">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={index === 0}
              loading={index === 0 ? "eager" : "lazy"}
              unoptimized={isDev}
              sizes="100vw"
              className={`object-cover transition-opacity duration-700 ${
                isActive ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
        );
      })}

      <div className="absolute inset-0 bg-gradient-to-r from-[#0f1419]/95 via-[#0f1419]/75 to-[#0f1419]/30" />

      <div className="relative z-10 flex min-h-[calc(100svh-5rem)] items-center sm:items-end lg:items-center px-4 pb-32 pt-12 sm:px-8 sm:pb-24 lg:px-14 xl:px-20 2xl:px-24">
        <div className="max-w-3xl space-y-4 sm:space-y-6">
          <span className="inline-flex items-center gap-2 sm:gap-3 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#e1c19a]">
            <span className="h-px w-6 sm:w-8 bg-[#e1c19a]" />
            Institutional Advisory
          </span>

          <h1 className="text-3xl font-extrabold leading-tight text-[#dee3ea] sm:text-4xl md:text-5xl lg:text-6xl">
            {slides[activeIndex].title}
          </h1>

          {slides[activeIndex].isNew ? (
            <div className="inline-flex w-fit items-center gap-1.5 sm:gap-2 rounded-full border border-[#a88c68] bg-[#a88c68]/10 px-2.5 py-1 sm:px-3 sm:py-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.12em] text-[#e1c19a]">
              <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-[#e1c19a]" />
              {slides[activeIndex].newLabel}
            </div>
          ) : null}

          <p className="max-w-2xl text-sm leading-relaxed text-[#d1c4b8] sm:text-base md:text-lg md:leading-8">
            {slides[activeIndex].description}
          </p>

          <div className="pt-2 sm:pt-4">
            <a
              href={slides[activeIndex].ctaHref}
              className="inline-flex rounded-md bg-[#a88c68] px-5 py-2.5 sm:px-6 sm:py-3 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.1em] text-[#39260a] transition hover:bg-[#e1c19a]"
            >
              {slides[activeIndex].ctaLabel}
            </a>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-4 bottom-6 sm:bottom-8 sm:inset-x-8 lg:inset-x-14 xl:inset-x-20 2xl:inset-x-24 z-20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-1.5 sm:gap-2 order-2 sm:order-1">
          {slides.map((slide, index) => (
            <button
              key={slide.title}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to ${slide.title} slide`}
              className={`h-2 w-6 sm:h-2.5 sm:w-8 rounded-full transition ${
                activeIndex === index ? "bg-[#e1c19a]" : "bg-[#4e453c]"
              }`}
            />
          ))}
        </div>

        <div className="flex items-center gap-1.5 sm:gap-2 order-1 sm:order-2 self-end sm:self-auto">
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous slide"
            className="rounded-md border border-[#4e453c] bg-[#171c21]/80 px-2.5 py-1.5 sm:px-3 sm:py-2 text-[#dee3ea] transition hover:border-[#e1c19a] hover:text-[#e1c19a]"
          >
            ←
          </button>
          <button
            type="button"
            onClick={goNext}
            aria-label="Next slide"
            className="rounded-md border border-[#4e453c] bg-[#171c21]/80 px-2.5 py-1.5 sm:px-3 sm:py-2 text-[#dee3ea] transition hover:border-[#e1c19a] hover:text-[#e1c19a]"
          >
            →
          </button>
          <button
            type="button"
            onClick={() => setIsPaused((current) => !current)}
            aria-label={isPaused ? "Resume auto sliding" : "Pause auto sliding"}
            className="rounded-md border border-[#4e453c] bg-[#171c21]/80 px-2.5 py-1.5 sm:px-3 sm:py-2 text-[#dee3ea] transition hover:border-[#e1c19a] hover:text-[#e1c19a]"
          >
            <span aria-hidden>{isPaused ? "▶" : "⏸"}</span>
          </button>
        </div>
      </div>
    </section>
  );
}
