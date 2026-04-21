"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { PhoneMockup } from "@/components/mock/PhoneMockup";
import { DashboardScreen } from "@/components/mock/DashboardScreen";
import { type Dict } from "@/lib/dictionaries";

export function ThemeSection({ dict }: { dict: Dict["theme"] }) {
  const [isDark, setIsDark] = useState(false);

  return (
    <section id="theme" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-xs font-extrabold uppercase tracking-widest text-accent mb-3">
            05 · Tema
          </div>
          <h3 className="text-3xl md:text-5xl font-extrabold text-primary tracking-tight leading-tight">
            {dict.title}
          </h3>
          <p className="mt-5 text-lg text-text-soft leading-relaxed">
            {dict.body}
          </p>

          <div className="inline-flex mt-8 bg-surface-alt rounded-full p-1 gap-1">
            <button
              onClick={() => setIsDark(false)}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm transition ${
                !isDark
                  ? "bg-white text-primary shadow-sm"
                  : "text-text-soft hover:text-primary"
              }`}
            >
              <Sun className="w-4 h-4" />
              {dict.light}
            </button>
            <button
              onClick={() => setIsDark(true)}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm transition ${
                isDark
                  ? "bg-[#1a2b4a] text-white shadow-sm"
                  : "text-text-soft hover:text-primary"
              }`}
            >
              <Moon className="w-4 h-4" />
              {dict.dark}
            </button>
          </div>
        </motion.div>

        <div className="flex justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={isDark ? "dark" : "light"}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.3 }}
            >
              <PhoneMockup dark={isDark}>
                <DashboardScreen dark={isDark} animate />
              </PhoneMockup>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
