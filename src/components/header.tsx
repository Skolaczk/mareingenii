'use client';

import { MageingeniiLarge } from '@/assets/logos';
import { Navigation } from '@/components';
import { useOpenClose } from '@/hooks';

export const Header = () => {
  const { isOpen, open, close } = useOpenClose();

  return (
    <header
      id="home"
      className="relative flex items-center justify-center border-b border-b-black py-5"
    >
      <MageingeniiLarge />
      <h1 className="sr-only">mare ingenii</h1>
      <button
        type="button"
        aria-label="open navigation"
        className="absolute right-6 flex size-7 flex-col justify-center gap-1.5 xl:right-10"
        onClick={open}
      >
        <div className="bg-primary h-0.5 w-full" />
        <div className="bg-primary h-0.5 w-full" />
        <div className="bg-primary h-0.5 w-full" />
      </button>
      {isOpen && <Navigation close={close} />}
    </header>
  );
};
