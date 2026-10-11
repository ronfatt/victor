"use client";

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { siteConfig, buildWhatsAppLink } from '@/config/siteConfig';
import {
  MapPin,
  Mail,
  MessageSquare,
  Globe,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

export default function ContactPage() {
  const { isZh } = useLanguage();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const directWhatsApp = buildWhatsAppLink("General Inquiry", formData.name || "Client");

  return (
    <div className="py-12 sm:py-20 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF9F6] border border-[#E8E3DD] text-[#2D233C] text-[10px] font-semibold tracking-[0.2em] uppercase mb-4 shadow-[0_2px_8px_rgba(45,35,60,0.03)]">
            <MapPin className="w-3.5 h-3.5 text-[#B99C72]" />
            <span>STUDIO & GENERAL ENQUIRIES</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl text-[#2D233C] font-normal leading-tight">
            {isZh ? "联系与工作室信息" : "Contact & Studio Location"}
          </h1>
          <p className="mt-3 text-xs sm:text-sm text-[#666070] leading-relaxed max-w-lg mx-auto">
            {isZh
              ? "常驻马来西亚巴生，提供全球线上及中心预约面谈服务。请通过下方渠道与团队取得联系。"
              : "Based in Klang, Selangor, Malaysia. Consultations available worldwide via Zoom and in-person by appointment."}
          </p>
        </div>

        {/* 2-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start max-w-6xl mx-auto">
          {/* Left: Contact Info & Placeholders */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 sm:p-9 rounded-[24px] bg-white border border-[#E8E3DD] shadow-[0_4px_24px_rgba(45,35,60,0.03)] space-y-6">
              <div>
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#B99C72] block mb-2">
                  CONSULTATION SANCTUARY
                </span>
                <h3 className="font-serif text-2xl text-[#2D233C]">
                  {isZh ? "巴生私人咨询工作室" : "Klang Private Studio"}
                </h3>
                <p className="text-xs text-[#666070] mt-1.5 leading-relaxed">
                  {isZh ? siteConfig.contact.addressNoteZh : siteConfig.contact.addressNoteEn}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E8E3DD] space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <Globe className="w-4 h-4 text-[#ADA0BE] mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-[#2D233C] block">
                      {isZh ? "咨询语言" : "Languages"}
                    </span>
                    <span className="text-[#666070]">
                      {isZh ? "中文普通话 (Mandarin) / English" : "Mandarin Chinese & English"}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#B99C72] mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-[#2D233C] block">
                      {isZh ? "预约时段" : "Hours"}
                    </span>
                    <span className="text-[#666070]">
                      {isZh ? "周一至周六 10:00 - 18:00 (全预约制)" : "Mon - Sat: 10:00 - 18:00 (Strictly by appointment)"}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MessageSquare className="w-4 h-4 text-[#25D366] mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-[#2D233C] block">
                      WhatsApp
                    </span>
                    <span className="text-[#666070] font-mono text-[11px]">
                      {siteConfig.contact.whatsappFormatted}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#ADA0BE] mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-[#2D233C] block">
                      {isZh ? "官方电子邮箱" : "Official Email"}
                    </span>
                    <span className="text-[#666070] font-mono text-[11px]">
                      {siteConfig.contact.email}
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Action */}
              <div className="pt-2">
                <a
                  href={directWhatsApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-full bg-[#25D366] text-white text-xs font-medium shadow-sm hover:bg-[#1EBE5D] transition-colors flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{isZh ? "通过 WhatsApp 发起咨询 ↗" : "Launch WhatsApp Chat ↗"}</span>
                </a>
              </div>
            </div>

            {/* Privacy & Safety Note */}
            <div className="p-5 rounded-2xl bg-[#F7F4F0] border border-[#E8E3DD] flex items-start gap-3 text-xs text-[#666070]">
              <AlertCircle className="w-4 h-4 text-[#B99C72] flex-shrink-0 mt-0.5" />
              <p className="leading-relaxed text-[11px]">
                {isZh
                  ? "为确保个案之安静专注与隐私，恕不接待无预约登门。所有准确门牌及泊车位置均于预约确认函中发送。"
                  : "To protect client privacy, walk-ins are strictly not admitted. Studio address provided upon confirmed booking."}
              </p>
            </div>
          </div>

          {/* Right: Interactive Message Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-[24px] bg-white border border-[#E8E3DD] shadow-[0_4px_24px_rgba(45,35,60,0.03)]">
              <h3 className="font-serif text-2xl sm:text-3xl text-[#2D233C] mb-2 font-normal">
                {isZh ? "发送留言或咨询意向" : "Send an Enquiry"}
              </h3>
              <p className="text-xs sm:text-sm text-[#666070] mb-8 leading-relaxed">
                {isZh
                  ? "无论关于一对一咨询、静坐课程或空间风水，欢迎填写留言，团队将尽速回覆。"
                  : "Please leave your message regarding sessions, meditation, or space alignment below."}
              </p>

              {!formSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-5 text-xs sm:text-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-medium text-[#2D233C] mb-2 text-xs">
                        {isZh ? "称呼 / 姓名 *" : "Your Name *"}
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={isZh ? "例如：陈小姐" : "e.g., Jane"}
                        className="w-full px-4 py-3 rounded-xl border border-[#E8E3DD] bg-[#FAF9F6] text-[#242129] focus:outline-none focus:border-[#2D233C] focus:ring-1 focus:ring-[#2D233C]/20 transition-all text-xs sm:text-sm"
                      />
                    </div>

                    <div>
                      <label className="block font-medium text-[#2D233C] mb-2 text-xs">
                        {isZh ? "电子邮箱 *" : "Email Address *"}
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-[#E8E3DD] bg-[#FAF9F6] text-[#242129] focus:outline-none focus:border-[#2D233C] focus:ring-1 focus:ring-[#2D233C]/20 transition-all text-xs sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-medium text-[#2D233C] mb-2 text-xs">
                      {isZh ? "咨询主题" : "Subject"}
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder={isZh ? "例如：咨询 I.S.G.A. 静坐课程安排" : "e.g., Inquiring about I.S.G.A courses"}
                      className="w-full px-4 py-3 rounded-xl border border-[#E8E3DD] bg-[#FAF9F6] text-[#242129] focus:outline-none focus:border-[#2D233C] focus:ring-1 focus:ring-[#2D233C]/20 transition-all text-xs sm:text-sm"
                    />
                  </div>

                  <div>
                    <label className="block font-medium text-[#2D233C] mb-2 text-xs">
                      {isZh ? "留言详情 *" : "Your Message *"}
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={isZh ? "请简述您希望了解的事项..." : "Briefly describe your enquiry..."}
                      className="w-full px-4 py-3 rounded-xl border border-[#E8E3DD] bg-[#FAF9F6] text-[#242129] focus:outline-none focus:border-[#2D233C] focus:ring-1 focus:ring-[#2D233C]/20 transition-all text-xs sm:text-sm leading-relaxed"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-4 rounded-full bg-[#2D233C] text-white text-xs sm:text-sm font-medium hover:bg-[#3E3052] transition-colors shadow-sm flex items-center justify-center gap-2"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>{isZh ? "提交留言预览 ↗" : "Submit Message Preview ↗"}</span>
                    </button>
                  </div>

                  <p className="text-[10px] text-[#8E8795] text-center">
                    {isZh ? "* 概念版本功能 · 数据未提交至外部数据库" : "* Demo preview · No personal data stored"}
                  </p>
                </form>
              ) : (
                <div className="py-10 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-14 h-14 rounded-full bg-[#E5EBE4] border border-[#A7B4A5] text-[#4C7C59] flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="font-serif text-2xl text-[#2D233C]">
                    {isZh ? "留言已收到（演示预览）" : "Message Received (Demo)"}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#666070] max-w-sm mx-auto leading-relaxed">
                    {isZh
                      ? "感谢您的来信！在正式上线后，系统将直接派发至老师助理团队邮箱或官方 WhatsApp。"
                      : "Thank you for reaching out! In the production release, this forwards to the official team."}
                  </p>
                  <button
                    type="button"
                    onClick={() => setFormSubmitted(false)}
                    className="px-6 py-2.5 rounded-full border border-[#E8E3DD] text-xs text-[#524B5C] hover:bg-[#FAF9F6] transition-colors mt-2"
                  >
                    {isZh ? "发送另一条留言" : "Send Another Message"}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
