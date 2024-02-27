import { Bodoni_Moda, Montserrat } from 'next/font/google';

const fontSans = Montserrat({
  subsets: ['latin'],
  variable: '--font-sans',
});

const fontSerif = Bodoni_Moda({
  subsets: ['latin'],
  variable: '--font-serif',
});

export const fonts = [fontSans.variable, fontSerif.variable];
