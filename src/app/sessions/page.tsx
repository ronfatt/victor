"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { BookingModal } from '@/components/BookingModal';
import { LogoWatermark } from '@/components/LogoWatermark';
import { buildWhatsAppLink } from '@/config/siteConfig';
import {
  Clock,
  CheckCircle2,
  XCircle,
  Video,
  MapPin,
  Sparkles,
  ChevronDown,
  SunMedium,
  MessageSquare
} from 'lucide-react';

import { motion, AnimatePresence } from 'framer-motion';

export function FAQAccordion() {
  const { t } = useLanguage();
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div className="space-y-3.5">
      {t.faqSection.items.map((item, idx) => {
        const isOpen = openIdx === idx;
        return (
          <div
            key={idx}
            className="rounded-[22px] border border-[#E8E3DD] bg-white overflow-hidden transition-all duration-300 editorial-shadow-subtle"
          >
            <button
              type="button"
              onClick={() => setOpenIdx(isOpen ? null : idx)}
              className="w-full p-6 sm:p-7 text-left flex items-center justify-between gap-4 font-serif text-lg text-[#2D233C] font-normal hover:text-[#443659] transition-colors"
            >
              <span>{item.q}</span>
              <ChevronDown
                className={`w-4 h-4 text-[#ADA0BE] transition-transform duration-300 flex-shrink-0 ${
                  isOpen ? "rotate-180 text-[#2D233C]" : ""
                }`}
              />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="px-6 sm:px-7 pb-7 text-xs sm:text-sm text-[#58535F] leading-relaxed border-t border-[#E8E3DD]/70 pt-5 font-sans">
                    {item.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

export default function SessionsPage() {
  const { t, isZh } = useLanguage();
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  const openBookingWithService = (serviceName: string) => {
    setSelectedService(serviceName);
    setBookingOpen(true);
  };

  return (
    <div className="py-10 sm:py-20 lg:py-28 bg-[#FAF9F6] space-y-12 sm:space-y-20 lg:space-y-32">
      {/* Hero */}
      <section className="relative overflow-hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
        <LogoWatermark
          className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          height={520}
          opacity="opacity-[0.035] sm:opacity-[0.05]"
        />

        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#242129] font-normal leading-tight tracking-tight">
          {isZh ? "天使灵性占卜与 ALT 天使源疗" : "Angelic Readings & ALT Therapy"}
        </h1>

        {/* Editorial Guidance Transmission Card */}
        <div className="mt-8 max-w-3xl mx-auto p-6 sm:p-10 rounded-[28px] bg-white border border-[#E8E3DD] editorial-shadow-elevated text-left space-y-5">
          <p className="text-sm sm:text-base text-[#4A4553] leading-relaxed font-sans font-medium">
            {isZh
              ? "也许你需要的是一位走在你前面，带有成熟经验的导师来指导看见你的心理 与 能量盲点，一步步的指引 并 拆解掉负面情绪，扭曲观点 与 信念的来源。"
              : "Perhaps what you need is an experienced mentor walking ahead of you, illuminating unconscious psychological and energetic blind spots while methodically untangling negative emotions, distorted perceptions, and limiting core beliefs."}
          </p>

          <p className="text-xs sm:text-sm text-[#66616F] leading-relaxed font-sans">
            {isZh
              ? "Mikhael Victor 老师 拥有明确的直觉，灵视 与深度聆听的能力，他能清晰的看见 脉轮 与 气场 的问题根源，并 重塑健康观点，调频个人能量回到真实自主权，爱 与 内在力量。"
              : "Teacher Mikhael Victor possesses clear intuition, spiritual sight, and deep listening, discerning the root disharmonies across chakras and the auric field to realign your personal frequency back into authentic sovereignty, love, and inner power."}
          </p>

          <p className="text-xs sm:text-sm text-[#66616F] leading-relaxed font-sans">
            {isZh
              ? "无论你是经验丰富的事业者，还是刚踏入身心灵领域的习者，这［天使灵性占卜］都将从你的起点出发，协助你理清方向、建立自信、与 迈向内在沉稳 与 和谐道路。"
              : "Whether you are a seasoned entrepreneur or a seeker newly exploring spirituality, this Angelic Consultation begins precisely where you stand—clarifying your trajectory, anchoring self-trust, and guiding you toward grounded inner harmony."}
          </p>

          <div className="p-4 rounded-2xl bg-[#FAF9F6] border border-[#E8E3DD] text-xs sm:text-sm text-[#2D233C] font-sans text-center font-medium">
            {isZh
              ? "如果你准备好活出你的灵魂道路，疗愈使命、拓展事业影响力，欢迎预约以下不同配套哦"
              : "If you are ready to live your soul's authentic path, embrace your healing calling, and expand your life impact, welcome to explore our consultation packages below."}
          </div>
        </div>
      </section>

      {/* Atmosphere Sanctuary Plate */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative aspect-[21/9] sm:aspect-[24/9] rounded-[28px] overflow-hidden border border-[#E8E3DD] bg-[#FAF9F6] editorial-shadow-elevated">
          <Image
            src="/images/real_angel_reading.jpg"
            alt="Mikhael Victor Angelic Reading Session"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1F1B24]/85 via-black/25 to-black/10 pointer-events-none" />
          <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between text-white">
            <div className="flex items-center justify-between text-[10px] font-mono tracking-widest uppercase">
              <span className="bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                MV CONSULTATION // KLANG STUDIO
              </span>
              <span className="bg-white/20 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/30 text-[9px]">
                INTIMATE & CONFIDENTIAL
              </span>
            </div>
            <div className="max-w-xl">
              <p className="font-serif text-lg sm:text-2xl font-normal drop-shadow-sm">
                {isZh ? "清晰直觉 · 深度聆听 · 调频重塑个人能量" : "Clear Intuition · Deep Listening · Sovereign Realignment"}
              </p>
              <p className="text-xs text-white/80 font-sans mt-1">
                {isZh ? "* 线上远程视频或巴生工作室面对面预约" : "* Available via online video consultation or in-person in Klang studio"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Consultation Suite */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              {plan.isFeatured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#2D233C] text-white text-[9.5px] font-mono tracking-widest uppercase shadow-sm">
                  SIGNATURE EXPERIENCE
                </div>
              )}

              <div>
                <div className="text-[10px] font-mono tracking-widest text-[#ADA0BE] uppercase">
                  {plan.tag}
                </div>

                <h3 className="font-serif text-2xl text-[#2D233C] font-normal mt-1.5">
                  {plan.name}
                </h3>

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
                  className={`w-full py-4 rounded-full text-xs font-medium tracking-wide transition-all shadow-sm ${
                    plan.isFeatured
                      ? "bg-[#2D233C] text-white hover:bg-[#443659]"
                      : "bg-[#FAF9F6] border border-[#E8E3DD] text-[#2D233C] hover:bg-[#2D233C] hover:text-white"
                  }`}
                >
                  {plan.buttonLabel}
                </button>
                {plan.disclaimer && (
                  <p className="text-[10px] text-[#8E8795] text-center mt-2.5 font-sans">
                    {plan.disclaimer}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* 3-Session Package Enquiry Callout */}
        <div className="mt-14 max-w-3xl mx-auto p-7 sm:p-8 rounded-[24px] bg-white border border-[#E8E3DD] flex flex-col sm:flex-row sm:items-center justify-between gap-6 editorial-shadow-subtle">
          <div className="space-y-1.5 max-w-md">
            <span className="font-serif text-lg text-[#2D233C] flex items-center gap-2 font-normal">
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
            className="px-6 py-3.5 rounded-full bg-[#FAF9F6] border border-[#E8E3DD] text-xs font-medium text-[#2D233C] hover:border-[#2D233C] transition-colors whitespace-nowrap self-start sm:self-auto"
          >
            {isZh ? "私询 3 次连贯配套" : "Inquire 3-Session Plan"}
          </button>
        </div>
      </section>

      {/* Comparison: What is Included vs Not Included */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto p-8 sm:p-12 rounded-[28px] bg-white border border-[#E8E3DD] editorial-shadow-subtle">
          <div className="text-center max-w-md mx-auto mb-8">
            <span className="text-[10px] font-mono tracking-widest uppercase text-[#B99C72]">
              ETHICAL BOUNDARIES
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#2D233C] mt-1 font-normal">
              {isZh ? "咨询包含与不包含边界说明" : "What Is Included vs. Boundaries"}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs sm:text-sm">
            {/* Included */}
            <div className="space-y-3.5 p-6 rounded-2xl bg-[#FAF9F6] border border-[#E8E3DD]">
              <span className="font-serif text-base text-[#2D233C] flex items-center gap-2 font-normal">
                <CheckCircle2 className="w-4 h-4 text-[#A7B4A5]" />
                {isZh ? "咨询服务涵盖" : "What Is Included"}
              </span>
              <ul className="space-y-2.5 text-[#58535F] font-sans">
                <li>• {isZh ? "一对一专属倾听与直觉卡牌象征性解读" : "Dedicated 1-on-1 dialogue & card archetype interpretations"}</li>
                <li>• {isZh ? "梳理潜意识信念与盲点，多角度启发思考" : "Unpacking subconscious loops & fresh perspective shifts"}</li>
                <li>• {isZh ? "咨询结束后的落地觉察与自省功课建议" : "Grounded post-session integration & contemplation ideas"}</li>
              </ul>
            </div>

            {/* Excluded */}
            <div className="space-y-3.5 p-6 rounded-2xl bg-[#FAF9F6] border border-[#E8E3DD]">
              <span className="font-serif text-base text-[#2D233C] flex items-center gap-2 font-normal">
                <XCircle className="w-4 h-4 text-rose-400" />
                {isZh ? "绝不包含 / 不提供的范畴" : "Clear Exclusions & Boundaries"}
              </span>
              <ul className="space-y-2.5 text-[#66616F] font-sans">
                <li>• {isZh ? "绝不提供临床精神科诊断或处方药物替代" : "Zero clinical psychiatric or medical diagnosis"}</li>
                <li>• {isZh ? "不代作决定或宣称百分之百确定的宿命预知" : "No fatalistic fortune-telling or making decisions for you"}</li>
                <li>• {isZh ? "RM50 及 RM200 咨询不包含任何 ALT 源疗仪式" : "RM50 & RM200 do NOT include ALT energy rituals"}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Online vs In-Person Mode */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="p-8 sm:p-9 rounded-[24px] bg-white border border-[#E8E3DD] editorial-shadow-subtle">
            <div className="w-11 h-11 rounded-full bg-[#EBE5F0] flex items-center justify-center text-[#2D233C] mb-5 shadow-2xs">
              <Video className="w-5 h-5 text-[#B99C72]" />
            </div>
            <h4 className="font-serif text-xl text-[#2D233C] font-normal">
              {isZh ? "Zoom 全球线上视频咨询" : "Worldwide Online Video (Zoom)"}
            </h4>
            <p className="mt-2 text-xs sm:text-[13px] text-[#66616F] leading-relaxed font-sans">
              {isZh
                ? "不论您身在何地，只需安静独处的房间与顺畅网络。咨询前将发送安全会议链接，适合全球不同时区朋友。"
                : "Join from any quiet room worldwide. Secure meeting credentials are provided prior to the session."}
            </p>
          </div>

          <div className="p-8 sm:p-9 rounded-[24px] bg-white border border-[#E8E3DD] editorial-shadow-subtle">
            <div className="w-11 h-11 rounded-full bg-[#EBE5F0] flex items-center justify-center text-[#2D233C] mb-5 shadow-2xs">
              <MapPin className="w-5 h-5 text-[#ADA0BE]" />
            </div>
            <h4 className="font-serif text-xl text-[#2D233C] font-normal">
              {isZh ? "马来西亚巴生工作室现场面谈" : "In-Person at Klang Studio"}
            </h4>
            <p className="mt-2 text-xs sm:text-[13px] text-[#66616F] leading-relaxed font-sans">
              {isZh
                ? "位于雪兰莪州巴生的宁静私人工作室。环境幽静，配备专属香氛与静心氛围，特别适合 RM444 招牌源疗沉浸体验。"
                : "A tranquil private sanctuary in Klang, Selangor. Features aromatherapy and calming ambience, ideal for the RM444 ALT ritual."}
            </p>
          </div>
        </div>
      </section>

      {/* Media Editorial Spotlight: Reading of Light */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-[28px] bg-white border border-[#E8E3DD] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center editorial-shadow-elevated">
          <div className="lg:col-span-5 relative aspect-[3/4] rounded-2xl overflow-hidden border border-[#E8E3DD] bg-[#FAF9F6]">
            <Image
              src="/images/real_reading_magazine.jpg"
              alt="光的占卜 - 报章杂志专访 Mikhael Victor"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-center"
            />
          </div>
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBE5F0] text-[#2D233C] text-[10px] font-mono tracking-[0.2em] uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#B99C72]" />
              <span>EDITORIAL FEATURE · 媒体专访</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#2D233C] font-normal">
              {isZh ? "光的占卜 · 杂志深度专访与实操纪实" : "Reading of Light · Media Feature & Field Practice"}
            </h3>
            <p className="text-xs sm:text-sm text-[#58535F] leading-relaxed font-sans">
              {isZh
                ? "专题报道《光的占卜》：Mikhael Victor 老师长年以直觉天使卡牌、彩光能量与温和倾听为载体，陪伴无数个案看清迷雾中的内在课题。不诉诸宿命迷信，而是以光与觉察启发每一位探寻者找到笃定的内在力量。"
                : "Feature editorial 'Reading of Light': Documenting Mikhael Victor's long-standing practice integrating angelic card archetypes and color awareness to bring calm clarity to seekers."}
            </p>
            <div className="pt-2">
              <a
                href={buildWhatsAppLink("天使占卜媒体报道与预约咨询", undefined, undefined, undefined, undefined, isZh)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-white text-xs font-medium hover:bg-[#20bd5a] transition-colors shadow-2xs"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-white" />
                <span>{isZh ? "WhatsApp 预约天使占卜" : "Book Angelic Reading"}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-[10px] font-mono tracking-widest uppercase text-[#B99C72]">
            CLEAR ANSWERS
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl text-[#2D233C] mt-1 font-normal">
            {t.faqSection.title}
          </h3>
          <p className="text-xs sm:text-sm text-[#8E8795] mt-1 font-sans">
            {t.faqSection.subtitle}
          </p>
        </div>
        <FAQAccordion />
      </section>

      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        defaultService={selectedService}
      />
    </div>
  );
}
