import { ArrowLeft } from '@/assets/icons';
import { Circle } from '@/assets/shapes';
import { ModalTemplate } from '@/components/modal-template';

type TContactFormProps = {
  close: () => void;
};

export const ContactForm = ({ close }: TContactFormProps) => {
  return (
    <ModalTemplate close={close}>
      <div className="container flex h-[calc(100vh-64px)] flex-col items-center gap-10 py-10 lg:flex-row lg:items-center lg:gap-32">
        <div className="relative flex w-full flex-col gap-5 md:gap-10 lg:gap-20">
          <Circle className="absolute right-0 top-0 h-fit max-h-full w-1/2" />
          <h2 className="xs:text-7xl font-serif text-6xl uppercase md:text-8xl lg:text-9xl">
            let&apos;s
          </h2>
          <h2 className="xs:text-7xl before:bg-secondary relative self-end font-serif text-6xl uppercase before:absolute before:-left-16 before:bottom-1.5 before:h-0.5 before:w-14 md:text-8xl lg:text-9xl">
            get in
          </h2>
          <h2 className="xs:text-7xl after:bg-secondary relative font-serif text-6xl uppercase after:absolute after:bottom-1.5 after:ml-4 after:size-4 after:rounded-full md:text-8xl md:after:bottom-2.5 md:after:size-6 lg:text-9xl lg:after:bottom-3 lg:after:ml-6 lg:after:size-8">
            touch
          </h2>
        </div>
        <form className="flex w-full flex-col items-end gap-8 md:gap-10">
          <input
            className="placeholder:text-secondary relative block w-full border-b bg-transparent py-2"
            placeholder="full name"
            name="full-name"
            required
          />
          <input
            className="placeholder:text-secondary w-full border-b bg-transparent py-2"
            placeholder="email"
            type="email"
            name="email"
            required
          />
          <input
            className="placeholder:text-secondary w-full border-b bg-transparent py-2"
            placeholder="phone number"
            name="phone-number"
          />
          <input
            className="placeholder:text-secondary w-full border-b bg-transparent py-2"
            placeholder="tell us how we can help"
            name="message"
            required
          />
          <button className="bg-secondary text-primary flex w-fit items-center rounded-full px-5 py-2.5 text-sm md:mt-5">
            send <ArrowLeft className="ml-1" />
          </button>
        </form>
      </div>
    </ModalTemplate>
  );
};
