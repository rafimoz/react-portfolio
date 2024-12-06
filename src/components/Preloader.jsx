import React, { useEffect, useRef, useContext, useState } from "react";
import { gsap } from "gsap";
import { LoadingContext } from "../contexts/LoadingContext";

const Preloader = () => {
  const loadingBar = useRef([]);
  const counterRef = useRef(null);
  const { setLoading } = useContext(LoadingContext);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Disable scrolling during the preloader
    document.body.style.overflow = "hidden";

    let currentValue = 0;

    function updateCounter() {
      if (currentValue >= 100) return;

      currentValue += Math.floor(Math.random() * 10) + 1;
      if (currentValue > 100) currentValue = 100;

      if (counterRef.current) {
        counterRef.current.textContent = `${currentValue}%`;
      }

      const delay = Math.floor(Math.random() * 200) + 50;
      setTimeout(updateCounter, delay);
    }

    updateCounter();

    gsap.to(counterRef.current, {
      duration: 0.25,
      delay: 3,
      opacity: 0,
      onComplete: () => {
        if (counterRef.current) counterRef.current.style.display = "none";
      },
    });

    gsap.to(loadingBar.current, {
      duration: 1.5,
      delay: 3,
      height: 0,
      stagger: { amount: 0.5 },
      ease: "power4.inOut",
      onComplete: () => {
        setIsFadingOut(true);
        setTimeout(() => {
          setLoading(false); // Notify the app that loading is complete
          document.body.style.overflow = "auto"; // Re-enable scrolling
        }, 500); // Match this duration to your fade-out transition in CSS
      },
    });
  }, [setLoading]);

  return (
    <div
      className={`overlay z-50 fixed w-full h-[100vh] transition-opacity duration-500 bg-secondary ${
        isFadingOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="w-full h-full relative">
        <div className="h-full absolute grid grid-cols-8 w-full">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              ref={(el) => (loadingBar.current[index] = el)}
              className="w-full h-full bg-primary"
            ></div>
          ))}
        </div>
        <div className="text-6xl absolute bottom-5 right-5 font-aboreto text-secondary">
          <h1 ref={counterRef} className="counter">
            0%
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Preloader;