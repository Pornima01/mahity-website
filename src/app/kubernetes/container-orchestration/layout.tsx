import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kubernetes Container Orchestration | Mahity",
  description:
    "Kubernetes container orchestration done right with top efficiency.",
  openGraph: {
    title: "Kubernetes Container Orchestration | Mahity",
    description:
      "Kubernetes container orchestration done right with top efficiency.",
    url: "https://mahity.com/kubernetes/container-orchestration/",
    siteName: "Mahity",
    type: "website",
    images: [
      {
        url: process.env.NEXT_PUBLIC_SITE_URL
          ? `${process.env.NEXT_PUBLIC_SITE_URL}/images/Kubernetes-link-img.png`
          : "https://mahity.com/images/Kubernetes-link-img.png",
        width: 1200,
        height: 630,
        alt: "Kubernetes Container Orchestration",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kubernetes Container Orchestration | Mahity",
    description:
      "Kubernetes container orchestration done right with top efficiency.",
    images: [
      `${
        process.env.NEXT_PUBLIC_SITE_URL || "https://mahity.com"
      }/images/Kubernetes-link-img.png`,
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
