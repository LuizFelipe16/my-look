import { useEffect } from 'react';
import type { EffectCallback } from 'react';

const useMount = (myFunction: EffectCallback): void => {
  useEffect(() => {
    return myFunction()
  }, []);
};

export { useMount as onMount };
