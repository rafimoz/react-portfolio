import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { useDarkMode } from "../contexts/DarkModeContext";

// Reusable ServiceItem component
const ServiceItem = ({ title, imageUrl, description }) => { // Added description prop
    const parentDivRef = useRef(null);
    const imageContainerRef = useRef(null);
    const descriptionTextRef = useRef(null); // Ref for the description text

    const { dark } = useDarkMode(); // Access the dark mode state

    useEffect(() => {
        const imageContainer = imageContainerRef.current;
        const descriptionText = descriptionTextRef.current; // Get reference to description text
        const parentDiv = parentDivRef.current;

        if (!imageContainer || !descriptionText || !parentDiv) return; // Ensure all elements exist

        // Set initial state for image and description text
        gsap.set(imageContainer, { autoAlpha: 0, scale: 0.5 });
        gsap.set(descriptionText, { autoAlpha: 0, y: 20 }); // Initially hidden and slightly below

        const tl = gsap.timeline({ paused: true });

        // Animation for the image
        tl.to(imageContainer, {
            autoAlpha: 1,
            scale: 1,
            duration: 0.5,
            ease: "power3.out"
        }, "start") // Label this animation to sync with text

        // Animation for the description text
        tl.to(descriptionText, {
            autoAlpha: 1,
            y: 0, // Animate to original position
            duration: 0.5,
            ease: "power3.out"
        }, "start+=0.1"); // Start slightly after the image animation

        const handleMouseEnter = () => {
            tl.play();
        };

        const handleMouseLeave = () => {
            tl.reverse();
        };

        parentDiv.addEventListener('mouseenter', handleMouseEnter);
        parentDiv.addEventListener('mouseleave', handleMouseLeave);

        // Cleanup event listeners on component unmount
        return () => {
            parentDiv.removeEventListener('mouseenter', handleMouseEnter);
            parentDiv.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []); // Empty dependency array means this effect runs once on mount

    return (
        <div
            className='relative flex justify-between items-center border-b-[1px] border-primary sm:py-6 py-4 group'
            ref={parentDivRef}
        >
            <h3 className='sm:text-5xl text-2xl z-10 font-bigshoulders group-hover:font-normal font-extralight transition-all duration-200'>{title}</h3>
            <svg className={`sm:h-[60px] h-[40px] rounded-full cursor-pointer fill-current border ${dark ? 'text-primary border-primary group-hover:bg-primary/10' : 'text-secondary border-secondary group-hover:bg-secondary/10'} `} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M36 49C35.4477 49 35 49.4477 35 50C35 50.5523 35.4477 51 36 51L36 49ZM63.7071 50.7071C64.0976 50.3166 64.0976 49.6834 63.7071 49.2929L57.3431 42.9289C56.9526 42.5384 56.3195 42.5384 55.9289 42.9289C55.5384 43.3195 55.5384 43.9526 55.9289 44.3431L61.5858 50L55.9289 55.6569C55.5384 56.0474 55.5384 56.6805 55.9289 57.0711C56.3195 57.4616 56.9526 57.4616 57.3431 57.0711L63.7071 50.7071ZM36 51L63 51L63 49L36 49L36 51Z" />
            </svg>

            {/* description text */}
            <p
                ref={descriptionTextRef} // Attach ref to description
                className={`absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 sm:text-sm text-[8px] w-20 sm:w-80 line-clamp-2 overflow-hidden ${dark ? 'text-primary/70' : 'text-secondary/70'}`} // Added text color for better visibility
            >
                {description} {/* Use the description prop */}
            </p>

            <div
                className='absolute sm:w-[220px] w-[120px] sm:h-[150px] h-[80px] rounded-xl overflow-hidden pointer-events-none top-[50%] left-[80%] -translate-x-1/2 -translate-y-1/2'
                ref={imageContainerRef}
            >
                <img className='object-cover w-full h-full' src={imageUrl} alt={title} />
            </div>
        </div>
    );
};


const Services = () => {
    // Define your service data
    const servicesData = [
        {
            id: 1,
            title: 'Web development',
            imageUrl: 'https://res.cloudinary.com/dhlh7av5k/image/upload/v1752942125/ouxdtk3wwwbmvexsyu63.jpg',
            description: 'Building web solutions, from database to user interface, ensuring robust and scalable applications.'
        },
        {
            id: 2,
            title: 'UI/UX design',
            imageUrl: 'https://res.cloudinary.com/dhlh7av5k/image/upload/v1752942535/vckfyxyjtog0igoxweaz.jpg',
            description: 'Crafting intuitive and engaging interfaces for enhanced user satisfaction.'
        },
        {
            id: 3,
            title: 'Mobile app',
            imageUrl: 'https://res.cloudinary.com/dhlh7av5k/image/upload/v1752942125/honayumkdhf4bq1c7zxm.jpg',
            description: 'Developing native and cross-platform mobile apps for all devices.'
        },
        {
            id: 4,
            title: 'Graphic design',
            imageUrl: 'https://cdn.dribbble.com/userupload/44353266/file/c38bf2c54b41d66ef3d202cc001b810e.png?resize=752x564&vertical=center',
            description: 'Transforming ideas into visually stunning and impactful designs that elevate your brand identity and captivate your audience.'
        },
    ];

    return (
        <section className='w-full overflow-hidden sm:px-8 px-4'>
            <div className='text-5xl sm:text-7xl text-end font-bodoni'>
                <p>My Services</p>
            </div>

            <main className='py-10 mb-20'>
                {servicesData.map(service => (
                    <ServiceItem
                        key={service.id}
                        title={service.title}
                        imageUrl={service.imageUrl}
                        description={service.description} // Pass the description prop here
                    />
                ))}
            </main>
        </section>
    );
};

export default Services;