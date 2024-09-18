import { useEffect, useState } from "react";

export default function useDebounce<T>(value: T, delayTime = 500) {
  const [debounceValue, setDebounceValue] = useState<T>(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceValue(value);
    }, delayTime);
    return () => clearTimeout(timeout);
  }, [value, delayTime]);
  return debounceValue;
}
