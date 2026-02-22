'use client';

interface PlaceholderProps {
  label: string;
  className?: string;
  aspectRatio?: string;
}

export default function Placeholder({ label, className = '', aspectRatio = 'aspect-video' }: PlaceholderProps) {
  return (
    <div
      className={`bg-[#f3a42a] flex items-center justify-center ${aspectRatio} ${className}`}
      role="img"
      aria-label={`Placeholder for ${label}`}
    >
      {/* TODO: Replace with real image */}
      <span className="text-[#1a1a20] font-bold text-sm text-center px-4">{label}</span>
    </div>
  );
}
