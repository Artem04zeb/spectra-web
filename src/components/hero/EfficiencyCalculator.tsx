"use client";

import { useMemo, useState } from "react";
import {
  calculateEfficiency,
  DEFAULT_CALCULATOR_INPUTS,
  type CalculatorInputs,
} from "@/lib/calculator";
import { formatNumber, formatRubles } from "@/lib/format";

type CalculatorField = {
  key: keyof CalculatorInputs;
  label: string;
  suffix?: string;
  min: number;
  max?: number;
  step?: number;
};

const CALCULATOR_FIELDS: CalculatorField[] = [
  {
    key: "averageCheck",
    label: "Средний чек заказа",
    suffix: "₽",
    min: 0,
    max: 100_000_000,
    step: 1000,
  },
  {
    key: "managersCount",
    label: "Количество менеджеров",
    min: 1,
    max: 500,
  },
  {
    key: "quotesPerDayPerManager",
    label: "КП в день на 1 менеджера",
    min: 1,
    max: 50,
  },
  {
    key: "minutesPerQuote",
    label: "Время подготовки 1 КП",
    suffix: "мин",
    min: 1,
    max: 480,
  },
  {
    key: "errorsPerManagerPerMonth",
    label: "Ошибок на 1 менеджера в месяц",
    min: 0,
    max: 100,
  },
  {
    key: "errorCostPercent",
    label: "Стоимость 1 ошибки",
    suffix: "% от чека",
    min: 0,
    max: 100,
  },
  {
    key: "hourlyRate",
    label: "Стоимость 1 часа менеджера",
    suffix: "₽",
    min: 0,
    max: 50_000,
    step: 100,
  },
];

const clampNonNegative = (value: number, min: number, max?: number): number => {
  const safe = Number.isFinite(value) ? value : min;
  const floored = Math.max(min, safe);
  return max !== undefined ? Math.min(max, floored) : floored;
};

export const EfficiencyCalculator = () => {
  const [inputs, setInputs] = useState<CalculatorInputs>(
    DEFAULT_CALCULATOR_INPUTS,
  );
  const [resultPulse, setResultPulse] = useState(false);

  const results = useMemo(() => calculateEfficiency(inputs), [inputs]);

  const handleFieldChange = (key: keyof CalculatorInputs, raw: string) => {
    const field = CALCULATOR_FIELDS.find((item) => item.key === key);
    const min = field?.min ?? 0;
    const parsed = raw === "" ? min : Number(raw);
    const nextValue = clampNonNegative(parsed, min, field?.max);

    setInputs((prev) => ({ ...prev, [key]: nextValue }));
    setResultPulse(true);
    window.setTimeout(() => setResultPulse(false), 320);
  };

  return (
    <div
      id="efficiency-calculator"
      className="scroll-mt-28 rounded-[var(--radius-card-lg)] border border-white/80 bg-white/90 p-5 shadow-card-lg backdrop-blur-sm sm:p-6 lg:p-7"
    >
      <div className="mb-5 flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-spectra-accent">
            Рассчитайте потери вашего бизнеса. Онлайн калькулятор.
          </p>
          <h2 className="mt-1 text-lg font-semibold text-spectra-text">
            Сколько стоит ручная подготовка КП
          </h2>
        </div>
      </div>

      <div className="mb-6 rounded-2xl bg-spectra-accent px-5 py-5 text-white transition-transform duration-300 sm:px-6 sm:py-6">
        <p className="text-sm font-medium text-white/85">Сгорает впустую на подготовке документов от</p>
        <p
          className={`mt-1 text-3xl font-bold tracking-tight transition-all duration-300 sm:text-4xl ${resultPulse ? "scale-[1.02] opacity-90" : "scale-100 opacity-100"}`}
          aria-live="polite"
          aria-atomic="true"
        >
          {formatRubles(results.totalLoss)}
          <span className="text-lg font-semibold sm:text-xl"> в месяц</span>
        </p>
      </div>

      <div className="mb-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
        <ResultMiniCard
          label="На ручной подготовке документов"
          value={formatRubles(results.documentPrepCost)}
        />
        <ResultMiniCard
          label="Из-за ошибок в расчётах"
          value={formatRubles(results.humanErrorCost)}
        />
        <ResultMiniCard
          label="Теряется времени"
          value={`${formatNumber(results.hoursPerMonth)} ч/мес`}
        />
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {CALCULATOR_FIELDS.map((field) => (
          <label
            key={field.key}
            className="flex flex-col gap-1.5 rounded-xl bg-spectra-surface px-3 py-2.5"
          >
            <span className="text-xs font-medium text-spectra-text-muted">
              {field.label}
              {field.suffix ? `, ${field.suffix}` : ""}
            </span>
            <input
              type="number"
              inputMode="numeric"
              min={field.min}
              max={field.max}
              step={field.step ?? 1}
              value={inputs[field.key]}
              onChange={(event) =>
                handleFieldChange(field.key, event.target.value)
              }
              className="w-full rounded-lg border-0 bg-white px-3 py-2 text-sm font-medium text-spectra-text outline-none ring-1 ring-transparent transition-shadow focus-visible:ring-2 focus-visible:ring-spectra-accent/40"
            />
          </label>
        ))}
      </div>

      <p className="mt-4 text-xs leading-relaxed text-spectra-text-muted">
        Расчёт по нижней планке: без учёта потерянных заявок, просадки
        конверсии и снижения скорости реакции на клиента.
      </p>
    </div>
  );
};

type ResultMiniCardProps = {
  label: string;
  value: string;
};

const ResultMiniCard = ({ label, value }: ResultMiniCardProps) => (
  <div className="rounded-2xl bg-spectra-surface px-4 py-3">
    <p className="text-xs leading-snug text-spectra-text-muted">{label}</p>
    <p className="mt-1 text-base font-semibold text-spectra-text">{value}</p>
  </div>
);
