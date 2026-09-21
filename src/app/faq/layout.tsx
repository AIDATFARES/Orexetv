import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Frequently Asked Questions & Help Center | Orexetv",
  description:
    "Find answers to common questions about Orexetv. Learn about device compatibility, playlist setup, internet speed requirements, and technical support.",
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    title: "Frequently Asked Questions & Help Center | Orexetv",
    description:
      "Find answers to common questions about Orexetv. Learn about device compatibility, playlist setup, internet speed requirements, and technical support.",
    url: "https://www.orexetv.vip/faq",
  },
  twitter: {
    card: "summary_large_image",
    title: "Frequently Asked Questions & Help Center | Orexetv",
    description:
      "Find answers to common questions about Orexetv. Learn about device compatibility, playlist setup, internet speed requirements, and technical support.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
