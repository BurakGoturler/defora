"use client";

import { motion } from "framer-motion";
import {
  Wallet,
  Hourglass,
  Briefcase,
  Users,
  TrendingUp,
  CalendarCheck2,
  HelpCircle,
} from "lucide-react";
import { clsx } from "clsx";
import Image from "next/image";
import { asset } from "@/lib/base-path";

const CHART_BARS = [42, 65, 38, 88, 55, 100]; // Son 6 ay
const MONTHS = ["Kas", "Ara", "Oca", "Şub", "Mar", "Nis"];

/**
 * Defora ana sayfa (dashboard) re-creation — özet kartlar, MoM badge,
 * aylık hedef progress + kazanç grafiği + yaklaşan teslim.
 */
export function DashboardScreen({
  animate = false,
  dark = false,
}: {
  animate?: boolean;
  dark?: boolean;
}) {
  const palette = dark ? darkPalette : lightPalette;

  return (
    <div
      className="h-full overflow-hidden flex flex-col"
      style={{ background: palette.bg }}
    >
      {/* Header */}
      <div
        className="px-4 pt-10 pb-3 flex items-center gap-3"
        style={{ color: palette.text }}
      >
        <Image
          src={asset("/avatars/cartoon/cartoon_11.svg")}
          alt=""
          width={42}
          height={42}
        />
        <div className="flex-1 min-w-0">
          <div className="text-[10px]" style={{ color: palette.textSoft }}>
            Günaydın
          </div>
          <div className="text-sm font-extrabold truncate">Burak Aksu</div>
        </div>
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center"
          style={{ background: palette.surface }}
        >
          <HelpCircle className="w-4 h-4" style={{ color: "#3b82f6" }} />
        </div>
      </div>

      <div className="px-4 space-y-3 overflow-hidden pb-4 flex-1">
        {/* Top summary row */}
        <div className="grid grid-cols-2 gap-2">
          <SummaryCard
            icon={<Wallet className="w-3.5 h-3.5" />}
            title="Bu Ay Kazanç"
            value="₺12.480"
            valueColor="#2ECC8B"
            palette={palette}
            trailing={
              <span className="text-[9px] font-bold bg-[#2ECC8B]/15 text-[#059669] px-1.5 py-0.5 rounded-full inline-flex items-center">
                <TrendingUp className="w-2.5 h-2.5 mr-0.5" />
                %32
              </span>
            }
          />
          <SummaryCard
            icon={<Hourglass className="w-3.5 h-3.5" />}
            title="Bekleyen"
            value="₺3.250"
            valueColor="#F59E0B"
            palette={palette}
          />
        </div>

        {/* Second row */}
        <div className="grid grid-cols-2 gap-2">
          <SummaryCard
            icon={<Briefcase className="w-3.5 h-3.5" />}
            title="Aktif İşler"
            value="7"
            palette={palette}
          />
          <SummaryCard
            icon={<Users className="w-3.5 h-3.5" />}
            title="Toplam Müşteri"
            value="24"
            valueColor="#4F46E5"
            palette={palette}
          />
        </div>

        {/* Chart card */}
        <div
          className="rounded-xl p-3"
          style={{ background: palette.surface }}
        >
          <div
            className="text-[10px] font-bold mb-2"
            style={{ color: palette.text }}
          >
            Kazanç Grafiği
          </div>
          <div className="flex gap-1 mb-2 flex-wrap">
            {["Haftalık", "1A", "3A", "6A", "1Y"].map((p) => (
              <span
                key={p}
                className="text-[8px] font-bold px-1.5 py-0.5 rounded-full"
                style={{
                  background: p === "6A" ? "#1A2B4A" : palette.brandSoft,
                  color: p === "6A" ? "white" : "#1A2B4A",
                }}
              >
                {p}
              </span>
            ))}
          </div>
          <div className="flex items-end gap-1.5 h-16">
            {CHART_BARS.map((h, i) => (
              <motion.div
                key={i}
                initial={animate ? { scaleY: 0 } : undefined}
                animate={animate ? { scaleY: 1 } : undefined}
                transition={{
                  duration: 0.5,
                  delay: 0.6 + i * 0.08,
                  ease: "easeOut",
                }}
                className="flex-1 rounded-t bg-gradient-to-t from-[#2ECC8B]/60 to-[#2ECC8B] origin-bottom"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
          <div className="flex gap-1.5 mt-1">
            {MONTHS.map((m) => (
              <div
                key={m}
                className="flex-1 text-center text-[8px] font-bold"
                style={{ color: palette.textSoft }}
              >
                {m}
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming delivery */}
        <div
          className="rounded-xl p-3 flex items-center gap-2"
          style={{ background: palette.surface }}
        >
          <CalendarCheck2 className="w-4 h-4 text-[#F59E0B]" />
          <div className="flex-1 min-w-0">
            <div
              className="text-[10px] font-bold truncate"
              style={{ color: palette.text }}
            >
              Logo Tasarımı · Elif A.
            </div>
            <div
              className="text-[9px]"
              style={{ color: palette.textSoft }}
            >
              Yarın teslim
            </div>
          </div>
          <span className="text-[9px] font-bold bg-[#F59E0B]/15 text-[#F59E0B] px-2 py-0.5 rounded-full">
            1 gün
          </span>
        </div>
      </div>

      {/* Bottom nav */}
      <BottomNav palette={palette} active="home" />
    </div>
  );
}

function SummaryCard({
  icon,
  title,
  value,
  valueColor,
  trailing,
  palette,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  valueColor?: string;
  trailing?: React.ReactNode;
  palette: Palette;
}) {
  return (
    <div
      className="rounded-xl p-2.5"
      style={{ background: palette.surface }}
    >
      <div className="flex items-start justify-between mb-1.5">
        <div
          className="w-7 h-7 rounded-md flex items-center justify-center"
          style={{ background: "#E8F9F1", color: "#2ECC8B" }}
        >
          {icon}
        </div>
        {trailing}
      </div>
      <div
        className="text-[9px] font-medium"
        style={{ color: palette.textSoft }}
      >
        {title}
      </div>
      <div
        className="text-sm font-extrabold mt-0.5"
        style={{ color: valueColor ?? palette.text }}
      >
        {value}
      </div>
    </div>
  );
}

export function BottomNav({
  palette,
  active,
}: {
  palette: Palette;
  active: "customers" | "jobs" | "home" | "profile" | "settings";
}) {
  const items: Array<{ id: typeof active; label: string }> = [
    { id: "customers", label: "Müşteriler" },
    { id: "jobs", label: "İşler" },
    { id: "home", label: "Ana Sayfa" },
    { id: "profile", label: "Profil" },
    { id: "settings", label: "Ayarlar" },
  ];
  return (
    <div
      className="mx-3 mb-3 h-12 rounded-xl flex items-center justify-between px-2 shadow"
      style={{ background: palette.surface }}
    >
      {items.map((it) => {
        if (it.id === "home") {
          return (
            <div key={it.id} className="flex flex-col items-center flex-1">
              <div className="w-9 h-9 rounded-full flex items-center justify-center -translate-y-3 bg-gradient-to-br from-[#2ECC8B] to-[#26b47a]">
                <HomeGlyph />
              </div>
              <div
                className="-translate-y-1 text-[8px] font-bold"
                style={{
                  color: active === "home" ? "#1A2B4A" : palette.textSoft,
                }}
              >
                {it.label}
              </div>
            </div>
          );
        }
        const isActive = active === it.id;
        return (
          <div key={it.id} className="flex flex-col items-center flex-1">
            <div
              className={clsx(
                "w-5 h-5 rounded",
                isActive ? "bg-[#1A2B4A]" : "bg-transparent border-2",
              )}
              style={{
                borderColor: isActive ? "transparent" : palette.textHint,
              }}
            />
            <div
              className="mt-1 text-[8px] font-bold"
              style={{ color: isActive ? "#1A2B4A" : palette.textHint }}
            >
              {it.label}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function HomeGlyph() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
      <path
        d="M4 10l8-6 8 6v9a2 2 0 01-2 2h-3v-6h-6v6H6a2 2 0 01-2-2v-9z"
        fill="white"
      />
    </svg>
  );
}

type Palette = {
  bg: string;
  surface: string;
  surfaceAlt: string;
  text: string;
  textSoft: string;
  textHint: string;
  brandSoft: string;
};

const lightPalette: Palette = {
  bg: "#F5F7FA",
  surface: "#FFFFFF",
  surfaceAlt: "#F0F2F5",
  text: "#1A2B4A",
  textSoft: "#64748B",
  textHint: "#ADB5C7",
  brandSoft: "#141A2B4A",
};

const darkPalette: Palette = {
  bg: "#0F1626",
  surface: "#1B2236",
  surfaceAlt: "#252D44",
  text: "#E6EAF2",
  textSoft: "#9AA6BE",
  textHint: "#6B7591",
  brandSoft: "#337AA0E8",
};

export { lightPalette, darkPalette, type Palette };
