"use client";

import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { buildWhatsAppLink, siteConfig } from '../config/siteConfig';
import {
  X,
  MessageSquare,
  CheckCircle2,
  ArrowUpRight,
  MapPin,
  Video,
  Copy,
  Check
} from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export function BookingModal({ isOpen, onClose, defaultService }: BookingModalProps) {
  const { isZh } = useLanguage();

  const sessionOptions = [
    {
      id: "rm50",
      price: "RM 50",
      duration: isZh ? "20 分钟" : "20 min",
      title: isZh ? "娱乐性天使占卜" : "Entertainment Angel Reading",
      subtitle: isZh ? "轻巧快速 · 最多2个聚焦问题 · 线上进行" : "Quick & symbolic · Up to 2 concise questions",
      tier: "RM50",
    },
    {
      id: "rm200",
      price: "RM 200",
      duration: isZh ? "60 分钟" : "60 min",
      title: isZh ? "天使灵性深度占卜" : "Spiritual Guidance Reading",
      subtitle: isZh ? "深入梳理 · 多牌阵潜意识剖析与信念对话" : "In-depth dialogue · Personal crossroads & belief clearing",
      tier: "RM200",
    },
    {
      id: "rm444",
      price: "RM 444",
      duration: isZh ? "90 分钟" : "90 min",
      title: isZh ? "天使灵性占卜 + ALT招牌源疗" : "Reading + ALT Light Therapy",
      subtitle: isZh ? "标志性完整体验 · 对话梳理 + 原创能量对齐仪式" : "Signature experience · Guidance dialogue + ALT ritual",
      isFeatured: true,
      tier: "RM444",
    },
    {
      id: "package",
      price: isZh ? "私询定制" : "By Enquiry",
      duration: isZh ? "3次连贯周期" : "3 Consecutive Sessions",
      title: isZh ? "三次 ALT 连贯源疗计划" : "Three-Session ALT Journey",
      subtitle: isZh ? "深层跟踪 · 阶段性持续梳理与身心觉察" : "Progressive spiritual reflection & continuous tracking",
      tier: "Enquiry",
    },
    {
      id: "custom",
      price: isZh ? "免费私询" : "Direct Enquiry",
      duration: isZh ? "课程 / 花晶 / 空间" : "Course / Essence / Space",
      title: isZh ? "其他综合项目咨询" : "Courses & Products Inquiry",
      subtitle: isZh ? "I.S.G.A 静坐课程、Aura Prema 花晶或 Access Chi 空间风水" : "I.S.G.A Meditation, Aura Prema Essence, or Access Chi Space",
      tier: "Custom",
    },
  ];

  const [selectedService, setSelectedService] = useState<string>(
    defaultService || (isZh ? "天使灵性占卜 + ALT招牌源疗 (RM444 / 90分钟)" : "Reading + ALT Light Therapy (RM444 / 90 min)")
  );
  const [selectedMode, setSelectedMode] = useState<string>(
    isZh ? "Zoom 线上远程视频" : "Zoom Online Video"
  );
  const [clientName, setClientName] = useState("");
  const [copied, setCopied] = useState(false);
  const [prevDefaultService, setPrevDefaultService] = useState(defaultService);
  if (defaultService && defaultService !== prevDefaultService) {
    setPrevDefaultService(defaultService);
    setSelectedService(defaultService);
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const whatsappUrl = buildWhatsAppLink(
    selectedService,
    clientName,
    undefined,
    undefined,
    selectedMode,
    isZh
  );

  const handleCopyNumber = () => {
    navigator.clipboard.writeText(siteConfig.contact.phoneDisplay);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-[#242129]/75 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-xl max-h-[90vh] sm:max-h-[92vh] overflow-y-auto rounded-t-[32px] sm:rounded-[32px] bg-white border-t sm:border border-[#E8E3DD] shadow-[0_24px_70px_rgba(45,35,60,0.22)] p-6 sm:p-8 pb-[max(2.5rem,env(safe-area-inset-bottom))] sm:pb-8 text-[#242129] animate-in slide-in-from-bottom duration-300 sm:duration-200">
        {/* iOS Native Drag Pill for Mobile */}
        <div className="w-12 h-1.5 bg-[#D8D2DC] rounded-full mx-auto mb-5 sm:hidden" />

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#666070] hover:bg-[#FAF9F6] hover:text-[#2D233C] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6 pr-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBE5F0] text-[#2D233C] text-[10px] font-mono tracking-widest uppercase mb-2">
            <MessageSquare className="w-3 h-3 text-[#25D366]" />
            <span>DIRECT WHATSAPP CONCIERGE</span>
          </div>
          <h2 id="booking-modal-title" className="font-serif text-2xl sm:text-3xl text-[#2D233C] font-normal leading-snug">
            {isZh ? "选择方案 · 直通 WhatsApp 咨询" : "Select Session · Direct WhatsApp"}
          </h2>
          <p className="text-xs text-[#666070] mt-1.5 leading-relaxed font-sans">
            {isZh
              ? "无需繁琐填表。选择您感兴趣的方案后，点击按钮将为您生成专属留言，直接与 Mikhael Victor 团队确认时间与空档。"
              : "No lengthy forms. Select your preferred discipline below to open WhatsApp with a pre-filled reservation inquiry."}
          </p>
        </div>

        {/* 1. Select Service Plan */}
        <div className="space-y-3 mb-6">
          <label className="block text-xs font-mono font-semibold tracking-wider uppercase text-[#B99C72]">
            {isZh ? "01 / 选择咨询或体验项目" : "01 / Select Desired Session"}
          </label>

          <div className="space-y-2">
            {sessionOptions.map((opt) => {
              const isSelected = selectedService.includes(opt.title) || selectedService.includes(opt.price);
              return (
                <div
                  key={opt.id}
                  onClick={() => setSelectedService(`${opt.title} (${opt.price})`)}
                  className={`p-3.5 sm:p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                    isSelected
                      ? "bg-[#FAF9F6] border-[#2D233C] ring-2 ring-[#2D233C]/15 shadow-xs"
                      : "bg-white border-[#E8E3DD] hover:border-[#ADA0BE]"
                  }`}
                >
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span className="font-serif text-sm sm:text-base text-[#2D233C] font-medium">
                        {opt.title}
                      </span>
                      {opt.isFeatured && (
                        <span className="px-2 py-0.5 rounded-full bg-[#2D233C] text-white text-[9px] font-mono uppercase">
                          {isZh ? "招牌推荐" : "Signature"}
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-[#666070] font-sans">
                      {opt.subtitle}
                    </p>
                  </div>

                  <div className="text-right flex-shrink-0">
                    <span className="font-serif text-sm sm:text-base text-[#2D233C] font-semibold block">
                      {opt.price}
                    </span>
                    <span className="text-[10px] text-[#8E8795] font-mono">
                      {opt.duration}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 2. Format Option */}
        <div className="space-y-2.5 mb-6">
          <label className="block text-xs font-mono font-semibold tracking-wider uppercase text-[#B99C72]">
            {isZh ? "02 / 期望进行方式" : "02 / Preferred Format"}
          </label>
          <div className="grid grid-cols-2 gap-3 text-xs">
            <button
              type="button"
              onClick={() => setSelectedMode(isZh ? "Zoom 线上远程视频" : "Zoom Online Video")}
              className={`p-3 rounded-xl border text-center transition-all flex items-center justify-center gap-1.5 ${
                selectedMode.includes("Zoom") || selectedMode.includes("线上")
                  ? "bg-[#2D233C] text-white border-[#2D233C] shadow-xs"
                  : "bg-[#FAF9F6] border-[#E8E3DD] text-[#554E5F] hover:bg-white"
              }`}
            >
              <Video className="w-3.5 h-3.5" />
              <span>{isZh ? "Zoom 线上视频 (全球)" : "Online Video"}</span>
            </button>

            <button
              type="button"
              onClick={() => setSelectedMode(isZh ? "巴生工作室面对面" : "Klang Studio In-Person")}
              className={`p-3 rounded-xl border text-center transition-all flex items-center justify-center gap-1.5 ${
                selectedMode.includes("巴生") || selectedMode.includes("Studio")
                  ? "bg-[#2D233C] text-white border-[#2D233C] shadow-xs"
                  : "bg-[#FAF9F6] border-[#E8E3DD] text-[#554E5F] hover:bg-white"
              }`}
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>{isZh ? "巴生工作室面谈" : "Klang Studio"}</span>
            </button>
          </div>
        </div>

        {/* 3. Optional Name */}
        <div className="space-y-2 mb-7">
          <label className="block text-xs font-mono font-semibold tracking-wider uppercase text-[#B99C72]">
            {isZh ? "03 / 您的称呼（选填）" : "03 / Your Name (Optional)"}
          </label>
          <input
            type="text"
            placeholder={isZh ? "例如：林女士 / Alex" : "e.g. Ms. Lim / Alex"}
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-[#E8E3DD] bg-[#FAF9F6] text-xs text-[#2D233C] placeholder:text-[#ADA0BE] focus:outline-none focus:border-[#2D233C] focus:bg-white transition-all font-sans"
          />
        </div>

        {/* Primary Direct WhatsApp Button */}
        <div className="space-y-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="w-full py-4 px-6 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-medium text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all duration-300"
          >
            <MessageSquare className="w-4 h-4 fill-white" />
            <span>{isZh ? "一键打开 WhatsApp 询问老师空档" : "Inquire via WhatsApp Instantly"}</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          {/* Quick Fallback / Copy Phone */}
          <div className="pt-2 flex items-center justify-between text-[11px] text-[#8E8795] font-mono">
            <span>官方号: {siteConfig.contact.phoneDisplay}</span>
            <button
              type="button"
              onClick={handleCopyNumber}
              className="text-[#2D233C] hover:text-[#B99C72] flex items-center gap-1 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3 h-3 text-[#25D366]" />
                  <span className="text-[#25D366]">{isZh ? "已复制号码" : "Copied"}</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3" />
                  <span>{isZh ? "复制号码" : "Copy Number"}</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Ethical Non-Religious Micro-Trust Badge */}
        <div className="mt-6 pt-5 border-t border-[#E8E3DD]/80 flex items-start gap-2.5 text-[11px] text-[#666070] font-sans">
          <CheckCircle2 className="w-3.5 h-3.5 text-[#B99C72] flex-shrink-0 mt-0.5" />
          <p>
            {isZh
              ? "咨询说明：一对一专属倾听，纯粹心性觉察与哲学沉思，不属于任何宗教派别，严守个案隐私。"
              : "Strictly confidential 1-on-1 contemplative guidance. Non-religious and open to all backgrounds."}
          </p>
        </div>
      </div>
    </div>
  );
}
