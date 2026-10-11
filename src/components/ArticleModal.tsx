"use client";

import React, { useEffect } from 'react';
import { InsightArticle } from '../types/content';
import { useLanguage } from '../context/LanguageContext';
import { X, Calendar, Clock, AlertCircle } from 'lucide-react';

interface ArticleModalProps {
  article: InsightArticle | null;
  onClose: () => void;
}

export function ArticleModal({ article, onClose }: ArticleModalProps) {
  const { isZh } = useLanguage();

  useEffect(() => {
    if (article) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [article]);

  if (!article) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="article-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#28252C]/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white border border-[#E8E4DF] shadow-2xl p-6 sm:p-10 text-[#28252C]">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#6C6674] hover:bg-[#FAF9F6] hover:text-[#332748] transition-colors"
          aria-label="Close article"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Sample Status Notice */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F6F3F9] text-[#332748] text-[10px] font-semibold tracking-wider uppercase mb-4">
          <AlertCircle className="w-3 h-3 text-[#B99C72]" />
          <span>{isZh ? "示范文章 · 概念样例" : "Demonstration Sample Essay"}</span>
        </div>

        {/* Category & Meta */}
        <div className="flex items-center gap-4 text-xs text-[#8E8795] mb-2">
          <span className="text-[#B99C72] font-medium">{article.category}</span>
          <span>·</span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {article.date}
          </span>
          <span>·</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {article.readTime}
          </span>
        </div>

        {/* Title */}
        <h2 id="article-modal-title" className="font-serif text-2xl sm:text-3xl text-[#332748] leading-tight my-4">
          {article.title}
        </h2>

        {/* Excerpt */}
        <p className="p-4 rounded-xl bg-[#FAF9F6] border-l-2 border-[#B99C72] text-xs sm:text-sm text-[#554E5F] italic mb-6 leading-relaxed">
          {article.excerpt}
        </p>

        {/* Article Body */}
        <div className="space-y-4 text-xs sm:text-sm text-[#554E5F] leading-relaxed font-sans">
          {article.content.map((p, idx) => (
            <p key={idx} className="leading-loose">
              {p}
            </p>
          ))}
        </div>

        {/* Sign-off */}
        <div className="mt-8 pt-6 border-t border-[#E8E4DF] flex items-center justify-between text-xs text-[#8E8795]">
          <span className="font-serif italic text-sm text-[#332748]">
            Mikhael Victor · Klang, Malaysia
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 rounded-full border border-[#E8E4DF] hover:bg-[#FAF9F6] text-[#554E5F] transition-colors"
          >
            {isZh ? "关闭阅读" : "Close Article"}
          </button>
        </div>
      </div>
    </div>
  );
}
