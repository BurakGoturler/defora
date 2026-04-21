"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight, Clock4 } from "lucide-react";
import { type Dict } from "@/lib/dictionaries";
import { PhoneMockup } from "@/components/mock/PhoneMockup";
import { DashboardScreen } from "@/components/mock/DashboardScreen";

export function Hero({ dict }: { dict: Dict["hero"] }) {
  return (
    <section className="relative overflow-hidden">
      {/* Ambient gradient blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-accent/15 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6 pt-16 pb-24 md:pt-24 md:pb-32 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-accent-soft text-accent text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            {dict.tag}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-4 mb-6"
          >
            <Image
              src="/brand/logo.gif"
              alt="Defora"
              width={72}
              height={72}
              unoptimized
              className="rounded-2xl shadow-lg"
            />
            <h1 className="text-4xl md:text-6xl font-extrabold text-primary leading-[1.05] tracking-tight">
              Defora
            </h1>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl md:text-4xl font-bold text-text leading-tight mb-5 max-w-xl"
          >
            {dict.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-text-soft leading-relaxed max-w-xl mb-8"
          >
            {dict.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <button
              disabled
              className="inline-flex items-center justify-center gap-2 bg-primary text-white font-bold px-6 py-4 rounded-xl shadow-md opacity-70 cursor-not-allowed relative"
            >
              <Clock4 className="w-5 h-5" />
              {dict.ctaPrimary}
            </button>
            <a
              href="#pitch"
              className="inline-flex items-center justify-center gap-2 bg-white border-2 border-border text-primary font-bold px-6 py-4 rounded-xl hover:border-primary transition"
            >
              {dict.ctaSecondary}
              <ChevronRight className="w-5 h-5" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-4 text-xs text-text-hint font-medium"
          >
            {dict.comingSoon}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex justify-center md:justify-end"
        >
          <PhoneMockup>
            <DashboardScreen animate />
          </PhoneMockup>
        </motion.div>
      </div>
    </section>
  );
}
