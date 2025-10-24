import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const arts = [
    "https://res.cloudinary.com/dhlh7av5k/image/upload/v1733503025/art-3_bw6s7h.jpg",
    "https://res.cloudinary.com/dhlh7av5k/image/upload/v1733521485/Screenshot_20241207-034318_ck5frr.png",
    "https://res.cloudinary.com/dhlh7av5k/image/upload/v1733521485/Screenshot_20241207-034358_okj5a0.jpg",
    "https://res.cloudinary.com/dhlh7av5k/image/upload/v1733503024/art-7_nzy5sl.jpg",
    "https://res.cloudinary.com/dhlh7av5k/image/upload/v1733521620/1733521522021_ngzfob.jpg",
    "https://res.cloudinary.com/dhlh7av5k/image/upload/v1733503025/art-5_xlkmug.jpg",
    "https://res.cloudinary.com/dhlh7av5k/image/upload/v1733503025/art-2_rlmiib.jpg",
    "https://res.cloudinary.com/dhlh7av5k/image/upload/v1733503025/art-6_gsyoe8.jpg",
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

            <div className="columns-1 sm:columns-2 lg:columns-4 gap-4 space-y-4">
                {arts.map((img, index) => (
                    <div
                        key={index}
                        ref={addToRefs}
                        className="break-inside-avoid w-full mb-4 overflow-hidden rounded"
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
