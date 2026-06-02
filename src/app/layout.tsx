"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "../components/footer";
import Header from "../components/header";
import Analytics from "../components/analytics";
import { useEffect } from "react";
import { ApplicationInsights } from "@microsoft/applicationinsights-web";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    const appInsights = new ApplicationInsights({
      config: {
        connectionString:
          "InstrumentationKey=ba756091-5a8b-499a-b9b6-111cd37069ba;IngestionEndpoint=https://centralindia-0.in.applicationinsights.azure.com/;LiveEndpoint=https://centralindia.livediagnostics.monitor.azure.com/;ApplicationId=bebcd3ce-31ab-47eb-ac07-d41d8169eb4b",
      },
    });
    appInsights.loadAppInsights();
    appInsights.trackPageView();
  }, []);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google Analytics + Clarity */}
        <Analytics
          GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}
          CLARITY_PROJECT_ID={process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID}
        />

        {/* ✅ Matomo Tracking Script */}
        <Script id="matomo-script" strategy="afterInteractive">
          {`
            var _paq = window._paq = window._paq || [];
            _paq.push(['trackPageView']);
            _paq.push(['enableLinkTracking']);
            (function() {
              var u="//15.206.100.15/";
              _paq.push(['setTrackerUrl', u+'matomo.php']);
              _paq.push(['setSiteId', '1']);
              var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
              g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
            })();
          `}
        </Script>

        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
