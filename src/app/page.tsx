"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { PlaceholderImage } from '@/components/PlaceholderImage';
import { InteractivePathSelector } from '@/components/InteractivePathSelector';
import { CourseRoadmap } from '@/components/CourseRoadmap';
import { ExperienceTimeline } from '@/components/ExperienceTimeline';
import { BookingModal } from '@/components/BookingModal';
import { ArticleModal } from '@/components/ArticleModal';
import { InsightArticle } from '@/types/content';
import { buildWhatsAppLink } from '@/config/siteConfig';
import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  Clock,
  MapPin,
  Globe,
  ArrowUpRight,
  ShieldCheck,
  Flower2,
  Layers,
  SunMedium,
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function HomePage() {
  const { t, isZh } = useLanguage();
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);
  const [activeArticle, setActiveArticle] = useState<InsightArticle | null>(null);

  const openBookingWithService = (serviceName?: string) => {
    setSelectedService(serviceName);
    setBookingOpen(true);
  };

  return (
    <div className="space-y-0 selection:bg-[#EBE5F0] selection:text-[#2D233C]">
      {/* ========================================================
          SECTION 1: HERO (EDITORIAL COMPOSITION)
          Generous whitespace, asymmetrical editorial layout,
          subtle lavender light refraction halo
         ======================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#FAF9F6] via-[#FAF9F6] to-[#F5F1EB] pt-8 pb-14 sm:pt-16 sm:pb-24 lg:pt-24 lg:pb-36 border-b border-[#E8E3DD]/80">
        {/* Subtle Lavender & Champagne Light Refraction Caustics */}
        <div className="absolute top-1/4 right-[8%] w-[520px] h-[520px] rounded-full bg-gradient-to-br from-[#D5CEE0]/25 via-[#EBE5F0]/15 to-transparent blur-3xl pointer-events-none" />
        <div className="absolute top-12 left-[5%] w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-[#D9C3A3]/20 via-[#FAF9F6]/10 to-transparent blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Architectural Typography & CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 space-y-6 sm:space-y-7"
            >
              {/* Refined Eyebrow */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#E8E3DD] text-[10px] font-mono tracking-[0.22em] text-[#2D233C] uppercase shadow-2xs backdrop-blur-xs">
                <div className="relative w-3.5 h-3.5 overflow-hidden flex-shrink-0">
                  <Image
                    src="/images/logo.png"
                    alt="Logo"
                    width={14}
                    height={22}
                    className="w-auto h-full object-contain"
                  />
                </div>
                <span>{t.hero.eyebrow}</span>
              </div>

              {/* Main Editorial Headline */}
              <h1 className="font-serif text-3xl sm:text-6xl lg:text-[68px] text-[#242129] font-normal leading-[1.14] tracking-tight">
                {t.hero.headlineLine1}
                <br />
                <span className="italic text-[#2D233C] font-light">
                  {t.hero.headlineLine2}
                </span>
              </h1>

              {/* Tagline Subtitle */}
              <p className="font-serif text-xs sm:text-sm tracking-[0.2em] uppercase text-[#B99C72] font-medium">
                {t.hero.taglineEn}
              </p>

              {/* Lead Paragraph */}
              <p className="text-xs sm:text-base text-[#58535F] leading-relaxed max-w-xl font-sans font-normal">
                {t.hero.intro}
              </p>

              {/* Action Buttons - App Native Full Width on Mobile */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <button
                  type="button"
                  onClick={() => openBookingWithService()}
                  className="w-full sm:w-auto px-8 py-3.5 sm:py-4 rounded-full bg-[#2D233C] text-white text-xs sm:text-[13px] font-medium tracking-wide shadow-md hover:bg-[#443659] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2.5"
                >
                  <Calendar className="w-4 h-4 text-[#D9C3A3]" />
                  <span>{t.cta.bookSession}</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </button>

                <a
                  href={buildWhatsAppLink(undefined, undefined, undefined, undefined, undefined, isZh)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-7 py-3.5 sm:py-4 rounded-full bg-[#25D366] text-white text-xs sm:text-[13px] font-medium shadow-sm hover:bg-[#20bd5a] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>{isZh ? "WhatsApp 快速私询" : "Direct WhatsApp"}</span>
                </a>
              </div>

              {/* Mobile Quick-Jump Discipline Chips (App Carousel Style) */}
              <div className="pt-1 -mx-4 px-4 overflow-x-auto no-scrollbar flex items-center gap-2 lg:hidden select-none">
                {[
                  { label: isZh ? "灵性咨询" : "Sessions", href: "/sessions", icon: Sparkles },
                  { label: isZh ? "ALT 天使源疗" : "ALT Light", href: "/alt-therapy", icon: SunMedium },
                  { label: isZh ? "天使花晶" : "Essences", href: "/aura-prema", icon: Flower2 },
                  { label: isZh ? "静坐六阶" : "Meditation", href: "/meditation", icon: Layers },
                  { label: isZh ? "空间风水" : "Feng Shui", href: "/access-chi", icon: MapPin },
                ].map((chip, idx) => (
                  <Link
                    key={idx}
                    href={chip.href}
                    className="flex-shrink-0 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-[#E8E3DD] text-[11px] font-sans text-[#2D233C] active:scale-95 transition-transform shadow-2xs"
                  >
                    <chip.icon className="w-3.5 h-3.5 text-[#B99C72]" />
                    <span>{chip.label}</span>
                  </Link>
                ))}
              </div>

              {/* Geographical Anchor */}
              <div className="pt-1 flex items-center gap-2 text-xs text-[#8E8795] font-mono">
                <MapPin className="w-3.5 h-3.5 text-[#B99C72] flex-shrink-0" />
                <span>{t.hero.locationNote}</span>
              </div>
            </motion.div>

            {/* Right Column: Gallery Exhibition Portrait Frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 relative flex justify-center"
            >
              <div className="relative w-full max-w-md">
                {/* Lavender Light Refraction Aura Ring */}
                <div className="absolute inset-0 -m-5 rounded-[44px] bg-gradient-to-tr from-[#D5CEE0]/30 via-white/40 to-[#D9C3A3]/20 blur-xl -z-10" />

                {/* Portrait Image Container */}
                <div className="relative rounded-[36px] overflow-hidden border border-[#E8E3DD] bg-white p-3.5 editorial-shadow-elevated">
                  <div className="aspect-[3/4] rounded-[28px] overflow-hidden relative group">
                    <Image
                      src="/images/mentor_portrait.jpg"
                      alt="Mikhael Victor Portrait"
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, 450px"
                      className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Ethereal Vignette Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1F1B24]/90 via-[#1F1B24]/20 to-black/20 pointer-events-none" />

                    {/* Architectural Coordinate Stamp */}
                    <div className="relative z-10 w-full flex justify-between items-center text-[9.5px] text-white/90 font-mono uppercase tracking-widest p-5">
                      <span className="px-2.5 py-0.5 rounded-full bg-black/40 border border-white/20 backdrop-blur-md">
                        KLANG · SELANGOR
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-white/20 border border-white/30 backdrop-blur-md">
                        ARCHIVE MV-00
                      </span>
                    </div>

                    {/* Central/Bottom Label Badge */}
                    <div className="relative z-10 mt-auto p-5 text-white space-y-2">
                      <div className="bg-black/45 backdrop-blur-md rounded-2xl py-3 px-4 border border-white/20 text-center shadow-lg">
                        <h3 className="font-serif text-lg tracking-[0.16em] text-white font-normal uppercase">
                          Mikhael Victor
                        </h3>
                        <p className="text-[10px] text-[#D9C3A3] tracking-[0.22em] uppercase font-mono mt-0.5">
                          FOUNDER & SPIRITUAL MENTOR
                        </p>
                        <p className="text-[9px] text-white/70 mt-1 font-sans">
                          {isZh ? "* 概念示范肖像 · 正式上线将替换为授权实拍肖像" : "* Concept editorial preview · Pending authorized release"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Subtle Signature Badge */}
                <div className="absolute -bottom-4 right-6 bg-white/95 border border-[#E8E3DD] backdrop-blur-md py-1.5 px-4 rounded-full text-xs font-serif italic text-[#2D233C] shadow-xs flex items-center gap-2">
                  <div className="relative w-3.5 h-3.5 flex-shrink-0">
                    <Image
                      src="/images/logo.png"
                      alt="MV Emblem"
                      width={14}
                      height={22}
                      className="w-auto h-full object-contain"
                    />
                  </div>
                  <span>Mikhael Victor</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 2: TRUST STRIP (ARCHITECTURAL LEDGER)
          Continuous horizontal ledger with serif numbers
         ======================================================== */}
      <section className="bg-white border-b border-[#E8E3DD] py-8 sm:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-[#E8E3DD]/70">
            {t.hero.trustPillars.map((pillar, idx) => (
              <div
                key={idx}
                className={`pt-5 lg:pt-0 ${idx > 0 ? "lg:pl-8" : ""} flex items-center gap-4`}
              >
                <div className="w-11 h-11 rounded-full bg-[#FAF9F6] border border-[#E8E3DD] flex items-center justify-center text-[#B99C72] flex-shrink-0 shadow-2xs">
                  {idx === 0 && <ShieldCheck className="w-5 h-5 text-[#B99C72]" />}
                  {idx === 1 && <Globe className="w-5 h-5 text-[#ADA0BE]" />}
                  {idx === 2 && <Calendar className="w-5 h-5 text-[#2D233C]" />}
                  {idx === 3 && <Flower2 className="w-5 h-5 text-[#A7B4A5]" />}
                </div>
                <div>
                  <h4 className="font-serif text-base font-normal text-[#242129] leading-snug">
                    {pillar.label}
                  </h4>
                  <p className="text-[11px] font-sans text-[#8E8795] leading-tight mt-0.5">
                    {pillar.sub}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 3: ABOUT PREVIEW (EDITORIAL SPREAD)
          Unequal magazine columns, authentic typography
         ======================================================== */}
      <section className="py-12 sm:py-20 lg:py-36 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual Left: Sanctuary Plate */}
            <div className="lg:col-span-5">
              <PlaceholderImage
                src="/images/alt_therapy_room.jpg"
                alt={isZh ? "巴生静心研习场域" : "Klang Spiritual Studio"}
                label={isZh ? "巴生静心研习场域" : "Klang Spiritual Studio"}
                sublabel={isZh ? "二十余载沉潜 · 静心与研讨" : "Over Two Decades of Study & Dialogue"}
                aspectRatio="editorial"
                variant="ritual"
                archiveNo="PL-01"
              />
            </div>

            {/* Content Right: Magazine Spread */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBE5F0] text-[#2D233C] text-[10px] font-mono tracking-[0.2em] uppercase">
                <span>{t.aboutPreview.kicker}</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl text-[#2D233C] font-normal tracking-tight">
                {t.aboutPreview.title}
              </h2>

              <p className="text-sm sm:text-[15px] text-[#58535F] leading-relaxed font-sans">
                {t.aboutPreview.p1}
              </p>

              <p className="text-sm sm:text-[15px] text-[#58535F] leading-relaxed font-sans">
                {t.aboutPreview.p2}
              </p>

              {/* Stats Bar */}
              <div className="grid grid-cols-3 gap-6 py-6 border-y border-[#E8E3DD]">
                {t.aboutPreview.stats.map((st, i) => (
                  <div key={i}>
                    <div className="font-serif text-2xl sm:text-3xl font-normal text-[#2D233C]">
                      {st.num}
                    </div>
                    <div className="text-xs font-medium text-[#242129] mt-1 font-sans">
                      {st.label}
                    </div>
                    <div className="text-[10.5px] text-[#8E8795] mt-0.5 font-sans">
                      {st.note}
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#2D233C] text-white text-xs font-medium hover:bg-[#443659] transition-all shadow-sm"
                >
                  <span>{isZh ? "阅读生平与研习传承" : "Explore Biography & Lineage"}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 4: FIVE CORE SERVICES (CURATED EDITORIAL COLLECTION)
          Non-repetitive layout with distinct visual weights:
          - 2 Primary Hero Cards (Guidance & ALT)
          - 3 Secondary Discipline Cards (Aura Prema, Meditation, Access Chi)
         ======================================================== */}
      <section className="py-12 sm:py-20 lg:py-36 bg-white border-t border-[#E8E3DD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBE5F0] text-[#2D233C] text-[10px] font-mono tracking-[0.2em] uppercase mb-4">
                <span>{t.servicesSection.kicker}</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#2D233C] font-normal">
                {t.servicesSection.title}
              </h2>
              <p className="mt-3 text-sm sm:text-base text-[#66616F] font-sans">
                {t.servicesSection.subtitle}
              </p>
            </div>

            <Link
              href="/sessions"
              className="inline-flex items-center gap-1.5 text-xs font-mono tracking-wider uppercase text-[#2D233C] hover:text-[#B99C72] transition-colors border-b border-[#2D233C]/30 pb-1 whitespace-nowrap self-start md:self-auto"
            >
              <span>{t.cta.viewPricing}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Curated Grid Layout: 2 Hero Services Top, 3 Disciplines Below */}
          <div className="space-y-6">
            {/* Top Row: 2 Major Services */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {t.servicesSection.items.slice(0, 2).map((srv, idx) => (
                <div
                  key={srv.id}
                  className="group rounded-[26px] border border-[#E8E3DD] bg-[#FAF9F6] p-7 sm:p-9 flex flex-col justify-between hover:bg-white hover:border-[#ADA0BE] editorial-shadow-subtle hover:editorial-shadow-elevated transition-all duration-400"
                >
                  <div>
                    {/* Editorial Companion Image */}
                    <div className="relative aspect-[16/9] sm:aspect-[21/10] rounded-2xl overflow-hidden mb-6 border border-[#E8E3DD] bg-[#EFEAE5]">
                      <Image
                        src={idx === 0 ? "/images/angelic_reading.jpg" : "/images/alt_therapy_room.jpg"}
                        alt={srv.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute bottom-3 left-4 text-[10px] font-mono uppercase tracking-wider text-white/90 bg-black/40 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/20">
                        {srv.badge}
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs text-[#ADA0BE] font-semibold tracking-wider">
                        {`0${idx + 1} // DISCIPLINE`}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-white border border-[#E8E3DD] text-[10px] font-medium text-[#2D233C] shadow-2xs">
                        {srv.badge}
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl text-[#2D233C] font-normal group-hover:text-[#443659] transition-colors">
                      {srv.title}
                    </h3>
                    <p className="text-xs font-mono uppercase tracking-wider text-[#B99C72] mt-1 mb-4">
                      {srv.subtitle}
                    </p>

                    <p className="text-xs sm:text-sm text-[#58535F] leading-relaxed mb-6 font-sans">
                      {srv.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2 text-xs text-[#242129] mb-8 font-sans">
                      {srv.features.map((f, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#B99C72]" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={`/${srv.slug}`}
                    className="w-full py-3.5 px-5 rounded-full border border-[#E8E3DD] bg-white group-hover:bg-[#2D233C] group-hover:text-white group-hover:border-[#2D233C] text-xs font-medium text-center text-[#2D233C] transition-all flex items-center justify-center gap-2 shadow-2xs"
                  >
                    <span>{isZh ? "了解此服务详情" : "Explore Discipline"}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              ))}
            </div>

            {/* Bottom Row: 3 Supplementary Pathways */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {t.servicesSection.items.slice(2, 5).map((srv, idx) => (
                <div
                  key={srv.id}
                  className="group rounded-[22px] border border-[#E8E3DD] bg-[#FAF9F6] p-6 sm:p-7 flex flex-col justify-between hover:bg-white hover:border-[#ADA0BE] transition-all duration-300"
                >
                  <div>
                    {/* Companion Image */}
                    <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-5 border border-[#E8E3DD] bg-[#EFEAE5]">
                      <Image
                        src={
                          idx === 0
                            ? "/images/aura_prema_bottles.jpg"
                            : idx === 1
                            ? "/images/meditation_hall.jpg"
                            : "/images/access_chi_space.jpg"
                        }
                        alt={srv.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute bottom-2.5 left-3 text-[9px] font-mono uppercase tracking-wider text-white/90 bg-black/40 backdrop-blur-md px-2 py-0.5 rounded-full border border-white/20">
                        {srv.badge}
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono text-xs text-[#ADA0BE]">
                        0{idx + 3}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-white border border-[#E8E3DD] text-[9px] font-medium text-[#2D233C]">
                        {srv.badge}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl text-[#2D233C] font-normal group-hover:text-[#443659] transition-colors">
                      {srv.title}
                    </h3>
                    <p className="text-[10px] font-mono uppercase tracking-wider text-[#B99C72] mt-0.5 mb-3">
                      {srv.subtitle}
                    </p>

                    <p className="text-xs text-[#66616F] leading-relaxed mb-5 font-sans line-clamp-3">
                      {srv.description}
                    </p>
                  </div>

                  <Link
                    href={`/${srv.slug}`}
                    className="w-full py-2.5 px-4 rounded-xl border border-[#E8E3DD] bg-white group-hover:bg-[#2D233C] group-hover:text-white group-hover:border-[#2D233C] text-xs font-medium text-center text-[#2D233C] transition-all flex items-center justify-center gap-1.5 shadow-2xs"
                  >
                    <span>{isZh ? "查看详情" : "View"}</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 5: CHOOSE YOUR PATH (INTERACTIVE SELECTOR)
         ======================================================== */}
      <InteractivePathSelector />

      {/* ========================================================
          SECTION 6: PRIVATE SESSIONS (EDITORIAL CONSULTATION SUITE)
          RM50, RM200, RM444 + 3-session inquiry
         ======================================================== */}
      <section className="py-12 sm:py-20 lg:py-36 bg-[#FAF9F6] border-t border-[#E8E3DD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBE5F0] text-[#2D233C] text-[10px] font-mono tracking-[0.2em] uppercase mb-4">
              <span>{t.pricingSection.kicker}</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#2D233C] font-normal">
              {t.pricingSection.title}
            </h2>
            <p className="mt-3 text-sm text-[#66616F] font-sans">
              {t.pricingSection.subtitle}
            </p>
          </div>

          {/* First-Time Visitor Guide Callout */}
          <div className="max-w-4xl mx-auto mb-12 p-5 sm:p-6 rounded-2xl bg-white border border-[#E8E3DD] flex flex-col sm:flex-row sm:items-center justify-between gap-4 editorial-shadow-subtle">
            <div className="space-y-1">
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#B99C72] font-semibold">
                {isZh ? "初次结识 MIKHAEL VICTOR？" : "FIRST-TIME VISITOR GUIDE"}
              </span>
              <p className="text-xs text-[#58535F] font-sans leading-relaxed">
                {isZh
                  ? "如您有特定单一困扰想快速解惑，建议选择 RM50 灵性卡牌；如渴望深层情绪减负与静心仪式，推荐选择 RM444 招牌 ALT 体验。"
                  : "For quick symbolic impressions on 1-2 questions, start with RM50. For deep emotional decompression, choose RM444 Signature ALT."}
              </p>
            </div>
            <a
              href={buildWhatsAppLink(undefined, undefined, undefined, undefined, undefined, isZh)}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full bg-[#25D366] text-white text-xs font-medium hover:bg-[#20bd5a] transition-colors whitespace-nowrap self-start sm:self-auto flex items-center gap-1.5 shadow-2xs"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-white" />
              <span>{isZh ? "WhatsApp 直接询问" : "Ask on WhatsApp"}</span>
            </a>
          </div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
            {t.pricingSection.plans.map((plan) => (
              <div
                key={plan.id}
                className={`relative rounded-[26px] p-8 sm:p-9 flex flex-col justify-between transition-all duration-400 ${
                  plan.isFeatured
                    ? "bg-white border-2 border-[#2D233C] editorial-shadow-elevated ring-1 ring-[#2D233C]/20 -translate-y-1"
                    : "bg-white border border-[#E8E3DD] editorial-shadow-subtle hover:border-[#ADA0BE]"
                }`}
              >
                {/* Featured Badge */}
                {plan.isFeatured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#2D233C] text-white text-[9.5px] font-mono tracking-widest uppercase shadow-sm">
                    SIGNATURE EXPERIENCE · 招牌推荐
                  </div>
                )}

                <div>
                  <div className="text-[10px] font-mono tracking-widest text-[#ADA0BE] uppercase">
                    {plan.tag}
                  </div>

                  <h3 className="font-serif text-2xl text-[#2D233C] font-normal mt-1.5">
                    {plan.name}
                  </h3>

                  {/* Price & Duration */}
                  <div className="my-6 pb-6 border-b border-[#E8E3DD]">
                    <div className="font-serif text-4xl sm:text-[42px] text-[#242129] font-normal">
                      {plan.price}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#8E8795] font-mono mt-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#B99C72]" />
                      <span>{plan.duration}</span>
                      <span>·</span>
                      <span>{plan.format}</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-[13px] text-[#58535F] leading-relaxed mb-6 font-sans">
                    {plan.description}
                  </p>

                  {/* Highlights list */}
                  <ul className="space-y-3 text-xs mb-8 font-sans">
                    {plan.highlights.map((h, i) => {
                      const isExcluded = h.includes("不包含") || h.toLowerCase().includes("does not include") || h.toLowerCase().includes("no alt");
                      return (
                        <li key={i} className={`flex items-start gap-2.5 ${isExcluded ? 'text-[#8E8795]' : 'text-[#242129]'}`}>
                          {isExcluded ? (
                            <span className="w-4 h-4 rounded-full border border-[#D0C9C0] flex items-center justify-center text-[10px] text-[#A7A2AE] flex-shrink-0 mt-0.5 font-mono">
                              —
                            </span>
                          ) : (
                            <CheckCircle2 className="w-4 h-4 text-[#A7B4A5] flex-shrink-0 mt-0.5" />
                          )}
                          <span className={isExcluded ? "text-[#7A7482]" : ""}>{h}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div>
                  <button
                    type="button"
                    onClick={() => openBookingWithService(`${plan.name} (${plan.price})`)}
                    className={`w-full py-3.5 sm:py-4 rounded-full text-xs font-medium tracking-wide active:scale-[0.98] transition-all shadow-sm ${
                      plan.isFeatured
                        ? "bg-[#2D233C] text-white hover:bg-[#443659]"
                        : "bg-[#FAF9F6] border border-[#E8E3DD] text-[#2D233C] hover:bg-[#2D233C] hover:text-white"
                    }`}
                  >
                    {plan.buttonLabel}
                  </button>

                  <a
                    href={buildWhatsAppLink(
                      `${plan.name} (${plan.price})`,
                      undefined,
                      undefined,
                      undefined,
                      undefined,
                      isZh
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full mt-2.5 py-2 rounded-full text-[11px] font-medium text-[#25D366] hover:bg-[#25D366]/5 active:scale-[0.98] transition-all flex items-center justify-center gap-1.5"
                  >
                    <MessageSquare className="w-3.5 h-3.5 fill-[#25D366]" />
                    <span>{isZh ? "WhatsApp 直接私询此方案" : "Inquire via WhatsApp"}</span>
                  </a>

                  {plan.disclaimer && (
                    <p className="text-[10px] text-[#8E8795] text-center mt-2 font-sans">
                      {plan.disclaimer}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* 3-Session Continuity Notice Box */}
          <div className="mt-14 max-w-3xl mx-auto p-7 rounded-[22px] bg-white border border-[#E8E3DD] flex flex-col sm:flex-row sm:items-center justify-between gap-6 editorial-shadow-subtle">
            <div className="space-y-1 max-w-md">
              <span className="font-serif text-base text-[#2D233C] flex items-center gap-2 font-normal">
                <SunMedium className="w-4 h-4 text-[#B99C72]" />
                {t.pricingSection.packageNotice.title}
              </span>
              <p className="text-xs text-[#66616F] leading-relaxed font-sans">
                {t.pricingSection.packageNotice.text}
              </p>
            </div>
            <button
              type="button"
              onClick={() => openBookingWithService("3次连贯 ALT 深度疗愈配套咨询")}
              className="px-6 py-3 rounded-full bg-[#FAF9F6] border border-[#E8E3DD] text-xs font-medium text-[#2D233C] hover:border-[#2D233C] transition-colors whitespace-nowrap self-start sm:self-auto"
            >
              {isZh ? "私询 3 次连贯配套" : "Inquire 3-Session Plan"}
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 7: LEARNING JOURNEY (I.S.G.A ROADMAP)
         ======================================================== */}
      <section className="py-12 sm:py-20 lg:py-36 bg-white border-t border-[#E8E3DD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBE5F0] text-[#2D233C] text-[10px] font-mono tracking-[0.2em] uppercase mb-4">
                <Layers className="w-3.5 h-3.5 text-[#B99C72]" />
                <span>{t.isgaSummary.kicker}</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#2D233C] font-normal">
                {t.isgaSummary.title}
              </h2>
              <p className="mt-3 text-sm sm:text-base text-[#66616F] font-sans">
                {t.isgaSummary.subtitle}
              </p>
            </div>

            <Link
              href="/meditation"
              className="inline-flex items-center gap-1.5 text-xs font-mono tracking-wider uppercase text-[#2D233C] hover:text-[#B99C72] transition-colors border-b border-[#2D233C]/30 pb-1 whitespace-nowrap self-start md:self-auto"
            >
              <span>{t.cta.viewMeditation}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <CourseRoadmap onSelectLevel={(title) => openBookingWithService(`I.S.G.A 静坐课程: ${title}`)} />
        </div>
      </section>

      {/* ========================================================
          SECTION 8: EXPERIENCE & ARCHIVAL TIMELINE
         ======================================================== */}
      <section className="py-12 sm:py-20 lg:py-36 bg-[#FAF9F6] border-t border-[#E8E3DD]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBE5F0] text-[#2D233C] text-[10px] font-mono tracking-[0.2em] uppercase mb-4">
              <span>{t.timelineSection.kicker}</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#2D233C] font-normal">
              {t.timelineSection.title}
            </h2>
            <p className="mt-3 text-sm text-[#66616F] font-sans">
              {t.timelineSection.subtitle}
            </p>
          </div>

          <ExperienceTimeline />
        </div>
      </section>

      {/* ========================================================
          SECTION 9: EDITORIAL INSIGHTS (SAMPLE ESSAYS)
         ======================================================== */}
      <section className="py-12 sm:py-20 lg:py-36 bg-white border-t border-[#E8E3DD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBE5F0] text-[#2D233C] text-[10px] font-mono tracking-[0.2em] uppercase mb-4">
                <span>{t.insightsSection.kicker}</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#2D233C] font-normal">
                {t.insightsSection.title}
              </h2>
              <p className="mt-3 text-sm text-[#66616F] font-sans max-w-xl">
                {t.insightsSection.subtitle}
              </p>
            </div>

            <Link
              href="/insights"
              className="inline-flex items-center gap-1.5 text-xs font-mono tracking-wider uppercase text-[#2D233C] hover:text-[#B99C72] transition-colors border-b border-[#2D233C]/30 pb-1 whitespace-nowrap self-start md:self-auto"
            >
              <span>{isZh ? "浏览所有随笔" : "View All Insights"}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* 3 Kinfolk-Style Article Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.insightsSection.articles.map((art, artIdx) => (
              <article
                key={art.id}
                onClick={() => setActiveArticle(art)}
                className="group rounded-[24px] border border-[#E8E3DD] bg-[#FAF9F6] p-7 sm:p-8 flex flex-col justify-between hover:bg-white hover:border-[#ADA0BE] editorial-shadow-subtle hover:editorial-shadow-elevated transition-all duration-400 cursor-pointer"
              >
                <div>
                  {/* Article Visual Thumbnail */}
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-6 border border-[#E8E3DD] bg-[#EFEAE5]">
                    <Image
                      src={
                        artIdx === 0
                          ? "/images/angelic_reading.jpg"
                          : artIdx === 1
                          ? "/images/alt_therapy_room.jpg"
                          : "/images/insights_journal.jpg"
                      }
                      alt={art.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-2.5 left-3 text-[9px] font-mono uppercase tracking-wider text-white/90 bg-black/40 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/20">
                      {art.category}
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[10.5px] font-mono text-[#8E8795] mb-3">
                    <span className="text-[#B99C72] font-semibold uppercase tracking-wider">
                      {art.category}
                    </span>
                    <span>{art.readTime}</span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl text-[#2D233C] font-normal leading-snug group-hover:text-[#443659] transition-colors mb-3.5">
                    {art.title}
                  </h3>

                  <p className="text-xs sm:text-[13px] text-[#66616F] leading-relaxed line-clamp-3 font-sans">
                    {art.excerpt}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#E8E3DD]/70 flex items-center justify-between text-xs text-[#2D233C] font-medium font-sans">
                  <span className="group-hover:text-[#B99C72] transition-colors">
                    {t.cta.readArticle}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 10: FINAL CTA (SANCTUARY MOOD)
         ======================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-tr from-[#1E1729] via-[#2D233C] to-[#1E1729] text-white py-16 sm:py-24 lg:py-36">
        {/* Subtle Ethereal Refraction Caustic Rings */}
        <div className="absolute top-1/2 right-[12%] -translate-y-1/2 w-[420px] h-[420px] rounded-full border border-white/10 blur-[1px] pointer-events-none" />
        <div className="absolute top-1/2 right-[12%] -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/5 pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-7">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-[#D9C3A3] text-[10px] font-mono tracking-[0.24em] uppercase backdrop-blur-xs">
            YOUR JOURNEY BEGINS WITHIN
          </span>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal leading-tight tracking-tight">
            {isZh ? "每一次改变，都始于一次新的觉察。" : "Every Transformation Begins With Gentle Awareness."}
          </h2>

          <p className="text-xs sm:text-sm text-[#ADA0BE] max-w-xl mx-auto leading-relaxed font-sans font-light">
            {isZh
              ? "在安歇与静思中重获心念的力量。预约一对一私人咨询，或开启由心轮出发的扎实静坐修习。"
              : "Reclaim stillness in a hurried world. Reserve a 1-on-1 private consultation or begin your disciplined meditation pathway."}
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => openBookingWithService()}
              className="px-8 py-4 rounded-full bg-white text-[#2D233C] text-xs sm:text-sm font-medium tracking-wide shadow-xl hover:bg-[#FAF9F6] transition-all flex items-center gap-2"
            >
              <Calendar className="w-4 h-4 text-[#B99C72]" />
              <span>{t.cta.bookSession}</span>
            </button>

            <Link
              href="/meditation"
              className="px-8 py-4 rounded-full border border-white/30 text-white text-xs sm:text-sm font-medium hover:bg-white/10 transition-colors"
            >
              {isZh ? "了解静坐课程" : "Explore Courses"}
            </Link>
          </div>
        </div>
      </section>

      {/* Booking Modal & Article Modal */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        defaultService={selectedService}
      />

      <ArticleModal
        article={activeArticle}
        onClose={() => setActiveArticle(null)}
      />
    </div>
  );
}
