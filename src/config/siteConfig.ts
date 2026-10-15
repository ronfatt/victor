/**
 * Mikhael Victor Official Website - Site Configuration
 * 
 * Centralized configuration for brand details, contact channels,
 * WhatsApp messaging parameters, and pending verification notices.
 */

export interface SiteConfig {
  brand: {
    name: string;
    englishTitle: string;
    chineseTitle: string;
    taglineEn: string;
    taglineZh: string;
    subtitleEn: string;
    subtitleZh: string;
    location: string;
    locationZh: string;
    experienceClaimEn: string;
    experienceClaimZh: string;
  };
  contact: {
    whatsappNumber: string; // Real number placeholder to be updated before launch
    whatsappFormatted: string;
    email: string;
    phoneDisplay: string;
    wechatId: string;
    instagramHandle: string;
    addressNoteEn: string;
    addressNoteZh: string;
  };
  verificationStatus: {
    isLive: boolean;
    credentialsPendingVerification: boolean;
    imagesPendingAuthorization: boolean;
    pricingPendingConfirmation: boolean;
  };
  disclaimer: {
    medicalEn: string;
    medicalZh: string;
  };
}

export const siteConfig: SiteConfig = {
  brand: {
    name: "Mikhael Victor",
    englishTitle: "Mikhael Victor | Spiritual Guidance · Energy Wellness · Conscious Living",
    chineseTitle: "Mikhael Victor 官方品牌网站 | 内在觉察 · 能量疗愈 · 灵性指引",
    taglineEn: "Living a purposeful life will not happen by waiting for chance. Only through effective spiritual practice and energy dynamics can true transformation occur.",
    taglineZh: "活出生命意义的目标不会因你坐等机缘而改变。唯有透过有效的灵性与能量运转才能带来实质上的转变。",
    subtitleEn: "Angels · Reiki · Feng Shui",
    subtitleZh: "天使，灵气 与 风水",
    location: "Klang, Selangor, Malaysia",
    locationZh: "马来西亚 · 雪兰莪州 · 巴生",
    experienceClaimEn: "26+ Years of Practice & Study (Pending Formal Credential Verification)",
    experienceClaimZh: "26+ 年修习与教学积累（资料验证中）",
  },
  contact: {
    whatsappNumber: "60162680663", // Official WhatsApp contact number (+60 16-268 0663)
    whatsappFormatted: "+60 16-268 0663",
    email: "loverippleslight@yahoo.com",
    phoneDisplay: "+60 16-268 0663",
    wechatId: "MikhaelVictor_Official",
    instagramHandle: "@mikhaelvictor.official",
    addressNoteEn: "I.S.G.A Light Centre (By Appointment): 10am - 8pm",
    addressNoteZh: "I.S.G.A 光中心 (预约式)：10am - 8pm",
  },
  verificationStatus: {
    isLive: false,
    credentialsPendingVerification: true,
    imagesPendingAuthorization: true,
    pricingPendingConfirmation: true,
  },
  disclaimer: {
    medicalEn: "Disclaimer: Spiritual guidance, ALT Angelic Light Therapy, flower essences, and meditation practices are offered for personal reflection, spiritual exploration, and inner awareness. They do not constitute licensed medical diagnosis, psychotherapy, mental health treatment, or scientific therapies. Individuals experiencing physical or psychological symptoms should consult certified medical healthcare professionals.",
    medicalZh: "郑重声明：本网站所呈现的灵性指引、ALT 天使源疗、天使花晶及静坐修习仅供个人内在探索、心性启发与生活觉察之用，绝不构成亦不替代注册医师的医学诊断、心理治疗或精神科医疗处方。如有任何生理或心理疾患，请务必寻求合规专业医疗人员的协助与治疗。",
  },
};

/**
 * Builds an interactive WhatsApp link with customized message
 */
export function buildWhatsAppLink(
  serviceName?: string,
  clientName?: string,
  date?: string,
  timeSlot?: string,
  mode?: string,
  isZh: boolean = true
): string {
  const base = `https://wa.me/${siteConfig.contact.whatsappNumber}`;
  
  if (isZh) {
    let text = `您好 Mikhael Victor 团队，我想咨询预约`;
    if (serviceName) {
      text += `【${serviceName}】`;
    } else {
      text += `私人咨询服务`;
    }
    if (clientName && clientName.trim()) {
      text += `（称呼：${clientName.trim()}）`;
    }
    if (mode) {
      text += `，期望形式：${mode}`;
    }
    if (date || timeSlot) {
      text += `，期望时间：${date || '近期空档'} ${timeSlot ? '· ' + timeSlot : ''}`;
    }
    text += `。请问近期有适合的空档吗？谢谢！`;
    return `${base}?text=${encodeURIComponent(text)}`;
  } else {
    let text = `Hello Mikhael Victor team, I would like to inquire about booking`;
    if (serviceName) {
      text += ` [${serviceName}]`;
    } else {
      text += ` a private session`;
    }
    if (clientName && clientName.trim()) {
      text += ` on behalf of ${clientName.trim()}`;
    }
    if (mode) {
      text += ` [Format: ${mode}]`;
    }
    if (date || timeSlot) {
      text += ` (Preferred schedule: ${date || 'Flexible'} ${timeSlot ? '· ' + timeSlot : ''})`;
    }
    text += `. Could you please advise on availability? Thank you!`;
    return `${base}?text=${encodeURIComponent(text)}`;
  }
}
