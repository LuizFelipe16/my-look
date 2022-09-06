import { useEffect } from 'react';
import type { EffectCallback, DependencyList } from 'react';

const useUpdate = (myFunction: EffectCallback, deps: DependencyList): void => {
  useEffect(() => {
    return myFunction()
  }, [deps]);
};

export { useEffect as onUpdate };
