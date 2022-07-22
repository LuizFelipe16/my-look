import { useEffect } from 'react';
import type { EffectCallback } from 'react';

const useMount = (myFunction: EffectCallback): void => {
  useEffect(myFunction, []);
};

export { useMount as onMount };
