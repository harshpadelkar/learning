import { useEffect, useState } from "react";
import { client } from "../lib/client";
const useHarsh = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading("loading...");
    setData(null);
    setError(null);

    client
      .fetch(url)
      .then((res) => {
        setLoading(false);
        setData(res);
      })
      .catch((err) => {
        setLoading(false);
        setError("Something went wrong!");
        console.error(err);
      });
  }, [url]);

  return { data, loading, error };
};

export default useHarsh;
