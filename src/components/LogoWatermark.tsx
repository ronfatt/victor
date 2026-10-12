"use client";

import React from 'react';
import Image from 'next/image';

interface LogoWatermarkProps {
  className?: string;
  variant?: 'light' | 'dark' | 'gold';
  height?: number; // height in px
  opacity?: string; // custom tailwind opacity
  rotation?: number; // rotation degrees
  animateSlow?: boolean;
}

export function LogoWatermark({
  className = "",
  variant = 'light',
  height = 560,
  opacity,
  rotation = 0,
  animateSlow = false,
}: LogoWatermarkProps) {
  // Proportional width from logo aspect ratio (491 / 781 ≈ 0.628)
  const width = Math.round(height * 0.63);

  const defaultOpacity =
    variant === 'dark'
      ? 'opacity-[0.09] sm:opacity-[0.13]'
      : 'opacity-[0.045] sm:opacity-[0.065]';

  const opacityClass = opacity || defaultOpacity;

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none select-none absolute z-0 ${opacityClass} ${className}`}
      style={{
        transform: rotation ? `rotate(${rotation}deg)` : undefined,
      }}
    >
      <div className={`relative ${animateSlow ? "animate-[pulse_10s_ease-in-out_infinite]" : ""}`}>
        <Image
          src="/images/logo.png"
          alt=""
          width={width}
          height={height}
          className={`w-auto h-auto object-contain ${
            variant === 'dark'
              ? 'filter drop-shadow-[0_0_30px_rgba(251,190,5,0.3)]'
              : 'filter drop-shadow-[0_0_16px_rgba(185,156,114,0.12)]'
          }`}
          priority={false}
        />
      </div>
    </div>
  );
}
