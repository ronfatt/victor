"use client";

import React from 'react';
import Image from 'next/image';

interface PlaceholderImageProps {
  label: string;
  sublabel?: string;
  className?: string;
  aspectRatio?: 'square' | 'portrait' | 'landscape' | 'wide' | 'editorial';
  icon?: string;
  variant?: 'portrait' | 'ritual' | 'product' | 'space' | 'meditation';
  archiveNo?: string;
  src?: string;
  alt?: string;
}

export function PlaceholderImage({
  label,
  sublabel,
  className = "",
  aspectRatio = "portrait",
  variant = "portrait",
  archiveNo = "PL-01",
  src,
  alt,
}: PlaceholderImageProps) {
  const aspectClasses = {
    square: "aspect-square",
    portrait: "aspect-[3/4]",
    landscape: "aspect-[4/3]",
    wide: "aspect-[16/9]",
    editorial: "aspect-[4/5]",
  }[aspectRatio];

  const ambientGradients: Record<string, string> = {
    portrait: "from-[#F6F2EE] via-[#EFEAE5] to-[#DFD9E2]",
    ritual: "from-[#FBF9F7] via-[#F3EDF5] to-[#D8D2E1]",
    product: "from-[#FAF7F2] via-[#EFEBE4] to-[#DDD7CE]",
    space: "from-[#FAF9F6] via-[#EEF0EB] to-[#D5DBD3]",
    meditation: "from-[#F9F7F5] via-[#EAEBE7] to-[#D1D8D2]",
  };

  if (src) {
    return (
      <div
        className={`group relative overflow-hidden rounded-[26px] border border-[#E8E3DD] bg-[#FAF9F6] text-[#242129] select-none editorial-shadow-subtle transition-all duration-500 hover:border-[#ADA0BE] hover:editorial-shadow-elevated flex flex-col justify-between ${aspectClasses} ${className}`}
      >
        {/* Photographic Asset */}
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={src}
            alt={alt || label}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>

        {/* Ethereal Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1F1B24]/85 via-[#1F1B24]/25 to-black/20 pointer-events-none" />

        {/* Top Coordinate Badge */}
        <div className="relative z-10 flex items-center justify-between text-[10px] tracking-widest uppercase font-mono text-white/90 p-5 sm:p-6">
          <span className="flex items-center gap-1.5 bg-[#242129]/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D9C3A3]" />
            <span>MV ARCHIVE // {archiveNo}</span>
          </span>
          <span className="px-2.5 py-0.5 rounded-full bg-white/20 border border-white/30 text-[9px] font-sans tracking-wider text-white backdrop-blur-md">
            EDITORIAL PLATE
          </span>
        </div>

        {/* Bottom Captions & Verification Subtext */}
        <div className="relative z-10 mt-auto p-5 sm:p-6 text-white space-y-1.5">
          <h3 className="font-serif text-xl sm:text-2xl text-white font-normal tracking-wide drop-shadow-sm">
            {label}
          </h3>
          {sublabel && (
            <p className="text-xs text-white/85 font-sans leading-relaxed line-clamp-2 drop-shadow-xs">
              {sublabel}
            </p>
          )}
          <div className="pt-2 border-t border-white/15 flex items-center justify-between text-[9px] font-mono tracking-wider text-white/60">
            <span>KLANG ARCHIVE</span>
            <span className="font-sans text-white/70 italic">* 概念示范配图</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`group relative overflow-hidden rounded-[26px] border border-[#E8E3DD] bg-gradient-to-b ${ambientGradients[variant]} flex flex-col justify-between p-7 sm:p-9 text-[#242129] select-none editorial-shadow-subtle transition-all duration-500 hover:border-[#ADA0BE]/60 ${aspectClasses} ${className}`}
    >
      {/* Subtle Lavender Light-Refraction Caustic Effects */}
      <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-gradient-to-br from-[#D5CEE0]/40 to-transparent blur-3xl pointer-events-none transition-transform duration-700 group-hover:scale-110" />
      <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-gradient-to-tr from-[#D9C3A3]/25 to-transparent blur-3xl pointer-events-none" />

      {/* Subtle Architectural Grid Texture Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(45,35,60,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(45,35,60,0.03)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

      {/* Top Gallery Header: Catalog Tag & Coordinates */}
      <div className="relative z-10 flex items-center justify-between text-[10px] tracking-widest uppercase font-mono text-[#66616F]/80">
        <span className="flex items-center gap-1.5">
          <span className="w-1 h-1 rounded-full bg-[#B99C72]" />
          <span>MV ARCHIVE // {archiveNo}</span>
        </span>
        <span className="px-2.5 py-0.5 rounded-full bg-white/70 border border-[#E8E3DD] text-[9px] font-sans tracking-wider text-[#2D233C] backdrop-blur-xs">
          EXHIBITION PLACEHOLDER
        </span>
      </div>

      {/* Center Ethereal Emblem & Sacred Geometric Linework */}
      <div className="relative z-10 my-auto flex flex-col items-center text-center py-6">
        <div className="relative w-28 h-28 flex items-center justify-center mb-6">
          <div className="absolute inset-0 rounded-full border border-dashed border-[#ADA0BE]/40 animate-[spin_60s_linear_infinite]" />
          <div className="absolute inset-2 rounded-full border border-white/80 bg-white/40 backdrop-blur-sm shadow-inner" />

          <svg
            viewBox="0 0 48 48"
            className="w-10 h-10 fill-none stroke-[#2D233C] stroke-[1.2] relative z-10 opacity-80 transition-transform duration-500 group-hover:scale-105"
          >
            <path d="M24 6c0 10-9 16-18 16 9 2 18 11 18 24 0-13 9-22 18-24-9 0-18-6-18-16z" />
            <circle cx="24" cy="24" r="3.5" className="stroke-[#B99C72] fill-white" />
            <line x1="24" y1="2" x2="24" y2="46" className="stroke-[#ADA0BE]/40 stroke-dashed" />
            <line x1="2" y1="24" x2="46" y2="24" className="stroke-[#ADA0BE]/40 stroke-dashed" />
          </svg>
        </div>

        <h3 className="font-serif text-xl sm:text-2xl text-[#2D233C] font-normal tracking-wide max-w-[90%] leading-snug">
          {label}
        </h3>
        {sublabel && (
          <p className="mt-2 text-xs text-[#66616F] max-w-[85%] leading-relaxed font-sans">
            {sublabel}
          </p>
        )}
      </div>

      {/* Bottom Editorial Caption & Formal Verification Watermark */}
      <div className="relative z-10 pt-4 border-t border-[#E8E3DD]/70 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[9px] font-mono tracking-widest uppercase text-[#66616F]/70">
        <span>KLANG · SELANGOR · MALAYSIA</span>
        <span className="text-[#B99C72] font-sans tracking-normal">
          AUTHORIZED STUDIO ASSET PENDING RELEASE
        </span>
      </div>
    </div>
  );
}
