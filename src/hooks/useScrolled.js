import { useEffect, useState } from "react";

function useScrolled(threshold = 60) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > threshold);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, [threshold]);

  return scrolled;
}

export default useScrolled;