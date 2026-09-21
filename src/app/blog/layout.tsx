import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "IPTV Streaming Guides, Tutorials & News | Orexetv Blog",
  description:
    "Learn how to get the most from the best IPTV service. Read expert tutorials, app setup guides, buffer-fixing tips, and streaming advice from Orexetv.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "IPTV Streaming Guides, Tutorials & News | Orexetv Blog",
    description:
      "Learn how to get the most from the best IPTV service. Read expert tutorials, app setup guides, buffer-fixing tips, and streaming advice from Orexetv.",
    url: "https://www.orexetv.vip/blog",
  },
  twitter: {
    card: "summary_large_image",
    title: "IPTV Streaming Guides, Tutorials & News | Orexetv Blog",
    description:
      "Learn how to get the most from the best IPTV service. Read expert tutorials, app setup guides, buffer-fixing tips, and streaming advice from Orexetv.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
