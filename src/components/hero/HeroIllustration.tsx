/**
 * TODO: Replace placeholder with 3D illustration from Spectra CPQ presentation.
 * Expected assets: people, gears, documents, laptop, charts (PNG/WebP/SVG).
 * Place files in /public/images/hero/ and use next/image here.
 */
export const HeroIllustration = () => (
  <div
    className="relative mx-auto flex aspect-[4/3] w-full max-w-md items-center justify-center overflow-hidden rounded-[var(--radius-card-lg)] bg-gradient-to-br from-spectra-surface to-white shadow-card"
    role="img"
    aria-label="Иллюстрация платформы Спектра CPQ — placeholder"
  >
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(161,131,250,0.25),transparent_55%)]" />
    <div className="relative z-10 flex flex-col items-center gap-3 px-6 text-center">
      <div className="flex gap-2">
        <span className="h-10 w-10 rounded-xl bg-spectra-accent/20" />
        <span className="h-10 w-10 rounded-xl bg-spectra-accent/30" />
        <span className="h-10 w-10 rounded-xl bg-spectra-accent/15" />
      </div>
      <p className="text-xs font-medium uppercase tracking-widest text-spectra-text-muted">
        3D-иллюстрация из презентации
      </p>
      <p className="max-w-[220px] text-sm text-spectra-text-muted">
        Люди · шестерёнки · документы · ноутбук · графики
      </p>
    </div>
  </div>
);
