"use client";

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { PlaceholderImage } from '@/components/PlaceholderImage';
import { BookingModal } from '@/components/BookingModal';
import {
  Sparkles,
  Calendar,
  AlertCircle
} from 'lucide-react';

export default function AltTherapyPage() {
  const { isZh } = useLanguage();
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>("天使灵性占卜 + ALT (RM444)");

  const openBookingWith = (svc: string) => {
    setSelectedService(svc);
    setBookingOpen(true);
  };

  return (
    <div className="py-16 sm:py-24 bg-[#FAF9F6] space-y-24 lg:space-y-36">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 space-y-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBE5F0] text-[#2D233C] text-[10px] font-mono tracking-[0.2em] uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#B99C72]" />
              <span>PROPRIETARY CONTEMPLATIVE PRACTICE</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#242129] font-normal leading-tight tracking-tight">
              {isZh ? "ALT 天使源疗体系" : "ALT Angelic Light Therapy"}
            </h1>

            <p className="font-serif text-base sm:text-lg text-[#B99C72] italic font-normal leading-relaxed">
              {isZh
                ? "“在光与宁静的仪式中，让疲惫的心神回到原本的澄澈。”"
                : "“A contemplative sacred ritual to rest the hurried mind and reawaken innate inner clarity.”"}
            </p>

            <div className="space-y-4 text-sm sm:text-base text-[#58535F] leading-relaxed font-sans font-normal">
              <p>
                {isZh
                  ? "ALT（Angelic Light Therapy，天使源疗）是 Mikhael Victor 老师历经二十余年灵性探索与自我修习所创立的原创精神仪式体系。它并非冰冷的技术，而是一场由导师引导的深度反思、自我倾听与能量氛围对齐过程。"
                  : "ALT (Angelic Light Therapy) is Mikhael Victor's proprietary contemplative tradition, synthesized through over two decades of meditation and inner inquiry. It is designed as a compassionate, reflective sacred ritual centered on emotional stillness."}
              </p>
              <p>
                {isZh
                  ? "在当今充满焦虑与快节奏的生活中，个案往往处于持续的身心负荷之下。ALT 旨在营造一个安稳的场域，结合前期深入的心灵对话与专属的静心对齐程序，协助你卸下外在防备，重温内在宁静。"
                  : "In an accelerated world, minds accumulate subtle exhaustion. ALT provides a safe sanctuary combining honest dialogue with a restorative energetic ritual to let somatic armor melt away."}
              </p>
            </div>

            {/* Non-Medical Disclaimer Banner */}
            <div className="p-5 rounded-2xl bg-white border border-[#E8E3DD] flex items-start gap-3.5 text-xs text-[#66616F] editorial-shadow-subtle">
              <AlertCircle className="w-4 h-4 text-[#B99C72] flex-shrink-0 mt-0.5" />
              <div className="space-y-0.5">
                <span className="font-serif font-medium text-[#2D233C] block">
                  {isZh ? "关于体验性仪式的审慎说明" : "Grounded Wellness Philosophy"}
                </span>
                <p className="leading-relaxed font-sans text-[11.5px]">
                  {isZh
                    ? "ALT 属于实践者个人灵性仪式与主观反思体验范畴，专注于心性觉察与情绪平静。本体系绝不作任何临床治疗、生理疾病治愈或精神心理学替代医疗之宣称。"
                    : "ALT is presented strictly as practitioner philosophy and subjective contemplative practice. It makes zero medical, diagnostic, or therapeutic curative claims."}
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => openBookingWith("天使灵性占卜 + ALT招牌源疗 (RM444)")}
                className="px-8 py-4 rounded-full bg-[#2D233C] text-white text-xs sm:text-sm font-medium hover:bg-[#443659] transition-all shadow-md flex items-center gap-2"
              >
                <Calendar className="w-4 h-4 text-[#D9C3A3]" />
                <span>{isZh ? "预约 90 分钟 ALT 体验 (RM444)" : "Book 90-min ALT Experience (RM444)"}</span>
              </button>

              <button
                type="button"
                onClick={() => openBookingWith("3次连贯 ALT 深度疗愈配套咨询")}
                className="px-7 py-4 rounded-full bg-white border border-[#E8E3DD] text-[#2D233C] text-xs sm:text-sm font-medium hover:border-[#ADA0BE] transition-all"
              >
                {isZh ? "私询 3 次连贯配套" : "Inquire 3-Session Package"}
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <PlaceholderImage
              src="/images/alt_therapy_room.jpg"
              alt="ALT Contemplative Ritual Setting"
              label={isZh ? "ALT 天使源疗仪式场域" : "ALT Contemplative Ritual Setting"}
              sublabel={isZh ? "巴生工作室专属沉浸空间" : "Dedicated Sanctuary in Klang Studio"}
              aspectRatio="editorial"
              variant="ritual"
              archiveNo="ALT-SANCTUARY"
            />
          </div>
        </div>
      </section>

      {/* The 2-Part Experience Breakdown */}
      <section className="bg-white border-y border-[#E8E3DD] py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#B99C72] font-semibold">
              THE 90-MINUTE RITUAL ARCHITECTURE
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#2D233C] mt-2 font-normal">
              {isZh ? "90分钟招牌体验的双重结构" : "Two Integrated Movements of the Session"}
            </h2>
            <p className="text-xs sm:text-sm text-[#66616F] mt-2 font-sans">
              {isZh ? "对话启智，仪式安顿。两相结合以达身心合一。" : "Dialogue brings perspective; ritual restores stillness."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Phase 1 */}
            <div className="p-8 sm:p-10 rounded-[26px] bg-[#FAF9F6] border border-[#E8E3DD] space-y-4 editorial-shadow-subtle">
              <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded-md bg-white border border-[#E8E3DD] text-[#2D233C]">
                PART 01 · 45 MINS
              </span>
              <h3 className="font-serif text-2xl text-[#2D233C] font-normal">
                {isZh ? "深度信念梳理与灵性占卜" : "In-Depth Dialogue & Symbolic Guidance"}
              </h3>
              <p className="text-xs sm:text-sm text-[#58535F] leading-relaxed font-sans">
                {isZh
                  ? "以天使卡为启发媒介，聚焦个案当下最具挑战的议题。老师通过层层倾听，协助你剥开情绪迷雾，看清问题背后的潜意识执念与生命功课。"
                  : "Using angel card archetypes to explore immediate dilemmas. Through active listening, untangle emotional turbulence and reveal subconscious loops."}
              </p>
            </div>

            {/* Phase 2 */}
            <div className="p-8 sm:p-10 rounded-[26px] bg-[#FAF9F6] border border-[#E8E3DD] space-y-4 editorial-shadow-subtle">
              <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded-md bg-white border border-[#E8E3DD] text-[#2D233C]">
                PART 02 · 45 MINS
              </span>
              <h3 className="font-serif text-2xl text-[#2D233C] font-normal">
                {isZh ? "ALT 原创静心源疗仪式" : "Proprietary ALT Alignment Ritual"}
              </h3>
              <p className="text-xs sm:text-sm text-[#58535F] leading-relaxed font-sans">
                {isZh
                  ? "进入安静祥和的仪式空间。老师施以专属的意图祈请、声波与气场对齐程序，引导你在深深的放松中释放积存的疲惫，体验内在重置。"
                  : "Transitioning into an acoustic sanctuary. Through personalized intentions and spatial presence, experience a meditative release of somatic heaviness."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Continuity Package Note */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-[28px] bg-gradient-to-tr from-[#1E1729] via-[#2D233C] to-[#1E1729] text-white space-y-5 text-center sm:text-left flex flex-col sm:flex-row sm:items-center justify-between gap-6 editorial-shadow-elevated">
          <div className="space-y-1.5 max-w-md">
            <span className="text-[10px] font-mono uppercase tracking-[0.24em] text-[#D9C3A3] font-semibold">
              EXTENDED CONTINUITY
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-normal">
              {isZh ? "三次连贯深入疗愈配套（私询）" : "Three-Session Continuity Plan (By Inquiry)"}
            </h3>
            <p className="text-xs sm:text-[13px] text-[#ADA0BE] leading-relaxed font-sans">
              {isZh
                ? "针对面临重大人生转型或希望建立持续觉察规律的个案。费用不设固定公式，完成初次单次体验后由双方共同评定开启。"
                : "For clients in major transitions desiring multi-stage grounding. Pricing is shared following initial evaluation."}
            </p>
          </div>
          <button
            type="button"
            onClick={() => openBookingWith("3次连贯 ALT 深度疗愈配套咨询")}
            className="px-8 py-3.5 rounded-full bg-white text-[#2D233C] text-xs font-medium hover:bg-[#FAF9F6] transition-colors whitespace-nowrap self-start sm:self-auto"
          >
            {isZh ? "咨询三次配套" : "Inquire Plan"}
          </button>
        </div>
      </section>

      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        defaultService={selectedService}
      />
    </div>
  );
}
