import { useCallback, useState } from "react";

const DEB_CAT = 'useLocalStorage';

// how to use
// const [theme, setTheme] = useLocalStorage('theme', 'dark');
// onClick={() => setTheme('light')};

function useLocalStorage(key: string, initialValue = '') {
  const [state, setState] = useState(() => {
    try {
      const storedValue = localStorage.getItem(key);

      return storedValue ? JSON.parse(storedValue) : initialValue;
    } catch (err) {
      return initialValue
    }
  });

  const setValue = useCallback((value: any) => {
    try {
      setState(value);
      localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      console.log(`${key} -> ${value}`, DEB_CAT);
    }
  }, [key]);

  return [state, setValue];
}

export { useLocalStorage };
