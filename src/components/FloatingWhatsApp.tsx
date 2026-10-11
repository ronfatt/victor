"use client";

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { buildWhatsAppLink } from '@/config/siteConfig';
import { MessageSquare, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function FloatingWhatsApp() {
  const { isZh } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show after small scroll or 1.2s delay for pleasant entrance
    const timer = setTimeout(() => setIsVisible(true), 1200);
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setIsVisible(true);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const whatsappHref = buildWhatsAppLink(
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    isZh
  );

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.aside
          initial={{ opacity: 0, y: 24, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.92 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-5 right-4 sm:bottom-7 sm:right-7 z-40 select-none print:hidden"
          aria-label={isZh ? "WhatsApp 官方私询通道" : "Official WhatsApp Direct Channel"}
        >
          {/* Subtle Outer Ambient Glow Ring */}
          <div className="absolute inset-0 -m-1.5 rounded-full bg-gradient-to-r from-[#25D366]/20 via-[#B99C72]/20 to-[#ADA0BE]/20 blur-md pointer-events-none opacity-70 group-hover:opacity-100 transition-opacity" />

          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-3 px-4 py-3 sm:px-5 sm:py-3.5 rounded-full bg-[#242129]/95 text-white border border-white/20 backdrop-blur-md editorial-shadow-elevated hover:bg-[#2D233C] hover:border-[#D9C3A3]/60 transition-all duration-300"
          >
            {/* WhatsApp Green Pulsing Dot & Icon */}
            <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-[#25D366] text-white shadow-sm flex-shrink-0 group-hover:scale-105 transition-transform">
              <MessageSquare className="w-4 h-4 fill-white" />
              <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[#25D366] border-2 border-[#242129] animate-ping" />
              <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[#25D366] border-2 border-[#242129]" />
            </div>

            {/* Concise Callout Text */}
            <div className="flex flex-col text-left pr-1">
              <div className="flex items-center gap-1.5">
                <span className="font-serif text-xs sm:text-sm font-medium tracking-wide text-white group-hover:text-[#D9C3A3] transition-colors">
                  {isZh ? "WhatsApp 快速私询" : "Inquire on WhatsApp"}
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-white/60 group-hover:text-[#D9C3A3] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
              <span className="text-[10px] text-[#ADA0BE] font-mono tracking-wider flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#25D366]" />
                {isZh ? "巴生工作室 · 在线受理" : "Klang Studio · Direct"}
              </span>
            </div>
          </a>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
