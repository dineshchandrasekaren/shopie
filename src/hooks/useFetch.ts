import { AxiosResponse } from "axios";
import { useState, useEffect, useCallback } from "react";

type UseFetchDataProps<T> = {
  apiCall: (signal: AbortSignal) => Promise<AxiosResponse<T, any>>;
};

const useFetchData = <T>({ apiCall }: UseFetchDataProps<T>) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    // Create an AbortController instance
    const controller = new AbortController();

    setLoading(true);
    setError(null);

    try {
      // Make the API call with the signal to support cancellation
      const { data: responseData } = await apiCall(controller.signal);
      setData(responseData);
    } catch (err: any) {
      if (err.name === "AbortError") {
        console.log("Fetch aborted");
      } else {
        setError(err.message || "An error occurred");
      }
    } finally {
      setLoading(false);
    }

    // Cleanup function to abort the fetch if the component unmounts
    return () => {
      controller.abort();
    };
  }, []);

  useEffect(() => {
    if (!data) {
      fetchData();
    }

    // Cleanup function
    return () => {
      fetchData();
    };
  }, []);

  return { data, loading, error };
};

export default useFetchData;
