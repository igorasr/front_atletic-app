//Importing libs or native resources
import axios from "axios";
import { useEffect, useState } from "react";
//Import of own components and project resources
import { env } from "../constants";

export function useApi(url, method = "GET", params) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isFetching, setIsFetching] = useState(true);

  const api = axios.create({
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    method: method,
    baseURL: env.API_HOST,
    data: method !== "GET" && params ? JSON.stringify(params) : undefined,
  });

  useEffect(() => {
    api(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((exception) => {
        setError(exception);
      })
      .finally(() => {
        setIsFetching(false);
      });
  }, [url]);

  return { data, error, isFetching };
}
