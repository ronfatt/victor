"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { BookingModal } from '@/components/BookingModal';
import { buildWhatsAppLink } from '@/config/siteConfig';
import {
  Flower2,
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
        {/* Aura Prema Dedicated Product Logo */}
        <div className="flex flex-col items-center justify-center mb-6">
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-white p-3 border border-[#E8E3DD] shadow-sm flex items-center justify-center mb-4 transition-transform hover:scale-105">
            <Image
              src="/images/aura_prema_logo_cropped.png"
              alt="Aura Prema Unicorn Emblem"
              width={96}
              height={96}
              className="w-full h-full object-contain"
              priority
            />
          </div>
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#242129] font-normal leading-tight tracking-tight">
          {isZh ? "Aura Prema 天使花晶与能量灵气瓶" : "Aura Prema Angelic Flower Essences & Reiki Bottles"}
        </h1>
        <p className="mt-4 text-base sm:text-lg text-[#B99C72] font-serif italic tracking-wide max-w-2xl mx-auto">
          {isZh
            ? "透过色彩的映照来 —— 疗愈过去，支持当下，活出可能性。"
            : "Reflecting through color — healing the past, supporting the present, living into possibility."}
        </p>

        {/* Brand Philosophy Transmission Card */}
        <div className="mt-10 max-w-3xl mx-auto p-6 sm:p-10 rounded-[28px] bg-white border border-[#E8E3DD] editorial-shadow-elevated text-left space-y-6">
          <p className="text-sm sm:text-base text-[#4A4553] leading-relaxed font-sans">
            {isZh
              ? "里边能量源自于 花朵精华，海洋精华，色彩精华，独角兽 与 天使 的结合性能量疗愈产品。主要支持一个人平衡负面情绪与思绪，提升运气，协助意识的开展 与 达到环境的能量调和。"
              : "Infused with vibrational energies from botanical flower essences, ocean essences, color frequencies, and the sacred synergy of unicorns and angels. Formulated to help individuals balance negative emotions, elevate personal luck, unfold conscious awareness, and harmonize environmental resonance."}
          </p>

          {/* Aura & Prema Meaning Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
            <div className="p-4 sm:p-5 rounded-2xl bg-[#FAF9F6] border border-[#E8E3DD] flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#EBE5F0] text-[#2D233C] flex items-center justify-center font-serif font-bold text-base shrink-0">
                A
              </div>
              <div>
                <h4 className="font-serif text-sm font-semibold text-[#2D233C]">
                  {isZh ? "Aura 气场与光" : "Aura"}
                </h4>
                <p className="text-xs text-[#66616F] font-sans mt-0.5">
                  {isZh ? "代表气场，代表光" : "Represents the personal auric field and divine light"}
                </p>
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-[#FAF9F6] border border-[#E8E3DD] flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#F7EBE5] text-[#9B5A3C] flex items-center justify-center font-serif font-bold text-base shrink-0">
                P
              </div>
              <div>
                <h4 className="font-serif text-sm font-semibold text-[#2D233C]">
                  {isZh ? "Prema 神性之爱" : "Prema"}
                </h4>
                <p className="text-xs text-[#66616F] font-sans mt-0.5">
                  {isZh ? "代表神性的爱 与 滋养" : "Represents divine unconditional love and nourishment"}
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-[#66616F] font-sans leading-relaxed">
            <p>
              {isZh
                ? "在自然界中，［水晶 - 花朵 - 色彩 - 天使 ］拥有不同高-中-低，充满生生不息 与 和谐的自然波长，能够对应到人体的脉轮 与 情绪思绪。运用产品将能够产生气场的共振来协调心灵 与 灵性能量失衡的地方给抚平。"
                : "In nature, [Crystals · Flowers · Colors · Angels] possess varied high, medium, and low wavelengths teeming with continuous vitality and harmony. Resonating with human chakras and thoughts, these essences harmonize the heart and soothe energetic imbalances."}
            </p>
            <p>
              {isZh
                ? "色彩的能量波长 是绝佳自我觉察的工具之一，在 Aura Prema 天使花晶 的体系里，你可以学习到如何透过不同瓶子所选择的颜色来理解自身各方面的心理约束给理清。使用产品的优质能量将支持你创造自在人生。"
                : "Color wavelength is one of the most potent mirrors for self-awareness. Within the Aura Prema system, exploring chosen flacon colors illuminates unconscious psychological patterns, supporting you in crafting an authentic and liberated life."}
            </p>
            <div className="p-4 rounded-2xl bg-[#FAF9F6]/80 border-l-4 border-[#B99C72] text-[#4A4553]">
              <p className="font-medium text-xs sm:text-[13px] mb-1 text-[#2D233C]">
                {isZh ? "独特能量化过程产生的活性波动：" : "Unique Energetic Activation Process:"}
              </p>
              <p className="text-xs text-[#66616F] leading-relaxed">
                {isZh
                  ? "每一种类都小心翼翼的选择最合适的香氛，花朵精华，以及 柔和的灵性能量化 。Mikhael Victor 老师会直接连接特定色彩天使与独角兽的祝福来优化瓶子里的能量质地，增加瓶子里的精细波动，形成你们看到生生不息的瓶子，后，才交到顾客手里。"
                  : "Every variant is formulated with meticulously selected fragrances, botanical flower essences, and gentle energetic activation. Teacher Mikhael Victor connects directly with specific color angels and unicorn blessings to refine each flacon's subtle vibration before it is placed into clients' hands."}
              </p>
            </div>
          </div>
        </div>

        {/* Clear Compliance Disclaimer */}
        <div className="mt-8 p-5 rounded-2xl bg-white border border-[#E8E3DD] text-xs text-[#66616F] max-w-3xl mx-auto leading-relaxed editorial-shadow-subtle">
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
            src="/images/real_reiki_bottles.jpg"
            alt="Aura Prema Reiki Bottles & Essence Alchemy"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1F1B24]/85 via-black/25 to-black/10 pointer-events-none" />
          <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between text-white">
            <div className="flex items-center justify-between text-[10px] font-mono tracking-widest uppercase">
              <span className="bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                AURA PREMA // REIKI ESSENCE BOTTLES
              </span>
              <span className="bg-white/20 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/30 text-[9px]">
                BOTANICAL FREQUENCY
              </span>
            </div>
            <div className="max-w-xl">
              <p className="font-serif text-lg sm:text-2xl font-normal drop-shadow-sm">
                {isZh ? "实物呈现 · 灵气瓶与色彩能量阵列" : "Pure Botanical Resonance · Reiki Bottles Collection"}
              </p>
              <p className="text-xs text-white/80 font-sans mt-1">
                {isZh ? "* 阶梯多层灵气瓶架、花卉精粹与独角兽能量频率结合" : "* Chakra-aligned aura balance flacons and botanical flower essences"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Authentic Photo Gallery: Real Alchemy & Reiki Bottles */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-[10px] font-mono tracking-widest text-[#B99C72] uppercase font-semibold">
            AUTHENTIC ALCHEMY & FIELD ARCHIVE
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl text-[#2D233C] mt-2 font-normal">
            {isZh ? "实物呈现 · 灵气瓶与能量曼陀罗实景" : "Reiki Bottles & Sacred Alchemy In Practice"}
          </h2>
          <p className="text-xs sm:text-sm text-[#66616F] mt-2 font-sans">
            {isZh ? "多年研习沉淀的天然色彩瓶、灵气阵列与坛城实拍纪实" : "Real documented photography of Aura Prema essences and ritual mandalas"}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              src: "/images/real_reiki_bottles.jpg",
              title: isZh ? "三角形架灵气瓶" : "Triangle Reiki Bottles",
              desc: isZh ? "神圣几何三角架与14色灵气瓶" : "Sacred geometry rack with 14 color flacons"
            },
            {
              src: "/images/real_mandala_ritual.jpg",
              title: isZh ? "心形花晶坛城" : "Heart Lotus Mandala",
              desc: isZh ? "鲜花花瓣与花精共振" : "Petals and essence circle"
            },
            {
              src: "/images/real_aura_exhibition.jpg",
              title: isZh ? "线下博览会展柜" : "Exhibition Showcase",
              desc: isZh ? "Aura Prema 球形瓶实物" : "Spherical glass flacons display"
            },
            {
              src: "/images/real_therapy_oil.jpg",
              title: isZh ? "身心能量调和" : "Energy Application",
              desc: isZh ? "水晶矿石与精粹呵护" : "Crystal geode & essence work"
            }
          ].map((card, i) => (
            <div key={i} className="group rounded-2xl overflow-hidden bg-white border border-[#E8E3DD] shadow-2xs hover:shadow-md transition-all">
              <div className="relative aspect-[4/3] overflow-hidden bg-[#FAF9F6]">
                <Image
                  src={card.src}
                  alt={card.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h4 className="font-serif text-sm text-[#2D233C] font-medium">{card.title}</h4>
                <p className="text-[11px] text-[#8E8795] font-sans mt-0.5">{card.desc}</p>
              </div>
            </div>
          ))}
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

        {/* Triangle Rack Spotlight when viewing Reiki Bottles */}
        {selectedCategory.id === 'reiki-bottles' && (
          <div className="max-w-4xl mx-auto mb-12 p-6 sm:p-8 rounded-[28px] bg-white border border-[#E8E3DD] flex flex-col md:flex-row items-center gap-6 sm:gap-8 editorial-shadow-subtle">
            <div className="relative w-full md:w-56 aspect-[4/3] rounded-2xl overflow-hidden bg-[#FAF9F6] shrink-0 border border-[#E8E3DD]">
              <Image
                src="/images/real_reiki_bottles.jpg"
                alt="三角形架灵气瓶"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-2 text-center md:text-left">
              <span className="text-[10px] font-mono tracking-widest text-[#B99C72] uppercase font-semibold block">
                SACRED GEOMETRY DISPLAY // 14 FREQUENCIES
              </span>
              <h3 className="font-serif text-xl sm:text-2xl text-[#2D233C] font-normal">
                {isZh ? "经典神圣几何三角形架 · 14 款光波频率灵气瓶" : "Sacred Geometry Triangle Rack · 14 Frequency Flacons"}
              </h3>
              <p className="text-xs sm:text-sm text-[#66616F] font-sans leading-relaxed">
                {isZh
                  ? "以神圣几何三角形态陈列，汇聚自海底轮至顶轮与高阶意识的14种色彩精微振频，为个人气场与静坐空间提供深层共鸣与能量护持。"
                  : "Arranged in sacred geometric alignment, synthesizing 14 optical and botanical frequencies from root to crown and transcendent realms."}
              </p>
            </div>
          </div>
        )}

        {/* Category Content: Items */}
        {selectedCategory.items && selectedCategory.items.length > 0 && (
          <div
            className={`grid grid-cols-1 ${
              selectedCategory.items.length === 1
                ? 'max-w-md mx-auto'
                : 'md:grid-cols-2 lg:grid-cols-3'
            } gap-8`}
          >
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

                  {/* Real Studio Packshot Photo or Minimalist Flacon Cylinder */}
                  {item.image ? (
                    <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#FAF9F6] border border-[#E8E3DD] mb-5 group-hover:border-[#ADA0BE]/60 transition-colors">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[9px] font-mono tracking-widest text-white/90 uppercase">
                        REAL PACKSHOT
                      </div>
                    </div>
                  ) : (
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
                  )}

                  <h3 className="font-serif text-xl text-[#2D233C] font-normal leading-snug">
                    {item.name}
                  </h3>

                  <p className="text-[11px] text-[#B99C72] font-mono tracking-wide mt-1 mb-2.5">
                    {item.theme}
                  </p>

                  <p className="text-xs text-[#66616F] leading-relaxed font-sans whitespace-pre-line">
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
        )}
      </section>

      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} defaultService="Aura Prema 天使花晶产品咨询" />
    </div>
  );
}
