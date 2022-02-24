import axios from "axios";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { PHOTO_API_URL, QUOTE_API_URL } from "../config";

export const useGetQuotes = () => {
  const [quotes, setQuotes] = useState([]);
  const { data } = useQuery(
    [`useGetQuotes`],
    async () => {
      const [{ data: quotes }, { data: photo }] = await Promise.all([
        axios.get(QUOTE_API_URL),
        axios.get(PHOTO_API_URL),
      ]);
      return { text: quotes[0].q, background: photo.url };
    },
    {
      refetchInterval: 5000,
    }
  );

  useEffect(() => {
    if (data) {
      setQuotes((oldQuotes) => [...oldQuotes, data].filter(Boolean).slice(-2));
    }
  }, [data]);

  return { quotes };
};
