"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { PlaceholderImage } from '@/components/PlaceholderImage';
import { ExperienceTimeline } from '@/components/ExperienceTimeline';
import { BookingModal } from '@/components/BookingModal';
import { buildWhatsAppLink } from '@/config/siteConfig';
import {
  Compass,
  MapPin,
  Globe,
  ShieldCheck,
  Calendar,
  MessageSquare
} from 'lucide-react';

export default function AboutPage() {
  const { t, isZh } = useLanguage();
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <div className="py-16 sm:py-24 bg-[#FAF9F6] space-y-24 lg:space-y-36">
      {/* Hero Monograph Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column Text */}
          <div className="lg:col-span-7 space-y-7">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#EBE5F0] text-[#2D233C] text-[10px] font-mono tracking-[0.2em] uppercase">
              <div className="relative w-3.5 h-3.5 flex-shrink-0">
                <Image
                  src="/images/logo.png"
                  alt="Logo Emblem"
                  width={14}
                  height={22}
                  className="w-auto h-full object-contain"
                />
              </div>
              <span>THE PERSON BEHIND THE PRACTICE</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#242129] font-normal leading-tight tracking-tight">
              {isZh ? "关于 Mikhael Victor 老师" : "Meet Mikhael Victor"}
            </h1>

            <p className="font-serif text-base sm:text-lg text-[#B99C72] italic font-normal leading-relaxed">
              {isZh
                ? "“回到内在，不在于远离生活，而是在柴米油盐中保有明澈的觉察。”"
                : "“Returning within is not escaping the world; it is seeing ourselves with crystal clarity amid ordinary life.”"}
            </p>

            <div className="space-y-4 text-sm sm:text-base text-[#58535F] leading-relaxed font-sans font-normal">
              <p>
                {t.aboutPreview.p1}
              </p>
              <p>
                {t.aboutPreview.p2}
              </p>
            </div>

            {/* Credential integrity note */}
            <div className="p-5 rounded-2xl bg-white border border-[#E8E3DD] flex items-start gap-3.5 text-xs text-[#66616F] editorial-shadow-subtle">
              <ShieldCheck className="w-4 h-4 text-[#B99C72] flex-shrink-0 mt-0.5" />
              <div className="space-y-0.5">
                <span className="font-serif font-medium text-[#2D233C] block">
                  {isZh ? "专业自律与资料核查说明" : "Integrity & Archiving Standard"}
                </span>
                <p className="leading-relaxed font-sans text-[11.5px]">
                  {t.aboutPreview.credentialNote}
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <button
                type="button"
                onClick={() => setBookingOpen(true)}
                className="px-8 py-4 rounded-full bg-[#2D233C] text-white text-xs sm:text-sm font-medium hover:bg-[#443659] transition-all shadow-md flex items-center gap-2"
              >
                <Calendar className="w-4 h-4 text-[#D9C3A3]" />
                <span>{t.cta.bookSession}</span>
              </button>

              <a
                href={buildWhatsAppLink("导师生平与咨询私询", undefined, undefined, undefined, undefined, isZh)}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 rounded-full bg-[#25D366] text-white text-xs sm:text-sm font-medium hover:bg-[#20bd5a] transition-all shadow-md flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>{isZh ? "WhatsApp 直接私询" : "Ask on WhatsApp"}</span>
              </a>

              <Link
                href="/sessions"
                className="px-7 py-4 rounded-full bg-white border border-[#E8E3DD] text-[#2D233C] text-xs sm:text-sm font-medium hover:border-[#ADA0BE] transition-all"
              >
                {t.cta.viewPricing}
              </Link>
            </div>
          </div>

          {/* Right Column Portrait Placeholder */}
          <div className="lg:col-span-5">
            <PlaceholderImage
              src="/images/mentor_portrait.jpg"
              alt="Mikhael Victor Portrait"
              label="Mikhael Victor"
              sublabel={isZh ? "常驻马来西亚巴生 · 研习与咨询" : "Based in Klang, Malaysia · Study & Guidance"}
              aspectRatio="portrait"
              variant="portrait"
              archiveNo="MV-BIO"
            />
          </div>
        </div>
      </section>

      {/* Teaching Locations & International Trace (Archival Itinerary) */}
      <section className="bg-white border-y border-[#E8E3DD] py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBE5F0] text-[#2D233C] text-[10px] font-mono tracking-[0.2em] uppercase mb-4">
              <Globe className="w-3.5 h-3.5 text-[#B99C72]" />
              <span>{t.teachingLocations.kicker}</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#2D233C] font-normal">
              {t.teachingLocations.title}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#66616F] font-sans">
              {t.teachingLocations.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            {/* Domestic Malaysia Footsteps */}
            <div className="p-8 sm:p-9 rounded-[24px] bg-[#FAF9F6] border border-[#E8E3DD] editorial-shadow-subtle">
              <span className="text-[10.5px] font-mono font-semibold uppercase tracking-widest text-[#B99C72] block mb-4">
                {isZh ? "马来西亚国内讲学地点" : "MALAYSIA DOMESTIC WORKSHOPS"}
              </span>
              <ul className="space-y-3.5 text-xs sm:text-sm text-[#2D233C] font-sans">
                {t.teachingLocations.domestic.map((loc, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-[#ADA0BE] flex-shrink-0" />
                    <span>{loc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* International Footsteps */}
            <div className="p-8 sm:p-9 rounded-[24px] bg-[#FAF9F6] border border-[#E8E3DD] editorial-shadow-subtle">
              <span className="text-[10.5px] font-mono font-semibold uppercase tracking-widest text-[#ADA0BE] block mb-4">
                {isZh ? "海外研习与分享城市" : "INTERNATIONAL TEACHING TRACE"}
              </span>
              <ul className="space-y-3.5 text-xs sm:text-sm text-[#2D233C] font-sans">
                {t.teachingLocations.international.map((loc, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Globe className="w-4 h-4 text-[#B99C72] flex-shrink-0" />
                    <span>{loc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="text-xs text-[#8E8795] leading-relaxed max-w-3xl font-sans">
            {t.teachingLocations.note}
          </p>
        </div>
      </section>

      {/* Qualifications & History Timeline */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBE5F0] text-[#2D233C] text-[10px] font-mono tracking-[0.2em] uppercase mb-4">
            <span>QUALIFICATIONS & LINEAGE</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#2D233C] font-normal">
            {isZh ? "研修传承与实践年表" : "Education & Apprenticeship History"}
          </h2>
          <p className="mt-3 text-sm text-[#66616F] font-sans">
            {isZh
              ? "严格恪守事实，不杜撰未经核实的官方证书或虚构奖项。"
              : "Strictly factual reporting of teacher lineage; pending formal document archiving."}
          </p>
        </div>

        <ExperienceTimeline />
      </section>

      {/* Philosophy Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[32px] bg-gradient-to-tr from-[#1E1729] via-[#2D233C] to-[#1E1729] text-white p-10 sm:p-16 text-center space-y-7 relative overflow-hidden">
          <span className="text-[10px] font-mono uppercase tracking-[0.24em] text-[#D9C3A3] font-semibold">
            CORE MENTORING PHILOSOPHY
          </span>
          <h3 className="font-serif text-2xl sm:text-4xl lg:text-5xl max-w-3xl mx-auto leading-relaxed font-normal">
            {isZh
              ? "“真正的灵性不使人迷离恍惚，而是让你双脚踩在大地上，看清每一个选择。”"
              : "“Authentic spirituality does not detach you from reality; it places your feet firmly on the earth to see every choice clearly.”"}
          </h3>
          <div className="pt-2 flex justify-center">
            <button
              type="button"
              onClick={() => setBookingOpen(true)}
              className="px-8 py-3.5 rounded-full bg-white text-[#2D233C] text-xs sm:text-sm font-medium hover:bg-[#FAF9F6] transition-colors shadow-sm"
            >
              {isZh ? "预约与老师面对面交流" : "Schedule a Private Dialogue"}
            </button>
          </div>
        </div>
      </section>

      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
}
