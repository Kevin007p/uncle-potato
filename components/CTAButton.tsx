import Link from 'next/link';

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  variant?: 'primary' | 'outline' | 'dark';
  className?: string;
  ariaLabel?: string;
}

export default function CTAButton({
  href,
  children,
  external = false,
  variant = 'primary',
  className = '',
  ariaLabel,
}: CTAButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center px-6 py-3 rounded-lg font-bold text-base transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#f3a42a]';

  const variants = {
    primary: 'bg-[#f3a42a] text-[#1a1a20] hover:bg-[#d4911f]',
    outline:
      'border-2 border-[#f3a42a] text-[#f3a42a] hover:bg-[#f3a42a] hover:text-[#1a1a20]',
    dark: 'bg-[#1a1a20] text-white hover:bg-[#2a2a30]',
  };

  const externalProps = external
    ? { target: '_blank' as const, rel: 'noopener noreferrer' }
    : {};

  return (
    <Link
      href={href}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      aria-label={ariaLabel}
      {...externalProps}
    >
      {children}
    </Link>
  );
}
