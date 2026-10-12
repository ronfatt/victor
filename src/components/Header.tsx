"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useLanguage } from '../context/LanguageContext';
import { ChevronDown, Menu, X, Calendar, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  onOpenBooking?: (serviceName?: string) => void;
}

export function Header({ onOpenBooking }: HeaderProps) {
  const { setLanguage, t, isZh } = useLanguage();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [prevPath, setPrevPath] = useState(pathname);
  const dropdownRef = useRef<HTMLDivElement>(null);

  if (prevPath !== pathname) {
    setPrevPath(pathname);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          scrolled
            ? "bg-[#FAF9F6]/90 backdrop-blur-xl border-b border-[#2D233C]/8 py-3 shadow-[0_8px_30px_rgb(0,0,0,0.03)]"
            : "bg-[#FAF9F6]/80 backdrop-blur-md border-b border-[#2D233C]/5 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Brand Logo & Wordmark */}
          <Link
            href="/"
            className="group flex items-center gap-3.5 select-none flex-shrink-0"
            aria-label="Mikhael Victor Home"
          >
            {/* Authentic Sacred Geometry Golden Emblem */}
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#B99C72]/40 bg-gradient-to-tr from-white via-[#FAF9F6] to-[#F5EFE6] flex items-center justify-center p-1.5 transition-all duration-500 group-hover:scale-105 group-hover:border-[#B99C72] shadow-xs overflow-hidden">
              <Image
                src="/images/logo.png"
                alt="Mikhael Victor Emblem"
                width={36}
                height={58}
                className="w-auto h-full object-contain filter drop-shadow-[0_1px_2px_rgba(185,156,114,0.3)] transition-transform duration-500 group-hover:scale-110"
                priority
              />
            </div>

            <div>
              <span className="block font-serif text-[15px] sm:text-[17px] tracking-[0.2em] text-[#2D233C] font-normal uppercase leading-tight group-hover:text-[#443659] transition-colors">
                Mikhael Victor
              </span>
              <span className="block text-[8.5px] font-mono tracking-[0.26em] text-[#66616F] uppercase leading-none mt-1">
                Klang · Spiritual Wellness
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1.5 text-[12.5px] tracking-wide text-[#58535F] font-normal font-sans">
            <Link
              href="/"
              className={`px-3 py-1.5 rounded-full transition-colors hover:text-[#2D233C] ${
                pathname === '/' ? 'text-[#2D233C] font-medium bg-[#2D233C]/5' : ''
              }`}
            >
              {t.nav[0].label}
            </Link>

            <Link
              href="/about"
              className={`px-3 py-1.5 rounded-full transition-colors hover:text-[#2D233C] ${
                pathname === '/about' ? 'text-[#2D233C] font-medium bg-[#2D233C]/5' : ''
              }`}
            >
              {t.nav[1].label}
            </Link>

            {/* Services Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                onMouseEnter={() => setServicesDropdownOpen(true)}
                className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full transition-colors hover:text-[#2D233C] ${
                  ['/sessions', '/alt-therapy', '/aura-prema', '/meditation', '/access-chi'].includes(pathname)
                    ? 'text-[#2D233C] font-medium bg-[#2D233C]/5'
                    : ''
                }`}
                aria-expanded={servicesDropdownOpen}
              >
                <span>{t.nav[2].label}</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-300 ${
                    servicesDropdownOpen ? 'rotate-180 text-[#2D233C]' : 'text-[#66616F]'
                  }`}
                />
              </button>

              {/* Dropdown Menu - Luxury Editorial Card */}
              {servicesDropdownOpen && (
                <div
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                  className="absolute left-0 mt-2 w-80 rounded-[20px] bg-white/95 backdrop-blur-xl border border-[#E8E3DD] p-2.5 z-50 editorial-shadow-elevated animate-in fade-in slide-in-from-top-2 duration-200"
                >
                  <div className="px-3.5 py-2 border-b border-[#E8E3DD]/60 mb-1 flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#ADA0BE]">
                      {isZh ? "五大专业修习体系" : "CORE DISCIPLINES"}
                    </span>
                    <span className="text-[9px] text-[#B99C72] font-mono">01—05</span>
                  </div>

                  <Link
                    href="/sessions"
                    className="flex flex-col px-3.5 py-2.5 rounded-xl hover:bg-[#FAF9F6] transition-colors group"
                  >
                    <span className="text-xs font-serif font-medium text-[#242129] group-hover:text-[#2D233C]">
                      {isZh ? "一对一私人咨询" : "Private Sessions"}
                    </span>
                    <span className="text-[11px] text-[#66616F] font-sans">
                      {isZh ? "20/60/90分钟象征解读与反思指引" : "20/60/90 min intuitive readings"}
                    </span>
                  </Link>

                  <Link
                    href="/alt-therapy"
                    className="flex flex-col px-3.5 py-2.5 rounded-xl hover:bg-[#FAF9F6] transition-colors group"
                  >
                    <span className="text-xs font-serif font-medium text-[#242129] group-hover:text-[#2D233C]">
                      {isZh ? "ALT 天使源疗" : "ALT Light Therapy"}
                    </span>
                    <span className="text-[11px] text-[#66616F] font-sans">
                      {isZh ? "原创灵性仪式与身心对齐体验" : "Proprietary reflective sacred ritual"}
                    </span>
                  </Link>

                  <Link
                    href="/aura-prema"
                    className="flex flex-col px-3.5 py-2.5 rounded-xl hover:bg-[#FAF9F6] transition-colors group"
                  >
                    <span className="text-xs font-serif font-medium text-[#242129] group-hover:text-[#2D233C]">
                      {isZh ? "Aura Prema 天使花晶" : "Aura Prema Essences"}
                    </span>
                    <span className="text-[11px] text-[#66616F] font-sans">
                      {isZh ? "七大天使喷雾与色彩日常觉察" : "7 Archangel Sprays & 12 Quintessences"}
                    </span>
                  </Link>

                  <Link
                    href="/meditation"
                    className="flex flex-col px-3.5 py-2.5 rounded-xl hover:bg-[#FAF9F6] transition-colors group"
                  >
                    <span className="text-xs font-serif font-medium text-[#242129] group-hover:text-[#2D233C]">
                      {isZh ? "I.S.G.A. 静坐修习" : "I.S.G.A. Meditation"}
                    </span>
                    <span className="text-[11px] text-[#66616F] font-sans">
                      {isZh ? "六阶段心轮至高阶系统课程" : "6-stage progressive academy"}
                    </span>
                  </Link>

                  <Link
                    href="/access-chi"
                    className="flex flex-col px-3.5 py-2.5 rounded-xl hover:bg-[#FAF9F6] transition-colors group"
                  >
                    <span className="text-xs font-serif font-medium text-[#242129] group-hover:text-[#2D233C]">
                      {isZh ? "Access Chi 空间风水" : "Access Chi Spatial Feng Shui"}
                    </span>
                    <span className="text-[11px] text-[#66616F] font-sans">
                      {isZh ? "居家、商业与座驾场域调和" : "Home, commercial & vehicle alignment"}
                    </span>
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/meditation"
              className={`px-3 py-1.5 rounded-full transition-colors hover:text-[#2D233C] ${
                pathname === '/meditation' ? 'text-[#2D233C] font-medium bg-[#2D233C]/5' : ''
              }`}
            >
              {t.nav[3].label}
            </Link>

            <Link
              href="/aura-prema"
              className={`px-3 py-1.5 rounded-full transition-colors hover:text-[#2D233C] ${
                pathname === '/aura-prema' ? 'text-[#2D233C] font-medium bg-[#2D233C]/5' : ''
              }`}
            >
              {t.nav[4].label}
            </Link>

            <Link
              href="/access-chi"
              className={`px-3 py-1.5 rounded-full transition-colors hover:text-[#2D233C] ${
                pathname === '/access-chi' ? 'text-[#2D233C] font-medium bg-[#2D233C]/5' : ''
              }`}
            >
              {t.nav[5].label}
            </Link>

            <Link
              href="/insights"
              className={`px-3 py-1.5 rounded-full transition-colors hover:text-[#2D233C] ${
                pathname === '/insights' ? 'text-[#2D233C] font-medium bg-[#2D233C]/5' : ''
              }`}
            >
              {t.nav[6].label}
            </Link>

            <Link
              href="/contact"
              className={`px-3 py-1.5 rounded-full transition-colors hover:text-[#2D233C] ${
                pathname === '/contact' ? 'text-[#2D233C] font-medium bg-[#2D233C]/5' : ''
              }`}
            >
              {t.nav[7].label}
            </Link>
          </nav>

          {/* Right Section: Language Toggle & Luxury CTA */}
          <div className="flex items-center gap-3">
            {/* Language Switcher Pill */}
            <div className="flex items-center rounded-full border border-[#E8E3DD] bg-white/80 p-0.5 text-xs shadow-2xs">
              <button
                type="button"
                onClick={() => setLanguage('zh')}
                className={`px-2.5 py-1 rounded-full font-medium transition-all ${
                  isZh
                    ? "bg-[#2D233C] text-white shadow-xs"
                    : "text-[#66616F] hover:text-[#2D233C]"
                }`}
                aria-label="切换至中文"
              >
                中
              </button>
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`px-2.5 py-1 rounded-full font-medium transition-all ${
                  !isZh
                    ? "bg-[#2D233C] text-white shadow-xs"
                    : "text-[#66616F] hover:text-[#2D233C]"
                }`}
                aria-label="Switch to English"
              >
                EN
              </button>
            </div>

            {/* Book a Session CTA button */}
            {onOpenBooking ? (
              <button
                type="button"
                onClick={() => onOpenBooking()}
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#2D233C] text-white text-xs font-medium tracking-wide shadow-sm hover:bg-[#443659] hover:shadow-md transition-all duration-300"
              >
                <Calendar className="w-3.5 h-3.5 text-[#D9C3A3]" />
                <span>{t.cta.bookSession}</span>
              </button>
            ) : (
              <Link
                href="/booking"
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#2D233C] text-white text-xs font-medium tracking-wide shadow-sm hover:bg-[#443659] hover:shadow-md transition-all duration-300"
              >
                <Calendar className="w-3.5 h-3.5 text-[#D9C3A3]" />
                <span>{t.cta.bookSession}</span>
              </Link>
            )}

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-[#2D233C] hover:bg-[#2D233C]/5 transition-colors"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Drawer"
            className="lg:hidden fixed inset-0 z-50 overflow-hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-[#1E1729]/55 backdrop-blur-xs"
            />

            {/* Slide-in Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="fixed inset-y-0 right-0 w-full max-w-sm bg-[#FAF9F6] border-l border-[#E8E3DD] p-6 shadow-2xl flex flex-col justify-between overflow-y-auto"
            >
              <div>
                {/* Drawer Top */}
                <div className="flex items-center justify-between pb-6 border-b border-[#E8E3DD]">
                  <div className="flex items-center gap-2.5">
                    <div className="relative w-8 h-8 rounded-full border border-[#B99C72]/40 bg-white p-1 flex items-center justify-center shadow-xs overflow-hidden">
                      <Image
                        src="/images/logo.png"
                        alt="Mikhael Victor Logo"
                        width={28}
                        height={46}
                        className="w-auto h-full object-contain"
                      />
                    </div>
                    <span className="font-serif text-sm tracking-[0.18em] text-[#2D233C] font-medium uppercase">
                      Mikhael Victor
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-lg text-[#66616F] hover:text-[#2D233C]"
                    aria-label="Close navigation"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Drawer Links */}
                <div className="py-6 space-y-1">
                  <Link
                    href="/"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-2.5 rounded-xl text-[#242129] hover:bg-white hover:text-[#2D233C] text-sm font-medium"
                  >
                    {t.nav[0].label}
                  </Link>
                  <Link
                    href="/about"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-2.5 rounded-xl text-[#242129] hover:bg-white hover:text-[#2D233C] text-sm font-medium"
                  >
                    {t.nav[1].label}
                  </Link>

                  <div className="pt-3 pb-1 px-4 text-[10px] font-mono font-semibold text-[#ADA0BE] tracking-widest uppercase">
                    {isZh ? "五大专业修习体系" : "CORE PRACTICES"}
                  </div>
                  <Link
                    href="/sessions"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-2 rounded-xl text-[#58535F] hover:bg-white text-sm"
                  >
                    {isZh ? "一对一私人咨询 (Sessions)" : "Private Sessions"}
                  </Link>
                  <Link
                    href="/alt-therapy"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-2 rounded-xl text-[#58535F] hover:bg-white text-sm"
                  >
                    {isZh ? "ALT 天使源疗 (ALT Therapy)" : "ALT Therapy"}
                  </Link>
                  <Link
                    href="/aura-prema"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-2 rounded-xl text-[#58535F] hover:bg-white text-sm"
                  >
                    {isZh ? "Aura Prema 天使花晶 (Products)" : "Aura Prema"}
                  </Link>
                  <Link
                    href="/meditation"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-2 rounded-xl text-[#58535F] hover:bg-white text-sm"
                  >
                    {isZh ? "I.S.G.A. 静坐修习 (Courses)" : "I.S.G.A Meditation"}
                  </Link>
                  <Link
                    href="/access-chi"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-2 rounded-xl text-[#58535F] hover:bg-white text-sm"
                  >
                    {isZh ? "Access Chi 空间风水 (Feng Shui)" : "Access Chi Feng Shui"}
                  </Link>

                  <div className="pt-3 pb-1 px-4 text-[10px] font-mono font-semibold text-[#ADA0BE] tracking-widest uppercase">
                    {isZh ? "觉察与联络" : "MORE"}
                  </div>
                  <Link
                    href="/insights"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-2.5 rounded-xl text-[#242129] hover:bg-white text-sm font-medium"
                  >
                    {t.nav[6].label}
                  </Link>
                  <Link
                    href="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-2.5 rounded-xl text-[#242129] hover:bg-white text-sm font-medium"
                  >
                    {t.nav[7].label}
                  </Link>
                </div>
              </div>

              {/* Drawer Bottom Actions */}
              <div className="pt-6 border-t border-[#E8E3DD] space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#66616F]">{isZh ? "界面语言" : "Language"}</span>
                  <div className="flex rounded-full border border-[#E8E3DD] bg-white p-0.5 text-xs">
                    <button
                      type="button"
                      onClick={() => setLanguage('zh')}
                      className={`px-3 py-1 rounded-full transition-colors ${isZh ? 'bg-[#2D233C] text-white' : 'text-[#66616F]'}`}
                    >
                      中文
                    </button>
                    <button
                      type="button"
                      onClick={() => setLanguage('en')}
                      className={`px-3 py-1 rounded-full transition-colors ${!isZh ? 'bg-[#2D233C] text-white' : 'text-[#66616F]'}`}
                    >
                      English
                    </button>
                  </div>
                </div>

                {onOpenBooking ? (
                  <button
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenBooking();
                    }}
                    className="w-full py-3.5 rounded-full bg-[#2D233C] text-white text-sm font-medium text-center shadow-md flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-4 h-4 text-[#D9C3A3]" />
                    <span>{t.cta.bookSession}</span>
                  </button>
                ) : (
                  <Link
                    href="/booking"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full py-3.5 rounded-full bg-[#2D233C] text-white text-sm font-medium text-center shadow-md flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-4 h-4 text-[#D9C3A3]" />
                    <span>{t.cta.bookSession}</span>
                  </Link>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
