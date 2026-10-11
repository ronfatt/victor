"use client";

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { PlaceholderImage } from '@/components/PlaceholderImage';
import { BookingModal } from '@/components/BookingModal';
import {
  Car,
  Sparkles,
  Calendar,
  ArrowRight,
  AlertCircle,
  Building2,
  Compass
} from 'lucide-react';

export default function AccessChiPage() {
  const { t, isZh } = useLanguage();
  const sec = t.accessChiSection;
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <div className="py-16 sm:py-24 bg-[#FAF9F6] space-y-24 lg:space-y-36">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 space-y-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBE5F0] text-[#2D233C] text-[10px] font-mono tracking-[0.2em] uppercase">
              <Compass className="w-3.5 h-3.5 text-[#B99C72]" />
              <span>SPATIAL ALIGNMENT & SANCTUARY DESIGN</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#242129] font-normal leading-tight tracking-tight">
              {isZh ? "Access Chi 空间风水与场域重构" : "Access Chi Space Consultation"}
            </h1>

            <p className="font-serif text-base sm:text-lg text-[#B99C72] italic font-normal leading-relaxed">
              {isZh
                ? "“空间是人心的具象延展；当场域深呼吸一次，生活便多一分安然。”"
                : "“A room is the tangible extension of the mind; when the environment takes a deep breath, peace returns.”"}
            </p>

            <div className="space-y-4 text-sm sm:text-base text-[#58535F] leading-relaxed font-sans font-normal">
              <p>
                {sec.overview}
              </p>
            </div>

            {/* Non-EMF / Non-Medical Regulatory Disclaimer */}
            <div className="p-5 rounded-2xl bg-white border border-[#E8E3DD] flex items-start gap-3.5 text-xs text-[#66616F] editorial-shadow-subtle">
              <AlertCircle className="w-4 h-4 text-[#B99C72] flex-shrink-0 mt-0.5" />
              <div className="space-y-0.5">
                <span className="font-serif font-medium text-[#2D233C] block">
                  {isZh ? "合规与客观边界说明" : "Belief-Based Spatial Boundaries"}
                </span>
                <p className="leading-relaxed font-sans text-[11.5px]">
                  {sec.disclaimer}
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => setBookingOpen(true)}
                className="px-8 py-4 rounded-full bg-[#2D233C] text-white text-xs sm:text-sm font-medium hover:bg-[#443659] transition-all shadow-md flex items-center gap-2"
              >
                <Calendar className="w-4 h-4 text-[#D9C3A3]" />
                <span>{isZh ? "预约空间勘察意向咨询" : "Inquire Space Consultation"}</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <PlaceholderImage
              src="/images/access_chi_space.jpg"
              alt="Access Chi Spatial Resonance"
              label={isZh ? "Access Chi 空间场域勘察" : "Spatial Resonance & Alignment"}
              sublabel={isZh ? "住宅 · 商业 · 座驾专属仪式" : "Homes · Commercial · Vehicles"}
              aspectRatio="editorial"
              variant="space"
              archiveNo="CHI-SANCTUARY"
            />
          </div>
        </div>
      </section>

      {/* 3 Categories of Space Consultation */}
      <section className="bg-white border-y border-[#E8E3DD] py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#B99C72] font-semibold">
              PRACTICE CATEGORIES
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#2D233C] mt-2 font-normal">
              {isZh ? "三大空间实践范畴" : "Three Spatial Consultation Domains"}
            </h2>
            <p className="text-xs sm:text-sm text-[#66616F] mt-2 font-sans">
              {isZh ? "依不同生活与工作场域，施以针对性审视与仪式。" : "Tailored assessments and rituals suited to varied spatial environments."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {sec.categories.map((cat, i) => (
              <div
                key={i}
                className="p-8 sm:p-9 rounded-[24px] bg-[#FAF9F6] border border-[#E8E3DD] flex flex-col justify-between space-y-4 hover:border-[#ADA0BE] editorial-shadow-subtle hover:editorial-shadow-elevated transition-all duration-400"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white border border-[#E8E3DD] flex items-center justify-center text-[#2D233C] mb-5 shadow-2xs">
                    {i === 0 && <Building2 className="w-6 h-6 text-[#2D233C]" />}
                    {i === 1 && <Car className="w-6 h-6 text-[#B99C72]" />}
                    {i === 2 && <Sparkles className="w-6 h-6 text-[#ADA0BE]" />}
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl text-[#2D233C] font-normal">
                    {cat.title}
                  </h3>
                  <span className="text-[10px] font-mono tracking-widest text-[#B99C72] uppercase block mb-3.5">
                    {cat.en}
                  </span>

                  <p className="text-xs sm:text-[13px] text-[#58535F] leading-relaxed font-sans">
                    {cat.desc}
                  </p>
                </div>

                <div className="pt-5 border-t border-[#E8E3DD]/70">
                  <span className="text-[10.5px] font-mono text-[#8E8795]">
                    {isZh ? "* 依实际坪数与平面图现场评估" : "* Custom scope based on architectural layout"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Illustrative 2-Visit Process */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto p-8 sm:p-12 rounded-[28px] bg-white border border-[#E8E3DD] space-y-8 editorial-shadow-subtle">
          <div className="text-center max-w-xl mx-auto">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#B99C72] font-semibold">
              ILLUSTRATIVE CONSULTATION PROCESS
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#2D233C] mt-1 font-normal">
              {isZh ? "标准双阶段实地走访流程" : "Standard Two-Visit Procedure"}
            </h3>
            <p className="text-xs text-[#8E8795] mt-1.5 font-sans">
              {isZh
                ? "说明：以下为常规流程范例，实际安排与步骤需视个案空间现场由老师确定。"
                : "Notice: An illustrative framework; actual scope depends on custom spatial evaluation."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sec.processSteps.map((step, idx) => (
              <div key={idx} className="p-7 rounded-[22px] bg-[#FAF9F6] border border-[#E8E3DD] space-y-3">
                <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded-md bg-white border border-[#E8E3DD] text-[#2D233C]">
                  {step.step}
                </span>
                <h4 className="font-serif text-lg text-[#2D233C] font-normal">
                  {step.title}
                </h4>
                <p className="text-xs text-[#58535F] leading-relaxed font-sans">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-4 text-center">
            <button
              type="button"
              onClick={() => setBookingOpen(true)}
              className="px-8 py-4 rounded-full bg-[#2D233C] text-white text-xs font-medium hover:bg-[#443659] transition-all shadow-md inline-flex items-center gap-2"
            >
              <span>{isZh ? "提交空间风水咨询意向" : "Request Space Alignment"}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        defaultService="Access Chi 空间风水实地勘察"
      />
    </div>
  );
}
