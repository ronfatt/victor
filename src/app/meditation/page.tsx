"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { CourseRoadmap } from '@/components/CourseRoadmap';
import { BookingModal } from '@/components/BookingModal';
import { LogoWatermark } from '@/components/LogoWatermark';
import {
  Layers,
  ArrowRight,
  AlertCircle
} from 'lucide-react';

export default function MeditationPage() {
  const { isZh } = useLanguage();
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<string>("I.S.G.A. 静坐修习咨询");

  const openBookingFor = (courseName: string) => {
    setSelectedCourse(courseName);
    setBookingOpen(true);
  };

  return (
    <div className="py-16 sm:py-24 bg-[#FAF9F6] space-y-24 lg:space-y-36">
      {/* Hero */}
      <section className="relative overflow-hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
        <LogoWatermark
          className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          height={520}
          opacity="opacity-[0.035] sm:opacity-[0.05]"
        />

        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#242129] font-normal leading-tight tracking-tight max-w-3xl mx-auto">
          {isZh ? "I.S.G.A. 静坐修习体系" : "I.S.G.A. Meditation System"}
        </h1>

        <blockquote className="mt-5 text-base sm:text-lg text-[#B99C72] font-serif italic tracking-wide max-w-2xl mx-auto leading-relaxed">
          {isZh
            ? "“规律，有效率的静坐能把思绪与心静下来，调节神经系统，踏实的透过修习来开启高维脉轮中心，你才能开展稳定的灵性天赋。”"
            : "“Disciplined, efficient meditation quietens thoughts and the heart, regulates the nervous system, and grounded practice activates higher-dimensional chakra centers, allowing you to steadily unfold your spiritual gifts.”"}
        </blockquote>

        {/* Editorial Guidance Transmission Card */}
        <div className="mt-8 max-w-3xl mx-auto p-6 sm:p-10 rounded-[28px] bg-white border border-[#E8E3DD] editorial-shadow-elevated text-left space-y-5">
          <p className="text-sm sm:text-base text-[#4A4553] font-medium leading-relaxed font-sans">
            {isZh
              ? "在 I.S.G.A 静坐里，你将会学习到如何开启位于头部的灵性中心（眉心轮以上 与 第八脉轮衔接）来稳定开展你的灵性天赋。"
              : "In I.S.G.A. Meditation, you will learn how to activate the spiritual centers situated above the brow chakra and connected with the 8th chakra, steadily unfolding your spiritual gifts."}
          </p>

          <p className="text-xs sm:text-sm text-[#66616F] leading-relaxed font-sans">
            {isZh
              ? "I.S.G.A 静坐 是 一门能够协助一个人深入自身的心灵 与 提升灵性成长的静坐方式。"
              : "I.S.G.A. Meditation is a discipline that assists an individual in delving deep into their own heart and elevating their spiritual growth."}
          </p>

          <div className="p-4 sm:p-5 rounded-2xl bg-[#FAF9F6] border border-[#E8E3DD] space-y-2 text-xs sm:text-sm text-[#4A4553] font-sans">
            <span className="font-semibold text-[#2D233C] block font-serif">
              {isZh ? "修习三大核心支柱：" : "Three Core Practice Pillars:"}
            </span>
            <p className="text-[#66616F] leading-relaxed">
              {isZh
                ? "主要专注于 —— 梵文真言，脉轮观想，与 调频呼吸 来达到 静思，深入高我的触碰，净化气场的旧结构业力，守护灵魂意识 与 开展稳定的灵性成长。"
                : "Focusing primarily on Sanskrit Mantras, Chakra Visualizations, and Frequency-Tuned Breathwork to achieve contemplation, contact with the Higher Self, clearing old auric karmic patterns, guarding soul consciousness, and unfolding stable spiritual growth."}
            </p>
          </div>
        </div>
      </section>

      {/* Editorial Meditation Hall Banner */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative aspect-[21/9] sm:aspect-[24/9] rounded-[28px] overflow-hidden border border-[#E8E3DD] bg-[#FAF9F6] editorial-shadow-elevated">
          <Image
            src="/images/real_course_retreat.jpg"
            alt="I.S.G.A Meditation Group Practice Retreat"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1F1B24]/85 via-black/25 to-black/10 pointer-events-none" />
          <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between text-white">
            <div className="flex items-center justify-between text-[10px] font-mono tracking-widest uppercase">
              <span className="bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                I.S.G.A // MEDITATION DOJO
              </span>
              <span className="bg-white/20 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/30 text-[9px]">
                STILLNESS & AWARENESS
              </span>
            </div>
            <div className="max-w-xl">
              <p className="font-serif text-lg sm:text-2xl font-normal drop-shadow-sm">
                {isZh ? "开启头部灵性中心 · 稳定开展灵性天赋" : "Activating Higher Centers · Unfolding Spiritual Gifts"}
              </p>
              <p className="text-xs text-white/80 font-sans mt-1">
                {isZh ? "* 梵文真言、脉轮观想与调频呼吸的系统性修习" : "* Mantras, chakra visualization, and tuned breathwork"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6-Level Visual Progression Roadmap */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2D233C] font-normal">
            {isZh ? "I.S.G.A. 静坐 ［6个不同层级］ 修习法" : "I.S.G.A. Meditation — 6 Progressive Stages"}
          </h2>
          <p className="text-xs sm:text-sm text-[#66616F] mt-3 font-sans leading-relaxed max-w-2xl mx-auto">
            {isZh
              ? "每一阶 将会协助你一步步的进步，有如一颗颗珍珠被串起来，形成一条漂亮的完整珍珠项链。这将支持习者的心智稳定，提升心灵，一步步强化高我的连接 以及 神性的合一。"
              : "Each stage assists your progressive evolution, like pearls strung one by one into a magnificent necklace. This supports the practitioner's mental stability, elevates the soul, and steadily reinforces connection with the Higher Self and divine oneness."}
          </p>
        </div>

        <CourseRoadmap onSelectLevel={(title) => openBookingFor(`I.S.G.A 静坐课程: ${title}`)} />
      </section>

      {/* Deep Dive: Atma Jyoti 4-Day Weekend Format */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto p-8 sm:p-12 rounded-[28px] bg-white border border-[#E8E3DD] space-y-7 editorial-shadow-subtle">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#B99C72]" />
            <span className="text-[10px] font-mono font-semibold uppercase tracking-[0.2em] text-[#2D233C]">
              {isZh ? "重点面授课程规格解析" : "INTENSIVE WORKSHOP STRUCTURE"}
            </span>
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl text-[#2D233C] font-normal">
            {isZh
              ? "第二课 · Atma Jyoti 第八脉轮启动（4天跨双周末）"
              : "Lesson 02 · Atma Jyoti Activation (4 In-Person Days Across 2 Weekends)"}
          </h3>

          <p className="text-xs sm:text-sm text-[#58535F] leading-relaxed font-sans">
            {isZh
              ? "Atma Jyoti 是 I.S.G.A. 体系中至关重要的里程碑。为了确保每位学员能够扎实稳固内在感受、避免漂浮不定的身心反应，本课程严格实行‘跨越两个连续周末、共计4天实体闭关面授’的教学规格。课堂中老师将亲自指导呼吸法节律、精微体意象定位与每日回家自修规程。"
              : "Atma Jyoti serves as a key cornerstone within the I.S.G.A. lineage. To ensure deep somatic integration without instability, the course requires four full in-person days scheduled across two consecutive weekends."}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
            <div className="p-5 rounded-2xl bg-[#FAF9F6] border border-[#E8E3DD] text-xs">
              <span className="font-medium text-[#2D233C] block mb-1 font-serif">
                {isZh ? "严谨前置条件" : "Prerequisites"}
              </span>
              <p className="text-[#66616F] font-sans">
                {isZh ? "须完整修毕心轮预备课并规律锻炼第一课，且经老师评估身心状态平稳。" : "Must have completed Heart Meditation and practiced Lesson 01 regularly."}
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-[#FAF9F6] border border-[#E8E3DD] text-xs">
              <span className="font-medium text-[#2D233C] block mb-1 font-serif">
                {isZh ? "小班面授地点" : "In-Person Setting"}
              </span>
              <p className="text-[#66616F] font-sans">
                {isZh ? "马来西亚巴生中心或特邀城市小班工作坊（谢绝无基础旁听）。" : "Conducted in small groups at the Klang studio or designated host cities."}
              </p>
            </div>
          </div>

          <div className="pt-2 flex justify-end">
            <button
              type="button"
              onClick={() => openBookingFor("Atma Jyoti 4天周末面授课程咨询")}
              className="px-7 py-3.5 rounded-full bg-[#2D233C] text-white text-xs font-medium hover:bg-[#443659] transition-colors shadow-sm flex items-center gap-2"
            >
              <span>{isZh ? "询问下一期开课时间表" : "Inquire Upcoming Schedule"}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* Authentic Workshop & Group Practice Gallery */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#B99C72] font-semibold">
            AUTHENTIC TEACHING & RETREAT ARCHIVE
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl text-[#2D233C] mt-2 font-normal">
            {isZh ? "实体课程现场纪实 · 师生同修档案" : "Workshops & Group Practice In Action"}
          </h2>
          <p className="text-xs sm:text-sm text-[#66616F] mt-2 font-sans">
            {isZh ? "多年来与海内外学员共同实修、研习静心与结业同圆的真实纪实" : "Authentic moments from intensive retreats, whiteboard lectures, and student graduations"}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              src: "/images/real_course_retreat.jpg",
              title: isZh ? "环形同修静心坛城" : "Circle Meditation Gathering",
              desc: isZh ? "鲜花曼陀罗环绕，海内外学员静修" : "Surrounded by floral mandalas in stillness"
            },
            {
              src: "/images/real_course_hall.jpg",
              title: isZh ? "神圣几何空间道场" : "Sacred Geometry Retreat Hall",
              desc: isZh ? "吉他梵唱共振，深沉定力熏修" : "Acoustic mantra and collective resonance"
            },
            {
              src: "/images/real_course_teaching.jpg",
              title: isZh ? "心法解析与理论阐释" : "Whiteboard Core Teachings",
              desc: isZh ? "白板前深入浅出，扎实梳理认知" : "Clear theoretical mapping of inner awareness"
            },
            {
              src: "/images/real_course_group.jpg",
              title: isZh ? "高阶研习实修合影" : "Intensive Workshop Cohort",
              desc: isZh ? "多日封闭式实修，深入脉轮与定力" : "Multi-day deep retreat practice"
            },
            {
              src: "/images/real_course_grad.jpg",
              title: isZh ? "学员结业圆满典礼" : "Course Graduation & Completion",
              desc: isZh ? "修毕各阶段课程，见证内在成长" : "Celebrating authentic student milestones"
            },
            {
              src: "/images/real_angel_reading.jpg",
              title: isZh ? "个人静心与能量个案" : "Individual Mentoring & Practice",
              desc: isZh ? "结合直觉牌卡与水晶，一对一指引" : "One-to-one presence and intuitive guidance"
            }
          ].map((item, idx) => (
            <div key={idx} className="group rounded-2xl overflow-hidden bg-white border border-[#E8E3DD] shadow-2xs hover:shadow-md transition-all">
              <div className="relative aspect-[16/11] overflow-hidden bg-[#FAF9F6]">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 sm:p-5">
                <h4 className="font-serif text-base text-[#2D233C] font-normal">{item.title}</h4>
                <p className="text-xs text-[#8E8795] font-sans mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        defaultService={selectedCourse}
      />
    </div>
  );
}
