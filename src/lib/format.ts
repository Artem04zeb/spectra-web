const currencyFormatter = new Intl.NumberFormat("ru-RU", {
  style: "currency",
  currency: "RUB",
  maximumFractionDigits: 0,
});

const numberFormatter = new Intl.NumberFormat("ru-RU", {
  maximumFractionDigits: 0,
});

export const formatRubles = (value: number): string =>
  currencyFormatter.format(Math.round(value));

export const formatNumber = (value: number): string =>
  numberFormatter.format(Math.round(value));
