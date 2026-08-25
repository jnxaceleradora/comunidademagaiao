import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Flame, ArrowRight } from "lucide-react";

const STORAGE_KEY = "magaiao_offer_deadline";
const DURATION_MS = 24 * 60 * 60 * 1000; // 24h

const getDeadline = () => {
  if (typeof window === "undefined") return Date.now() + DURATION_MS;
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored) {
    const t = parseInt(stored, 10);
    if (!Number.isNaN(t) && t > Date.now()) return t;
  }
  const t = Date.now() + DURATION_MS;
  window.localStorage.setItem(STORAGE_KEY, String(t));
  return t;
};

const pad = (n: number) => String(n).padStart(2, "0");

const OfferSection = () => {
  const [deadline, setDeadline] = useState<number>(() => getDeadline());
  const [remaining, setRemaining] = useState<number>(() => Math.max(0, deadline - Date.now()));

  useEffect(() => {
    const id = setInterval(() => {
      const diff = deadline - Date.now();
      if (diff <= 0) {
        const next = Date.now() + DURATION_MS;
        window.localStorage.setItem(STORAGE_KEY, String(next));
        setDeadline(next);
        setRemaining(DURATION_MS);
      } else {
        setRemaining(diff);
      }
    }, 1000);
    return () => clearInterval(id);
  }, [deadline]);

  const hours = Math.floor(remaining / (1000 * 60 * 60));
  const minutes = Math.floor((remaining / (1000 * 60)) % 60);
  const seconds = Math.floor((remaining / 1000) % 60);

  const units = [
    { label: "Horas", value: pad(hours) },
    { label: "Minutos", value: pad(minutes) },
    { label: "Segundos", value: pad(seconds) },
  ];

  return (
    <section id="oferta" className="section-padding">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl border border-primary/40 bg-card p-5 text-center sm:p-8 md:p-12"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-24 -left-16 w-72 h-72 rounded-full bg-primary/25 blur-[110px]" />
            <div className="absolute -bottom-24 -right-16 w-72 h-72 rounded-full bg-accent/20 blur-[110px]" />
          </div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-primary/15 border border-primary/40 rounded-full px-4 py-1.5 mb-6">
              <Flame className="w-4 h-4 text-primary" />
              <span className="font-heading text-sm font-semibold text-primary tracking-wide uppercase">
                Oferta por tempo limitado
              </span>
            </div>

            <div className="flex flex-col items-center gap-1 mb-8">
              <span className="text-muted-foreground text-lg line-through">De R$ 114,00</span>
              <div className="font-heading text-3xl font-bold text-neon-cyan sm:text-4xl md:text-6xl">
                Por R$ 57,00
              </div>
              <span className="text-foreground/80 text-base md:text-lg">à vista</span>
              <span className="text-foreground/80 text-base font-medium md:text-lg">ou 12x de R$ 5,90</span>
            </div>

            <div className="mb-8 flex justify-center gap-2 sm:gap-3 md:gap-5">
              {units.map((u) => (
                <div
                  key={u.label}
                  className="min-w-0 flex-1 rounded-xl border border-primary/30 bg-background/70 px-2 py-3 sm:max-w-[100px] sm:px-4 md:px-6 md:py-4"
                >
                  <div className="font-heading text-2xl font-bold text-neon-pink tabular-nums sm:text-3xl md:text-5xl">
                    {u.value}
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider mt-1">
                    {u.label}
                  </div>
                </div>
              ))}
            </div>

            <motion.a
              href="https://pay.kiwify.com.br/YIynORR"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex w-full max-w-sm animate-pulse-btn items-center justify-center gap-3 rounded-lg bg-primary px-5 py-4 font-heading text-base font-semibold text-primary-foreground shadow-lg shadow-primary/40 sm:w-auto sm:px-10 sm:py-5 sm:text-lg"
            >
              Aproveitar a oferta
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OfferSection;
