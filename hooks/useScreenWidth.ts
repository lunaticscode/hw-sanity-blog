import { useCallback, useEffect, useState } from "react";
let timer: any;
const DEBOUCE_DELAY = 1000;
const useScreenWidth = () => {
  const [width, setWidth] = useState<number>(document.body.clientWidth);

  const handleResize = useCallback(() => {
    clearTimeout(timer);
    timer = setTimeout(
      () => setWidth(document.body.clientWidth),
      DEBOUCE_DELAY
    );
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  return {
    width,
  };
};
export default useScreenWidth;
