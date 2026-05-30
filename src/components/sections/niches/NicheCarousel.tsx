"use client";

import { useEffect, useRef, useState } from "react";

import { NicheCard } from "@/components/sections/niches/NicheCard";
import { NicheVisualPanel } from "@/components/sections/niches/NicheVisualPanel";
import type { NicheItem } from "@/components/sections/niches/types";

type NicheCarouselProps = {
  niche: NicheItem;
};

const ArrowLeftIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
    <path
      d="M11.5 3.5L6 9L11.5 14.5"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
    <path
      d="M6.5 3.5L12 9L6.5 14.5"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const NicheCarousel = ({ niche }: NicheCarouselProps) => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  const clampIndex = (index: number) => {
    return Math.max(0, Math.min(index, niche.cards.length - 1));
  };

  const scrollToCard = (index: number) => {
    const container = scrollContainerRef.current;
    const card = container?.querySelectorAll<HTMLElement>("[data-niche-card]")[index];

    if (!container || !card) {
      return;
    }

    container.scrollTo({
      left: card.offsetLeft,
      behavior: "smooth",
    });
  };

  const handleScroll = (direction: "left" | "right") => {
    setActiveCardIndex((currentIndex) => {
      const lastIndex = niche.cards.length - 1;
      const nextIndex =
        direction === "left"
          ? clampIndex(currentIndex - 1)
          : currentIndex === lastIndex
          ? 0
          : currentIndex + 1;

      scrollToCard(nextIndex);
      return nextIndex;
    });
  };

  const handleScrollEvent = () => {
    const container = scrollContainerRef.current;
    if (!container) {
      return;
    }

    const card = container.querySelector<HTMLElement>("[data-niche-card]");
    const gap = 16;
    const cardWidth = card?.offsetWidth ?? container.clientWidth;
    const index = Math.round(container.scrollLeft / (cardWidth + gap));

    setActiveCardIndex(clampIndex(index));
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) {
      return;
    }

    container.addEventListener("scroll", handleScrollEvent, { passive: true });
    return () => container.removeEventListener("scroll", handleScrollEvent);
  }, [niche.cards.length]);

  return (
    <section
      aria-labelledby={`niche-${niche.id}-heading`}
      className="rounded-[32px] border border-[#A183FA]/12 bg-[#F7F7F7] p-6 shadow-[0_16px_40px_rgba(63,63,63,0.04)] sm:p-8 lg:p-10"
    >
      <div className="grid gap-8 lg:grid-cols-[minmax(0,55%)_minmax(0,45%)] lg:items-tar">
        <div className="space-y-6 lg:contents"> 
          <div className="max-w-2xl lg:col-span-2 lg:max-w-none">
            <h3
              id={`niche-${niche.id}-heading`}
              className="text-2xl font-semibold leading-tight text-[#3F3F3F] sm:text-3xl"
            >
              {niche.title}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-[#3F3F3F]/80 sm:text-base">
              {niche.description}
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[28px] border border-[#A183FA]/10 bg-white p-5 shadow-[0_18px_40px_rgba(63,63,63,0.06)] sm:p-6 lg:col-start-1">
            <div className="pb-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6C4CE5]">
                  Боли и сценарии
                </p>
                <p className="mt-2 text-xs leading-relaxed text-[#3F3F3F]/70">
                  Смотрите ключевые боли и автоматизации для текущей ниши.
                </p>
              </div>

              <div className="absolute right-4 top-4 z-10 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => handleScroll("left")}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[#A183FA]/20 bg-[#FFFFFF] text-[#6C4CE5] shadow-[0_6px_18px_rgba(63,63,63,0.08)] transition hover:bg-[#A183FA]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A183FA] focus-visible:ring-offset-2 sm:h-12 sm:w-12"
                  aria-label={`Прокрутить карусель ${niche.title} влево`}
                >
                  <ArrowLeftIcon />
                </button>
                <button
                  type="button"
                  onClick={() => handleScroll("right")}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[#A183FA]/20 bg-[#FFFFFF] text-[#6C4CE5] shadow-[0_6px_18px_rgba(63,63,63,0.08)] transition hover:bg-[#A183FA]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A183FA] focus-visible:ring-offset-2 sm:h-12 sm:w-12"
                  aria-label={`Прокрутить карусель ${niche.title} вправо`}
                >
                  <ArrowRightIcon />
                </button>
              </div>
            </div>

            <div
              ref={scrollContainerRef}
              className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 [scrollbar-width:auto] [scrollbar-color:#A183FA66_transparent] [&::-webkit-scrollbar]:h-3 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#A183FA]/45 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-[#A183FA]/10"
            >
              {niche.cards.map((card) => (
                <div
                  key={card.id}
                  data-niche-card
                  className="w-[min(85vw,560px)] shrink-0 snap-start sm:w-[min(90vw,560px)] lg:w-[min(100%,560px)]"
                >
                  <NicheCard card={card} />
                </div>
              ))}
            </div>

            <div className="mt-4 flex items-center justify-center gap-2">
              {niche.cards.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => {
                    scrollToCard(index);
                    setActiveCardIndex(index);
                  }}
                  className={`h-2.5 w-2.5 rounded-full transition ${
                    index === activeCardIndex
                      ? "bg-[#6C4CE5]"
                      : "bg-[#A183FA]/30"
                  }`}
                  aria-label={`Перейти к карточке ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        <NicheVisualPanel nicheId={niche.id} nicheTitle={niche.title} />
      </div>
    </section>
  );
};
