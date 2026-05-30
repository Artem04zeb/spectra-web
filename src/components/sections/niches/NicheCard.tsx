import type { NicheCardItem } from "@/components/sections/niches/types";

type NicheCardProps = {
  card: NicheCardItem;
};

export const NicheCard = ({ card }: NicheCardProps) => {
  return (
    <article className="flex h-full min-h-[420px] flex-col rounded-[24px] border border-transparent bg-white p-6 text-[#3F3F3F] shadow-[0_16px_40px_rgba(63,63,63,0.08)]">
      <span className="inline-flex w-fit rounded-full border border-[#A183FA]/20 bg-[#A183FA]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#6C4CE5]">
        {card.badge}
      </span>

      <h4 className="mt-4 text-xl font-semibold leading-tight text-[#3F3F3F] sm:text-2xl">
        {card.title}
      </h4>

      <p className="mt-3 text-sm leading-relaxed text-[#3F3F3F]/82 sm:text-base">
        {card.description}
      </p>

      <div className="mt-6 rounded-3xl border border-[#A183FA]/18 bg-[#F7F7F7] p-5">
        <p className="text-sm font-semibold text-[#6C4CE5]">Что автоматизируем</p>
        <ul className="mt-3 space-y-2">
          {card.automations.map((automation) => (
            <li key={automation} className="flex items-start gap-3 text-sm text-[#3F3F3F]/84">
              <span
                className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#A183FA]"
                aria-hidden="true"
              />
              <span>{automation};</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};
