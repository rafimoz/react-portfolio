import React, { useState } from 'react';

const AllWorks = () => {
    // Organize your work data into categories, matching the existing workData structure
    const workDataCategorized = {
        'all': [
            {
                id: '01',
                image: 'https://res.cloudinary.com/dhlh7av5k/image/upload/v1750406480/pawambhbvcjck2dlel3p.jpg',
                title: 'Basha Bhara Hobe',
                link: 'https://basha-bhara-hobe.vercel.app/',
                description: 'A housing rental platform built with the MERN stack, designed to provide a user-friendly experience for finding and listing rental properties.',
            },
            {
                id: '02',
                image: 'https://res.cloudinary.com/dhlh7av5k/image/upload/v1733574498/carenavi_ox81ff.jpg',
                title: 'CareNavi',
                link: 'https://carenavi-healthcare.vercel.app/',
                description: 'A comprehensive healthcare management platform, developed using MERN stack technology, focused on enhancing user experience in health services.',
            },
            {
                id: '03',
                image: 'https://res.cloudinary.com/dhlh7av5k/image/upload/v1740497393/157_1x_shots_so_aswwzm.jpg',
                title: 'Lunch Box',
                link: 'https://github.com/rafimoz/office-lunch-menu-management',
                description: 'An efficient office lunch menu management platform, built with the MERN stack to streamline meal planning and ordering.',
            },
            {
                id: '04',
                image: 'https://res.cloudinary.com/dhlh7av5k/image/upload/v1740497395/209shots_so_osrv34.jpg',
                title: 'Modern Portfolio',
                link: 'https://dribbble.com/shots/25642292-Modern-Portfolio-Design',
                description: 'A cutting-edge personal portfolio, inspired by 3D design principles, showcasing a modern and interactive user experience.',
            },
            {
                id: '05',
                image: 'https://res.cloudinary.com/dhlh7av5k/image/upload/v1733574510/uidesign_pc8s8o.jpg',
                title: 'Photobooth',
                link: 'https://dribbble.com/shots/25737179-Personal-Portfolio-Photographer',
                description: 'A stylish portfolio for photographers, crafted with React and Tailwind CSS, designed to beautifully showcase visual works.',
            },
        ],
        'ui-ux': [
            // Populate with your actual UI/UX projects
            {
                id: '04', // Reusing IDs for example, ensure unique if truly separate
                image: 'https://res.cloudinary.com/dhlh7av5k/image/upload/v1740497395/209shots_so_osrv34.jpg',
                title: 'Modern Portfolio UI',
                link: 'https://dribbble.com/shots/25642292-Modern-Portfolio-Design',
                description: 'Focus on the UI/UX aspects of a modern, interactive portfolio design.',
            },
            {
                id: '05',
                image: 'https://res.cloudinary.com/dhlh7av5k/image/upload/v1733574510/uidesign_pc8s8o.jpg',
                title: 'Photobooth App UX',
                link: 'https://dribbble.com/shots/25737179-Personal-Portfolio-Photographer',
                description: 'User experience design for a photographer\'s portfolio application, emphasizing ease of use and visual flow.',
            },
        ],
        'web-applications': [
            // Populate with your actual Web Application projects
            {
                id: '01',
                image: 'https://res.cloudinary.com/dhlh7av5k/image/upload/v1750406480/pawambhbvcjck2dlel3p.jpg',
                title: 'Basha Bhara Hobe (App)',
                link: 'https://basha-bhara-hobe.vercel.app/',
                description: 'A full-stack web application for housing rentals, built with MERN stack.',
            },
            {
                id: '02',
                image: 'https://res.cloudinary.com/dhlh7av5k/image/upload/v1733574498/carenavi_ox81ff.jpg',
                title: 'CareNavi (App)',
                link: 'https://carenavi-healthcare.vercel.app/',
                description: 'A MERN stack web application for healthcare management services.',
            },
            {
                id: '03',
                image: 'https://res.cloudinary.com/dhlh7av5k/image/upload/v1740497393/157_1x_shots_so_aswwzm.jpg',
                title: 'Lunch Box (App)',
                link: 'https://github.com/rafimoz/office-lunch-menu-management',
                description: 'A web application for office lunch menu management, using MERN stack.',
            },
        ],
        'graphic-designs': [
            // Populate with your actual Graphic Design projects
            {
                id: '06',
                image: 'https://res.cloudinary.com/dhlh7av5k/image/upload/v1740497393/157_1x_shots_so_aswwzm.jpg', // Placeholder image
                title: 'Brand Logo Design',
                link: '#', // Replace with actual link
                description: 'A project focusing on custom logo design and brand guidelines.',
            },
            {
                id: '07',
                image: 'https://res.cloudinary.com/dhlh7av5k/image/upload/v1733574498/carenavi_ox81ff.jpg', // Placeholder image
                title: 'Infographic Series',
                link: '#', // Replace with actual link
                description: 'Design and illustration of data-driven infographics for various topics.',
            },
        ],
    };

    // Initialize with 'all' to show all projects by default
    const [activeTab, setActiveTab] = useState('all');

    const tabs = [
        { id: 'all', name: 'All Works' },
        { id: 'web-applications', name: 'Web Applications' },
        { id: 'ui-ux', name: 'UI/UX Designs' },
        { id: 'graphic-designs', name: 'Graphic Designs' },
    ];

    return (
        <section className='py-10 px-4 sm:px-8'>
            <div className='max-w-7xl mx-auto'>
                <h1 className='text-5xl sm:text-7xl font-bodoni text-center text-primary mb-12 leading-tight'>
                   -Projects-
                </h1>

                {/* Tab Navigation */}
                <div className='flex gap-4 sm:justify-center mb-8 overflow-x-auto whitespace-nowrap scrollbar-hide'>
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-4 py-2 sm:text-md text-sm rounded-lg font-aboreto transition-all duration-300 ease-in-out
                                ${activeTab === tab.id
                                    ? 'bg-primary text-secondary shadow-md' // Active tab uses your `primary` background and `secondary` text
                                    : 'bg-secondary text-primary hover:bg-primary/10' // Inactive tab uses `secondary` background, `primary` text, and a subtle hover
                                }`}
                        >
                            {tab.name}
                        </button>
                    ))}
                </div>

                {/* Project Grid based on Active Tab */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {workDataCategorized[activeTab].map((work) => (
                        <a
                            href={work.link}
                            target='_blank'
                            rel='noopener noreferrer'
                            key={work.id}
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
                                <h3 className='text-xl font-semibold text-secondary'>{work.title}</h3>
                                {/* Description text color using secondary/80 */}
                                <p className='text-secondary/80 line-clamp-2 text-sm'>
                                    {work.description}
                                </p>
                                {/* "View Project" link color updated to text-secondary */}
                                <span className='mt-2 inline-flex items-center text-secondary font-medium text-sm group-hover:underline'>
                                    View Project
                                    <svg className='ml-1 w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 5l7 7-7 7'></path>
                                    </svg>
                                </span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AllWorks;