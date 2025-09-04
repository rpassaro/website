import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SpaceTechBackgroundClient from "@/components/SpaceTechBackgroundClient";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ryanpassaro.com"),
  title: "Ryan Passaro — Trading Infra & ML Engineer",
  description:
    "Software engineer building low-latency trading infrastructure and ML systems (p50 ~0.8s; scaled SaaS to 500+ users).",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://www.ryanpassaro.com",
    title: "Ryan Passaro — Trading Infra & ML Engineer",
    description: "Low-latency systems, reliable at scale. p50 ~0.8s; 500+ users.",
    siteName: "Ryan Passaro",
    images: [{ url: "/og", width: 1200, height: 630, alt: "Ryan Passaro — Trading Infra & ML Engineer" }],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ryan Passaro — Trading Infra & ML Engineer",
    description: "Low-latency systems, reliable at scale. p50 ~0.8s; 500+ users.",
    images: ["/og"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-dvh bg-[var(--bg)] text-[var(--text)]`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <div className="relative bg-aurora min-h-dvh flex flex-col">
            <SpaceTechBackgroundClient />
            <Header />
            <main className="relative main-content flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Ryan Passaro",
              jobTitle: "Software Engineer — Trading Infra & ML",
              url: "https://www.ryanpassaro.com/",
              email: "mailto:passaroryan@gmail.com",
              alumniOf: "The University of Texas at Austin",
              sameAs: [
                "https://www.linkedin.com/in/ryan-passaro",
                "https://github.com/rpassaro"
              ],
              address: { "@type": "PostalAddress", addressLocality: "Austin, TX" }
            })
          }}
        />
      </body>
    </html>
  );
}
