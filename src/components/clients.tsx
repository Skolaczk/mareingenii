import {
  Airbnb,
  Allies,
  Answear,
  Bioderma,
  Bosch,
  Deloitte,
  Edenred,
  Esthederm,
  Fifa,
  Husqvarna,
  Lot,
  Microsoft,
  Paypal,
  Renault,
  RoyalCanin,
  Stroer,
  Tesco,
  WilliamHill,
} from '@/assets/logos';
import { SectionHeading } from '@/components';

export const Clients = () => {
  return (
    <section className="container mb-16 md:mb-32">
      <SectionHeading>our clients</SectionHeading>
      <div className="space-y-5 md:space-y-10">
        <div className="flex flex-wrap justify-between gap-5 md:flex-nowrap md:gap-10">
          <Microsoft className="w-1/4 md:w-auto" />
          <Fifa className="w-1/4 md:w-auto" />
          <Airbnb className="w-1/4 md:w-auto" />
          <Deloitte className="w-1/4 md:w-auto" />
          <Paypal className="w-1/4 md:w-auto" />
          <Bosch className="w-1/4 md:w-auto" />
        </div>
        <div className="flex flex-wrap justify-between gap-5 md:flex-nowrap md:gap-10">
          <Bioderma className="w-1/4 md:w-auto" />
          <Stroer className="w-1/4 md:w-auto" />
          <Renault className="w-1/4 md:w-auto" />
          <Tesco className="w-1/4 md:w-auto" />
          <RoyalCanin className="w-1/4 md:w-auto" />
          <Answear className="w-1/4 md:w-auto" />
        </div>
        <div className="flex flex-wrap justify-between gap-5 md:flex-nowrap md:gap-10">
          <Lot className="w-1/4 md:w-auto" />
          <Allies className="w-1/4 md:w-auto" />
          <WilliamHill className="w-1/4 md:w-auto" />
          <Esthederm className="w-1/4 md:w-auto" />
          <Edenred className="w-1/4 md:w-auto" />
          <Husqvarna className="w-1/4 md:w-auto" />
        </div>
      </div>
    </section>
  );
};
