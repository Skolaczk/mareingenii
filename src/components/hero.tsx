import { Circle, InclinedLine } from '@/assets/shapes';

export const Hero = () => {
  return (
    <section className="container relative my-14 space-y-10 md:my-20 md:space-y-20 lg:my-40 lg:space-y-24">
      <Circle className="xs:size-80 xs:translate-y-[-60%] absolute top-1/2 size-64 -translate-y-2/3 md:translate-y-[-55%] lg:size-auto lg:-translate-y-1/2" />
      <div className="space-y-10 md:flex md:items-center md:justify-between md:space-y-0 lg:justify-start lg:gap-20">
        <div className="flex items-center">
          <h3 className="xs:text-5xl font-serif text-4xl uppercase md:text-6xl lg:text-8xl">
            expertise
          </h3>
          <InclinedLine className="xs:size-10 mx-4 size-8 md:size-12 lg:ml-20 lg:mr-0 lg:size-20" />
        </div>
        <p className="md:max-w-[300px]">
          We specialize in creating cutting edge digital products, empowered by
          superb design, that blend form and function seamlessly.
        </p>
      </div>
      <h3 className="xs:text-5xl text-right font-serif text-4xl uppercase md:text-6xl lg:text-8xl">
        transparency
      </h3>
      <div className="space-y-10 md:flex md:items-center md:justify-between md:space-y-0">
        <p className="mb-10 md:mb-0 md:max-w-[500px]">
          Immerse yourself in a world of creativity and craftsmanship. With a
          passion for aesthetics and a commitment to quality, we turn concepts
          into tangible, market-ready solutions. Explore our portfolio and see
          how we bring visions to life through the art of product design.{' '}
        </p>
        <span className="xs:text-6xl mr-4 inline text-5xl font-thin md:ml-4 md:text-7xl lg:text-9xl">
          &
        </span>
        <h3 className="xs:text-5xl inline font-serif text-4xl uppercase md:text-6xl lg:text-8xl">
          crafts
        </h3>
      </div>
    </section>
  );
};
