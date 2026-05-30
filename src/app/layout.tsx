import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Спектра CPQ — коммерческие предложения за 5 минут",
  description:
    "Спектра CPQ автоматизирует расчёты, документы и логику заказов для быстрого формирования коммерческих предложений.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="min-h-dvh">{children}</body>
    </html>
  );
}
