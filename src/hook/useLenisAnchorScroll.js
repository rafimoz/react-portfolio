import { useEffect } from "react";

export default function useLenisAnchorScroll(lenisRef) {
  useEffect(() => {
    const handleClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;

      const targetId = anchor.getAttribute("href").substring(1);
      const target = document.getElementById(targetId);

      if (target) {
        e.preventDefault();
        lenisRef.current?.scrollTo(target, {
          offset: 0,
          duration: 1.5,
          easing: (t) => 1 - Math.pow(1 - t, 3),
        });
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [lenisRef]);
}