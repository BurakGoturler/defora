"use client";

import { motion } from "framer-motion";
import { Shield, Download, Settings2 } from "lucide-react";
import { type Dict } from "@/lib/dictionaries";

const ICONS = [Shield, Download, Settings2];

export function PrivacySection({ dict }: { dict: Dict["privacy"] }) {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <div className="text-xs font-extrabold uppercase tracking-widest text-accent mb-3">
            07 · Gizlilik
          </div>
          <h3 className="text-3xl md:text-5xl font-extrabold text-primary tracking-tight leading-tight">
            {dict.title}
          </h3>
          <p className="mt-4 text-lg text-text-soft leading-relaxed">
            {dict.body}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {dict.bullets.map((b, i) => {
            const Icon = ICONS[i] ?? Shield;
            return (
              <motion.div
                key={b}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-surface border border-border rounded-2xl p-6 flex flex-col items-center text-center"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-sm font-semibold text-text leading-relaxed">
                  {b}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
