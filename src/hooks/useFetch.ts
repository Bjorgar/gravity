import { useEffect, useState } from 'react';

export function useFetch<Res>(url: string) {
  const [isLoading, setLoading] = useState(false);
  const [resData, setResData] = useState<Res>();
  const [errorInfo, setErrorInfo] = useState<string>();

  const request = async () => {
    setLoading(true);

    try {
      const res = await fetch(url);

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
  };

  useEffect(() => {
    request();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    errorInfo,
    resData,
    isLoading,
  };
}
