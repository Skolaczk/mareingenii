'use client';

import { ReactNode, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';

import { XIcon } from '@/assets/icons';
import { MageingeniiSmall } from '@/assets/logos';
import { useMounted, useOnClickEsc } from '@/hooks';

type TModalTemplate = {
  children: ReactNode;
  close: () => void;
};

export const ModalTemplate = ({ children, close }: TModalTemplate) => {
  const ref = useRef<Element | null>(null);
  const mounted = useMounted();

  useEffect(() => {
    document.documentElement.classList.add('overflow-y-hidden');
    ref.current = document.getElementById('modal-template');

    return () => document.documentElement.classList.remove('overflow-y-hidden');
  }, []);

  useOnClickEsc(close);

  return mounted
    ? createPortal(
        <div className="bg-primary text-secondary fixed left-0 top-0 h-screen w-full">
          <header className="relative flex justify-center py-5">
            <Link href="/" onClick={close}>
              <MageingeniiSmall />
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
          {children}
        </div>,
        ref.current as Element
      )
    : null;
};
