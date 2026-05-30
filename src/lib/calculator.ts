export const WORK_DAYS_PER_MONTH = 20;

export type CalculatorInputs = {
  averageCheck: number;
  managersCount: number;
  quotesPerDayPerManager: number;
  minutesPerQuote: number;
  errorsPerManagerPerMonth: number;
  errorCostPercent: number;
  hourlyRate: number;
};

export type CalculatorResults = {
  totalQuotesPerDay: number;
  minutesPerMonth: number;
  hoursPerMonth: number;
  documentPrepCost: number;
  errorsPerMonth: number;
  oneErrorCost: number;
  humanErrorCost: number;
  totalLoss: number;
};

export const DEFAULT_CALCULATOR_INPUTS: CalculatorInputs = {
  averageCheck: 200_000,
  managersCount: 1,
  quotesPerDayPerManager: 6,
  minutesPerQuote: 55,
  errorsPerManagerPerMonth: 3,
  errorCostPercent: 15,
  hourlyRate: 1_000,
};

export const calculateEfficiency = (
  inputs: CalculatorInputs,
): CalculatorResults => {
  const totalQuotesPerDay =
    inputs.managersCount * inputs.quotesPerDayPerManager;

  const minutesPerMonth =
    totalQuotesPerDay * inputs.minutesPerQuote * WORK_DAYS_PER_MONTH;

  const hoursPerMonth = Math.ceil(minutesPerMonth / 60);

  const documentPrepCost = hoursPerMonth * inputs.hourlyRate;

  const errorsPerMonth =
    inputs.managersCount * inputs.errorsPerManagerPerMonth;

  const oneErrorCost =
    (inputs.averageCheck * inputs.errorCostPercent) / 100;

  const humanErrorCost = errorsPerMonth * oneErrorCost;

  const totalLoss = documentPrepCost + humanErrorCost;

  return {
    totalQuotesPerDay,
    minutesPerMonth,
    hoursPerMonth,
    documentPrepCost,
    errorsPerMonth,
    oneErrorCost,
    humanErrorCost,
    totalLoss,
  };
};
