"use client";

import { motion } from "framer-motion";
import { type Dict } from "@/lib/dictionaries";

export function AchievementsSection({ dict }: { dict: Dict["achievements"] }) {
  return (
    <section className="py-20 md:py-28 bg-surface">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <div className="text-xs font-extrabold uppercase tracking-widest text-accent mb-3">
            06 · Başarılar
          </div>
          <h3 className="text-3xl md:text-5xl font-extrabold text-primary tracking-tight leading-tight">
            {dict.title}
          </h3>
          <p className="mt-4 text-lg text-text-soft leading-relaxed">
            {dict.body}
          </p>
        </motion.div>

        <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-4">
          {dict.items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.45,
                delay: i * 0.05,
                type: "spring",
                stiffness: 180,
              }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#2ecc8b] to-[#26b47a] flex items-center justify-center shadow-lg shadow-accent/30">
                <span className="text-3xl">{it.emoji}</span>
              </div>
              <div className="mt-2 text-xs font-bold text-primary leading-tight">
                {it.title}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
