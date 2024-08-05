import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Salacia Cruises | Divine Experience",
  description: "Embark on an unforgettable underwater adventure with our luxury liveaboard cruises. Discover pristine dive sites, encounter incredible marine life, and relax in style. Our fleet of world-class vessels offers unparalleled comfort and personalized service. Book your dream dive vacation today!",
  keywords: "luxury liveaboard, liveaboard cruises, dive cruises, scuba diving liveaboard, diving vacations, underwater adventures, liveaboard holidays, dive liveaboard, luxury dive trips, liveaboard travel, diving cruises, liveaboard experience, ocean cruises, dive boat vacations, luxury yacht cruises",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
