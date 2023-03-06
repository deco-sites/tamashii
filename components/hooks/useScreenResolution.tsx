import { useEffect, useState } from "preact/hooks";
//hook to return the screen resolution and update on resize
export default function useScreenResolution() {
  const [screenResolution, setScreenResolution] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setScreenResolution(window.innerWidth);
    };
    //tirei o window.addEventListener etc pq o deno fica dando erro de no-window-prefix no commit
    addEventListener("resize", handleResize);
    return () => removeEventListener("resize", handleResize);
  }, []);

  return screenResolution;
}
