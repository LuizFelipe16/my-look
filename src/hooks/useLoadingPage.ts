import { useState } from "react";
import { appVariables } from "_app";

export const useLoadingPage = () => {
  const [_loading, _setLoadig] = useState(true);

  function unmount() {
    setTimeout(() => { 
      _setLoadig(false) 
    }, appVariables.onDuration.loadingPage)
  }

  return { unmount, _loading }
};
