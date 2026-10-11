"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { BookingModal } from '@/components/BookingModal';
import { buildWhatsAppLink } from '@/config/siteConfig';
import {
  Flower2,
  Lock,
  MessageSquare,
  AlertCircle
} from 'lucide-react';

export default function AuraPremaPage() {
  const { t, isZh } = useLanguage();
  const sec = t.auraSection;
  const [activeTab, setActiveTab] = useState<string>("sprays");
  const [bookingOpen, setBookingOpen] = useState(false);

  const selectedCategory = sec.categories.find((c) => c.id === activeTab) || sec.categories[0];

  return (
    <div className="py-16 sm:py-24 bg-[#FAF9F6] space-y-20 lg:space-y-28">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBE5F0] text-[#2D233C] text-[10px] font-mono tracking-[0.2em] uppercase mb-4">
          <Flower2 className="w-3.5 h-3.5 text-[#B99C72]" />
          <span>AURA PREMA · BOTANICAL FREQUENCY ESSENCES</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#242129] font-normal leading-tight tracking-tight">
          {isZh ? "Aura Prema 天使花晶与能量美学" : "Aura Prema Angelic Flower Essences"}
        </h1>
        <p className="mt-4 text-sm sm:text-base text-[#66616F] leading-relaxed max-w-2xl mx-auto font-sans">
          {isZh
            ? "融合色彩频率、花卉精粹与大天使象征意图。四大精选系列，将觉察与芳香融入日常居家与自我对话中。"
            : "Synthesizing color resonance, subtle botanical frequencies, and archangelic spiritual contemplation for everyday mindful presence."}
        </p>

        {/* Clear Compliance Disclaimer */}
        <div className="mt-8 p-5 rounded-2xl bg-white border border-[#E8E3DD] text-xs text-[#66616F] max-w-2xl mx-auto leading-relaxed editorial-shadow-subtle">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-4 h-4 text-[#B99C72] flex-shrink-0 mt-0.5" />
            <p className="text-left text-[11px] font-sans">
              {sec.productDisclaimer}
            </p>
          </div>
        </div>
      </section>

      {/* Editorial Packshot Showcase Banner */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative aspect-[21/9] sm:aspect-[24/9] rounded-[28px] overflow-hidden border border-[#E8E3DD] bg-[#FAF9F6] editorial-shadow-elevated">
          <Image
            src="/images/aura_prema_bottles.jpg"
            alt="Aura Prema Botanical Essence Collection"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1F1B24]/85 via-black/25 to-black/10 pointer-events-none" />
          <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between text-white">
            <div className="flex items-center justify-between text-[10px] font-mono tracking-widest uppercase">
              <span className="bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                AURA PREMA // AP-COLLECTION
              </span>
              <span className="bg-white/20 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/30 text-[9px]">
                BOTANICAL FREQUENCY
              </span>
            </div>
            <div className="max-w-xl">
              <p className="font-serif text-lg sm:text-2xl font-normal drop-shadow-sm">
                {isZh ? "花朵与光的沉静共振 · 纯净能量芳香" : "Pure Botanical Resonance · Mindful Everyday Fragrance"}
              </p>
              <p className="text-xs text-white/80 font-sans mt-1">
                {isZh ? "* 融合花卉精粹、植物精油与大天使象征意图" : "* Formulated with pure botanical extracts and archangelic intention"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-14">
          {sec.categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveTab(cat.id)}
              className={`px-6 py-3 rounded-full text-xs font-medium transition-all duration-300 ${
                activeTab === cat.id
                  ? "bg-[#2D233C] text-white shadow-sm"
                  : "bg-white border border-[#E8E3DD] text-[#58535F] hover:border-[#ADA0BE]"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Category Description Banner */}
        <div className="max-w-3xl mx-auto text-center mb-14 p-8 rounded-[24px] bg-white border border-[#E8E3DD] editorial-shadow-subtle">
          <span className="text-[10px] font-mono tracking-widest text-[#B99C72] uppercase">
            {selectedCategory.subtitle}
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-[#2D233C] mt-1.5 mb-3 font-normal">
            {selectedCategory.name}
          </h2>
          <p className="text-xs sm:text-sm text-[#66616F] leading-relaxed font-sans max-w-xl mx-auto">
            {selectedCategory.description}
          </p>
        </div>

        {/* Category Content: Items or Forthcoming Slot */}
        {selectedCategory.status === 'available' && selectedCategory.items ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {selectedCategory.items.map((item, idx) => (
              <div
                key={idx}
                className="group rounded-[24px] border border-[#E8E3DD] bg-white p-7 flex flex-col justify-between hover:border-[#ADA0BE] editorial-shadow-subtle hover:editorial-shadow-elevated transition-all duration-400"
              >
                <div>
                  {/* Color Swatch & Volume Tag */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-2.5">
                      <span
                        className="w-3.5 h-3.5 rounded-full border border-black/15 shadow-xs"
                        style={{ backgroundColor: item.colorHex }}
                      />
                      <span className="text-xs font-medium text-[#2D233C] font-serif">
                        {item.colorName}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-[#8E8795] px-2.5 py-0.5 rounded-full bg-[#FAF9F6] border border-[#E8E3DD]">
                      {item.volume}
                    </span>
                  </div>

                  {/* Luxury Packshot Frame with Frosted Flacon Silhouette */}
                  <div className="aspect-[4/3] rounded-2xl bg-gradient-to-b from-[#F7F3EE] via-[#EFEAE5] to-[#E2DCE0] border border-[#E8E3DD] flex flex-col items-center justify-center p-6 mb-5 relative overflow-hidden group-hover:border-[#ADA0BE]/60 transition-colors">
                    {/* Subtle Refraction Halo Behind Bottle */}
                    <div
                      className="absolute w-24 h-24 rounded-full blur-xl opacity-35"
                      style={{ backgroundColor: item.colorHex }}
                    />

                    {/* Minimalist Flacon Cylinder */}
                    <div className="relative z-10 flex flex-col items-center">
                      <div className="w-4 h-3 rounded-t-xs bg-[#B99C72] border-b border-black/10" />
                      <div className="w-3 h-1.5 bg-[#E8E3DD]" />
                      <div
                        className="w-10 h-24 rounded-t-sm rounded-b-md shadow-md border border-white/60 flex items-center justify-center text-white text-[10px] font-serif tracking-widest relative overflow-hidden"
                        style={{
                          background: `linear-gradient(180deg, rgba(255,255,255,0.7) 0%, ${item.colorHex} 40%, #2D233C 100%)`,
                        }}
                      >
                        <span className="opacity-80">AP</span>
                      </div>
                    </div>

                    <span className="absolute bottom-2.5 text-[8.5px] uppercase font-mono tracking-widest text-[#8E8795]/80">
                      FLACON SPEC // {item.volume}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl text-[#2D233C] font-normal leading-snug">
                    {item.name}
                  </h3>

                  <p className="text-[11px] text-[#B99C72] font-mono tracking-wide mt-1 mb-2.5">
                    {item.theme}
                  </p>

                  <p className="text-xs text-[#66616F] leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>

                <div className="mt-7 pt-4 border-t border-[#E8E3DD]/70">
                  <a
                    href={buildWhatsAppLink(`Aura Prema: ${item.name} (${item.colorName})`, undefined, undefined, undefined, undefined, isZh)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 text-xs font-medium text-[#1E7E34] hover:bg-[#25D366] hover:text-white transition-all flex items-center justify-center gap-1.5 shadow-2xs"
                  >
                    <MessageSquare className="w-3.5 h-3.5 fill-current" />
                    <span>{isZh ? "WhatsApp 询问库存与结缘" : "Inquire via WhatsApp"}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Slot 4: Details Forthcoming */
          <div className="max-w-2xl mx-auto p-12 sm:p-16 rounded-[28px] bg-white border border-[#E8E3DD] text-center space-y-4 editorial-shadow-elevated">
            <div className="w-16 h-16 rounded-full bg-[#FAF9F6] border border-[#E8E3DD] flex items-center justify-center text-[#ADA0BE] mx-auto shadow-2xs">
              <Lock className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#2D233C] font-normal">
              {isZh ? "第四系列产品（研发资料整理中）" : "Fourth Product Line (In Development)"}
            </h3>
            <p className="text-xs sm:text-sm text-[#66616F] leading-relaxed max-w-lg mx-auto font-sans">
              {isZh
                ? "Mikhael Victor 老师正在整理新一轮天然花精配方与觉察辅助媒介。由于原始资料尚未公布具体品类名称与成分，本站严格遵循客观规范，待正式发布后上线呈现。"
                : "Mikhael Victor is formulating new botanical frequency editions. In strict accordance with factual integrity, details remain withheld until official release."}
            </p>
            <div className="pt-2">
              <span className="inline-block px-3.5 py-1 rounded-full bg-[#FAF9F6] border border-[#E8E3DD] text-[#8E8795] text-[10px] font-mono uppercase tracking-wider">
                Status: Details Forthcoming
              </span>
            </div>
          </div>
        )}
      </section>

      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} defaultService="Aura Prema 天使花晶产品咨询" />
    </div>
  );
}
