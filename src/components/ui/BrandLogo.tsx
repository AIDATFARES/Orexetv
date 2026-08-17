import Image from "next/image";

export default function BrandLogo({ compact = false }: { compact?: boolean }) {
  return (
    <Image
      alt="ArgonTV"
      className={`block shrink-0 object-contain object-left drop-shadow-[0_2px_10px_rgba(112,0,255,0.3)] transition-all ${compact ? "h-14 w-40" : "h-20 w-56"}`}
      src="/argontv-logo.png"
      width={224}
      height={80}
      sizes="(max-width: 768px) 160px, 224px"
      priority
    />
  );
}
