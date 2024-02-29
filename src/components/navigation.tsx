import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';

import { XIcon } from '@/assets/icons/x-icon';
import { LogoSmall } from '@/assets/logo-small';
import { useMounted } from '@/hooks/use-mounted';
import { useOnClickEsc } from '@/hooks/use-on-click-esc';
import { navigationItems } from '@/lib/data';

type TNavigationMenuProps = {
  close: () => void;
};

export const Navigation = ({ close }: TNavigationMenuProps) => {
  const ref = useRef<Element | null>(null);
  const mounted = useMounted();

  useEffect(() => {
    document.documentElement.classList.add('overflow-y-hidden');
    ref.current = document.getElementById('navigation');

    return () => document.documentElement.classList.remove('overflow-y-hidden');
  }, []);

  useOnClickEsc(close);

  return mounted
    ? createPortal(
        <div className="bg-primary text-secondary absolute left-0 top-0 h-screen w-full">
          <header className="relative flex justify-center py-5">
            <Link href="/" onClick={close}>
              <LogoSmall />
            </Link>
            <button
              type="button"
              className="absolute right-6 flex items-center gap-1 text-sm font-light xl:right-10"
              onClick={close}
            >
              close
              <XIcon className="relative -bottom-px size-4 rotate-45" />
            </button>
          </header>
          <div className="container mt-10 flex h-[calc(100vh-64px)] flex-col space-y-10 lg:mt-0 lg:justify-center lg:space-y-14">
            {navigationItems.map(({ name, href }, i) => (
              <Link
                key={name}
                href={href}
                className="flex justify-between text-4xl lg:text-9xl"
                onClick={close}
              >
                <span className="font-thin">0{i + 1}</span>
                <p className="font-serif uppercase">{name}</p>
              </Link>
            ))}
          </div>
        </div>,
        ref.current as Element
      )
    : null;
};
