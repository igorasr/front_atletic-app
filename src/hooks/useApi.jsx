import axios from "axios";
import { useEffect, useState } from "react";

const API_HOST = process.env.API_HOST;
const TOKEN = process.env.TOKEN;

export default function useApi(url, method = "GET") {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isFetching, setIsFetching] = useState(true);

  const api = axios.create({
    method: method,
    baseURL: "https://viacep.com.br/ws",
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
  }, []);

  return { data, error, isFetching };
}
