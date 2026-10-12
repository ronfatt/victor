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

        <div className="relative z-10 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBE5F0] text-[#2D233C] text-[10px] font-mono tracking-[0.2em] uppercase mb-4">
          <Layers className="w-3.5 h-3.5 text-[#B99C72]" />
          <span>I.S.G.A. PROGRESSIVE MEDITATION PATHWAY</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#242129] font-normal leading-tight tracking-tight">
          {isZh ? "静下来，在规律练习中认识自己" : "Find Stillness · Discover Awareness"}
        </h1>
        <p className="mt-4 text-sm sm:text-base text-[#66616F] leading-relaxed max-w-2xl mx-auto font-sans">
          {isZh
            ? "I.S.G.A. 是一套阶梯递进的现代静坐修习系统。由心轮静心预备课起步，学员依据每日实修自律与导师评估逐步深入，摒弃神秘妄念，建立稳定的内在定力。"
            : "I.S.G.A. is a progressive meditation curriculum, beginning with the Heart Meditation and advancing by personal practice maturity under mentor guidance."}
        </p>

        {/* Responsible Boundaries Disclaimer */}
        <div className="mt-8 p-5 rounded-2xl bg-white border border-[#E8E3DD] text-xs text-[#66616F] max-w-2xl mx-auto leading-relaxed editorial-shadow-subtle">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-4 h-4 text-[#B99C72] flex-shrink-0 mt-0.5" />
            <p className="text-left text-[11px] font-sans">
              {isZh
                ? "说明：静坐修习旨在培养注意力专注、呼吸调和与身心觉察，属于东方及西方哲学实践传统，绝不宣称任何已被现代医学与物理学实证的特异功能或生理医疗效果。"
                : "Notice: Meditation practices are contemplative philosophical disciplines cultivating focus and somatic mindfulness. They make zero claims of scientifically established supernatural mechanisms or medical cures."}
            </p>
          </div>
        </div>
      </section>

      {/* Editorial Meditation Hall Banner */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative aspect-[21/9] sm:aspect-[24/9] rounded-[28px] overflow-hidden border border-[#E8E3DD] bg-[#FAF9F6] editorial-shadow-elevated">
          <Image
            src="/images/meditation_hall.jpg"
            alt="I.S.G.A Meditation Sanctuary Hall"
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
                {isZh ? "摒弃神秘妄念 · 建立稳定的内在定力" : "Grounded Mindfulness · Cultivating Inner Stillness"}
              </p>
              <p className="text-xs text-white/80 font-sans mt-1">
                {isZh ? "* 从心轮静心起步，循序渐进的系统性修习" : "* Progressive syllabus starting from Heart Meditation foundation"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6-Level Visual Progression Roadmap */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center max-w-2xl mx-auto">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#B99C72] font-semibold">
            CURRICULUM SYLLABUS
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#2D233C] mt-1.5 font-normal">
            {isZh ? "六阶段阶梯修习架构" : "Six Progressive Stages of Practice"}
          </h2>
          <p className="text-xs sm:text-sm text-[#66616F] mt-2 font-sans">
            {isZh
              ? "点击下方卡片即可查看各阶段核心要点与开课要求。"
              : "Explore the roadmap below to view curriculum highlights and prerequisites."}
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
              ? "第二阶段 · Atma Jyoti 第八脉轮启动（4天跨双周末）"
              : "Stage 02 · Atma Jyoti Activation (4 In-Person Days Across 2 Weekends)"}
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
                {isZh ? "须完整修毕心轮预备课与 Shuddhi 阶段，且经老师评估身心状态平稳。" : "Must have completed Heart Meditation and Shuddhi, validated by mentor."}
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

      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        defaultService={selectedCourse}
      />
    </div>
  );
}
