import { useState, useEffect } from "react";

function useTabSwitcher(LIST: any) {
  const [tabActCrew, setTabActCrew] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTabActCrew((prevTab) => (prevTab + 1) % LIST.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [LIST]);

  return { tabActCrew, setTabActCrew };
}

export default useTabSwitcher;
