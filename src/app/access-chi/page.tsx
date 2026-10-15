"use client";

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { PlaceholderImage } from '@/components/PlaceholderImage';
import { BookingModal } from '@/components/BookingModal';
import {
  Sparkles,
  Flame,
  ShieldCheck,
  Radio,
  Calendar,
  ArrowRight,
  Car,
  Clock,
  Compass,
  CheckCircle2,
  RefreshCw,
  Zap,
  MessageSquare,
  Bike
} from 'lucide-react';

export default function AccessChiPage() {
  const { isZh } = useLanguage();
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("Access Chi 空间风水");

  const openBooking = (service: string) => {
    setSelectedService(service);
    setBookingOpen(true);
  };

  return (
    <div className="py-16 sm:py-24 bg-[#FAF9F6] space-y-24 sm:space-y-32">
      {/* 1. Hero & Origin Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-7 space-y-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBE5F0] text-[#2D233C] text-[10.5px] font-mono tracking-[0.2em] uppercase">
              <Compass className="w-3.5 h-3.5 text-[#B99C72]" />
              <span>{isZh ? "［ Access Chi 风水 ］的诞生" : "ORIGIN OF ACCESS CHI FENG SHUI"}</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#242129] font-normal leading-[1.15] tracking-tight">
              {isZh ? "Access Chi 空间风水" : "Access Chi Energy Feng Shui"}
            </h1>

            <p className="font-serif text-lg sm:text-xl text-[#B99C72] italic font-normal leading-relaxed">
              {isZh
                ? "来自纯净的白光天使天堂 · 独创天使能量风水"
                : "From the Pure White Light Angelic Realm · Proprietary Angelic Energy Feng Shui"}
            </p>

            <div className="space-y-4 text-xs sm:text-sm text-[#58535F] leading-relaxed font-sans">
              <p>
                {isZh
                  ? "这纯净的风水能量是 Victor 老师于 2010 年得到一位老师的 #阿卡莎记录 解读：“你的灵魂天赋是带出大天使疗愈光束，忆起身为天使疗愈师的人们。同时，在往后的日子，你也会带出属于你独有的——天使风水。”"
                  : "This pure feng shui frequency was revealed to Victor in 2010 during an Akashic Records reading: 'Your soul gift is to anchor Archangelic healing rays and awaken angel therapists. In time, you will manifest your own unique Angelic Feng Shui.'"}
              </p>
              <p>
                {isZh
                  ? "当下虽感新奇，但随着生命之流，经过多方的研习、风水实战与深研空间能量的「角度 Angle」与「天使 Angel」，一门属于自己的［能量风水］技术逐渐成形，简称 —— A.C 风水。"
                  : "Through years of diligent practice, environmental consultations, and deep esoteric synthesis between spatial angles and angelic frequencies, a proprietary system of Energy Feng Shui was born: Access Chi (A.C.) Feng Shui."}
              </p>
            </div>

            {/* 4 Core Pillars of A.C. Feng Shui */}
            <div className="p-6 sm:p-7 rounded-[22px] bg-white border border-[#E8E3DD] shadow-xs space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-[0.15em] text-[#2D233C] font-semibold flex items-center gap-2">
                <Flame className="w-4 h-4 text-[#B99C72]" />
                <span>{isZh ? "白光风水符号 · 光点 · 火与真言之能量运转" : "WHITE LIGHT SYMBOLS, LIGHT POINTS & MANTRIC FIRE"}</span>
              </h4>
              <p className="text-xs text-[#666070] font-sans">
                {isZh
                  ? "A.C 风水是一套运用独有白光风水符号与光点，透过火与真言的能量，达成以下四大核心调频："
                  : "A.C Feng Shui utilizes unique white-light glyphs, radiant focal points, sacred fire, and mantras to achieve four pivotal alignments:"}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#2D233C] pt-1">
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#FAF9F6] border border-[#E8E3DD]">
                  <CheckCircle2 className="w-4 h-4 text-[#B99C72] flex-shrink-0 mt-0.5" />
                  <span>{isZh ? "牵动房屋旧能量结构、沉淀印记与失衡，彻底释放。" : "Releases stagnant energetic structures, karmic impressions, and spatial imbalances."}</span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#FAF9F6] border border-[#E8E3DD]">
                  <Sparkles className="w-4 h-4 text-[#B99C72] flex-shrink-0 mt-0.5" />
                  <span>{isZh ? "启动生生不息、充沛丰饶的和谐振动频率。" : "Ignites a continuous, living current of harmonic vibration throughout the room."}</span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#FAF9F6] border border-[#E8E3DD]">
                  <Radio className="w-4 h-4 text-[#B99C72] flex-shrink-0 mt-0.5" />
                  <span>{isZh ? "和谐化（Harmonizes）电子产品产生之扰乱磁雾波能量。" : "Harmonizes and dissolves electromagnetic static and digital smog produced by electronics."}</span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#FAF9F6] border border-[#E8E3DD]">
                  <ShieldCheck className="w-4 h-4 text-[#B99C72] flex-shrink-0 mt-0.5" />
                  <span>{isZh ? "建立多维保护结界，深度优化全家居住生活品质。" : "Erects a protective sanctuary boundary to uplift the daily living quality of occupants."}</span>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => openBooking(isZh ? "Access Chi 家居/商业空间风水" : "Access Chi Spatial Feng Shui")}
                className="px-8 py-4 rounded-full bg-[#2D233C] text-white text-xs sm:text-sm font-medium hover:bg-[#443659] transition-all shadow-md flex items-center gap-2"
              >
                <Calendar className="w-4 h-4 text-[#D9C3A3]" />
                <span>{isZh ? "预约空间风水实地勘察" : "Book Spatial Feng Shui Assessment"}</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <PlaceholderImage
              src="/images/access_chi_space.jpg"
              alt="Access Chi Spatial Resonance"
              label={isZh ? "Access Chi 天使能量风水" : "Angelic Energy Feng Shui"}
              sublabel={isZh ? "纯净白光天堂 · 空间能量调频" : "White Light Sanctuary"}
              aspectRatio="editorial"
              variant="space"
              archiveNo="CHI-SANCTUARY"
            />

            <div className="p-6 rounded-2xl bg-white border border-[#E8E3DD] text-xs text-[#666070] space-y-2">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#B99C72] block font-semibold">
                {isZh ? "独家特色" : "DISTINCTIVE APPROACH"}
              </span>
              <p className="leading-relaxed">
                {isZh
                  ? "有别于传统华人风水手拿罗盘检测方向、更改门房灶或按流年频繁更换摆设；A.C 风水以灵性感官与能量实相为核，为场域施以深度安顿与净化。"
                  : "Unlike conventional feng shui relying on compass orientation, structural demolition, or annual trinket rotations, A.C. Feng Shui focuses directly on the intrinsic energetic architecture."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. How is it conducted on-site? (1）现场是如何施做呢？) */}
      <section className="bg-white border-y border-[#E8E3DD] py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-[10.5px] font-mono uppercase tracking-[0.2em] text-[#B99C72] font-semibold">
              FIELD CONSULTATION METHODOLOGY
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#2D233C] mt-2 font-normal">
              {isZh ? "1）［ Access Chi 风水 ］现场是如何施做呢？" : "1) How is Access Chi Conducted On-Site?"}
            </h2>
            <p className="text-xs sm:text-sm text-[#66616F] mt-3 font-sans max-w-2xl mx-auto leading-relaxed">
              {isZh
                ? "A.C 风水运用【特殊灵摆、手感与灵性感知力】来扫描、阅读、确认空间里不同方向的能量来龙去脉与底蕴。"
                : "A.C Feng Shui employs specialized pendulums, somatic palm resonance, and intuitive sight to scan, read, and calibrate directional currents and energetic origins."}
            </p>
          </div>

          {/* Step-by-Step Sequence */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-[24px] bg-[#FAF9F6] border border-[#E8E3DD] space-y-4 relative flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-mono font-bold text-[#B99C72] uppercase px-3 py-1 rounded-md bg-white border border-[#E8E3DD]">
                  STEP 01
                </span>
                <h3 className="font-serif text-xl text-[#2D233C] font-normal mt-4">
                  {isZh ? "聆听与理清房宅感想" : "Listen & Clarify Intentions"}
                </h3>
                <p className="text-xs text-[#58535F] leading-relaxed font-sans mt-2">
                  {isZh
                    ? "首先老师会悉心聆听与理清你对房子的实际居住感想、身心对应状态与期望解决的生活死角。"
                    : "The mentor begins by listening to your somatic impressions, familial patterns, and personal intentions for the home."}
                </p>
              </div>
              <div className="pt-4 border-t border-[#E8E3DD] text-[11px] text-[#8E8795]">
                {isZh ? "建立人与空间的认知连接" : "Establishing human-space rapport"}
              </div>
            </div>

            <div className="p-8 rounded-[24px] bg-[#FAF9F6] border border-[#E8E3DD] space-y-4 relative flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-mono font-bold text-[#B99C72] uppercase px-3 py-1 rounded-md bg-white border border-[#E8E3DD]">
                  STEP 02
                </span>
                <h3 className="font-serif text-xl text-[#2D233C] font-normal mt-4">
                  {isZh ? "阅读能量 · 启动对应符号" : "Read Energy & Activate Symbols"}
                </h3>
                <p className="text-xs text-[#58535F] leading-relaxed font-sans mt-2">
                  {isZh
                    ? "阅读空间能量后，将白光风水符号安置并启动于墙壁、窗、地板、Wifi Router、花园、床等。优先专注：电源表、水源、窗口及负能量点。"
                    : "Scanning subtle currents and activating white-light glyphs across walls, windows, floors, Wi-Fi routers, beds, and water mains to harmonize friction."}
                </p>
              </div>
              <div className="pt-4 border-t border-[#E8E3DD] text-[11px] text-[#8E8795]">
                {isZh ? "现场初次施做约 2 小时" : "Initial ~2 hour active placement"}
              </div>
            </div>

            <div className="p-8 rounded-[24px] bg-[#FAF9F6] border border-[#E8E3DD] space-y-4 relative flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-mono font-bold text-[#B99C72] uppercase px-3 py-1 rounded-md bg-white border border-[#E8E3DD]">
                  STEP 03
                </span>
                <h3 className="font-serif text-xl text-[#2D233C] font-normal mt-4">
                  {isZh ? "48小时流转 · 二次探访圆满" : "48h Integration & Completion"}
                </h3>
                <p className="text-xs text-[#58535F] leading-relaxed font-sans mt-2">
                  {isZh
                    ? "施做约 2 小时后暂停，让安置好的能量流转几天。通常于 48 小时后分成不同天再次探访，确认能量稳定流动并完成最终微调。"
                    : "Allowing frequencies to settle. A follow-up visit is conducted ~48 hours later across separate days to verify stability and seal the field."}
                </p>
              </div>
              <div className="pt-4 border-t border-[#E8E3DD] text-[11px] text-[#8E8795]">
                {isZh ? "分日稳固 · 确保能量安定" : "Multi-day verification protocol"}
              </div>
            </div>
          </div>

          {/* Transformation Experience Card */}
          <div className="p-8 sm:p-10 rounded-[28px] bg-gradient-to-r from-[#F6F3F9] via-white to-[#FAF9F6] border border-[#ADA0BE]/40 editorial-shadow-subtle space-y-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#B99C72]" />
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#ADA0BE] font-semibold">
                {isZh ? "施做完成后的场域体感" : "POST-ALIGNMENT SENSORY EXPERIENCE"}
              </span>
            </div>
            <h4 className="font-serif text-xl sm:text-2xl text-[#2D233C] font-normal">
              {isZh
                ? "轻盈、流动、安全、祥和与清晰 · 睡眠品质与正能量跃升"
                : "Lightness, Flow, Security, Serenity & Clarity"}
            </h4>
            <p className="text-xs sm:text-sm text-[#58535F] leading-relaxed font-sans">
              {isZh
                ? "第一次施做到最终完成，你会显著感到家里的质感变得优化，充满轻盈、流动、安全、祥和与清晰的氛围。居住者的睡眠品质提高，思绪得以安定，能够持续接收到更多自然的正能量。"
                : "From the initial activation to final completion, you will experience an unmistakable elevation in your home's texture: lightweight, fluid, deeply serene, and clear. Sleep quality stabilizes, mental chatter settles, and positive resonant energy flows freely."}
            </p>
          </div>
        </div>
      </section>

      {/* 3. Renewal Cycle (2）完成［Access Chi 风水］后，多久需要更新？) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-[28px] bg-white border border-[#E8E3DD] editorial-shadow-subtle space-y-8">
          <div className="max-w-2xl">
            <span className="text-[10.5px] font-mono uppercase tracking-[0.2em] text-[#B99C72] font-semibold">
              MAINTENANCE & LONGEVITY
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#2D233C] mt-2 font-normal">
              {isZh ? "2）完成［ Access Chi 风水 ］后，多久需要更新？" : "2) How Often Does Access Chi Need Updating?"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs sm:text-sm text-[#58535F] leading-relaxed font-sans">
            <div className="space-y-4">
              <p>
                {isZh
                  ? "能量的流动会随着居住在内的人业力造化、外在大环境的改变（如房子外面的突建/改造）、内在家庭成员的突发状况，以及室内的敲打装修，而产生微小或大幅度的变动。"
                  : "Energetic currents shift according to the inhabitants' karmic actions, external changes (structural renovations nearby), sudden family crises, or internal drilling and re-modeling."}
              </p>
              <div className="p-4 rounded-xl bg-[#FAF9F6] border border-[#E8E3DD] space-y-1.5">
                <span className="font-semibold text-[#2D233C] block font-serif">
                  {isZh ? "若无变动，基本上能耐很久" : "Exceptional Longevity"}
                </span>
                <p className="text-xs text-[#666070]">
                  {isZh
                    ? "若无上述变动，平日又保持得不错……基本上能耐很久。我们很多顾客都是 6 到 10 年后才更新一次（见仁见智，考量大局后决定）。"
                    : "Without major environmental upheavals, a well-kept alignment endures for years. Many of our clients only renew after 6 to 10 years."}
                </p>
              </div>
            </div>

            <div className="p-6 sm:p-7 rounded-2xl bg-[#F6F3F9] border border-[#ADA0BE]/30 flex flex-col justify-between space-y-4">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#ADA0BE] font-semibold block mb-2">
                  {isZh ? "贴心远距服务" : "REMOTE SCAN SERVICE"}
                </span>
                <h4 className="font-serif text-lg text-[#2D233C] font-normal">
                  {isZh ? "远距离能量状态评估" : "Remote Feng Shui Energy Assessment"}
                </h4>
                <p className="text-xs text-[#58535F] mt-2 leading-relaxed">
                  {isZh
                    ? "老师也可以远距离协助你检测看看当前是需要做更新，还是只是需要一个深层的［ Access Chi 的空间净化仪式 ］即可恢复高频和谐。"
                    : "Victor can conduct a remote assessment to determine whether a full renewal is indicated, or if a focused [Access Chi Space Purification Ritual] suffices."}
                </p>
              </div>
              <button
                type="button"
                onClick={() => openBooking(isZh ? "远距空间风水检测与净化" : "Remote Feng Shui Assessment")}
                className="self-start px-6 py-2.5 rounded-full bg-[#2D233C] text-white text-xs font-medium hover:bg-[#443659] transition-all flex items-center gap-1.5"
              >
                <span>{isZh ? "询问远距空间检测" : "Inquire Remote Scan"}</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Vehicles: Cars, Motorcycles, Bicycles (3）Access Chi 风水 - 你的汽车/电单车/脚车) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-[28px] bg-white border border-[#E8E3DD] editorial-shadow-subtle space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-[10.5px] font-mono uppercase tracking-[0.2em] text-[#B99C72] font-semibold flex items-center gap-2">
                <Car className="w-3.5 h-3.5" />
                <span>MOBILE SANCTUARY ALIGNMENT</span>
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#2D233C] mt-2 font-normal">
                {isZh ? "3）Access Chi 风水 —— 你的 汽车（电单车，脚车）" : "3) Access Chi for Vehicles: Cars, Motorcycles & Bicycles"}
              </h2>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#8E8795]">
              <span className="px-3 py-1 rounded-full bg-[#FAF9F6] border border-[#E8E3DD]">1-2 Hours</span>
              <span className="px-3 py-1 rounded-full bg-[#FAF9F6] border border-[#E8E3DD]">One-Time Durable</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-4 text-xs sm:text-sm text-[#58535F] leading-relaxed font-sans">
              <p>
                {isZh
                  ? "汽车是我们常常会待在其中的使用工具，它是我们【会进入到】的一个实体空间。只要是有空间，就会开始囤积各式各样的好坏能量印记。"
                  : "A vehicle is a mobile chamber that we physically enter every day. Wherever spatial volume exists, it naturally accumulates both light and chaotic emotional impressions."}
              </p>
              <p>
                {isZh
                  ? "我们常在汽车里发呆、消极、发泄、恐慌、与人争执、劳累，甚至有不必要的杂乱能量依附，让人在车里感到明显压迫与莫名不安全……"
                  : "We experience mental exhaustion, stress, arguments, road rage, and subconscious vulnerability inside car cabins, sometimes feeling an inexplicable heavy pressure."}
              </p>
              <div className="p-5 rounded-2xl bg-[#FFF9F2] border border-[#EBD7BE] text-xs text-[#2D233C] space-y-1.5">
                <span className="font-serif font-medium text-sm flex items-center gap-2 text-[#9A6A32]">
                  <Zap className="w-4 h-4 text-[#9A6A32]" />
                  <span>{isZh ? "特别针对电子系统密集的现代车与电动车（EV）" : "Essential for Electric Vehicles (EV) & Smart Cockpits"}</span>
                </span>
                <p className="text-[#665D4F] leading-relaxed">
                  {isZh
                    ? "尤其是最近的车内设计越来越多电子系统，或是电子车（EV），很多人会觉得一坐进车内就被榨干能量。有这些车子的你，更需要精心的能量导引策略来达到和谐，不再被磁雾波耗损精力！"
                    : "Modern cars with dense touchscreen cockpits and EVs emit intense electromagnetic fields that leave drivers feeling drained. Access Chi provides a deliberate energetic shield so your vitality remains vibrant."}
                </p>
              </div>
              <p>
                {isZh
                  ? "以上所有困扰，统统都可以透过［Access Chi 风水］技术达到和谐、阻隔、得到守护与解决！恢复你在车里的舒适感、宽敞空间感、安全感与充沛能量。电单车与脚踏车也同样可以得到细致的能量调整与保护。"
                  : "Access Chi harmonizes and shields against these burdens, restoring inner comfort, expansive presence, safety, and radiant balance. Motorcycles and bicycles also benefit from this targeted blessing."}
              </p>
            </div>

            <div className="lg:col-span-5 p-7 rounded-[22px] bg-[#FAF9F6] border border-[#E8E3DD] space-y-5">
              <h4 className="font-serif text-lg text-[#2D233C] font-normal">
                {isZh ? "移动座驾风水服务概览" : "Vehicle Feng Shui Overview"}
              </h4>
              <ul className="space-y-3 text-xs text-[#58535F]">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#B99C72] flex-shrink-0 mt-0.5" />
                  <span>{isZh ? "适用车型：汽车、电动车、商务车、摩托车、单车" : "Applicable: Cars, EVs, executive vans, motorbikes, bicycles"}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-[#B99C72] flex-shrink-0 mt-0.5" />
                  <span>{isZh ? "施做时长：约 1 到 2 小时现场完成" : "Duration: Completed on-site within 1 to 2 hours"}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#B99C72] flex-shrink-0 mt-0.5" />
                  <span>{isZh ? "效果持久：若无重大事故或车身改造，一次性耐受持久" : "Longevity: Long-lasting one-time alignment unless major damage occurs"}</span>
                </li>
              </ul>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => openBooking(isZh ? "Access Chi 汽车/移动载具风水" : "Vehicle Energy Alignment")}
                  className="w-full py-3.5 rounded-full bg-[#2D233C] text-white text-xs font-medium hover:bg-[#443659] transition-all shadow-sm flex items-center justify-center gap-2"
                >
                  <Car className="w-4 h-4" />
                  <span>{isZh ? "预约座驾能量风水施做" : "Book Vehicle Feng Shui"}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Booking Modal */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        defaultService={selectedService}
      />
    </div>
  );
}
