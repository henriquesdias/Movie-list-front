import { useEffect, useState } from "react";

import getDetails from "../api/get-details";

export default function useGetDetails(id) {
  const [details, setDetails] = useState({});
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getDetails(id)
      .then((res) => {
        setIsLoading(false);
        setDetails(res);
      })
      .catch((res) => {
        setIsLoading(false);
        setError(res);
      });
  }, []);

  return { details, error, isLoading };
}
