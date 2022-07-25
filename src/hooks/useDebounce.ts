import { useEffect } from 'react';

interface UseThrottle {
  value: string;
  ms: number
  cb: () => void;
}

export function useDebounce({
  value,
  ms,
  cb,
}: UseThrottle) {
  useEffect(() => {
    const timer = setTimeout(cb, ms);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);
}
