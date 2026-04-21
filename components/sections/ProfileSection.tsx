"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { type Dict } from "@/lib/dictionaries";
import { asset } from "@/lib/base-path";
import { PROFESSION_AVATARS } from "@/lib/profession-avatars";

type Tab = "cartoon" | "profession";

export function ProfileSection({ dict }: { dict: Dict["profile"] }) {
  const [tab, setTab] = useState<Tab>("cartoon");

  const cartoonIds = Array.from(
    { length: 60 },
    (_, i) => `cartoon_${String(i + 1).padStart(2, "0")}`,
  );

  // İki satır için yarı yarıya böl.
  const half = (n: number) => Math.ceil(n / 2);

  const rowA =
    tab === "cartoon"
      ? cartoonIds.slice(0, 30)
      : PROFESSION_AVATARS.slice(0, half(PROFESSION_AVATARS.length));
  const rowB =
    tab === "cartoon"
      ? cartoonIds.slice(30, 60)
      : PROFESSION_AVATARS.slice(half(PROFESSION_AVATARS.length));

  return (
    <section id="avatars" className="py-20 md:py-28 overflow-hidden bg-surface">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-10"
        >
          <div className="text-xs font-extrabold uppercase tracking-widest text-accent mb-3">
            04 · Profil
          </div>
          <h3 className="text-3xl md:text-5xl font-extrabold text-primary tracking-tight leading-tight">
            {dict.title}
          </h3>
          <p className="mt-4 text-lg text-text-soft leading-relaxed">
            {dict.body}
          </p>

          {/* Interaktif tab switcher */}
          <div className="inline-flex items-center gap-1 mt-6 bg-surface-alt rounded-full p-1 text-sm font-bold">
            <button
              onClick={() => setTab("cartoon")}
              className={`px-5 py-2 rounded-full transition ${
                tab === "cartoon"
                  ? "bg-white text-primary shadow-sm"
                  : "text-text-soft hover:text-primary"
              }`}
            >
              {dict.tabs.cartoon}
            </button>
            <button
              onClick={() => setTab("profession")}
              className={`px-5 py-2 rounded-full transition ${
                tab === "profession"
                  ? "bg-white text-primary shadow-sm"
                  : "text-text-soft hover:text-primary"
              }`}
            >
              {dict.tabs.profession}
            </button>
          </div>
        </motion.div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={tab}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.3 }}
        >
          {tab === "cartoon" ? (
            <>
              <CartoonMarquee ids={rowA as string[]} reverse={false} />
              <CartoonMarquee ids={rowB as string[]} reverse={true} />
            </>
          ) : (
            <>
              <ProfessionMarquee
                items={rowA as typeof PROFESSION_AVATARS}
                reverse={false}
              />
              <ProfessionMarquee
                items={rowB as typeof PROFESSION_AVATARS}
                reverse={true}
              />
            </>
          )}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}

function CartoonMarquee({
  ids,
  reverse,
}: {
  ids: string[];
  reverse: boolean;
}) {
  const stream = [...ids, ...ids];
  return (
    <div className="relative py-3 overflow-hidden">
      <motion.div
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="flex gap-3 w-max"
      >
        {stream.map((id, idx) => (
          <div
            key={`${id}-${idx}`}
            className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white border border-border overflow-hidden shrink-0 p-1 shadow-sm hover:scale-110 hover:shadow-lg transition-transform"
          >
            <Image
              src={asset(`/avatars/cartoon/${id}.svg`)}
              alt=""
              width={80}
              height={80}
              unoptimized
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

function ProfessionMarquee({
  items,
  reverse,
}: {
  items: typeof PROFESSION_AVATARS;
  reverse: boolean;
}) {
  const stream = [...items, ...items];
  return (
    <div className="relative py-3 overflow-hidden">
      <motion.div
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="flex gap-3 w-max"
      >
        {stream.map((p, idx) => {
          const Icon = p.Icon;
          return (
            <div
              key={`${p.id}-${idx}`}
              className="w-16 h-16 md:w-20 md:h-20 rounded-2xl border border-border shrink-0 flex items-center justify-center shadow-sm hover:scale-110 hover:shadow-lg transition-transform"
              style={{ background: p.bg }}
            >
              <Icon
                className="w-7 h-7 md:w-8 md:h-8"
                style={{ color: p.fg }}
                strokeWidth={2}
              />
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
