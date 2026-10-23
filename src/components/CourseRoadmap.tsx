"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';
import { Calendar, Lock, ChevronRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface CourseRoadmapProps {
  onSelectLevel?: (levelTitle: string) => void;
}

export function CourseRoadmap({ onSelectLevel }: CourseRoadmapProps) {
  const { t, isZh } = useLanguage();
  const sec = t.isgaSummary;
  const [activeLevel, setActiveLevel] = useState<number>(0);

  return (
    <div className="space-y-8">
      {/* Visual Level Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sec.levels.map((lvl, idx) => {
          const isSelected = activeLevel === idx;
          const isUndisclosed = lvl.levelNumber === "05";

          return (
            <div
              key={lvl.levelNumber}
              onClick={() => setActiveLevel(idx)}
              className={`p-7 rounded-[22px] border transition-all duration-400 cursor-pointer relative overflow-hidden flex flex-col justify-between ${
                isSelected
                  ? "bg-white border-[#ADA0BE] editorial-shadow-elevated ring-1 ring-[#ADA0BE]/50 -translate-y-1"
                  : "bg-white/70 border-[#E8E3DD] hover:bg-white hover:border-[#ADA0BE]/40 hover:-translate-y-0.5"
              }`}
            >
              <div>
                {/* Level Index & Status Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded-md bg-[#FAF9F6] border border-[#E8E3DD] text-[#2D233C]">
                    STAGE {lvl.levelNumber}
                  </span>
                  {isUndisclosed ? (
                    <span className="inline-flex items-center gap-1 text-[9.5px] uppercase font-mono tracking-wider text-[#ADA0BE] bg-[#FAF9F6] px-2.5 py-0.5 rounded-full border border-[#E8E3DD]">
                      <Lock className="w-2.5 h-2.5" />
                      {isZh ? "实修未公开" : "Undisclosed"}
                    </span>
                  ) : (
                    <span className="text-[10px] font-mono text-[#B99C72] tracking-wider">
                      CURRICULUM
                    </span>
                  )}
                </div>

                <h3 className="font-serif text-xl text-[#2D233C] font-normal leading-snug">
                  {lvl.title}
                </h3>
                {lvl.subtitle && (
                  <p className="text-[11px] text-[#ADA0BE] font-mono tracking-wide mt-1 mb-3.5">
                    {lvl.subtitle}
                  </p>
                )}

                {lvl.image && (
                  <div className="my-3.5 rounded-xl overflow-hidden aspect-[16/10] relative border border-[#E8E3DD]">
                    <Image
                      src={lvl.image}
                      alt={lvl.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                )}

                <p className="text-xs text-[#66616F] leading-relaxed line-clamp-4 font-sans whitespace-pre-line mt-2">
                  {lvl.description}
                </p>
              </div>

              {/* Card Footer Format & Prerequisite */}
              {(lvl.format || lvl.prerequisite) && (
                <div className="mt-6 pt-4 border-t border-[#E8E3DD]/70 text-[11px] text-[#58535F] space-y-1.5">
                  {lvl.format && (
                    <div className="flex items-center gap-1.5 text-[#2D233C] font-medium font-sans">
                      <Calendar className="w-3.5 h-3.5 text-[#B99C72] flex-shrink-0" />
                      <span>{lvl.format}</span>
                    </div>
                  )}
                  {lvl.prerequisite && (
                    <div className="text-[10.5px] text-[#8E8795] truncate font-sans">
                      {isZh ? "前置条件：" : "Prereq: "}{lvl.prerequisite}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Selected Level Deep-Dive Highlight Box */}
      <div className="p-7 sm:p-9 rounded-[26px] bg-gradient-to-r from-[#F6F3F9] via-white to-[#FAF9F6] border border-[#ADA0BE]/40 editorial-shadow-subtle flex flex-col md:flex-row md:items-start justify-between gap-6 relative overflow-hidden">
        {/* Subtle Ethereal Refraction Accent */}
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-gradient-to-bl from-[#D5CEE0]/20 to-transparent blur-2xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl flex-1">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#B99C72]" />
            <span className="text-[10px] font-mono font-semibold uppercase tracking-[0.2em] text-[#ADA0BE]">
              {isZh ? "当前检视修习阶段" : "FOCUSED CURRICULUM STAGE"} · STAGE {sec.levels[activeLevel].levelNumber}
            </span>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={sec.levels[activeLevel].levelNumber}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <h4 className="font-serif text-2xl text-[#2D233C] font-normal">
                {sec.levels[activeLevel].title}
              </h4>
              <p className="text-xs sm:text-sm text-[#58535F] mt-3 leading-relaxed font-sans whitespace-pre-line">
                {sec.levels[activeLevel].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="relative z-10 flex flex-col items-start md:items-end gap-4 self-start md:self-auto flex-shrink-0">
          {sec.levels[activeLevel].image && (
            <div className="w-28 sm:w-32 aspect-square rounded-2xl overflow-hidden relative border border-[#E8E3DD] shadow-sm">
              <Image
                src={sec.levels[activeLevel].image!}
                alt={sec.levels[activeLevel].title}
                fill
                sizes="128px"
                className="object-cover"
              />
            </div>
          )}

          {onSelectLevel && (
            <button
              type="button"
              onClick={() => onSelectLevel(sec.levels[activeLevel].title)}
              className="px-6 py-3 rounded-full bg-[#2D233C] text-white text-xs font-medium hover:bg-[#443659] transition-all shadow-sm flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <span>{isZh ? "咨询此修习阶段排程" : "Inquire Stage Schedule"}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
