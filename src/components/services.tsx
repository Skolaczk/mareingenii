import { SectionHeading } from '@/components/section-heading';
import { ServicesList } from '@/components/services-list';
import { serviceslist } from '@/lib/data';

export const Services = () => {
  return (
    <section className="container my-16 md:mb-32">
      <SectionHeading>services</SectionHeading>
      <div className="-mt-8 md:-mt-16">
        {serviceslist.map((service, idx) => (
          <ServicesList key={idx} {...service} />
        ))}
      </div>
    </section>
  );
};
