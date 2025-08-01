import React, { useState } from 'react';

const AllWorks = () => {
    const allWorks = [
        {
            id: '01',
            image: 'https://res.cloudinary.com/dhlh7av5k/image/upload/v1750406480/pawambhbvcjck2dlel3p.jpg',
            title: 'Basha Bhara Hobe',
            link: 'https://basha-bhara-hobe.vercel.app/',
            description: 'A housing rental platform built with the MERN stack, designed to provide a user-friendly experience for finding and listing rental properties.',
            category: 'web-applications',
        },
        {
            id: '02',
            image: 'https://res.cloudinary.com/dhlh7av5k/image/upload/v1733574498/carenavi_ox81ff.jpg',
            title: 'CareNavi',
            link: 'https://carenavi-healthcare.vercel.app/',
            description: 'A comprehensive healthcare management platform, developed using MERN stack technology, focused on enhancing user experience in health services.',
            category: 'web-applications',
        },
        {
            id: '03',
            image: 'https://res.cloudinary.com/dhlh7av5k/image/upload/v1740497393/157_1x_shots_so_aswwzm.jpg',
            title: 'Lunch Box',
            link: 'https://github.com/rafimoz/office-lunch-menu-management',
            description: 'An efficient office lunch menu management platform, built with the MERN stack to streamline meal planning and ordering.',
            category: 'web-applications',
        },
        {
            id: '04',
            image: 'https://res.cloudinary.com/dhlh7av5k/image/upload/v1740497395/209shots_so_osrv34.jpg',
            title: 'Modern Portfolio UI',
            link: 'https://dribbble.com/shots/25642292-Modern-Portfolio-Design',
            description: 'Focus on the UI/UX aspects of a modern, interactive portfolio design.',
            category: 'ui-ux',
        },
        {
            id: '05',
            image: 'https://res.cloudinary.com/dhlh7av5k/image/upload/v1733574510/uidesign_pc8s8o.jpg',
            title: 'Photobooth App UX',
            link: 'https://dribbble.com/shots/25737179-Personal-Portfolio-Photographer',
            description: 'User experience design for a photographer\'s portfolio application, emphasizing ease of use and visual flow.',
            category: 'ui-ux',
        },
        {
            id: '06',
            image: 'https://cdn.dribbble.com/userupload/44234267/file/9b2c07a16952b2ec517381dbd88f2a85.png?resize=1024x768&vertical=center',
            title: 'A Bold, Declarative Newspaper Headline Design',
            link: 'https://dribbble.com/shots/26316848-A-Bold-Declarative-Newspaper-Headline-Design',
            description: 'A conceptual newspaper poster blending classic aesthetics with modern drama and typography.',
            category: 'graphic-designs',
        },
        {
            id: '07',
            image: 'https://cdn.dribbble.com/userupload/44234099/file/b06deca31c3f2b35eaae654123623f2d.png?resize=752x564&vertical=center',
            title: 'Focus: A Study in Dual Perception and Targeted Vision',
            link: 'https://dribbble.com/shots/26316822-Focus-A-Study-in-Dual-Perception-and-Targeted-Vision',
            description: 'Bold design featuring bisected face and fragmented words — a metaphor for duality and clarity.',
            category: 'graphic-designs',
        },
        {
            id: '08',
            image: 'https://cdn.dribbble.com/userupload/44233381/file/8fed615ce7b6ca2449aeb9ce833bced3.png?resize=752x564&vertical=center',
            title: 'Muhammad Ali: The Greatest of All Time',
            link: 'https://dribbble.com/shots/26316627-Muhammad-Ali-The-Greatest-of-All-Time',
            description: 'This vibrant red poster, "সর্বকালের সেরা" (The Greatest of All Time), is a dynamic collage celebrating Muhammad Ali. It features iconic images spanning his career, from young boxer to dignified legend, with a "SOLD" stamp and boxing gloves underscoring his unparalleled status and enduring global impact.',
            category: 'graphic-designs',
        },
        {
            id: '09',
            image: 'https://cdn.dribbble.com/userupload/44233515/file/c36441a2203cff7173a4ff5e1498016b.png?resize=752x564&vertical=center',
            title: 'Rockstar: An Ode to Endless, Passionate Love',
            link: 'https://dribbble.com/shots/26316658-Rockstar-An-Ode-to-Endless-Passionate-Love',
            description: "This poster, themed around the movie Rockstar, beautifully captures the intense and often tumultuous nature of love, as conveyed by the film's central narrative.",
            category: 'graphic-designs',
        },
        {
            id: '10',
            image: 'https://cdn.dribbble.com/userupload/44233328/file/9b1bcb4c9195636fad28754b99f0a78a.jpeg?resize=752x752&vertical=center',
            title: 'GRAM: Reflections of an Old Sky',
            link: 'https://dribbble.com/shots/26316614-GRAM-Reflections-of-an-Old-Sky',
            description: "The poster was designed to create a sense of calm and appreciation for natural moments, highlighting the interplay of light, water, and sky, and inviting the viewer to pause and reflect.",
            category: 'graphic-designs',
        },
        {
            id: '11',
            image: 'https://cdn.dribbble.com/userupload/44233297/file/c2584012372ea283bffaaca7fb7a7f1c.png?resize=1024x768&vertical=center',
            title: 'Ayman Villa: Where Dreams Take Root',
            link: 'https://dribbble.com/shots/26316602-Ayman-Villa-Where-Dreams-Take-Root',
            description: "This design was created to evoke a feeling of sophisticated comfort and possibility, inviting viewers to imagine themselves living in a space where modern elegance meets serene natural beauty, truly making their big dreams a tangible reality.",
            category: 'graphic-designs',
        },
        {
            id: '12',
            image: 'https://cdn.dribbble.com/userupload/34649015/file/original-fe02df254ddb794f7f465c221182dff8.jpg?resize=600x819&vertical=center',
            title: 'ONE PIECE - POSTER',
            link: 'https://dribbble.com/shots/25668300-ONE-PIECE-POSTER',
            description: "Channeling my inner pirate with this One Piece design. Hope you guys like it! Inspired by the legendary Kentaro Miura.",
            category: 'graphic-designs',
        },
        {
            id: '13',
            image: 'https://cdn.dribbble.com/userupload/30244234/file/original-007eeba67355f0ed67c8c99fb3483fe3.jpeg?resize=752x752&vertical=center',
            title: 'Vintage styled newspaper poster',
            link: 'https://dribbble.com/shots/25642820-Vintage-styled-newspaper-poster',
            description: "Inspired by the GOAT! 🐐 This newspaper-style poster is my tribute to Cristiano Ronaldo. His impact on the sport is undeniable. Let me know what you think of the design!",
            category: 'graphic-designs',
        },
        {
            id: '14',
            image: 'https://cdn.dribbble.com/userupload/44234272/file/6beeee73cc2f88694afff0fad9ff9385.jpg?resize=752x752&vertical=center',
            title: 'Inspiring Journeys Through Breathtaking Landscapes',
            link: 'https://dribbble.com/shots/26316850-Hero-Section-Inspiring-Journeys-Through-Breathtaking-Landscapes',
            description: ' The soft, rounded corners of the main content area, combined with a blurred background image, give the design a modern, sleek, and inviting feel. This hero section is expertly crafted to immerse visitors in the beauty of travel and encourage immediate exploration of the services offered.',
            category: 'ui-ux',
        },
        {
            id: '15',
            image: 'https://cdn.dribbble.com/userupload/44233576/file/334bdf0cd9c2f7c1cc9060ce0a99bff8.jpg?resize=752x752&vertical=center',
            title: 'Creative Portfolio Hero: A Glimpse into My World of Design',
            link: 'https://dribbble.com/shots/26316676-Creative-Portfolio-Hero-A-Glimpse-into-My-World-of-Design',
            description: 'This design is conceptually rich, aiming to pique visitor interest by offering a visual narrative of the designers multifaceted profile, encouraging exploration of their work and services. It is a creative and memorable way to make a strong first impression for a personal portfolio.',
            category: 'ui-ux',
        },
        {
            id: '16',
            image: 'https://cdn.dribbble.com/userupload/44233557/file/675ac0b2b40e06bf30f90bd195500ac0.jpeg?resize=752x752&vertical=center',
            title: 'Study Tour: Course Enrollment – A Comprehensive Design',
            link: 'https://dribbble.com/shots/26316672-Study-Tour-Course-Enrollment-A-Comprehensive-Design',
            description: 'The clean aesthetics, organized information hierarchy, and thoughtful placement of interactive elements demonstrate a strong focus on user experience within this educational platform design.',
            category: 'ui-ux',
        },
        {
            id: '17',
            image: 'https://cdn.dribbble.com/userupload/43827748/file/original-2ac0a38be024cf643b06c022b3731beb.png?resize=752x752&vertical=center',
            title: 'LUNCH BOX - A MENU MANAGER DASHBOARD',
            link: 'https://dribbble.com/shots/26189414-LUNCH-BOX-A-MENU-MANAGER-DASHBOARD',
            description: 'The clean aesthetics, organized information hierarchy, and thoughtful placement of interactive elements demonstrate a strong focus on user experience within this CMS platform design.',
            category: 'ui-ux',
        },
        {
            id: '18',
            image: 'https://cdn.dribbble.com/userupload/42661173/file/original-ef09a7c45a38c8c54e3e6efc615d26f9.jpeg?resize=752x940&vertical=center',
            title: 'Mercedes-Benz G 580 Hero Section',
            link: 'https://dribbble.com/shots/25822196-Mercedes-Benz-G-580-Hero-Section-UI-Design',
            description: 'Explored a dynamic and modern UI for the Mercedes-Benz G 580 with EQ Technology. The design emphasizes the vehicle is iconic silhouette, electric capabilities, and bold typography. Check out the full pixels attached!',
            category: 'ui-ux',
        },
        {
            id: '19',
            image: 'https://cdn.dribbble.com/userupload/41490359/file/original-f14929cadea970e023b2ee418ae2da22.png?resize=752x601&vertical=center',
            title: 'Makeit - Landing Page',
            link: 'https://dribbble.com/shots/25737480-Makeit-Landing-Page',
            description: 'Explored a dynamic and modern UI. Check out the full pixels attached!',
            category: 'ui-ux',
        },
        {
            id: '20',
            image: 'https://cdn.dribbble.com/userupload/44325982/file/3dd92308190c4ab56fa1c683be96ee87.png?resize=1024x768&vertical=center',
            title: 'A conceptual poster design titled - Motion',
            link: 'https://dribbble.com/shots/25737480-Makeit-Landing-Page',
            description: 'This project, Motion, is a conceptual poster design created in Adobe Photoshop. The primary goal was to visualize the abstract idea of motion in a compelling, static image. This was achieved by blending a high-contrast, blurred photograph of a person with large, rhythmic typography. The letterforms are positioned to interact with the figure, creating a sense of dynamic flow and continuity.',
            category: 'graphic-designs',
        },
    ];

    const [activeTab, setActiveTab] = useState('all');

    const tabs = [
        { id: 'all', name: 'All Works' },
        { id: 'web-applications', name: 'Web Applications' },
        { id: 'ui-ux', name: 'UI/UX Designs' },
        { id: 'graphic-designs', name: 'Graphic Designs' },
    ];

    const filteredWorks = activeTab === 'all'
        ? allWorks
        : allWorks.filter(work => work.category === activeTab);

    return (
        <section className='py-10 px-4 sm:px-8'>
            <div className='max-w-7xl mx-auto'>
                <h1 className='text-5xl sm:text-7xl font-bodoni text-center text-primary mb-12 leading-tight'>
                    -Projects-
                </h1>

                <div className='flex gap-4 sm:justify-center mb-8 overflow-x-auto whitespace-nowrap scrollbar-hide'>
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-4 py-2 sm:text-md text-sm rounded-lg font-aboreto transition-all duration-300 ease-in-out
                                ${activeTab === tab.id
                                    ? 'bg-primary text-secondary shadow-md'
                                    : 'bg-secondary text-primary hover:bg-primary/10'}`}
                        >
                            {tab.name}
                        </button>
                    ))}
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 md:gap-8 gap-4'>
                    {filteredWorks.map((work) => (
                        <div
                            className='block rounded-lg group relative overflow-hidden transform hover:-translate-y-2 transition-all duration-300 ease-in-out bg-primary'
                        >
                            <div className='relative overflow-hidden h-64'>
                                <img
                                    className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105'
                                    src={work.image}
                                    alt={work.title}
                                />
                            </div>
                            <div className='p-4 flex flex-col gap-2'>
                                <h3 className='text-xl font-semibold text-secondary line-clamp-1'>{work.title}</h3>
                                <p className='text-secondary/80 line-clamp-2 text-sm'>
                                    {work.description}
                                </p>
                                <a
                                    href={work.link}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    key={work.id}
                                    className='mt-2 inline-flex items-center text-secondary font-medium text-sm group-hover:underline'
                                >
                                    View Project
                                    <svg className='ml-1 w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 5l7 7-7 7' />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AllWorks;
