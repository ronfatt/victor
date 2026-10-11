"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import { buildWhatsAppLink } from '@/config/siteConfig';
import { BookingModal } from '@/components/BookingModal';
import {
  Compass,
  Sparkles,
  Layers,
  MessageSquare,
  Menu,
  X,
  Calendar,
  Flower2,
  BookOpen,
  MapPin,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function MobileBottomNav() {
  const pathname = usePathname();
  const { isZh, t, setLanguage } = useLanguage();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);

  const whatsappUrl = buildWhatsAppLink(
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    isZh
  );

  const navItems = [
    {
      id: "home",
      label: isZh ? "首页" : "Home",
      href: "/",
      icon: Compass,
      isActive: pathname === "/",
    },
    {
      id: "sessions",
      label: isZh ? "咨询" : "Sessions",
      href: "/sessions",
      icon: Sparkles,
      isActive: pathname === "/sessions",
    },
    {
      id: "meditation",
      label: isZh ? "静坐" : "Courses",
      href: "/meditation",
      icon: Layers,
      isActive: pathname === "/meditation",
    },
  ];

  return (
    <>
      {/* ========================================================
          iOS NATIVE STYLE BOTTOM APP DOCK (MOBILE ONLY)
         ======================================================== */}
      <nav
        aria-label="Mobile Navigation Dock"
        className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#FAF9F6]/92 backdrop-blur-xl border-t border-[#E8E3DD]/80 shadow-[0_-8px_30px_rgba(45,35,60,0.06)] pb-[env(safe-area-inset-bottom)] select-none print:hidden transition-transform duration-300"
      >
        <div className="grid grid-cols-5 items-center h-16 px-1.5 max-w-md mx-auto">
          {/* Tab 1: Home */}
          <Link
            href="/"
            className={`flex flex-col items-center justify-center py-1 transition-all active:scale-90 ${
              pathname === "/" ? "text-[#2D233C]" : "text-[#8E8795] hover:text-[#58535F]"
            }`}
          >
            <div className="relative">
              <Compass className={`w-5 h-5 ${pathname === "/" ? "stroke-[2.2] text-[#2D233C]" : "stroke-[1.6]"}`} />
              {pathname === "/" && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#B99C72]" />
              )}
            </div>
            <span className={`text-[10px] mt-1 font-sans ${pathname === "/" ? "font-semibold text-[#2D233C]" : "font-normal"}`}>
              {isZh ? "首页" : "Home"}
            </span>
          </Link>

          {/* Tab 2: Sessions */}
          <Link
            href="/sessions"
            className={`flex flex-col items-center justify-center py-1 transition-all active:scale-90 ${
              pathname === "/sessions" ? "text-[#2D233C]" : "text-[#8E8795] hover:text-[#58535F]"
            }`}
          >
            <div className="relative">
              <Sparkles className={`w-5 h-5 ${pathname === "/sessions" ? "stroke-[2.2] text-[#B99C72]" : "stroke-[1.6]"}`} />
              {pathname === "/sessions" && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#B99C72]" />
              )}
            </div>
            <span className={`text-[10px] mt-1 font-sans ${pathname === "/sessions" ? "font-semibold text-[#2D233C]" : "font-normal"}`}>
              {isZh ? "咨询" : "Sessions"}
            </span>
          </Link>

          {/* Tab 3: Center Highlighted WhatsApp Action Pill */}
          <div className="flex flex-col items-center justify-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Direct WhatsApp Consultation"
              className="relative flex items-center justify-center w-11 h-11 -mt-4 rounded-full bg-[#25D366] text-white shadow-[0_4px_16px_rgba(37,211,102,0.4)] active:scale-90 transition-transform"
            >
              <MessageSquare className="w-5 h-5 fill-white" />
              {/* Pulsing Green Indicator Ring */}
              <span className="absolute top-0 right-0 w-3 h-3 rounded-full bg-[#25D366] border-2 border-white animate-ping" />
              <span className="absolute top-0 right-0 w-3 h-3 rounded-full bg-[#25D366] border-2 border-white" />
            </a>
            <span className="text-[9.5px] mt-0.5 font-medium text-[#25D366] font-sans">
              WhatsApp
            </span>
          </div>

          {/* Tab 4: Courses / Meditation */}
          <Link
            href="/meditation"
            className={`flex flex-col items-center justify-center py-1 transition-all active:scale-90 ${
              pathname === "/meditation" ? "text-[#2D233C]" : "text-[#8E8795] hover:text-[#58535F]"
            }`}
          >
            <div className="relative">
              <Layers className={`w-5 h-5 ${pathname === "/meditation" ? "stroke-[2.2] text-[#2D233C]" : "stroke-[1.6]"}`} />
              {pathname === "/meditation" && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#B99C72]" />
              )}
            </div>
            <span className={`text-[10px] mt-1 font-sans ${pathname === "/meditation" ? "font-semibold text-[#2D233C]" : "font-normal"}`}>
              {isZh ? "静坐" : "Courses"}
            </span>
          </Link>

          {/* Tab 5: Menu Drawer Button */}
          <button
            type="button"
            onClick={() => setDrawerOpen(true)}
            className="flex flex-col items-center justify-center py-1 transition-all active:scale-90 text-[#8E8795] hover:text-[#2D233C]"
            aria-label="Open App Menu"
          >
            <Menu className="w-5 h-5 stroke-[1.6]" />
            <span className="text-[10px] mt-1 font-sans font-normal">
              {isZh ? "更多" : "Menu"}
            </span>
          </button>
        </div>
      </nav>

      {/* ========================================================
          APP STYLE FULL-HEIGHT SLIDE-OVER SHEET (MOBILE MENU)
         ======================================================== */}
      <AnimatePresence>
        {drawerOpen && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Sheet"
            className="fixed inset-0 z-50 md:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setDrawerOpen(false)}
              className="fixed inset-0 bg-[#1E1729]/60 backdrop-blur-sm"
            />

            {/* Slide-Up / Slide-In App Drawer */}
            <motion.aside
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="fixed inset-x-0 bottom-0 top-12 rounded-t-[32px] bg-[#FAF9F6] border-t border-[#E8E3DD] p-6 shadow-2xl flex flex-col justify-between overflow-y-auto pb-[max(2rem,env(safe-area-inset-bottom))]"
            >
              {/* App Sheet Top Drag Indicator */}
              <div>
                <div className="w-12 h-1.5 bg-[#D8D2DC] rounded-full mx-auto mb-6" />

                <div className="flex items-center justify-between pb-5 border-b border-[#E8E3DD]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-white border border-[#E8E3DD] shadow-2xs flex items-center justify-center font-serif text-[#2D233C] text-sm">
                      MV
                    </div>
                    <div>
                      <h3 className="font-serif text-base text-[#2D233C] font-normal uppercase tracking-wider">
                        Mikhael Victor
                      </h3>
                      <p className="text-[10px] text-[#8E8795] font-mono">
                        KLANG, MALAYSIA
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setDrawerOpen(false)}
                    className="p-2 rounded-full bg-white border border-[#E8E3DD] text-[#666070] active:scale-90 transition-all"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* App Navigation Grid */}
                <div className="py-6 space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#ADA0BE] block px-2 mb-2">
                    {isZh ? "核心修习与专页" : "EXPLORE DISCIPLINES"}
                  </span>

                  {[
                    { href: "/", label: isZh ? "首页 (Overview)" : "Home", icon: Compass },
                    { href: "/about", label: isZh ? "关于导师与生平传承" : "About Mikhael Victor", icon: BookOpen },
                    { href: "/sessions", label: isZh ? "一对一灵性咨询 (RM50/200/444)" : "Private Sessions", icon: Sparkles },
                    { href: "/alt-therapy", label: isZh ? "ALT 天使源疗体系" : "ALT Light Therapy", icon: Sparkles },
                    { href: "/aura-prema", label: isZh ? "Aura Prema 天使花晶" : "Aura Prema Flower Essence", icon: Flower2 },
                    { href: "/meditation", label: isZh ? "I.S.G.A. 静坐六阶段课程" : "I.S.G.A Meditation", icon: Layers },
                    { href: "/access-chi", label: isZh ? "Access Chi 空间风水" : "Access Chi Feng Shui", icon: MapPin },
                    { href: "/insights", label: isZh ? "觉察随笔专栏" : "Insights & Journal", icon: BookOpen },
                    { href: "/contact", label: isZh ? "工作室联络与地址" : "Studio & Contact", icon: MapPin },
                  ].map((item, i) => (
                    <Link
                      key={i}
                      href={item.href}
                      onClick={() => setDrawerOpen(false)}
                      className={`flex items-center justify-between p-3.5 rounded-2xl transition-all active:scale-[0.98] ${
                        pathname === item.href
                          ? "bg-white border border-[#2D233C] text-[#2D233C] shadow-2xs font-medium"
                          : "bg-white/60 border border-[#E8E3DD] text-[#554E5F] hover:bg-white"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <item.icon className="w-4 h-4 text-[#B99C72]" />
                        <span className="text-xs sm:text-sm font-sans">{item.label}</span>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-[#ADA0BE]" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Bottom Language Switcher & Instant WhatsApp Action */}
              <div className="pt-4 border-t border-[#E8E3DD] space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#666070] font-sans">
                    {isZh ? "界面语言" : "Interface Language"}
                  </span>
                  <div className="flex rounded-full border border-[#E8E3DD] bg-white p-0.5 text-xs">
                    <button
                      type="button"
                      onClick={() => setLanguage('zh')}
                      className={`px-3 py-1 rounded-full transition-colors ${
                        isZh ? "bg-[#2D233C] text-white" : "text-[#666070]"
                      }`}
                    >
                      中文
                    </button>
                    <button
                      type="button"
                      onClick={() => setLanguage('en')}
                      className={`px-3 py-1 rounded-full transition-colors ${
                        !isZh ? "bg-[#2D233C] text-white" : "text-[#666070]"
                      }`}
                    >
                      EN
                    </button>
                  </div>
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 rounded-full bg-[#25D366] text-white text-xs sm:text-sm font-medium shadow-md flex items-center justify-center gap-2 active:scale-95 transition-transform"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>{isZh ? "WhatsApp 官方私询通道" : "Launch WhatsApp Concierge"}</span>
                </a>
              </div>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>

      {/* Booking Modal */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
      />
    </>
  );
}
