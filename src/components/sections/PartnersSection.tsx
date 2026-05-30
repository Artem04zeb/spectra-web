"use client";

import { Button } from "@/components/ui/Button";
import { scrollToElement } from "@/lib/scroll";

type Partner = {
  id: string;
  name: string;
  status: "Партнёр" | "Пилот" | "Интеграция" | "Клиент";
  industry: string;
  description: string;
  logoPlaceholder: string;
};

const partners: Partner[] = [
  {
    id: "partner-01",
    name: "Название компании",
    status: "Партнёр",
    industry: "Проектные продажи",
    description:
      "Совместно адаптируем Spectra CPQ под процессы расчёта, подготовки КП и управления заказами.",
    logoPlaceholder: "Логотип партнёра",
  },
  {
    id: "partner-02",
    name: "Название компании",
    status: "Пилот",
    industry: "Сложные расчёты",
    description:
      "Тестируем автоматизацию расчётов, шаблонов документов и сценариев работы отдела продаж.",
    logoPlaceholder: "Логотип партнёра",
  },
  {
    id: "partner-03",
    name: "Название компании",
    status: "Интеграция",
    industry: "CRM / ERP / процессы",
    description:
      "Прорабатываем связку Spectra CPQ с существующей инфраструктурой компании.",
    logoPlaceholder: "Логотип партнёра",
  },
];

const statusClasses: Record<Partner["status"], string> = {
  Партнёр: "bg-[#A183FA]/12 text-[#6C4CE5] border-[#A183FA]/28",
  Пилот: "bg-[#A183FA]/10 text-[#7D63DD] border-[#A183FA]/24",
  Интеграция: "bg-[#A183FA]/14 text-[#6847DE] border-[#A183FA]/30",
  Клиент: "bg-[#A183FA]/12 text-[#6C4CE5] border-[#A183FA]/26",
};

export const PartnersSection = () => {
  const handleScrollToLeadForm = () => {
    scrollToElement("contact");
  };

  return (
    <section
      id="partners"
      aria-labelledby="partners-heading"
      className="relative overflow-hidden bg-white py-14 sm:py-16 lg:py-20"
      style={{
        fontFamily:
          "SF Pro Display, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif",
      }}
    >
      <div
        className="pointer-events-none absolute right-0 top-16 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(161,131,250,0.1)_0%,rgba(161,131,250,0)_72%)] blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="inline-flex rounded-full bg-[#A183FA]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#A183FA]">
            Доверие
          </p>
          <h2
            id="partners-heading"
            className="mt-5 text-3xl font-semibold leading-tight text-[#3F3F3F] sm:text-4xl lg:text-5xl"
          >
            Партнёры и компании, с которыми мы работаем
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#3F3F3F]/80 sm:text-lg">
            Мы развиваем Spectra CPQ вместе с компаниями, которым важно быстрее
            считать заказы, формировать КП и снижать ручную работу в продажах.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3">
          {partners.map((partner, index) => {
            const cardTone = index % 2 === 0 ? "bg-[#F7F7F7]" : "bg-[#F4F4F4]";

            return (
              <article
                key={partner.id}
                className={`${cardTone} rounded-[24px] border border-[#A183FA]/12 p-6 text-[#3F3F3F] shadow-[0_8px_24px_rgba(63,63,63,0.05)] sm:p-7`}
                aria-label={`Партнёр: ${partner.name}`}
              >
                <div className="rounded-2xl border border-[#A183FA]/18 bg-white p-4">
                  <div className="flex h-14 items-center justify-center rounded-xl border border-dashed border-[#A183FA]/35 bg-[linear-gradient(145deg,rgba(255,255,255,0.96),rgba(161,131,250,0.08))] px-4 text-center">
                    <p className="text-sm font-medium text-[#7D63DD]">
                      {partner.logoPlaceholder}
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <span
                    className={`inline-flex rounded-full border px-3 py-1 text-xs font-medium ${statusClasses[partner.status]}`}
                  >
                    {partner.status}
                  </span>
                  <span className="text-xs text-[#3F3F3F]/65">{partner.industry}</span>
                </div>

                <h3 className="mt-3 text-xl font-semibold leading-tight">
                  {partner.name}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-[#3F3F3F]/80 sm:text-base">
                  {partner.description}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-7 rounded-[22px] bg-[#F7F7F7] px-5 py-5 sm:mt-8 sm:px-6 sm:py-6 lg:flex lg:items-center lg:justify-between lg:gap-6">
          <p className="text-sm leading-relaxed text-[#3F3F3F]/84 sm:text-base">
            Хотите обсудить партнёрство или пилотное внедрение Spectra CPQ?
          </p>
          <Button
            onClick={handleScrollToLeadForm}
            className="mt-4 w-full lg:mt-0 lg:w-auto"
            aria-label="Связаться с нами и перейти к форме заявки"
          >
            Связаться с нами
          </Button>
        </div>
      </div>
    </section>
  );
};
