import { LogoLarge } from '@/assets/logo-large';
import { LogoSmall } from '@/assets/logo-small';
import { SectionHeading } from '@/components/section-heading';

const Home = () => {
  return (
    <main>
      <LogoSmall />
      <LogoLarge />
      <SectionHeading>about</SectionHeading>
    </main>
  );
};

export default Home;
