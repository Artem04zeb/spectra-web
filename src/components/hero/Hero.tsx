"use client";

import { Button } from "@/components/ui/Button";
import { EfficiencyCalculator } from "@/components/hero/EfficiencyCalculator";
import { FloatingCard } from "@/components/hero/FloatingCard";
import { HeroIllustration } from "@/components/hero/HeroIllustration";
import { scrollToElement } from "@/lib/scroll";

const BENEFITS = [
  "До 70% экономии времени менеджеров",
  "Первые КП на ваших данных",
  "Внедрение без нагрузки на команду",
] as const;

const CheckIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
    className="shrink-0 text-spectra-accent"
  >
    <path
      d="M3.5 8.5L6.5 11.5L12.5 4.5"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Hero = () => {
  const handleScrollToCalculator = () => {
    scrollToElement("efficiency-calculator");
  };
  const handleScrollToContact = () => {
    scrollToElement("contact");
  };

  return (
    <section
      id="top"
      className="relative overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pb-24"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute -top-24 right-[-10%] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(161,131,250,0.28)_0%,rgba(161,131,250,0)_70%)] blur-2xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 left-[-8%] h-[320px] w-[320px] rounded-full bg-[radial-gradient(circle,rgba(161,131,250,0.15)_0%,rgba(161,131,250,0)_68%)] blur-2xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div className="relative z-10 flex flex-col">
            <span className="inline-flex w-fit items-center rounded-full bg-spectra-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-spectra-accent">
              CPQ для компаний со сложными расчётами
            </span>

            <h1
              id="hero-heading"
              className="mt-5 max-w-xl text-[clamp(2rem,5vw,3.25rem)] font-bold uppercase leading-[1.05] tracking-[0.04em] text-spectra-text"
            >
              Коммерческие предложения {"\n"}<br></br>
              <span className="text-spectra-accent"> 5 минут</span> вместо <br></br>2 часов
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-spectra-text-muted sm:text-lg">
              Автоматизируем ручные расчёты, Excel и Word. Менеджер собирает
              заказ, система считает стоимость и формирует готовое коммерческое
              предложение по правилам вашей компании.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button onClick={handleScrollToCalculator}>
                Рассчитать экономию
              </Button>
              <Button variant="secondary" onClick={handleScrollToContact}>
                Запросить демо
              </Button>
            </div>

            <ul className="mt-8 flex flex-col gap-3">
              {BENEFITS.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-start gap-2.5 text-sm text-spectra-text sm:text-base"
                >
                  <CheckIcon />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative z-10 lg:pt-2">
            <div className="relative">

              <div className="mb-6 hidden sm:block lg:absolute lg:-top-8 lg:right-0 lg:mb-0 lg:w-[42%] lg:translate-x-4">
                <HeroIllustration />
              </div>
              <EfficiencyCalculator />
            </div>

            <div className="mt-6 sm:hidden">
              <HeroIllustration />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ChartIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
    <path
      d="M3 14V8M7 14V4M11 14V10M15 14V6"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const FileIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
    <path
      d="M5 2H10L13 5V15C13 15.5523 12.5523 16 12 16H6C5.44772 16 5 15.5523 5 15V3C5 2.44772 5.44772 2 6 2Z"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path d="M10 2V5H13" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);
