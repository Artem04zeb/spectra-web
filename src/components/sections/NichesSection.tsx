"use client";

import Image from "next/image";
import { NicheCarousel } from "@/components/sections/niches/NicheCarousel";
import { niches } from "@/components/sections/niches/data";
import { Button } from "@/components/ui/Button";
import { scrollToElement } from "@/lib/scroll";

export const NichesSection = () => {
  const handleScrollToContactPoint = () => {
    scrollToElement("contact");
  };

  return (
    <section
      id="niches"
      aria-labelledby="niches-heading"
      className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
      style={{
        fontFamily:
          "SF Pro Display, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif",
      }}
    >
      <div
        className="pointer-events-none absolute -left-16 top-16 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(161,131,250,0.12)_0%,rgba(161,131,250,0)_72%)] blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="inline-flex rounded-full bg-[#A183FA]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#A183FA]">
            Ниши
          </p>
          <h2
            id="niches-heading"
            className="mt-5 text-3xl font-semibold leading-tight text-[#3F3F3F] sm:text-4xl lg:text-5xl"
          >
            Подходит для бизнесов со сложными расчётами и проектными продажами
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[#3F3F3F]/80 sm:text-lg">
            Spectra CPQ особенно полезна там, где менеджеру нужно быстро
            рассчитать сложный заказ, учесть параметры, материалы, услуги и
            сразу сформировать понятное коммерческое предложение.
          </p>
        </div>

        <div className="mt-10 space-y-6 sm:mt-12 sm:space-y-7">
          {niches.map((niche) => (
            <NicheCarousel key={niche.id} niche={niche} />
          ))}
        </div>

        <div className="mt-8 rounded-[24px] bg-[#A183FA] p-7 text-white sm:mt-10 sm:p-8 lg:p-9">
          <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
            <div className="max-w-3xl">
              <h3 className="text-2xl font-semibold leading-tight sm:text-[2rem]">
                Не нашли свою нишу? Адаптируем Spectra CPQ под ваш бизнес
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-white/90 sm:text-base">
                Если у вас сложные расчёты, нестандартные заказы, проектные
                продажи или коммерческие предложения собираются вручную — мы
                можем настроить Spectra CPQ под вашу логику, каталог, документы
                и процессы.
              </p>
              <Button
                variant="light"
                onClick={handleScrollToContactPoint}
                className="mt-6 w-full sm:w-auto"
                aria-label="Оставить заявку и перейти к форме расчёта"
              >
                Оставить заявку
              </Button>
              <p className="mt-4 text-sm leading-relaxed text-white/85">
                Разберём ваш процесс, покажем точки автоматизации и оценим
                эффект от внедрения.
              </p>
            </div>

            <div className="relative w-full overflow-hidden rounded-[20px] border border-white/35 bg-white/10 p-4 backdrop-blur-[2px] lg:w-[38%] lg:max-w-[380px]">
              <div className="relative h-[190px] overflow-hidden rounded-2xl border border-dashed border-white/45 bg-white/8 sm:h-[220px]">
                <Image
                  src="/media/3_industries/4.png"
                  alt="Иллюстрация для блока не нашли свою нишу"
                  fill
                  sizes="(max-width: 1024px) 100vw, 380px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
