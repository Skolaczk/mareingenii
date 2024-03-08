import { SectionHeading } from '@/components/section-heading';
import { ServicesList } from '@/components/services-list';
import { servicesList } from '@/lib/data';

export const Services = () => {
  return (
    <section id="services" className="container my-16 scroll-mt-28 md:mb-32">
      <SectionHeading>services</SectionHeading>
      <div className="-mt-8 md:-mt-16">
        {servicesList.map((service, idx) => (
          <ServicesList key={idx} {...service} />
        ))}
      </div>
    </section>
  );
};
