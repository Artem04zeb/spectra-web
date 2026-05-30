"use client";

import { Button } from "@/components/ui/Button";
import { scrollToElement } from "@/lib/scroll";
import Image from "next/image";

type ImplementationVariant = "text-left" | "text-right";

type ImplementationObjection = {
  id: string;
  title: string;
  description: string;
  clientNeeds: string;
  badge: string;
  imagePlaceholder: string;
  variant: ImplementationVariant;
};

export const implementationObjections: ImplementationObjection[] = [
  {
    id: "01",
    title: "Мы запускаем систему поэтапно и без остановки продаж",
    description:
      "Команда продолжает работать в привычном режиме, пока мы готовим систему к запуску. Настройка, проверка и первые сценарии выполняются нашей стороной, чтобы не отвлекать менеджеров от текущих заявок.",
    clientNeeds: "Передать материалы и согласовать ключевые этапы.",
    badge: "Без остановки продаж",
    imagePlaceholder:
      "TODO: insert photo/screenshot of implementation roadmap or team setup",
    variant: "text-left",
  },
  {
    id: "02",
    title: "Мы сами помогаем перенести данные и настроить логику",
    description:
      "Загружаем каталог продукции, параметры, свойства, услуги, связки между товарами и правила расчёта. Проверяем, чтобы система считала так же, как сейчас считает эксперт или Excel, но быстрее и стабильнее.",
    clientNeeds:
      "Предоставить каталог, прайсы, формулы, примеры расчётов и текущие шаблоны.",
    badge: "Настройка под вашу логику",
    imagePlaceholder:
      "TODO: insert screenshot of product catalog setup / calculation logic",
    variant: "text-right",
  },
  {
    id: "03",
    title: "Проверяем расчёты на реальных заказах",
    description:
      "До запуска сверяем расчёты на ваших примерах: сравниваем итоговые суммы, комплектации, скидки, параметры и документы. Первые КП формируются на реальных данных, чтобы клиент сразу увидел корректность результата.",
    clientNeeds:
      "Дать несколько типовых заказов для проверки и подтвердить корректность расчётов.",
    badge: "Проверка до запуска",
    imagePlaceholder:
      "TODO: insert screenshot of quote calculation comparison or generated КП",
    variant: "text-left",
  },
  {
    id: "04",
    title: "Обучаем команду на понятных рабочих сценариях",
    description:
      "Показываем сотрудникам не абстрактный интерфейс, а их реальные задачи: как создать заказ, рассчитать стоимость, выбрать шаблон КП, сформировать документ и передать заказ дальше по процессу.",
    clientNeeds:
      "Выделить сотрудников на короткое обучение и согласовать рабочие сценарии.",
    badge: "Обучение 2–3 дня",
    imagePlaceholder:
      "TODO: insert photo/screenshot of training session or user workflow",
    variant: "text-right",
  },
  {
    id: "05",
    title: "Настраиваем типы заказов под процессы компании",
    description:
      "Spectra CPQ можно адаптировать под разные сценарии: проектные продажи, монтажи, замеры, сервисные работы, повторные обращения и сложные цепочки согласования. Система подстраивается под процесс, а не заставляет компанию ломать привычную работу.",
    clientNeeds:
      "Описать текущий процесс и согласовать нужные этапы заказов.",
    badge: "Под ваши бизнес-процессы",
    imagePlaceholder:
      "TODO: insert screenshot of order type settings / workflow configuration",
    variant: "text-left",
  },
  {
    id: "06",
    title: "Берём на себя администрирование организации и прав",
    description:
      "Настраиваем структуру компании, роли пользователей и индивидуальные права доступа. Каждый сотрудник видит только нужные разделы и действия, а критичные настройки остаются под контролем ответственных людей.",
    clientNeeds: "Передать список сотрудников, роли и правила доступа.",
    badge: "Контроль доступа",
    imagePlaceholder:
      "TODO: insert screenshot of organization structure / user permissions",
    variant: "text-right",
  },
  {
    id: "07",
    title: "Подключаем Спектра CPQ к существующей инфраструктуре",
    description:
      "Система может интегрироваться с CRM, ERP и мессенджерами, чтобы данные не приходилось переносить вручную. Заявки, статусы, документы и клиентская информация могут двигаться между системами без лишней ручной работы.",
    clientNeeds:
      "Предоставить информацию о текущих системах и доступы для интеграции.",
    badge: "Интеграции без ручного переноса",
    imagePlaceholder:
      "TODO: insert screenshot or scheme of CRM / ERP / messenger integrations",
    variant: "text-left",
  },
  {
    id: "08",
    title: "Сопровождаем после запуска и помогаем развивать систему",
    description:
      "После запуска мы остаёмся на связи бессрочно: помогаем с вопросами, корректируем настройки, дорабатываем сценарии и постепенно развиваем систему под новые задачи бизнеса.",
    clientNeeds:
      "Давать обратную связь и сообщать, какие сценарии нужно улучшить.",
    badge: "Поддержка после запуска",
    imagePlaceholder:
      "TODO: insert photo/screenshot of support or product improvement process",
    variant: "text-right",
  },
];

export const ImplementationSection = () => {
  const handleScrollToContact = () => {
    scrollToElement("contact");
  };

  return (
    <section
      id="implementation"
      aria-labelledby="implementation-heading"
      className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
      style={{
        fontFamily:
          "SF Pro Display, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif",
      }}
    >
      <div
        className="pointer-events-none absolute left-1/2 top-20 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(161,131,250,0.11)_0%,rgba(161,131,250,0)_72%)] blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="inline-flex rounded-full bg-[#A183FA]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#A183FA]">
            Внедрение
          </p>
          <h2
            id="implementation-heading"
            className="mt-5 text-3xl font-semibold leading-tight text-[#3F3F3F] sm:text-4xl lg:text-5xl"
          >
            Внедрение без нагрузки на команду
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[#3F3F3F]/80 sm:text-lg">
            Мы берём на себя доработку и настройку системы, перенос данных и проверку логики генерации документов. 
            Клиент участвует только там, где нужно подтвердить материалы и согласовать результат.
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-5 sm:mt-12 sm:gap-6">
          {implementationObjections.map((item) => {
            const isTextRight = item.variant === "text-right";

            return (
              <article
                key={item.id}
                className="rounded-[24px] border border-[#A183FA]/15 bg-[#F7F7F7] p-7 shadow-[0_8px_30px_rgba(63,63,63,0.07)] sm:p-8 lg:p-9"
                aria-label={item.title}
              >
                <div
                  className={`flex flex-col gap-6 lg:items-stretch lg:gap-8 ${
                    isTextRight ? "lg:flex-row-reverse" : "lg:flex-row"
                  }`}
                >
                  <div className="flex min-w-0 flex-1 flex-col">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="text-sm font-semibold tracking-[0.2em] text-[#A183FA]/85">
                        {item.id}
                      </span>
                      <span className="inline-flex rounded-full border border-[#A183FA]/25 bg-[#A183FA]/10 px-3 py-1 text-xs font-medium text-[#6C4CE5]">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="mt-3 text-2xl font-semibold leading-tight text-[#3F3F3F] sm:text-[2rem]">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-sm leading-relaxed text-[#3F3F3F]/82 sm:text-base">
                      {item.description}
                    </p>

                    <p className="mt-5 rounded-2xl border border-[#A183FA]/18 bg-white px-4 py-3 text-sm leading-relaxed text-[#3F3F3F]/85 sm:text-base">
                      <span className="font-semibold text-[#A183FA]">
                        Что нужно от клиента:
                      </span>{" "}
                      {item.clientNeeds}
                    </p>
                  </div>

                  <div className="relative h-[240px] w-full overflow-hidden rounded-[20px] sm:h-[300px] lg:h-auto lg:min-h-0 lg:w-[42%] lg:max-w-[420px] lg:self-stretch">
                    <Image
                      src={`/media/2_integration/${Number(item.id)}.png`}
                      alt={item.title}
                      fill
                      sizes="(min-width: 1024px) 420px, 100vw"
                      className="object-contain"
                      loading="lazy"
                    />
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-8 rounded-[24px] bg-[#A183FA] p-7 text-white sm:mt-10 sm:p-8 lg:p-9">
          <h3 className="text-2xl font-semibold leading-tight sm:text-[2rem]">
            Вам не нужно внедрять систему самостоятельно
          </h3>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/90 sm:text-base">
            Мы настроим всё сами. От вас — материалы, доступы и согласования.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button
              variant="light"
              onClick={handleScrollToContact}
              className="w-full sm:w-auto"
              aria-label="Обсудить внедрение и перейти к форме заявки"
            >
              Обсудить внедрение
            </Button>
            <Button
              onClick={handleScrollToContact}
              className="w-full sm:w-auto"
              aria-label="Посмотреть процесс запуска и перейти к форме заявки"
            >
              Посмотреть процесс запуска
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
