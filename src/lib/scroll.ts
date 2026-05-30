export const scrollToElement = (elementId: string): void => {
  const element = document.getElementById(elementId);
  if (!element) return;

  element.scrollIntoView({ behavior: "smooth", block: "start" });
};
