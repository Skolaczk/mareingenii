import Link from 'next/link';

import { LogoLarge } from '@/assets/logo-large';

export const Header = () => {
  return (
    <header className="relative flex items-center justify-center border-b border-b-black py-5">
      <Link href="/">
        <LogoLarge />
      </Link>
      <button
        type="button"
        aria-label="open navigation"
        className="absolute right-6 flex size-7 flex-col justify-center gap-1.5 xl:right-10"
      >
        <div className="bg-primary h-0.5 w-full" />
        <div className="bg-primary h-0.5 w-full" />
        <div className="bg-primary h-0.5 w-full" />
      </button>
    </header>
  );
};
