"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Clock4, ArrowUp } from "lucide-react";
import { type Dict } from "@/lib/dictionaries";
import { asset } from "@/lib/base-path";

export function CTASection({ dict }: { dict: Dict["cta"] }) {
  return (
    <section
      id="cta"
      className="py-20 md:py-28 relative overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-accent/15 blur-3xl" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-3xl px-6 text-center"
      >
        <div className="inline-flex mb-6">
          <Image
            src={asset("/brand/logo.gif")}
            alt="Defora"
            width={96}
            height={96}
            unoptimized
            className="rounded-3xl shadow-2xl shadow-accent/30"
          />
        </div>
        <h3 className="text-3xl md:text-5xl font-extrabold text-primary tracking-tight leading-tight">
          {dict.title}
        </h3>
        <p className="mt-4 text-lg text-text-soft leading-relaxed">
          {dict.body}
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <button
            disabled
            className="inline-flex items-center justify-center gap-2 bg-primary text-white font-bold px-7 py-4 rounded-xl shadow-md opacity-70 cursor-not-allowed"
          >
            <Clock4 className="w-5 h-5" />
            {dict.primary}
          </button>
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 bg-white border-2 border-border text-primary font-bold px-7 py-4 rounded-xl hover:border-primary transition"
          >
            <ArrowUp className="w-5 h-5" />
            {dict.secondary}
          </a>
        </div>
      </motion.div>
    </section>
  );
}
