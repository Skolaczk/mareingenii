import { useCallback, useState } from 'react';

export const useOpenClose = (initialValue: boolean = false) => {
  const [isOpen, setIsOpen] = useState(initialValue);

  const open = useCallback(() => setIsOpen(true), [setIsOpen]);

  const close = useCallback(() => setIsOpen(false), [setIsOpen]);

  const toggle = useCallback(
    () => setIsOpen((prevState) => !prevState),
    [setIsOpen]
  );

  return { isOpen, open, close, toggle };
};
