"use client";

import { Button } from "@/components/ui/Button";
import { scrollToElement } from "@/lib/scroll";

type ProblemVariant = "primary" | "secondary";

type Problem = {
  id: string;
  title: string;
  text: string;
  accent?: string;
  variant: ProblemVariant;
};

const problems: Problem[] = [
  {
    id: "01",
    title: "Долгая подготовка КП",
    text: "Менеджер собирает данные, считает в Excel, переносит информацию в Word или PDF и вручную отправляет клиенту. При любом изменении цикл повторяется заново.",
    accent: "Часы работы вместо нескольких минут",
    variant: "primary",
  },
  {
    id: "02",
    title: "Ручные расчёты",
    text: "Сметы собираются в нескольких инструментах: Excel, Word, PDF и мессенджерах. Формулы нужно проверять вручную, а данные легко потерять или перепутать.",
    variant: "secondary",
  },
  {
    id: "03",
    title: "Ошибки в расчётах",
    text: "Ручная работа повышает риск неточностей: неверные формулы, неправильные материалы, забытые позиции, ошибки в скидках и комплектациях.",
    variant: "secondary",
  },
  {
    id: "04",
    title: "Зависимость от сотрудников",
    text: "Логика расчётов часто хранится у отдельных специалистов. Если сотрудник уходит, болеет или перегружен, процесс продаж начинает тормозить.",
    variant: "secondary",
  },
  {
    id: "05",
    title: "Нет единого стандарта КП",
    text: "У разных менеджеров могут быть разные шаблоны, формулировки и подходы к расчёту. Из-за этого страдает качество предложений и восприятие бренда.",
    variant: "primary",
  },
  {
    id: "06",
    title: "Потеря горячих заявок",
    text: "Пока менеджер готовит расчёт, клиент может уйти к конкуренту, который быстрее ответил и сразу прислал понятное предложение.",
    variant: "secondary",
  },
];

const baseCardClasses =
  "relative overflow-hidden rounded-[22px] p-6 sm:p-7 lg:p-8";

const secondaryCardTone = "bg-[#F4F4F4] text-[#3F3F3F]";
const primaryCardTone = "bg-[#A183FA] text-white";

export const ProblemsSection = () => {
  const [mainProblem, ...otherProblems] = problems;

  const handleScrollToCalculator = () => {
    scrollToElement("efficiency-calculator");
  };

  return (
    <section
      id="problems"
      aria-labelledby="problems-heading"
      className="bg-white py-16 sm:py-20 lg:py-24"
      style={{
        fontFamily:
          "SF Pro Display, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="inline-flex rounded-full bg-[#A183FA]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#A183FA]">
            Проблемы
          </p>
          <h2
            id="problems-heading"
            className="mt-5 text-3xl font-semibold leading-tight text-[#3F3F3F] sm:text-4xl lg:text-5xl"
          >
            Проблемы, с которыми часто сталкиваются компании
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#3F3F3F]/80 sm:text-lg">
            Когда расчёты, документы и правила продаж живут в Excel, Word и в
            голове сотрудников, компания теряет время, деньги и скорость
            реакции на клиента.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:gap-5 lg:grid-cols-12 lg:gap-6">
          <article
            className={`${baseCardClasses} ${primaryCardTone} lg:col-span-8`}
            aria-label={mainProblem.title}
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_20%,rgba(255,255,255,0.22),transparent_45%)]" />
            <div className="pointer-events-none absolute -right-10 -bottom-10 h-44 w-44 rounded-full bg-white/10 blur-sm" />
            <div className="relative z-10 max-w-[640px]">
              <p className="text-sm font-semibold tracking-[0.2em] text-white/80">
                {mainProblem.id}
              </p>
              <h3 className="mt-3 text-2xl font-semibold leading-tight sm:text-[2rem]">
                {mainProblem.title}
              </h3>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/90 sm:text-base">
                {mainProblem.text}
              </p>
              {mainProblem.accent ? (
                <p className="mt-5 inline-flex rounded-full border border-white/35 bg-white/10 px-3 py-1.5 text-xs font-medium text-white">
                  {mainProblem.accent}
                </p>
              ) : null}
            </div>

            <div className="pointer-events-none absolute right-6 top-6 hidden h-24 w-24 rounded-full border border-white/30 lg:block" />
            <div className="pointer-events-none absolute right-20 top-16 hidden h-px w-20 bg-white/35 lg:block" />
            <div className="pointer-events-none absolute right-8 bottom-7 hidden w-[220px] rounded-2xl border border-white/30 bg-white/10 p-4 backdrop-blur-[2px] lg:block">
              <div className="mt-3 grid grid-cols-3 gap-2">
                <span className="h-8 rounded-lg bg-white/20" />
                <span className="h-8 rounded-lg bg-white/25" />
                <span className="h-8 rounded-lg bg-white/15" />
              </div>
            </div>
          </article>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:col-span-12 lg:gap-6">
            {otherProblems.map((problem, index) => {
              const isPrimary = problem.variant === "primary";
              const tone = isPrimary ? primaryCardTone : secondaryCardTone;

              return (
                <article
                  key={problem.id}
                  className={`${baseCardClasses} ${tone} min-h-[220px]`}
                  aria-label={problem.title}
                >
                  <div
                    className={`pointer-events-none absolute right-0 top-0 h-16 w-16 rounded-bl-[22px] ${
                      isPrimary ? "bg-white/10" : "bg-[#FFFFFF]/40"
                    }`}
                    aria-hidden="true"
                  />
                  <p
                    className={`text-sm font-semibold tracking-[0.2em] ${
                      isPrimary ? "text-white/80" : "text-[#A183FA]/80"
                    }`}
                  >
                    {problem.id}
                  </p>
                  <h3
                    className={`mt-3 text-xl font-semibold leading-tight sm:text-2xl ${
                      isPrimary ? "text-white" : "text-[#A183FA]"
                    }`}
                  >
                    {problem.title}
                  </h3>
                  <p
                    className={`mt-4 text-sm leading-relaxed sm:text-base ${
                      isPrimary ? "text-white/90" : "text-[#3F3F3F]/85"
                    }`}
                  >
                    {problem.text}
                  </p>
                  {index % 2 === 0 ? (
                    <div
                      className={`pointer-events-none absolute left-7 bottom-5 h-px w-14 ${
                        isPrimary ? "bg-white/40" : "bg-[#A183FA]/30"
                      }`}
                    />
                  ) : (
                    <div
                      className={`pointer-events-none absolute right-6 bottom-6 h-10 w-10 rounded-full ${
                        isPrimary ? "bg-white/10" : "bg-[#A183FA]/10"
                      }`}
                    />
                  )}
                </article>
              );
            })}
          </div>
        </div>

        <div className="mt-8 rounded-[20px] bg-[#F7F7F7] px-5 py-6 sm:mt-10 sm:px-7 sm:py-7 lg:flex lg:items-center lg:justify-between lg:gap-6">
          <p className="max-w-3xl text-sm  text-[#3F3F3F] sm:text-base">
            Если эти проблемы есть в вашем отделе продаж — их можно автоматизировать без перестройки всего бизнеса.
          </p>
          <Button
            onClick={handleScrollToCalculator}
            className="mt-4 w-full lg:mt-0 lg:w-auto"
            aria-label="Перейти к расчету эффекта"
          >
            Рассчитать эффект
          </Button>
        </div>
      </div>
    </section>
  );
};
