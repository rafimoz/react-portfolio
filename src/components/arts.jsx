import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const arts = [
    "https://res.cloudinary.com/dhlh7av5k/image/upload/v1792228611/626703886_18117959854524362_8251602746430082133_n_1_xexeqv.webp",
    "https://res.cloudinary.com/dhlh7av5k/image/upload/v1792228482/WhatsApp_Image_2026-10-17_at_3.13.35_PM_bylhbh.jpg",
    "https://res.cloudinary.com/dhlh7av5k/image/upload/v1733521485/Screenshot_20241207-034358_okj5a0.jpg",
    "https://res.cloudinary.com/dhlh7av5k/image/upload/v1733503024/art-7_nzy5sl.jpg",
    "https://res.cloudinary.com/dhlh7av5k/image/upload/v1733521620/1733521522021_ngzfob.jpg",
    "https://res.cloudinary.com/dhlh7av5k/image/upload/v1733503025/art-5_xlkmug.jpg",
    "https://res.cloudinary.com/dhlh7av5k/image/upload/v1733503025/art-2_rlmiib.jpg",
    "https://res.cloudinary.com/dhlh7av5k/image/upload/v1733503025/art-6_gsyoe8.jpg",
    "https://res.cloudinary.com/dhlh7av5k/image/upload/v1774396514/instagram_CCAoXHEF3cV_f5aadj.jpg",
    "https://res.cloudinary.com/dhlh7av5k/image/upload/v1774396514/instagram_CuwWk4Arc5q_ge6z36.jpg",
    "https://res.cloudinary.com/dhlh7av5k/image/upload/v1774396513/649536279_18086300207229539_5852850314850134585_n_zd5gve.jpg"
];

const PhotoGridGallery = () => {
    const imagesRef = useRef([]);
    imagesRef.current = [];

    const addToRefs = (el) => {
        if (el && !imagesRef.current.includes(el)) imagesRef.current.push(el);
    };

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        imagesRef.current.forEach((el, index) => {
            gsap.fromTo(
                el,
                { opacity: 0, scale: 0 },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 0.6,
                    ease: "ease.in", // Pop/bouncy effect
                    delay: index * 0.1, // Stagger for nicer effect
                    scrollTrigger: {
                        trigger: el,
                        start: "top 90%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        });
    }, []);

    return (
        <section className="w-full px-4 sm:px-8 my-20">
            <h2 className="text-5xl sm:text-7xl font-allura text-center mb-12">
                - Also an Artist -
            </h2>

            <div className="columns-2 sm:columns-2 lg:columns-3 gap-2 space-y-2">
                {arts.map((img, index) => (
                    <div
                        key={index}
                        ref={addToRefs}
                        className="break-inside-avoid w-full overflow-hidden rounded-lg"
                    >
                        <img
                            src={img}
                            alt={`Art ${index}`}
                            className="w-full object-cover"
                            style={{ display: "block", width: "100%" }}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PhotoGridGallery;
