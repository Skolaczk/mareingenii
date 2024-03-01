import { Corner, InclinedLine, Semicircle } from '@/assets/shapes';
import { SectionHeading } from '@/components';
import { valuesData } from '@/lib/data';

export const About = () => {
  return (
    <section className="container relative mb-10 space-y-10 md:mb-32 md:space-y-32">
      <Semicircle className="absolute left-1/2 top-1/2 size-80 -translate-x-1/2 -translate-y-2/3 md:size-[600px] md:translate-y-[-55%]" />
      <Corner className="absolute bottom-0 right-6 hidden md:block" />
      <SectionHeading>about</SectionHeading>
      <div className="space-y-5 md:space-y-10 lg:space-y-20">
        <div className="space-y-5 md:flex md:justify-between md:gap-10 md:space-y-0">
          <h3 className="xs:text-5xl font-serif text-4xl uppercase md:text-7xl lg:text-8xl">
            mission
          </h3>
          <p className="md:max-w-xl">
            Our core mission is to maintain the utmost standards of quality and
            transparency in our services. We are dedicated to perpetual growth
            and refinement, with the aim of consistently surpassing industry
            standards.
          </p>
        </div>
        <span className="bg-primary block h-0.5 w-72" />
        <p className="md:max-w-xl">
          Additionally, our steadfast commitment to collaborating with NGOs
          underscores our unfaltering dedication to effective positive change in
          both society and the global community.
        </p>
      </div>
      <div className="space-y-5 md:flex md:justify-between md:gap-10 md:space-y-0">
        <h3 className="xs:text-5xl after:bg-primary relative h-fit font-serif text-4xl uppercase after:absolute after:bottom-1.5 after:ml-4 after:size-4 after:rounded-full md:text-7xl md:after:bottom-2.5 md:after:size-6 lg:text-8xl lg:after:bottom-3 lg:after:ml-6 lg:after:size-8">
          vision
        </h3>
        <p className="md:max-w-xl">
          Our vision encompasses setting and reshaping industry standards while
          fostering innovation and collaboration with like-minded organizations.
          We are firmly dedicated to the pursuit of excellence, aspiring to be a
          driving force behind positive change and continuous innovation in the
          dynamic world of design and product strategy.
        </p>
      </div>
      <div className="flex flex-col space-y-5 md:flex-row md:items-start md:justify-between">
        <div className="flex items-center md:order-2">
          <h3 className="xs:text-5xl font-serif text-4xl uppercase md:text-7xl lg:text-8xl">
            values
          </h3>
          <InclinedLine className="xs:size-10 ml-4 size-8 md:size-14 lg:ml-14 lg:mr-0 lg:size-20" />
        </div>
        <div className="space-y-8 md:order-1 md:space-y-14">
          {valuesData.map(({ title, content }) => (
            <div key={title} className="space-y-2.5 md:space-y-5">
              <h4 className="max-w-xs text-2xl font-extralight uppercase md:max-w-md md:text-4xl lg:text-5xl">
                {title}
              </h4>
              <p>{content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
