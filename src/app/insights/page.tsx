"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { ArticleModal } from '@/components/ArticleModal';
import { InsightArticle } from '@/types/content';
import {
  BookOpen,
  Calendar,
  ArrowRight,
  AlertCircle
} from 'lucide-react';

export default function InsightsPage() {
  const { t, isZh } = useLanguage();
  const sec = t.insightsSection;
  const [activeArticle, setActiveArticle] = useState<InsightArticle | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");

  const categories = ["ALL", ...Array.from(new Set(sec.articles.map((a) => a.category)))];

  const filteredArticles = selectedCategory === "ALL"
    ? sec.articles
    : sec.articles.filter((a) => a.category === selectedCategory);

  return (
    <div className="py-12 sm:py-20 bg-[#FAF9F6] space-y-16">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBE5F0] text-[#332748] text-[11px] font-semibold tracking-widest uppercase mb-4">
          <BookOpen className="w-3.5 h-3.5 text-[#B99C72]" />
          <span>EDITORIAL INSIGHTS & ESSAYS</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl text-[#28252C] font-normal leading-tight">
          {isZh ? "觉察随笔与灵性视界" : "Insights & Contemplative Journal"}
        </h1>
        <p className="mt-4 text-sm sm:text-base text-[#6C6674] leading-relaxed">
          {isZh
            ? "在仓促的都市步调中，记述关于停顿、色彩心理与空间呼吸的心性体悟。探索内心的澄明之地。"
            : "Reflections on sacred stillness, subtle vibrational palettes, and quiet sanctuaries in an accelerated world."}
        </p>

        {/* Demo Notice */}
        <div className="mt-6 p-4 rounded-xl bg-white border border-[#E8E4DF] text-xs text-[#6C6674] max-w-xl mx-auto flex items-center justify-center gap-2">
          <AlertCircle className="w-4 h-4 text-[#B99C72] flex-shrink-0" />
          <span>
            {isZh ? "本栏目所列文章均为首版示范样本，供版面与调性预览。" : "Sample essays provided for aesthetic and demonstration purposes."}
          </span>
        </div>
      </section>

      {/* Editorial Header Feature Banner */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative aspect-[21/9] sm:aspect-[24/9] rounded-[28px] overflow-hidden border border-[#E8E3DD] bg-[#FAF9F6] editorial-shadow-elevated">
          <Image
            src="/images/insights_journal.jpg"
            alt="Insights & Journal"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1F1B24]/85 via-black/25 to-black/10 pointer-events-none" />
          <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between text-white">
            <div className="flex items-center justify-between text-[10px] font-mono tracking-widest uppercase">
              <span className="bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                MV JOURNAL // VOL. 01
              </span>
              <span className="bg-white/20 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/30 text-[9px]">
                KINFOLK EDITORIAL
              </span>
            </div>
            <div className="max-w-xl">
              <p className="font-serif text-lg sm:text-2xl font-normal drop-shadow-sm">
                {isZh ? "于文字与静寂之间，重拾内在心境的平衡" : "Words in Stillness · Cultivating Quiet Clarity"}
              </p>
              <p className="text-xs text-white/80 font-sans mt-1">
                {isZh ? "* 随笔专栏定期更新生活哲学与自我觉察" : "* Regular essays on lifestyle philosophy and conscious presence"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Chips */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                selectedCategory === cat
                  ? "bg-[#332748] text-white shadow-sm"
                  : "bg-white border border-[#E8E4DF] text-[#554E5F] hover:border-[#ADA0BE]"
              }`}
            >
              {cat === "ALL" ? (isZh ? "全部随笔" : "All Articles") : cat}
            </button>
          ))}
        </div>

        {/* Article Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {filteredArticles.map((art, idx) => (
            <article
              key={art.id}
              onClick={() => setActiveArticle(art)}
              className="group rounded-[24px] border border-[#E8E4DF] bg-white p-7 flex flex-col justify-between hover:border-[#ADA0BE] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <div>
                {/* Article Thumbnail */}
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-5 border border-[#E8E3DD] bg-[#EFEAE5]">
                  <Image
                    src={
                      idx === 0
                        ? "/images/angelic_reading.jpg"
                        : idx === 1
                        ? "/images/alt_therapy_room.jpg"
                        : "/images/insights_journal.jpg"
                    }
                    alt={art.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-2.5 left-3 text-[9px] font-mono uppercase tracking-wider text-white/90 bg-black/40 backdrop-blur-md px-2 py-0.5 rounded-full border border-white/20">
                    {art.category}
                  </div>
                </div>

                <div className="flex items-center justify-between text-[11px] text-[#8E8795] mb-3">
                  <span className="text-[#B99C72] font-medium uppercase tracking-wider">
                    {art.category}
                  </span>
                  <span>{art.readTime}</span>
                </div>

                <h3 className="font-serif text-xl text-[#332748] font-medium leading-snug group-hover:text-[#4A3A68] transition-colors mb-3">
                  {art.title}
                </h3>

                <p className="text-xs text-[#6C6674] leading-relaxed line-clamp-4">
                  {art.excerpt}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#E8E4DF]/60 flex items-center justify-between text-xs text-[#332748] font-medium">
                <span className="flex items-center gap-1.5 text-[11px] text-[#8E8795]">
                  <Calendar className="w-3.5 h-3.5" />
                  {art.date}
                </span>
                <span className="group-hover:text-[#B99C72] transition-colors flex items-center gap-1">
                  {t.cta.readArticle}
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <ArticleModal article={activeArticle} onClose={() => setActiveArticle(null)} />
    </div>
  );
}
