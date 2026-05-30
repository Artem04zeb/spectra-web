import type { TeamMember } from "@/components/sections/team/types";

type TeamCardProps = {
  member: TeamMember;
  gridClassName?: string;
};

export const TeamCard = ({ member, gridClassName = "" }: TeamCardProps) => {
  return (
    <article
      className={`group flex h-full flex-col rounded-[24px] bg-[#F4F4F4] p-5 text-[#3F3F3F] shadow-[0_8px_24px_rgba(63,63,63,0.05)] transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_32px_rgba(63,63,63,0.09)] sm:p-6 ${gridClassName}`}
      aria-label={`${member.name}, ${member.role}`}
    >
      <div className="overflow-hidden rounded-[20px] border border-[#A183FA]/22 bg-[linear-gradient(150deg,rgba(255,255,255,0.98),rgba(161,131,250,0.1))]">
        {member.photoSrc ? (
          <img
            src={member.photoSrc}
            alt={member.name}
            className="aspect-[4/5] w-full object-cover"
          />
        ) : (
          <div className="flex aspect-[4/5] items-center justify-center px-4 text-center">
            <p className="text-sm font-medium text-[#7D63DD]">Фото участника</p>
          </div>
        )}
      </div>

      <span className="mt-4 inline-flex w-fit rounded-full border border-[#A183FA]/25 bg-[#A183FA]/10 px-3 py-1 text-xs font-medium text-[#6C4CE5]">
        {member.badge}
      </span>

      <h3 className="mt-3 text-lg font-semibold leading-tight text-[#3F3F3F] sm:text-xl">
        {member.name}
      </h3>

      <p className="mt-1.5 text-sm font-medium text-[#3F3F3F]/72">{member.role}</p>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-[#3F3F3F]/80">
        {member.description}
      </p>
    </article>
  );
};
