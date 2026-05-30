"use client";

import { TeamCard } from "@/components/sections/team/TeamCard";
import { teamMembers } from "@/components/sections/team/data";
import { Button } from "@/components/ui/Button";
import { scrollToElement } from "@/lib/scroll";

const teamCardGridClasses = [
  "xl:col-span-2 2xl:col-span-1",
  "xl:col-span-2 2xl:col-span-1",
  "xl:col-span-2 2xl:col-span-1",
  "xl:col-span-2 xl:col-start-2 2xl:col-span-1 2xl:col-start-auto",
  "xl:col-span-2 xl:col-start-4 2xl:col-span-1 2xl:col-start-auto",
] as const;

export const TeamSection = () => {
  const handleScrollToContact = () => {
    scrollToElement("contact");
  };

  return (
    <section
      id="team"
      aria-labelledby="team-heading"
      className="relative overflow-hidden bg-white py-14 sm:py-16 lg:py-20"
      style={{
        fontFamily:
          "SF Pro Display, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif",
      }}
    >
      <div
        className="pointer-events-none absolute -right-10 top-20 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(161,131,250,0.09)_0%,rgba(161,131,250,0)_72%)] blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="inline-flex rounded-full bg-[#A183FA]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#A183FA]">
            Команда
          </p>
          <h2
            id="team-heading"
            className="mt-5 text-3xl font-semibold leading-tight text-[#3F3F3F] sm:text-4xl lg:text-[2.75rem]"
          >
            Люди, которые развивают Spectra CPQ
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#3F3F3F]/80 sm:text-lg">
          Наша миссия — вывести культуру продаж в России на новый уровень: сделать коммерческие предложения быстрыми, точными и такими же сильными, как сам продукт.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:mt-10 md:grid-cols-2 xl:grid-cols-6 2xl:grid-cols-5">
          {teamMembers.map((member, index) => (
            <TeamCard
              key={member.id}
              member={member}
              gridClassName={teamCardGridClasses[index]}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
