import React, { useEffect, useRef, useContext, useState } from "react";
import { gsap } from "gsap";
import { LoadingContext } from "../contexts/LoadingContext";

const Preloader = () => {
  const loadingBar = useRef([]);
  const counterRef = useRef(null);
  const { setLoading } = useContext(LoadingContext);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    let currentValue = 0;
    let fakeLoadingComplete = false;
    let realAssetsLoaded = false;

    // 1. Fake counter loader
    function updateCounter() {
      if (currentValue >= 100) {
        fakeLoadingComplete = true;
        maybeStartExitAnimation();
        return;
      }

      currentValue += Math.floor(Math.random() * 10) + 1;
      if (currentValue > 100) currentValue = 100;

      if (counterRef.current) {
        counterRef.current.textContent = `${currentValue}%`;
      }

      const delay = Math.floor(Math.random() * 200) + 50;
      setTimeout(updateCounter, delay);
    }

    updateCounter();

    // 2. Wait for real asset load (window.onload)
    const onRealLoad = () => {
      realAssetsLoaded = true;
      maybeStartExitAnimation();
    };

    if (document.readyState === "complete") {
      onRealLoad();
    } else {
      window.addEventListener("load", onRealLoad);
    }

    // 3. Exit logic when both done
    function maybeStartExitAnimation() {
      if (!(fakeLoadingComplete && realAssetsLoaded)) return;

      // Counter fade out
      gsap.to(counterRef.current, {
        duration: 0.25,
        opacity: 0,
        onComplete: () => {
          if (counterRef.current) counterRef.current.style.display = "none";
        },
      });

      // Bars animation
      gsap.to(loadingBar.current, {
        duration: 1.5,
        height: 0,
        stagger: { amount: 0.5 },
        ease: "power4.inOut",
        onComplete: () => {
          setIsFadingOut(true);
          setTimeout(() => {
            setLoading(false); // Reveal app
            document.body.style.overflow = "auto";
          }, 500);
        },
      });
    }

    // Cleanup
    return () => {
      window.removeEventListener("load", onRealLoad);
    };
  }, [setLoading]);

  return (
    <div
      className={`overlay z-50 fixed w-full h-[100svh] sm:h-[100vh] transition-opacity duration-500 bg-secondary ${
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
        <div className="text-6xl absolute bottom-5 right-5 font-light text-secondary">
          <h1 ref={counterRef} className="counter">
            0%
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Preloader;