"use client";

export const FinalCTASection = () => {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
      style={{
        fontFamily:
          "SF Pro Display, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[34px] bg-[#A183FA] px-6 py-8 text-white shadow-[0_22px_60px_rgba(161,131,250,0.34)] sm:px-8 sm:py-10 lg:px-12 lg:py-12">
          <div
            className="pointer-events-none absolute -left-10 -top-12 h-48 w-48 rounded-full bg-white/20 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-20 right-4 h-64 w-64 rounded-full bg-[#7E5BE6]/55 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1fr)_420px] xl:grid-cols-[minmax(0,1fr)_460px] xl:gap-12">
            <div className="flex flex-col">
              <p className="inline-flex w-fit rounded-full border border-white/40 bg-white/12 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white">
                Заявка
              </p>
              <h2
                id="contact-heading"
                className="mt-5 max-w-2xl text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl"
              >
                Обсудим, как автоматизировать подготовку документов
              </h2>

            </div>

            <div className="rounded-[24px] bg-white p-7 text-[#3F3F3F] shadow-[0_16px_36px_rgba(63,63,63,0.12)] sm:p-8">
              <h3 className="text-2xl font-semibold leading-tight text-[#3F3F3F]">
                Оставить заявку
              </h3>
              {/* Форма обратной связи временно отключена. */}
              <p className="mt-3 text-sm leading-relaxed text-[#3F3F3F]/80 sm:text-base">
                Пока принимаем заявки в MAX, WatsApp и Telegram.
              </p>
              <a
                href="tel:+79180038384"
                className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-2xl bg-[#6C4CE5] px-6 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-[#5B3BD2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6C4CE5]/45 focus-visible:ring-offset-2 sm:text-base"
                aria-label="Позвонить по номеру +7 918 003 83 84"
              >
                +7 (918) 003-83-84
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
