//Importing libs or native resources
import { useEffect, useState } from "react";

/*
 * Alternate hook to manipulate the dataset in local storage.
 */

export default function useLocalStorage(key, initialValue = "") {
  const [value, setValue] = useState(() => {
    //Verifica se o objwto Window ja está disponível para o uso das APIs do navegador.
    if (typeof window === "undefined") {
      return initialValue;
    }

    let currentValue;

    try {
      currentValue = JSON.parse(
        localStorage.getItem(key) || String(initialValue)
      );
    } catch (error) {
      currentValue = initialValue;
    }

    return currentValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
}
