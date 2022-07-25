import { useCallback, useEffect, useState } from 'react';

export function useFetch<Res>(url: string) {
  const [isLoading, setLoading] = useState(false);
  const [resData, setResData] = useState<Res>();
  const [errorInfo, setErrorInfo] = useState<string>();

  const request = useCallback(async () => {
    setLoading(true);

    try {
      const res = await fetch(url, {
        method: 'GET',
      });

      if (!res.ok) {
        throw new Error(`${res.status}`);
      }

      const data = await res.json();
      setResData(data);
    } catch (error: AnyType) {
      setErrorInfo(error.message);
    } finally {
      setLoading(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    request();
  }, [request]);

  return {
    errorInfo,
    resData,
    isLoading,
  };
}
