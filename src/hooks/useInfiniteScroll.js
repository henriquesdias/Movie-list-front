import { useState, useEffect } from "react";

export default function useInfiniteScroll() {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const scrollPosition = window.pageYOffset;
      console.log("A posição atual da barra de rolagem é: ", scrollPosition);
      setHeight(scrollPosition);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { height };
}
