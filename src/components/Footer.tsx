"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';
import { siteConfig } from '../config/siteConfig';
import { MapPin, Mail, MessageSquare, Globe, AlertCircle, ArrowUpRight } from 'lucide-react';

export function Footer() {
  const { t, isZh, setLanguage } = useLanguage();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'submitted'>('idle');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterStatus('submitted');
  };

  return (
    <footer className="bg-[#F7F4F0] border-t border-[#E8E3DD] text-[#242129] transition-colors duration-200">
      {/* Top Disclaimer Ribbon */}
      <div className="bg-[#EFEAE4] border-b border-[#E4DDD4] py-3.5 px-4 text-center">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-xs text-[#5C5564]">
          <AlertCircle className="w-3.5 h-3.5 text-[#B99C72] flex-shrink-0" />
          <p className="max-w-4xl text-[11px] leading-relaxed tracking-wide text-[#666070]">
            {isZh ? siteConfig.disclaimer.medicalZh : siteConfig.disclaimer.medicalEn}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Column 1: Brand & Bio Summary */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full border border-[#ADA0BE]/60 bg-white flex items-center justify-center text-[#2D233C] shadow-sm">
                <span className="font-serif text-lg">✧</span>
              </div>
              <span className="font-serif text-xl tracking-[0.14em] text-[#2D233C] font-medium uppercase">
                Mikhael Victor
              </span>
            </div>

            <p className="text-xs text-[#666070] leading-relaxed max-w-sm">
              {t.footer.brandDesc}
            </p>

            <div className="pt-2 space-y-2 text-xs text-[#524B5C]">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#B99C72] mt-0.5 flex-shrink-0" />
                <span>{isZh ? siteConfig.brand.locationZh : siteConfig.brand.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-[#ADA0BE] flex-shrink-0" />
                <span>{t.footer.consultationLanguages}</span>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-3 text-xs text-[#666070]">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 border border-[#E8E3DD] text-[10px] tracking-wider uppercase font-mono text-[#524B5C]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B99C72]" />
                {isZh ? "巴生中心 · 预约制" : "Klang Studio · By Appointment"}
              </span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#2D233C] mb-4">
              {t.footer.navColTitle}
            </h4>
            <ul className="space-y-2.5 text-xs text-[#666070]">
              <li>
                <Link href="/" className="hover:text-[#2D233C] transition-colors">
                  {t.nav[0].label}
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#2D233C] transition-colors">
                  {t.nav[1].label}
                </Link>
              </li>
              <li>
                <Link href="/meditation" className="hover:text-[#2D233C] transition-colors">
                  {t.nav[3].label}
                </Link>
              </li>
              <li>
                <Link href="/aura-prema" className="hover:text-[#2D233C] transition-colors">
                  {t.nav[4].label}
                </Link>
              </li>
              <li>
                <Link href="/insights" className="hover:text-[#2D233C] transition-colors">
                  {t.nav[6].label}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#2D233C] transition-colors">
                  {t.nav[7].label}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Core Practices */}
          <div>
            <h4 className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#2D233C] mb-4">
              {t.footer.servicesColTitle}
            </h4>
            <ul className="space-y-2.5 text-xs text-[#666070]">
              <li>
                <Link href="/sessions" className="hover:text-[#2D233C] transition-colors">
                  {isZh ? "一对一灵性咨询" : "Private Sessions"}
                </Link>
              </li>
              <li>
                <Link href="/alt-therapy" className="hover:text-[#2D233C] transition-colors">
                  {isZh ? "ALT 天使源疗" : "ALT Light Therapy"}
                </Link>
              </li>
              <li>
                <Link href="/aura-prema" className="hover:text-[#2D233C] transition-colors">
                  {isZh ? "Aura Prema 天使花晶" : "Aura Prema Essences"}
                </Link>
              </li>
              <li>
                <Link href="/meditation" className="hover:text-[#2D233C] transition-colors">
                  {isZh ? "I.S.G.A. 静坐修习" : "I.S.G.A Meditation"}
                </Link>
              </li>
              <li>
                <Link href="/access-chi" className="hover:text-[#2D233C] transition-colors">
                  {isZh ? "Access Chi 空间风水" : "Access Chi Feng Shui"}
                </Link>
              </li>
              <li>
                <Link href="/booking" className="hover:text-[#2D233C] transition-colors text-[#B99C72] font-medium flex items-center gap-1">
                  <span>{t.cta.bookSession}</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter / Demo Updates */}
          <div>
            <h4 className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#2D233C] mb-4">
              {t.footer.newsletterTitle}
            </h4>
            <p className="text-xs text-[#666070] leading-relaxed mb-3">
              {t.footer.newsletterDesc}
            </p>

            {newsletterStatus === 'submitted' ? (
              <div className="p-3.5 rounded-xl bg-white border border-[#E8E3DD] text-xs text-[#2D233C]">
                {t.footer.newsletterSuccess}
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                <div className="flex rounded-full overflow-hidden border border-[#E8E3DD] bg-white focus-within:border-[#2D233C] focus-within:ring-1 focus-within:ring-[#2D233C]/20 transition-all p-1">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder={t.footer.newsletterPlaceholder}
                    className="w-full px-3.5 py-1.5 text-xs bg-transparent text-[#242129] placeholder:text-[#A7A2AE] focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="px-4 py-1.5 bg-[#2D233C] text-white text-xs font-medium rounded-full hover:bg-[#3E3052] transition-colors flex-shrink-0"
                  >
                    {t.footer.newsletterBtn}
                  </button>
                </div>
                <span className="block text-[10px] text-[#8E8795] pl-2">
                  {isZh ? "* 概念版本功能 · 尊重隐私无垃圾讯息" : "* Demo feature · Privacy respected"}
                </span>
              </form>
            )}

            {/* Social Placeholders */}
            <div className="pt-4 flex items-center gap-3 text-[#666070]">
              <span className="text-[10px] uppercase tracking-wider text-[#A7A2AE]">
                {isZh ? "社交与渠道" : "Channels"}
              </span>
              <div className="flex items-center gap-2">
                <span
                  title={siteConfig.contact.instagramHandle}
                  className="w-7 h-7 rounded-full bg-white border border-[#E8E3DD] flex items-center justify-center text-[#2D233C] cursor-pointer hover:border-[#ADA0BE] transition-colors"
                >
                  <svg className="w-3.5 h-3.5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                </span>
                <span
                  title={siteConfig.contact.wechatId}
                  className="w-7 h-7 rounded-full bg-white border border-[#E8E3DD] flex items-center justify-center text-[#2D233C] cursor-pointer hover:border-[#ADA0BE] transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                </span>
                <span
                  title={siteConfig.contact.email}
                  className="w-7 h-7 rounded-full bg-white border border-[#E8E3DD] flex items-center justify-center text-[#2D233C] cursor-pointer hover:border-[#ADA0BE] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="mt-14 pt-8 border-t border-[#E8E3DD] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#8E8795]">
          <div className="text-center md:text-left">
            <p>{t.footer.legalCopyright}</p>
            <p className="text-[10px] text-[#A7A2AE] mt-0.5">
              {t.footer.legalNotice}
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <button
              type="button"
              onClick={() => setLanguage('zh')}
              className={`hover:text-[#2D233C] transition-colors ${isZh ? 'font-medium text-[#2D233C]' : ''}`}
            >
              中文版 (zh-CN)
            </button>
            <span className="text-[#D0C9C0]">·</span>
            <button
              type="button"
              onClick={() => setLanguage('en')}
              className={`hover:text-[#2D233C] transition-colors ${!isZh ? 'font-medium text-[#2D233C]' : ''}`}
            >
              English (EN)
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
