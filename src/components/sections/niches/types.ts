export type NicheCardItem = {
  id: string;
  badge: string;
  title: string;
  description: string;
  automations: string[];
  imagePlaceholder: string;
  imageCaption: string;
  imageSrc?: string;
};

export type NicheItem = {
  id: string;
  title: string;
  description: string;
  cards: NicheCardItem[];
};
