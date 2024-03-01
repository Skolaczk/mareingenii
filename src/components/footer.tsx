import Link from 'next/link';

import { MageingeniiLarge } from '@/assets/logos';
import { navigationItems } from '@/lib/data';

export const Footer = () => {
  return (
    <footer className="border-primary border-t">
      <div className="xs:flex xs:space-y-0 xs:justify-between container space-y-8 py-10">
        <div className="xs:order-2">
          <MageingeniiLarge className="mb-5 h-10 w-32" />
          <p className="mb-1">mare ingenii - all rights reserved</p>
          <p>{new Date().getFullYear()} ©</p>
        </div>
        <div className="xs:order-1">
          <ul className="space-y-5">
            {navigationItems.map(({ name, href }) => (
              <li key={name} className="font-medium">
                <Link href={href}>{name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};
