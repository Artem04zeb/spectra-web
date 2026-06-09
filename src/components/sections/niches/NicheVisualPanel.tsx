import Image from "next/image";

type NicheVisualPanelProps = {
  nicheId: string;
  nicheTitle: string;
};

const visualAssets: Record<string, { src: string; alt: string }> = {
  lighting: {
    src: "/media/3_industries/1.png",
    alt: "Декоративное освещение — визуал Spectra CPQ",
  },
  landscape: {
    src: "/media/3_industries/2.png",
    alt: "Ландшафтный дизайн — визуал Spectra CPQ",
  },
  finishing: {
    src: "/media/3_industries/3.png",
    alt: "Отделочные работы — визуал Spectra CPQ",
  },
};

export const NicheVisualPanel = ({ nicheId, nicheTitle }: NicheVisualPanelProps) => {
  const image = visualAssets[nicheId];

  return (
    <aside
      className="hidden w-full min-w-0 overflow-hidden rounded-[30px] border border-[#A183FA]/15 bg-[#F8F8FB] shadow-[0_32px_80px_rgba(161,131,250,0.14)] lg:block lg:h-full"
      aria-label={`Визуал для ниши ${nicheTitle}`}
    >
      <div className="h-full min-h-0 overflow-hidden rounded-[30px] border border-[#A183FA]/20 bg-white p-4 shadow-[0_18px_40px_rgba(161,131,250,0.12)]">
        {image ? (
          <div className="relative h-full min-h-[420px] max-h-[560px] overflow-hidden rounded-[24px] border border-[#A183FA]/10 bg-[#F8F8FB]">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        ) : (
          <div className="flex h-full min-h-[320px] items-center justify-center rounded-[24px] border border-dashed border-[#A183FA]/20 bg-[#F8F8FB] p-6 text-sm text-[#3F3F3F]/70 lg:min-h-[520px]">
            Изображение будет добавлено для этой ниши
          </div>
        )}
      </div>
    </aside>
  );
};
