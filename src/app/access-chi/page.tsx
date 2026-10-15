"use client";

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { PlaceholderImage } from '@/components/PlaceholderImage';
import { BookingModal } from '@/components/BookingModal';
import { Calendar, ArrowRight } from 'lucide-react';

export default function AccessChiPage() {
  const { isZh } = useLanguage();
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <div className="py-16 sm:py-24 bg-[#FAF9F6]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center min-h-[60vh]">
          <div className="lg:col-span-7 space-y-7">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#242129] font-normal leading-tight tracking-tight">
              {isZh ? "Access Chi 空间风水" : "Access Chi Spatial Feng Shui"}
            </h1>

            <p className="text-sm sm:text-base text-[#58535F] leading-relaxed font-sans font-normal max-w-xl">
              {isZh
                ? "调和人与空间场域的能量流动，为住宅、商业空间及办公环境施以专属净化与能量祝福。"
                : "Harmonizing energetic flow between individuals and environments, providing sacred purification and energetic blessings for homes, business spaces, and workplaces."}
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => setBookingOpen(true)}
                className="px-8 py-4 rounded-full bg-[#2D233C] text-white text-xs sm:text-sm font-medium hover:bg-[#443659] transition-all shadow-md flex items-center gap-2"
              >
                <Calendar className="w-4 h-4 text-[#D9C3A3]" />
                <span>{isZh ? "预约空间风水勘察咨询" : "Inquire Spatial Feng Shui Consultation"}</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <PlaceholderImage
              src="/images/access_chi_space.jpg"
              alt="Access Chi Spatial Resonance"
              label={isZh ? "Access Chi 空间风水" : "Spatial Feng Shui"}
              sublabel={isZh ? "住宅 · 商业 · 空间专属祝福" : "Homes · Commercial · Spaces"}
              aspectRatio="editorial"
              variant="space"
              archiveNo="CHI-SANCTUARY"
            />
          </div>
        </div>
      </div>

      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        defaultService={isZh ? "Access Chi 空间风水咨询" : "Access Chi Spatial Feng Shui"}
      />
    </div>
  );
}

