"use client";

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { buildWhatsAppLink, siteConfig } from '@/config/siteConfig';
import {
  MessageSquare,
  ArrowUpRight,
  MapPin,
  Video,
  Copy,
  Check,
  AlertCircle
} from 'lucide-react';

export default function BookingPage() {
  const { isZh } = useLanguage();

  const sessionOptions = [
    {
      id: "rm50",
      price: "RM 50",
      tier: "RM50",
      duration: isZh ? "20 分钟" : "20 min",
      title: isZh ? "娱乐性天使占卜" : "Entertainment Angel Reading",
      subtitle: isZh ? "轻巧快速 · 最多2个聚焦问题 · 线上进行" : "Quick & symbolic · Up to 2 concise questions",
      format: isZh ? "Zoom 线上 / 语音" : "Zoom / Audio Call",
      description: isZh
        ? "适合初次接触的新朋友，针对具体一至两个简要问题开展卡牌解读（不含 ALT 能量仪式）。"
        : "Ideal for first-time visitors seeking quick symbolic impressions on 1-2 brief questions (No ALT ritual).",
    },
    {
      id: "rm200",
      price: "RM 200",
      tier: "RM200",
      duration: isZh ? "60 分钟" : "60 min",
      title: isZh ? "天使灵性深度占卜" : "Spiritual Guidance Reading",
      subtitle: isZh ? "深入梳理 · 多牌阵潜意识剖析与盲点透视" : "In-depth dialogue · Personal crossroads & belief clearing",
      format: isZh ? "巴生工作室面谈 或 Zoom 远程" : "Klang Studio or Zoom Video",
      description: isZh
        ? "深度一对一探讨内在课题与现实盲点，厘清信念卡点，提供落地觉察指引。"
        : "Comprehensive 1-on-1 dialogue unpacking unconscious assumptions and providing grounded suggestions.",
    },
    {
      id: "rm444",
      price: "RM 444",
      tier: "RM444",
      duration: isZh ? "90 分钟" : "90 min",
      title: isZh ? "天使灵性占卜 + ALT招牌源疗" : "Reading + ALT Light Therapy",
      subtitle: isZh ? "标志性完整体验 · 深度对话 + 原创源疗仪式" : "Signature experience · Guidance dialogue + ALT ritual",
      format: isZh ? "巴生工作室面谈（首选）/ Zoom 线上" : "Klang Studio (Recommended) / Zoom",
      isFeatured: true,
      description: isZh
        ? "完整旗舰体验：前半部深度对话与心念梳理，后半部进行老师原创专属 ALT 身心源疗仪式。"
        : "Complete flagship session: In-depth guidance combined with Mikhael Victor's proprietary ALT alignment ritual.",
    },
    {
      id: "package-inquiry",
      price: isZh ? "私询定制" : "By Enquiry",
      tier: "Enquiry",
      duration: isZh ? "3次连贯周期" : "3 Consecutive Sessions",
      title: isZh ? "三次 ALT 连贯源疗计划" : "Three-Session ALT Journey",
      subtitle: isZh ? "深层跟踪 · 个性化阶段性修习与身心觉察" : "Progressive spiritual reflection & ongoing tracking",
      format: isZh ? "巴生工作室专属安排" : "Klang Studio Tailored",
      description: isZh
        ? "专为需要阶段性持续跟进与深度对齐者提供，初次咨询后共同商定安排。"
        : "A multi-stage continuous journey tailored after an initial consultation assessment.",
    },
  ];

  const [selectedService, setSelectedService] = useState<string>(
    isZh ? "天使灵性占卜 + ALT招牌源疗 (RM444 / 90分钟)" : "Reading + ALT Light Therapy (RM444 / 90 min)"
  );
  const [selectedMode, setSelectedMode] = useState<string>(
    isZh ? "巴生工作室面对面" : "Klang Studio In-Person"
  );
  const [clientName, setClientName] = useState("");
  const [copied, setCopied] = useState(false);

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
    <div className="py-14 sm:py-24 bg-[#FAF9F6]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBE5F0] text-[#2D233C] text-[10px] font-mono tracking-[0.2em] uppercase mb-4">
            <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
            <span>DIRECT WHATSAPP CONCIERGE</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl text-[#242129] font-normal leading-tight tracking-tight">
            {isZh ? "一对一私人咨询 · WhatsApp 直达预约" : "Private Sessions · WhatsApp Reservation"}
          </h1>
          <p className="mt-3 text-xs sm:text-sm text-[#66616F] leading-relaxed font-sans max-w-xl mx-auto">
            {isZh
              ? "明码实价，直接透明。选择您心仪的方案，即可一键直达官方 WhatsApp 与团队确认空档与细节，省去繁琐注册流程。"
              : "Clear, transparent pricing. Pick your desired session below to launch WhatsApp with a customized booking message."}
          </p>
        </div>

        {/* Interactive Selection Card Container */}
        <div className="p-7 sm:p-10 rounded-[32px] bg-white border border-[#E8E3DD] editorial-shadow-elevated space-y-8">
          {/* Step 1: Choose Session */}
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-[#E8E3DD]/70 pb-3">
              <span className="text-xs font-mono font-semibold tracking-wider uppercase text-[#B99C72]">
                {isZh ? "01 / 选择期望咨询方案" : "01 / Select Your Session"}
              </span>
              <span className="text-[11px] text-[#8E8795] font-sans">
                {isZh ? "点击卡片即可选定" : "Click to select"}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {sessionOptions.map((opt) => {
                const isSelected = selectedService.includes(opt.title) || selectedService.includes(opt.price);
                return (
                  <div
                    key={opt.id}
                    onClick={() => setSelectedService(`${opt.title} (${opt.price})`)}
                    className={`p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? "bg-[#FAF9F6] border-[#2D233C] ring-2 ring-[#2D233C]/15 shadow-xs"
                        : "bg-white border-[#E8E3DD] hover:border-[#ADA0BE]"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-serif text-base text-[#2D233C] font-normal">
                          {opt.title}
                        </span>
                        {opt.isFeatured && (
                          <span className="px-2 py-0.5 rounded-full bg-[#2D233C] text-white text-[9px] font-mono uppercase">
                            {isZh ? "招牌" : "Signature"}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-[#66616F] leading-relaxed mb-4 font-sans">
                        {opt.subtitle}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#E8E3DD]/60 flex items-center justify-between">
                      <span className="font-serif text-lg font-semibold text-[#2D233C]">
                        {opt.price}
                      </span>
                      <span className="text-[11px] font-mono text-[#8E8795]">
                        {opt.duration}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Step 2: Format & Location */}
          <div className="space-y-3">
            <span className="text-xs font-mono font-semibold tracking-wider uppercase text-[#B99C72] block">
              {isZh ? "02 / 选择咨询进行形式" : "02 / Preferred Format"}
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <button
                type="button"
                onClick={() => setSelectedMode(isZh ? "巴生工作室面对面" : "Klang Studio In-Person")}
                className={`p-4 rounded-xl border text-left transition-all flex items-center justify-between ${
                  selectedMode.includes("巴生") || selectedMode.includes("Studio")
                    ? "bg-[#2D233C] text-white border-[#2D233C] shadow-xs"
                    : "bg-[#FAF9F6] border-[#E8E3DD] text-[#554E5F] hover:bg-white"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-[#B99C72]" />
                  <div>
                    <span className="font-medium block">{isZh ? "巴生工作室面对面" : "Klang Studio In-Person"}</span>
                    <span className="text-[10px] opacity-75">{isZh ? "马来西亚雪兰莪 · 全预约制" : "Selangor, Malaysia · Appt Only"}</span>
                  </div>
                </div>
                <span>{selectedMode.includes("巴生") ? "✓" : "○"}</span>
              </button>

              <button
                type="button"
                onClick={() => setSelectedMode(isZh ? "Zoom 线上远程视频" : "Zoom Online Video")}
                className={`p-4 rounded-xl border text-left transition-all flex items-center justify-between ${
                  selectedMode.includes("Zoom") || selectedMode.includes("线上")
                    ? "bg-[#2D233C] text-white border-[#2D233C] shadow-xs"
                    : "bg-[#FAF9F6] border-[#E8E3DD] text-[#554E5F] hover:bg-white"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Video className="w-4 h-4 text-[#B99C72]" />
                  <div>
                    <span className="font-medium block">{isZh ? "Zoom 线上视频远程" : "Zoom Online Video"}</span>
                    <span className="text-[10px] opacity-75">{isZh ? "全球华人及海外个案可用" : "Available Worldwide"}</span>
                  </div>
                </div>
                <span>{selectedMode.includes("Zoom") ? "✓" : "○"}</span>
              </button>
            </div>
          </div>

          {/* Step 3: Optional Name */}
          <div className="space-y-2">
            <span className="text-xs font-mono font-semibold tracking-wider uppercase text-[#B99C72] block">
              {isZh ? "03 / 您的称呼（选填）" : "03 / Your Name (Optional)"}
            </span>
            <input
              type="text"
              placeholder={isZh ? "例如：陈先生 / Kelly（留空亦可，直接在聊天中沟通）" : "e.g. Mr. Tan / Kelly"}
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              className="w-full px-4 py-3.5 rounded-xl border border-[#E8E3DD] bg-[#FAF9F6] text-xs text-[#2D233C] placeholder:text-[#ADA0BE] focus:outline-none focus:border-[#2D233C] focus:bg-white transition-all font-sans"
            />
          </div>

          {/* Primary Big WhatsApp CTA */}
          <div className="pt-4 space-y-3 border-t border-[#E8E3DD]/70">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4.5 px-8 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-medium text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <MessageSquare className="w-5 h-5 fill-white" />
              <span>{isZh ? "立即在 WhatsApp 中询问老师空档" : "Inquire via WhatsApp Instantly"}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <div className="flex items-center justify-between text-xs text-[#8E8795] font-mono pt-1">
              <span>{isZh ? "官方 WhatsApp 服务号" : "Official WhatsApp"}: {siteConfig.contact.phoneDisplay}</span>
              <button
                type="button"
                onClick={handleCopyNumber}
                className="text-[#2D233C] hover:text-[#B99C72] flex items-center gap-1 transition-colors font-sans text-xs"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#25D366]" />
                    <span className="text-[#25D366]">{isZh ? "已复制号码" : "Copied"}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>{isZh ? "复制号码" : "Copy Number"}</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Boundaries & Non-Medical Trust Callout */}
        <div className="p-6 rounded-2xl bg-white border border-[#E8E3DD] flex items-start gap-3.5 text-xs text-[#66616F] editorial-shadow-subtle">
          <AlertCircle className="w-4 h-4 text-[#B99C72] flex-shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-serif font-medium text-[#2D233C] block">
              {isZh ? "非宗教性质 · 跨信仰兼容与隐私声明" : "Non-Religious Nature & Privacy Guarantee"}
            </span>
            <p className="leading-relaxed font-sans text-[11.5px]">
              {isZh
                ? "所有咨询服务均为一对一专属保密心性觉察与哲学沉思，不隶属于任何特定宗教，亦不做医疗治愈宣称。我们竭力为每一位来访者营造安全、不批判的安歇空间。"
                : "All consultations are strictly confidential 1-on-1 personal reflection and philosophical mindfulness. Non-religious and open to individuals of all faith backgrounds."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
