import { RefObject, useEffect } from 'react';

interface UseOutsideClickProps {
  ref: RefObject<HTMLElement>;
  cb: () => void;
}

export function useOutsideClick({ ref, cb }: UseOutsideClickProps): void {
  useEffect(() => {
    const el = ref?.current;

    if (!el) return;

    const clickHandler = ({ target }: MouseEvent): void => {
      if (target !== el && !el.contains(target as Node)) {
        cb();
      }
    };

    window.document.addEventListener('click', clickHandler);

    return () => window.document.removeEventListener('click', clickHandler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref.current]);
}
