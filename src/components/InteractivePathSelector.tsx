"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';
import { buildWhatsAppLink } from '@/config/siteConfig';
import { ArrowRight, CheckCircle2, Compass, Sparkles, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function InteractivePathSelector() {
  const { t, isZh } = useLanguage();
  const sec = t.chooseYourPath;
  const [selectedIdx, setSelectedIdx] = useState(0);

  const currentOption = sec.options[selectedIdx];

  const optionLetters = ['Option A', 'Option B', 'Option C', 'Option D', 'Option E'];

  return (
    <section className="py-24 lg:py-32 bg-[#FAF9F6] border-y border-[#E8E3DD]/80 relative overflow-hidden">
      {/* Subtle Refraction Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-gradient-to-r from-[#D5CEE0]/20 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-gradient-to-l from-[#B99C72]/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E8E3DD] text-[#2D233C] text-[10px] font-mono tracking-[0.2em] uppercase mb-4 shadow-[0_2px_8px_rgba(45,35,60,0.03)]">
            <Compass className="w-3.5 h-3.5 text-[#B99C72]" />
            <span>{sec.kicker}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2D233C] font-normal tracking-tight">
            {sec.title}
          </h2>
          <p className="mt-3.5 text-sm sm:text-base text-[#666070] leading-relaxed max-w-2xl font-sans">
            {sec.subtitle}
          </p>
        </motion.div>

        {/* 2-Column Luxury Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: 5 Inquiries */}
          <div className="lg:col-span-6 space-y-3">
            {sec.options.map((opt, idx) => {
              const active = idx === selectedIdx;
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setSelectedIdx(idx)}
                  className={`w-full text-left p-5 sm:p-6 rounded-[22px] border transition-all duration-300 flex items-start gap-4 ${
                    active
                      ? "bg-white border-[#ADA0BE] editorial-shadow-elevated -translate-y-0.5 ring-1 ring-[#ADA0BE]/30"
                      : "bg-white/70 border-[#E8E3DD] hover:bg-white hover:border-[#ADA0BE]/50"
                  }`}
                >
                  <span
                    className={`font-mono text-xs font-semibold px-2.5 py-1 rounded-md transition-colors mt-0.5 flex-shrink-0 ${
                      active
                        ? "bg-[#2D233C] text-white"
                        : "bg-[#F4EFEB] text-[#666070]"
                    }`}
                  >
                    {optionLetters[idx]}
                  </span>
                  <div className="flex-1">
                    <p
                      className={`text-sm sm:text-[15px] leading-relaxed ${
                        active ? "text-[#2D233C] font-medium" : "text-[#524B5C]"
                      }`}
                    >
                      {opt.goal}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Parchment Atelier Recommendation Card */}
          <div className="lg:col-span-6">
            <div className="sticky top-28 rounded-[28px] border border-[#ADA0BE]/50 bg-white p-8 sm:p-11 editorial-shadow-elevated relative overflow-hidden">
              {/* Lavender Light Refraction Halos */}
              <div className="absolute top-0 right-0 w-60 h-60 rounded-full bg-gradient-to-bl from-[#D5CEE0]/30 via-[#FAF9F6]/40 to-transparent blur-2xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-gradient-to-tr from-[#D9C3A3]/20 to-transparent blur-2xl pointer-events-none" />

              <div className="relative z-10 flex items-center justify-between mb-6 pb-4 border-b border-[#E8E3DD]/70">
                <span className="text-[10px] font-mono tracking-widest text-[#B99C72] uppercase flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#B99C72]" />
                  <span>{isZh ? "定制探索起点 · 非诊断性指引" : "RECOMMENDED STARTING PATHWAY"}</span>
                </span>
                <span className="text-xs font-mono text-[#ADA0BE]">
                  {optionLetters[selectedIdx]}
                </span>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentOption.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="space-y-4"
                >
                  <h3 className="relative z-10 font-serif text-2xl sm:text-3xl text-[#2D233C] font-normal leading-snug">
                    {currentOption.recommended}
                  </h3>

                  <p className="relative z-10 text-xs sm:text-sm text-[#58535F] leading-relaxed font-sans">
                    {currentOption.detail}
                  </p>
                </motion.div>
              </AnimatePresence>

              <div className="relative z-10 mt-8 pt-6 border-t border-[#E8E3DD]/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-[#666070]">
                  <CheckCircle2 className="w-4 h-4 text-[#A7B4A5] flex-shrink-0" />
                  <span>{isZh ? "支持全球线上及巴生实体咨询" : "Online & In-person available"}</span>
                </div>

                <div className="flex flex-wrap items-center gap-2.5">
                  <a
                    href={buildWhatsAppLink(currentOption.recommended, undefined, undefined, undefined, undefined, isZh)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-full bg-[#25D366] text-white text-xs font-medium hover:bg-[#20bd5a] transition-all shadow-2xs"
                  >
                    <MessageSquare className="w-3.5 h-3.5 fill-white" />
                    <span>{isZh ? "WhatsApp 快速私询" : "Ask on WhatsApp"}</span>
                  </a>

                  <Link
                    href={currentOption.link}
                    className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-full bg-[#FAF9F6] border border-[#E8E3DD] text-[#2D233C] text-xs font-medium hover:bg-white transition-all"
                  >
                    <span>{currentOption.actionText}</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>

              {/* Informational Navigator Disclaimer */}
              <p className="relative z-10 text-[10px] text-[#8E8795] mt-4 text-center font-sans">
                {isZh
                  ? "* 提示：本指引为探索性导航，不构成医学、心理学或精神科评估与诊断。"
                  : "* Note: Informational service navigator for personal exploration; does not constitute diagnostic assessment."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
