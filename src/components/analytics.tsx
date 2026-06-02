"use client";

import { useEffect } from "react";
import Script from "next/script";

type GTagConfigArgs =
  | ["js", Date]
  | ["config", string]
  | ["set", Record<string, unknown>];

type ClarityArgs =
  | ["start", string]
  | ["event", string]
  | ["page_view", string];

declare global {
  interface Window {
    dataLayer: GTagConfigArgs[];
    gtag: (...args: GTagConfigArgs) => void;
    clarity: {
      q?: ClarityArgs[];
      (...args: ClarityArgs): void;
    };
  }
}

interface AnalyticsProps {
  GA_MEASUREMENT_ID?: string;
  CLARITY_PROJECT_ID?: string;
}

export default function Analytics({
  GA_MEASUREMENT_ID,
  CLARITY_PROJECT_ID,
}: AnalyticsProps) {
  useEffect(() => {
    // Google Analytics initialization
    if (GA_MEASUREMENT_ID) {
      window.dataLayer = window.dataLayer || [];
      window.gtag = (...args: GTagConfigArgs) => {
        window.dataLayer.push(args);
      };
      window.gtag("js", new Date());
      window.gtag("config", GA_MEASUREMENT_ID);
    }

    // Microsoft Clarity initialization
    if (CLARITY_PROJECT_ID) {
      window.clarity = (...args: ClarityArgs) => {
        (window.clarity.q = window.clarity.q || []).push(args);
      };

      const script = document.createElement("script");
      script.type = "text/javascript";
      script.async = true;
      script.src = `https://www.clarity.ms/tag/${CLARITY_PROJECT_ID}`;

      const firstScript = document.getElementsByTagName("script")[0];
      firstScript.parentNode?.insertBefore(script, firstScript);
    }
  }, [GA_MEASUREMENT_ID, CLARITY_PROJECT_ID]);

  if (!GA_MEASUREMENT_ID && !CLARITY_PROJECT_ID) {
    console.warn("Neither Google Analytics nor Microsoft Clarity IDs provided");
    return null;
  }

  return (
    <>
      {/* Google Analytics Script */}
      {GA_MEASUREMENT_ID && (
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        />
      )}
    </>
  );
}
