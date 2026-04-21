"use client";

import { motion } from "framer-motion";
import { Users, Workflow, LineChart, Target } from "lucide-react";
import { type Dict } from "@/lib/dictionaries";

const ICONS = [Users, Workflow, LineChart, Target];

export function Pitch({ dict }: { dict: Dict["pitch"] }) {
  return (
    <section id="pitch" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary tracking-tight leading-tight">
            {dict.title}
          </h2>
          <p className="mt-4 text-lg text-text-soft leading-relaxed">
            {dict.lede}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {dict.features.map((f, i) => {
            const Icon = ICONS[i];
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-surface rounded-2xl p-6 border border-border hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-accent-soft text-accent flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="font-extrabold text-primary mb-1">
                  {f.title}
                </div>
                <div className="text-sm text-text-soft leading-relaxed">
                  {f.body}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
