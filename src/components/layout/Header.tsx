"use client";

import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { label: "Проблемы", href: "#problems" },
  { label: "Как работает", href: "#how-it-works" },
  { label: "Внедрение", href: "#implementation" },
  { label: "Ниши", href: "#niches" },
  { label: "Команда", href: "#team" },
  { label: "Партнёры", href: "#partners" },
  { label: "Контакты", href: "#contact" },
] as const;

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-spectra-surface-alt/80 bg-white/85 shadow-[0_4px_24px_rgba(63,63,63,0.04)] backdrop-blur-md"
          : "bg-white/70 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="shrink-0 text-sm font-bold uppercase tracking-[0.2em] text-spectra-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-spectra-accent/40 focus-visible:ring-offset-2"
          aria-label="Спектра CPQ — на главную"
        >
          Спектра <span className="text-spectra-accent">CPQ</span>
        </a>

        <nav
          className="hidden items-center gap-6 lg:flex"
          aria-label="Основная навигация"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-spectra-text-muted transition-colors hover:text-spectra-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-spectra-accent/40 focus-visible:ring-offset-2"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* <Button
            variant="primary"
            className="hidden sm:inline-flex"
            onClick={handleScrollToCalculator}
            aria-label="Рассчитать эффект — перейти к калькулятору"
          >
            Рассчитать эффект
          </Button> */}
          <a
            href="tel:+79180038384"
            className="hidden min-h-11 flex-col justify-center rounded-2xl bg-spectra-accent px-5 py-2 text-white transition-colors hover:bg-[#8E6FF0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-spectra-accent/40 focus-visible:ring-offset-2 sm:inline-flex"
            aria-label="Связаться по номеру +7 918 003 83 84"
          >
            <span className="text-xs font-medium leading-none text-white/80">
              Связаться
            </span>
            <span className="mt-1 text-sm font-semibold leading-none">
              +7 (918) 003-83-84
            </span>
          </a>

          <button
            type="button"
            className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl bg-spectra-surface text-spectra-text transition-colors hover:bg-spectra-surface-alt focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-spectra-accent/40 lg:hidden"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span className="sr-only">
              {isMenuOpen ? "Закрыть" : "Меню"}
            </span>
            <span className="flex flex-col gap-1.5" aria-hidden="true">
              <span
                className={`block h-0.5 w-5 rounded-full bg-current transition-transform duration-200 ${isMenuOpen ? "translate-y-2 rotate-45" : ""}`}
              />
              <span
                className={`block h-0.5 w-5 rounded-full bg-current transition-opacity duration-200 ${isMenuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 w-5 rounded-full bg-current transition-transform duration-200 ${isMenuOpen ? "-translate-y-2 -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`border-t border-spectra-surface-alt bg-white/95 backdrop-blur-md transition-all duration-300 lg:hidden ${
          isMenuOpen
            ? "visible max-h-[calc(100dvh-4rem)] opacity-100"
            : "invisible max-h-0 overflow-hidden opacity-0"
        }`}
      >
        <nav
          className="flex flex-col gap-1 px-4 py-4"
          aria-label="Мобильная навигация"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={handleNavClick}
              className="min-h-11 rounded-xl px-3 py-2.5 text-base font-medium text-spectra-text transition-colors hover:bg-spectra-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-spectra-accent/40"
            >
              {item.label}
            </a>
          ))}
          {/* <Button
            variant="primary"
            className="mt-2 w-full"
            onClick={handleScrollToCalculator}
          >
            Рассчитать эффект
          </Button> */}
          <a
            href="tel:+79180038384"
            onClick={handleNavClick}
            className="mt-2 flex min-h-12 flex-col justify-center rounded-2xl bg-spectra-accent px-4 py-3 text-white transition-colors hover:bg-[#8E6FF0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-spectra-accent/40"
            aria-label="Связаться по номеру +7 918 003 83 84"
          >
            <span className="text-xs font-medium leading-none text-white/80">
              Связаться
            </span>
            <span className="mt-1 text-base font-semibold leading-none">
              +7 (918) 003-83-84
            </span>
          </a>
        </nav>
      </div>
    </header>
  );
};
