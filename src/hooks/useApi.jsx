import axios from "axios";
import { useEffect, useState } from "react";

export function useApi(url, method = "GET") {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isFetching, setIsFetching] = useState(true);

  const api = axios.create({
    method: method,
    baseURL: "https://viacep.com.br/ws",
  });

  const fetchingData = async () => {
    await api(url)
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((exception) => {
        setError(exception);
      })
      .finally(() => {
        setIsFetching(false);
      });
  };

  useEffect(() => {
    setTimeout(() => {
      fetchingData();
    }, 2000);
  }, []);

  return { data, error, isFetching };
}
