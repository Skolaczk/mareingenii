'use client';

import { ContactForm } from '@/components/contact-form';
import { useOpenClose } from '@/hooks';

export const Contact = () => {
  const { isOpen, open, close } = useOpenClose();

  return (
    <>
      <section className="container my-32 space-y-3 text-center lg:my-64">
        <p>Interested in working with us?</p>
        <h2 className="xs:text-5xl font-serif text-4xl uppercase md:text-6xl lg:text-7xl">
          get in touch
        </h2>
      </section>
      {isOpen && <ContactForm close={close} />}
      <button
        type="button"
        onClick={open}
        className="bg-primary text-secondary fixed bottom-10 right-6 size-20 rounded-full text-sm font-light xl:right-10"
      >
        say hi
      </button>
    </>
  );
};
