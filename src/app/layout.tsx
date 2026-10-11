import type { Metadata, Viewport } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { MobileBottomNav } from "@/components/MobileBottomNav";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#FAF9F6",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "Mikhael Victor | Spiritual Guidance · Energy Wellness · Conscious Living",
  description: "Official website of Mikhael Victor. Founder of ALT Angelic Light Therapy, Aura Prema flower essence, and Access Chi. Serving clients in Mandarin and English based in Klang, Malaysia.",
  keywords: [
    "Mikhael Victor",
    "ALT Angelic Light Therapy",
    "ALT 天使源疗",
    "Aura Prema",
    "天使花晶",
    "I.S.G.A Meditation",
    "静坐修习",
    "Access Chi",
    "空间风水",
    "Klang Malaysia",
    "巴生灵性咨询",
  ],
  authors: [{ name: "Mikhael Victor" }],
  openGraph: {
    title: "Mikhael Victor | Spiritual Guidance · Energy Wellness · Conscious Living",
    description: "Awaken Awareness. Restore Harmony. Transform Within. Founded by Mikhael Victor. Klang, Malaysia.",
    type: "website",
    locale: "zh_CN",
    alternateLocale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="zh-CN"
      className={`${playfair.variable} ${jakarta.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-[#FAF9F6] text-[#28252C] selection:bg-[#EBE5F0] selection:text-[#332748]">
        <LanguageProvider>
          <Header />
          <main className="flex-1 pb-20 md:pb-0">
            {children}
          </main>
          <Footer />
          <FloatingWhatsApp />
          <MobileBottomNav />
        </LanguageProvider>
      </body>
    </html>
  );
}
