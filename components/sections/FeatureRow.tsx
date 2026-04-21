"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { clsx } from "clsx";

/**
 * Yazı + telefon mockup ikili — sıralı bölümler için ortak iskelet.
 * reverse=true ikinci/dördüncü bölümlerde mockup'ı sola atar.
 */
export function FeatureRow({
  eyebrow,
  title,
  body,
  bullets,
  mockup,
  reverse = false,
  id,
}: {
  eyebrow?: string;
  title: string;
  body: string;
  bullets?: readonly string[];
  mockup: React.ReactNode;
  reverse?: boolean;
  id?: string;
}) {
  return (
    <section id={id} className="py-20 md:py-28 relative">
      <div
        className={clsx(
          "mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12 lg:gap-16 items-center",
          reverse && "md:[&>*:first-child]:order-2",
        )}
      >
        <motion.div
          initial={{ opacity: 0, x: reverse ? 40 : -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          {mockup}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {eyebrow && (
            <div className="text-xs font-extrabold uppercase tracking-widest text-accent mb-3">
              {eyebrow}
            </div>
          )}
          <h3 className="text-3xl md:text-5xl font-extrabold text-primary tracking-tight leading-tight">
            {title}
          </h3>
          <p className="mt-5 text-lg text-text-soft leading-relaxed">
            {body}
          </p>
          {bullets && bullets.length > 0 && (
            <ul className="mt-6 space-y-3">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-accent-soft text-accent inline-flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" strokeWidth={3} />
                  </span>
                  <span className="text-text leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          )}
        </motion.div>
      </div>
    </section>
  );
}
