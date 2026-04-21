"use client";

import { Search } from "lucide-react";
import {
  BottomNav,
  lightPalette,
  darkPalette,
  type Palette,
} from "./DashboardScreen";

type Job = { title: string; customer: string; amount: string; status: string; color: string };

const JOBS: Job[] = [
  {
    title: "Logo Tasarımı",
    customer: "Elif Aras",
    amount: "₺2.500",
    status: "Yapılıyor",
    color: "#F59E0B",
  },
  {
    title: "E-ticaret Sitesi",
    customer: "Ahmet Demir",
    amount: "₺12.000",
    status: "Onaylandı",
    color: "#3B82F6",
  },
  {
    title: "Sosyal Medya Reklamı",
    customer: "Burcu Kaya",
    amount: "₺3.750",
    status: "Teslim",
    color: "#8B5CF6",
  },
  {
    title: "Broşür Tasarımı",
    customer: "Cem Özkan",
    amount: "₺900",
    status: "Ödendi",
    color: "#2ECC8B",
  },
  {
    title: "Web Bakım Paketi",
    customer: "Ayşe Yıldız",
    amount: "₺1.500",
    status: "Görüşüldü",
    color: "#8B9BB4",
  },
];

const FILTERS = [
  ["Tümü", 18, "#1A2B4A", true],
  ["Görüşüldü", 3, "#8B9BB4", false],
  ["Onaylandı", 4, "#3B82F6", false],
  ["Yapılıyor", 5, "#F59E0B", false],
  ["Teslim", 2, "#8B5CF6", false],
  ["Ödendi", 4, "#2ECC8B", false],
] as const;

export function JobsScreen({ dark = false }: { dark?: boolean }) {
  const palette: Palette = dark ? darkPalette : lightPalette;
  return (
    <div
      className="h-full overflow-hidden flex flex-col"
      style={{ background: palette.bg }}
    >
      <div className="px-4 pt-10 pb-2" style={{ color: palette.text }}>
        <div className="grid grid-cols-2 gap-2 mb-3">
          <Mini label="Toplam İş" value="18" palette={palette} />
          <Mini
            label="Aktif İş"
            value="8"
            valueColor="#F59E0B"
            palette={palette}
          />
        </div>
        <div
          className="flex items-center gap-2 rounded-xl px-3 py-2.5 mb-2"
          style={{ background: palette.surface }}
        >
          <Search className="w-3.5 h-3.5" style={{ color: palette.textHint }} />
          <div
            className="text-[10px] font-medium"
            style={{ color: palette.textHint }}
          >
            İş ara...
          </div>
        </div>
        <div className="flex gap-1.5 overflow-hidden py-1">
          {FILTERS.map(([label, count, color, active]) => (
            <span
              key={label}
              className="text-[9px] font-bold px-2 py-1 rounded-full whitespace-nowrap flex items-center gap-1"
              style={{
                background: active ? color : `${color}22`,
                color: active ? "white" : color,
              }}
            >
              {label}
              <span
                className="text-[8px] font-bold px-1 rounded-full"
                style={{
                  background: active ? "rgba(255,255,255,0.25)" : `${color}33`,
                }}
              >
                {count}
              </span>
            </span>
          ))}
        </div>
        <div
          className="text-xs font-extrabold mt-2"
          style={{ color: palette.text }}
        >
          İşlerim
        </div>
      </div>
      <div className="flex-1 overflow-hidden px-4 pt-1 pb-2 space-y-1.5">
        {JOBS.map((j, i) => (
          <div
            key={i}
            className="rounded-xl p-2.5"
            style={{ background: palette.surface }}
          >
            <div className="flex items-center gap-2">
              <div
                className="w-1 h-10 rounded-full"
                style={{ background: j.color }}
              />
              <div className="flex-1 min-w-0">
                <div
                  className="text-[11px] font-bold truncate"
                  style={{ color: palette.text }}
                >
                  {j.title}
                </div>
                <div
                  className="text-[9px] truncate"
                  style={{ color: palette.textSoft }}
                >
                  {j.customer}
                </div>
              </div>
              <div
                className="text-[10px] font-extrabold"
                style={{ color: "#2ECC8B" }}
              >
                {j.amount}
              </div>
            </div>
            <div className="mt-1.5 flex items-center gap-1">
              <span
                className="text-[8px] font-bold px-1.5 py-0.5 rounded-full"
                style={{ background: `${j.color}22`, color: j.color }}
              >
                {j.status}
              </span>
            </div>
          </div>
        ))}
      </div>
      <BottomNav palette={palette} active="jobs" />
    </div>
  );
}

function Mini({
  label,
  value,
  valueColor,
  palette,
}: {
  label: string;
  value: string;
  valueColor?: string;
  palette: Palette;
}) {
  return (
    <div
      className="rounded-xl p-2"
      style={{ background: palette.surface }}
    >
      <div
        className="text-[9px]"
        style={{ color: palette.textSoft }}
      >
        {label}
      </div>
      <div
        className="text-sm font-extrabold"
        style={{ color: valueColor ?? palette.text }}
      >
        {value}
      </div>
    </div>
  );
}
