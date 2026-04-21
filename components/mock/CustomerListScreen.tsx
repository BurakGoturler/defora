"use client";

import { Search } from "lucide-react";
import {
  BottomNav,
  lightPalette,
  darkPalette,
  type Palette,
} from "./DashboardScreen";

type Customer = { letter: string; name: string; phone?: string; avatar?: string };

const CUSTOMERS: Customer[] = [
  { letter: "A", name: "Ayşe Yıldız", phone: "+90 532 123 45 67" },
  { letter: "A", name: "Ahmet Demir", phone: "+90 542 987 65 43" },
  { letter: "B", name: "Burcu Kaya", phone: "+90 555 111 22 33" },
  { letter: "C", name: "Cem Özkan", phone: "+90 533 456 78 90" },
  { letter: "E", name: "Elif Aras", phone: "+90 541 222 33 44" },
];

const ALPHABET = [
  "A", "B", "C", "Ç", "D", "E", "F", "G", "Ğ", "H",
  "I", "İ", "J", "K", "L", "M", "N", "O", "Ö", "P",
  "R", "S", "Ş", "T", "U", "Ü", "V", "Y", "Z",
];
const ACTIVE = new Set(["A", "B", "C", "E"]);

export function CustomerListScreen({ dark = false }: { dark?: boolean }) {
  const palette: Palette = dark ? darkPalette : lightPalette;
  return (
    <div
      className="h-full overflow-hidden flex flex-col"
      style={{ background: palette.bg }}
    >
      <div
        className="px-4 pt-10 pb-2"
        style={{ color: palette.text }}
      >
        <div className="grid grid-cols-2 gap-2 mb-3">
          <SummaryMini
            label="Toplam Müşteri"
            value="24"
            palette={palette}
          />
          <SummaryMini
            label="Aktif Müşteri"
            value="11"
            valueColor="#2ECC8B"
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
            Müşteri ara...
          </div>
        </div>

        {/* Filter chips */}
        <div className="flex gap-1.5 overflow-hidden py-1">
          {[
            ["Tümü", 24, "#1A2B4A", true],
            ["VIP", 5, "#F59E0B", false],
            ["Toptan", 3, "#3B82F6", false],
            ["Abonelik", 6, "#8B5CF6", false],
          ].map(([label, count, color, active]) => (
            <span
              key={String(label)}
              className="text-[9px] font-bold px-2 py-1 rounded-full whitespace-nowrap flex items-center gap-1"
              style={{
                background: active
                  ? String(color)
                  : `${String(color)}22`,
                color: active ? "white" : String(color),
              }}
            >
              {String(label)}
              <span
                className="text-[8px] font-bold px-1 rounded-full"
                style={{
                  background: active
                    ? "rgba(255,255,255,0.25)"
                    : `${String(color)}33`,
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
          Müşterilerim
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        <div className="flex-1 px-4 pt-2 pb-2 overflow-hidden space-y-1.5">
          {CUSTOMERS.map((c, i) => {
            const showHeader =
              i === 0 || CUSTOMERS[i - 1].letter !== c.letter;
            return (
              <div key={i}>
                {showHeader && (
                  <div
                    className="text-base font-extrabold pt-1 pb-0.5"
                    style={{ color: "#7AA0E8" }}
                  >
                    {c.letter}
                  </div>
                )}
                <div
                  className="flex items-center gap-2 rounded-xl p-2"
                  style={{ background: palette.surface }}
                >
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-extrabold"
                    style={{ background: "#141A2B4A", color: "#1A2B4A" }}
                  >
                    {c.name[0]}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div
                      className="text-[11px] font-bold truncate"
                      style={{ color: palette.text }}
                    >
                      {c.name}
                    </div>
                    <div
                      className="text-[9px] truncate"
                      style={{ color: palette.textSoft }}
                    >
                      {c.phone}
                    </div>
                  </div>
                  <div
                    className="w-3 h-3 rounded-sm"
                    style={{ background: palette.textHint, opacity: 0.3 }}
                  />
                </div>
              </div>
            );
          })}
        </div>
        {/* Alphabet strip */}
        <div
          className="w-5 mr-1.5 mt-2 mb-16 rounded-full flex flex-col justify-between items-center py-1.5"
          style={{ background: "#141A2B4A" }}
        >
          {ALPHABET.map((l) => (
            <span
              key={l}
              className="text-[6px] font-bold"
              style={{
                color: ACTIVE.has(l) ? "#1A2B4A" : "#ADB5C755",
              }}
            >
              {l}
            </span>
          ))}
        </div>
      </div>

      <BottomNav palette={palette} active="customers" />
    </div>
  );
}

function SummaryMini({
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
