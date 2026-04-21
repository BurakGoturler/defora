"use client";

import Image from "next/image";
import {
  BottomNav,
  lightPalette,
  darkPalette,
  type Palette,
} from "./DashboardScreen";
import { asset } from "@/lib/base-path";

export function ProfileScreen({ dark = false }: { dark?: boolean }) {
  const palette: Palette = dark ? darkPalette : lightPalette;
  return (
    <div
      className="h-full overflow-hidden flex flex-col"
      style={{ background: palette.bg }}
    >
      <div
        className="px-4 pt-10 pb-2 flex items-center justify-between"
        style={{ color: palette.text }}
      >
        <div className="text-sm font-extrabold">Profil</div>
        <div
          className="w-6 h-6 rounded-full flex items-center justify-center"
          style={{ background: palette.surface }}
        >
          <svg viewBox="0 0 24 24" fill="none" className="w-3 h-3">
            <path
              d="M3 17.25V21h3.75l11-11-3.75-3.75-11 11zm17.71-10.21a1 1 0 000-1.42l-2.33-2.33a1 1 0 00-1.42 0l-1.82 1.82 3.75 3.75 1.82-1.82z"
              fill={palette.text}
            />
          </svg>
        </div>
      </div>

      <div className="px-4 space-y-3 flex-1 overflow-hidden">
        {/* Top card */}
        <div
          className="rounded-xl p-3 flex items-center gap-3"
          style={{ background: palette.surface }}
        >
          <Image
            src={asset("/avatars/cartoon/cartoon_11.svg")}
            alt=""
            width={56}
            height={56}
          />
          <div className="min-w-0 flex-1">
            <div
              className="text-sm font-extrabold truncate"
              style={{ color: palette.text }}
            >
              Burak Aksu
            </div>
            <div
              className="text-[10px] truncate"
              style={{ color: palette.textSoft }}
            >
              UX Tasarımcı · Elbistan Yazılım
            </div>
            <div className="flex gap-1 mt-1.5">
              <span
                className="text-[9px] font-bold px-1.5 py-0.5 rounded-full"
                style={{ background: "#141A2B4A", color: "#1A2B4A" }}
              >
                Freelancer
              </span>
            </div>
          </div>
        </div>

        {/* Expandable cards */}
        {["İş Bilgileri", "İletişim Bilgileri", "Hedefler", "Başarılar"].map(
          (t) => (
            <div
              key={t}
              className="rounded-xl p-3 flex items-center justify-between"
              style={{ background: palette.surface }}
            >
              <div
                className="text-[11px] font-extrabold"
                style={{ color: palette.text }}
              >
                {t}
              </div>
              <div style={{ color: palette.textSoft }}>
                <svg viewBox="0 0 24 24" className="w-3 h-3" fill="currentColor">
                  <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6z" />
                </svg>
              </div>
            </div>
          ),
        )}

        <div
          className="mt-2 rounded-xl py-3 text-center text-[11px] font-extrabold border-2"
          style={{
            borderColor: palette.text,
            color: palette.text,
          }}
        >
          Profili Düzenle
        </div>
      </div>

      <BottomNav palette={palette} active="profile" />
    </div>
  );
}
