"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type SolutionVariant = "light" | "accent";

type Solution = {
  id: string;
  pain: string;
  title: string;
  subtitle: string;
  description: string;
  imageNote: string;
  imagePath: string;
  imageAlt: string;
  variant: SolutionVariant;
};

const solutions: Solution[] = [
  {
    id: "01",
    pain: "Долгая подготовка КП",
    title: "Шаблоны документов и библиотека КП",
    subtitle:
      "Менеджер не собирает документ вручную — система формирует его по готовому шаблону.",
    description:
      "Spectra CPQ хранит библиотеку шаблонов коммерческих предложений, смет и документов. Менеджер выбирает нужный формат, а система автоматически подставляет данные заказа, расчёты, позиции и условия.",
    imageNote:
      "Здесь будет скриншот библиотеки шаблонов или предпросмотра коммерческого предложения.",
    imagePath: "/media/1_solutions/1.png",
    imageAlt: "Скриншот библиотеки шаблонов документов и предпросмотра коммерческого предложения в Spectra CPQ",
    variant: "accent",
  },
  {
    id: "02",
    pain: "Ошибки в расчётах и комплектациях",
    title: "Каталог продуктов с логикой связей",
    subtitle:
      "Система сама учитывает зависимости между продуктами, параметрами и услугами.",
    description:
      "В каталоге можно управлять продуктами компании, параметрами, свойствами и логикой связки товаров между собой. Это снижает риск забытых позиций, неверных комплектующих, ошибочных скидок и ручных пересчётов.",
    imageNote:
      "Здесь будет скриншот каталога продуктов, карточки товара или настройки связей между продуктами.",
    imagePath: "/media/1_solutions/2.png",
    imageAlt: "Интерфейс каталога продуктов с логикой связей между товарами и параметрами",
    variant: "light",
  },
  {
    id: "03",
    pain: "Заказы теряются в таблицах и переписках",
    title: "Единая таблица заказов с фильтрами",
    subtitle:
      "Все заявки и заказы находятся в одном рабочем пространстве.",
    description:
      "Менеджеры работают с заказами через удобную таблицу: видят статусы, фильтруют заявки, быстро находят нужный заказ и контролируют движение по процессу.",
    imageNote:
      "Здесь будет скриншот таблицы заказов с фильтрами, статусами и быстрым поиском.",
    imagePath: "/media/1_solutions/3.png",
    imageAlt: "Таблица заказов с функциями фильтрации, поиска и отслеживания статусов",
    variant: "light",
  },
  {
    id: "04",
    pain: "Сложно контролировать замеры, монтажи и выездных сотрудников",
    title: "Календарь замеров и монтажей",
    subtitle: "Выездные работы планируются в календаре, а не в мессенджерах.",
    description:
      "Спектра CPQ помогает планировать работу выездных сотрудников: замеры, монтажи, встречи и другие события. Команда видит загрузку, сроки и связанные с заказом работы.",
    imageNote:
      "Здесь будет скриншот календаря с замерами, монтажами и назначенными сотрудниками.",
    imagePath: "/media/1_solutions/4.png",
    imageAlt: "Календарь планирования замеров и монтажей с распределением по сотрудникам",
    variant: "accent",
  },
  {
    id: "05",
    pain: "Процесс продаж зависит от конкретных сотрудников",
    title: "Настройка типов заказов под бизнес-процессы",
    subtitle:
      "Логика работы фиксируется в системе и становится единым стандартом.",
    description:
      "Можно настраивать типы заказов под разные сценарии компании: розничные заказы, проектные продажи, монтажи, сервис, повторные обращения. Это помогает стандартизировать процесс и снизить зависимость от отдельных специалистов.",
    imageNote:
      "Здесь будет скриншот настройки типа заказа, этапов или параметров бизнес-процесса.",
    imagePath: "/media/1_solutions/5.jpg",
    imageAlt: "Интерфейс настройки типов заказов и этапов бизнес-процесса",
    variant: "light",
  },
  {
    id: "06",
    pain: "Новые сотрудники долго входят в работу",
    title: "Оргструктура и права пользователей",
    subtitle:
      "Каждый сотрудник видит только нужные разделы и действия.",
    description:
      "Администрирование организации, оргструктуры и прав пользователей помогает быстро подключать новых сотрудников, разделять роли и ограничивать доступ к критичным настройкам.",
    imageNote:
      "Здесь будет скриншот оргструктуры, ролей или настройки прав пользователя.",
    imagePath: "/media/1_solutions/6.png",
    imageAlt: "Раздел управления оргструктурой и настройками прав доступа для пользователей",
    variant: "accent",
  },
  {
    id: "07",
    pain: "Данные разбросаны между CRM, ERP и мессенджерами",
    title: "Интеграции с внешними системами",
    subtitle:
      "Spectra CPQ может стать связующим слоем между продажами, расчётами и коммуникациями.",
    description:
      "Система предусматривает интеграции с CRM, ERP и мессенджерами, чтобы заявки, данные клиентов, статусы и документы не приходилось переносить вручную между разными инструментами.",
    imageNote:
      "Здесь будет схема интеграций или скриншот раздела подключения внешних систем.",
    imagePath: "/media/1_solutions/7.png",
    imageAlt: "Схема интеграций Spectra CPQ с CRM, ERP и другими внешними системами",
    variant: "light",
  },
];

export const HowItWorksSection = () => {
  const [selectedImageId, setSelectedImageId] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImageId(null);
      }
    };

    if (selectedImageId) {
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }
  }, [selectedImageId]);

  const handleImageClick = (id: string) => {
    setSelectedImageId(id);
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setSelectedImageId(null);
    }
  };

  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className="bg-white py-16 sm:py-20 lg:py-24"
      style={{
        fontFamily:
          "SF Pro Display, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="inline-flex rounded-full bg-[#A183FA]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#A183FA]">
            Решение
          </p>
          <h2
            id="how-it-works-heading"
            className="mt-5 text-3xl font-semibold leading-tight text-[#3F3F3F] sm:text-4xl lg:text-5xl"
          >
            Как Спектра CPQ закрывает ключевые проблемы продаж
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[#3F3F3F]/80 sm:text-lg">
            Мы не просто ускоряем подготовку КП — система закрывает весь путь: от
            заявки и расчёта до документа, выезда сотрудника и контроля заказа.
          </p>
        </div>

        <div className="relative mt-12 sm:mt-14">
          <div
            className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-[28px]"
            aria-hidden="true"
          >
            <div className="absolute inset-0 bg-[#F7F7F7]/45" />
            <div className="absolute -left-24 top-8 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(161,131,250,0.12)_0%,rgba(161,131,250,0)_72%)] blur-2xl sm:h-72 sm:w-72 md:opacity-100 opacity-60" />
            <div className="absolute -right-16 bottom-10 hidden h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(161,131,250,0.1)_0%,rgba(161,131,250,0)_74%)] blur-2xl sm:block md:opacity-100 opacity-70" />
            <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-[#A183FA]/8 md:block" />
            <div className="absolute right-10 top-12 hidden h-40 w-40 rounded-full border border-[#A183FA]/10 lg:block" />
          </div>

          <div
            className="pointer-events-none absolute bottom-8 left-5 top-6 w-px bg-[#A183FA]/35 md:hidden"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute left-1/2 top-5 hidden h-[calc(100%-2.5rem)] w-px -translate-x-1/2 bg-[#A183FA]/35 md:block"
            aria-hidden="true"
          />

          <div className="flex flex-col gap-5 sm:gap-6 lg:gap-7">
            {solutions.map((solution, index) => {
              const isLeft = index % 2 === 0;
              const isAccent = solution.variant === "accent";

              return (
                <div
                  key={solution.id}
                  className={`relative md:flex ${
                    isLeft ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  <span
                    className="pointer-events-none absolute left-5 top-10 z-20 h-2.5 w-2.5 -translate-x-1/2 rounded-full border border-[#A183FA] bg-white md:left-1/2"
                    aria-hidden="true"
                  />

                  <div
                    className={`group relative ml-10 w-[calc(100%-2.5rem)] overflow-hidden rounded-[24px] border text-left shadow-[0_8px_26px_rgba(63,63,63,0.08)] transition-all duration-300 ease-out md:ml-0 md:w-[46%] ${
                      isAccent
                        ? "border-[#A183FA]/35 bg-[#A183FA] text-white"
                        : "border-[#A183FA]/20 bg-[#F7F7F7] text-[#3F3F3F]"
                    } min-h-[440px] p-7 sm:p-7`}
                  >
                    <div className="relative z-10 flex h-full flex-col">
                      <p
                        className={`text-xs font-semibold tracking-[0.24em] ${
                          isAccent ? "text-white/80" : "text-[#A183FA]/80"
                        }`}
                      >
                        {solution.id}
                      </p>

                      <p
                        className={`mt-3 text-sm leading-snug ${
                          isAccent ? "text-white/80" : "text-[#3F3F3F]/75"
                        }`}
                      >
                        Боль: {solution.pain}
                      </p>

                      <h3 className="mt-2 text-xl font-semibold leading-tight sm:text-2xl">
                        {solution.title}
                      </h3>

                      <button
                        type="button"
                        onClick={() => handleImageClick(solution.id)}
                        className="mt-4 overflow-hidden rounded-[18px] border border-dashed cursor-pointer hover:opacity-80 transition-opacity duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A183FA] focus-visible:ring-offset-2"
                        style={{
                          borderColor: isAccent ? "rgba(255, 255, 255, 0.4)" : "rgba(161, 131, 250, 0.3)",
                          backgroundColor: isAccent ? "rgba(255, 255, 255, 0.1)" : "#F4F4F4",
                        }}
                        aria-label={`Увеличить изображение: ${solution.imageAlt}`}
                      >
                        <div className="relative h-50 w-full">
                          <Image
                            src={solution.imagePath}
                            alt={solution.imageAlt}
                            width={400}
                            height={1260}
                            className="h-full w-full object-cover"
                            loading="lazy"
                          />
                        </div>
                      </button>

                      <div className="mt-4">
                        <p
                          className={`text-sm leading-relaxed ${
                            isAccent ? "text-white/90" : "text-[#3F3F3F]/80"
                          }`}
                        >
                          {solution.subtitle}
                        </p>
                        <p
                          className={`mt-4 text-sm leading-relaxed ${
                            isAccent ? "text-white/85" : "text-[#3F3F3F]/78"
                          }`}
                        >
                          {solution.description}
                        </p>
                        <p
                          className={`mt-4 text-xs leading-relaxed ${
                            isAccent ? "text-white/75" : "text-[#3F3F3F]/70"
                          }`}
                        >
                          Что показывает изображение: {solution.imageNote}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Image Modal */}
        {selectedImageId && (
          <div
            onClick={handleBackdropClick}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-label="Просмотр увеличенного изображения"
          >
            <button
              onClick={() => setSelectedImageId(null)}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Закрыть"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="relative max-h-[90vh] max-w-4xl w-full">
              {solutions.map((solution) => {
                if (solution.id !== selectedImageId) return null;
                return (
                  <Image
                    key={solution.id}
                    src={solution.imagePath}
                    alt={solution.imageAlt}
                    width={1200}
                    height={800}
                    className="h-auto w-full rounded-lg object-contain"
                    priority
                  />
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
