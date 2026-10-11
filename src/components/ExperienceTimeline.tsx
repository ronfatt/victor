"use client";

import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ShieldCheck, MapPin, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export function ExperienceTimeline() {
  const { t, isZh } = useLanguage();
  const sec = t.timelineSection;
  const [selectedMilestone, setSelectedMilestone] = useState<number | null>(null);

  return (
    <div className="space-y-8">
      {/* Archival Ledger Notice */}
      <div className="p-5 rounded-2xl bg-white border border-[#E8E3DD] flex items-start gap-3.5 text-xs text-[#58535F] editorial-shadow-subtle">
        <AlertCircle className="w-4 h-4 text-[#B99C72] flex-shrink-0 mt-0.5" />
        <div className="space-y-0.5">
          <span className="font-serif font-medium text-[#2D233C] block">
            {isZh ? "教学史料与受教资历核验原则" : "Archival Verification Protocol"}
          </span>
          <p className="leading-relaxed font-sans text-[11.5px] text-[#66616F]">
            {sec.verificationNotice}
          </p>
        </div>
      </div>

      {/* Vertical Archival Stream */}
      <div className="relative pl-6 sm:pl-10 border-l border-[#ADA0BE]/40 space-y-7 my-8">
        {sec.milestones.map((m, idx) => {
          const isSelected = selectedMilestone === idx;

          return (
            <motion.div
              key={m.year + idx}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              onClick={() => setSelectedMilestone(isSelected ? null : idx)}
              className="relative group cursor-pointer"
            >
              {/* Refined Node Point with Halo */}
              <div
                className={`absolute -left-[31px] sm:-left-[47px] top-3 w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                  isSelected
                    ? "bg-[#2D233C] border-[#B99C72] scale-125 shadow-xs"
                    : "bg-[#FAF9F6] border-[#ADA0BE] group-hover:border-[#2D233C]"
                }`}
              />

              {/* Milestone Parchment Card */}
              <div
                className={`p-6 sm:p-7 rounded-[22px] border transition-all duration-300 ${
                  isSelected
                    ? "bg-white border-[#ADA0BE] editorial-shadow-elevated ring-1 ring-[#ADA0BE]/40"
                    : "bg-white/70 border-[#E8E3DD] hover:bg-white hover:border-[#ADA0BE]/40 hover:-translate-y-0.5"
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-3 mb-2.5">
                  <div className="flex items-center gap-3">
                    <span className="font-serif text-xl sm:text-2xl font-normal tracking-wide text-[#2D233C]">
                      {m.year}
                    </span>
                    {m.location && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-mono text-[#8E8795]">
                        <MapPin className="w-3 h-3 text-[#B99C72]" />
                        {m.location}
                      </span>
                    )}
                  </div>

                  {/* Formal Verification Badge */}
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF9F6] border border-[#E8E3DD] text-[9.5px] font-mono text-[#66616F]">
                    <ShieldCheck className="w-3 h-3 text-[#B99C72]" />
                    <span>{m.verificationBadge}</span>
                  </span>
                </div>

                <h4 className="font-serif text-base sm:text-lg text-[#2D233C] font-normal leading-snug">
                  {m.title}
                </h4>

                <p className="mt-2 text-xs sm:text-[13px] text-[#58535F] leading-relaxed font-sans">
                  {m.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
