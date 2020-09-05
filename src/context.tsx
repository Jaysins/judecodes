import { createContext } from 'react';
import React from "react";
import { FiCode, FiStar } from "react-icons/fi";

const AppContext = createContext({
    name: 'Jason Nwakaeze',
    dob: '1/3/1998',
    address: {
        town: 'Ikeja',
        state: 'Lagos',
        country: 'Nigeria',
    },
    phone: '+2349083551998',
    email: 'jaysinscars@gmail.com',
    social: {
        facebook: 'https://www.facebook.com/jaysins.scars',
        // twitter: 'https://www.twitter.com/jaysins',
        // behance: 'https://behance.net/judecodes',
        instagram: 'https://www.instagram.com/jaysinscars/',
        github: 'https://github.com/Jaysins/',
        linkedIn: 'https://www.linkedin.com/in/jaysins/'
    },
    avatar: './assets/images/avatarJay.jpeg',
    cover: './assets/images/profile-bg.jpeg',
    cv: './assets/documents/JasonCv.pdf',
    resume: {
        experience: [
            {
                present: true,
                date: '2019 - 2020',
                title: 'Software Developer',
                subtitle: 'Sendbox Logistics Service',
                details: 'Develop and implement new software programs, Maintain and improve the performance of existing software, Recommend improvements to existing software programs as necessary'
            },
            {
                present: false,
                date: '2018 - 2019',
                title: 'Junior Web Developer',
                subtitle: 'GCLHub',
                details: 'Design, build, and maintain web sites using authoring or scripting languages, content creation tools, management tools, and digital media'
            },
            {
                present: false,
                date: '2016 - 2017',
                title: 'Junior Web Designer',
                subtitle: 'Le Citoyen University',
                details: 'Design, build, and maintain web sites using authoring or scripting languages, content creation tools, management tools, and digital media'
            },
            {
                present: false,
                date: '06.2017 - 10.2017',
                title: 'Software Developer Intern',
                subtitle: 'Trussnet Limited',
                details: 'Perform or direct web site updates, Back up files from web sites to local directories for instant recovery in case of problems.'
            },
        ],
        education: [
            {
                present: false,
                date: '2015 - 2018',
                title: 'Le Citoyen University',
                subtitle: 'Cotonou, Benin Republic',
                details: 'Bachelor of Science (Computer Science)'
            },
            {
                present: false,
                date: '2017',
                title: 'National Institute of Information Technology (NIIT)',
                subtitle: 'Lagos, Nigeria',
                details: 'CERTIFICATE IN EXCEL & TOOLS'
            },
        ]
    },
    skills: {
        code: [
            { title: 'Python', rate: 90 },
            { title: 'HTML5 / CSS3', rate: 90 },
            { title: 'Javascript', rate: 85 },
            { title: 'Git', rate: 80 },
            { title: 'MongoDB', rate: 80 },
            { title: 'GraphQL', rate: 70 },
            { title: 'React', rate: 70 },
            { title: 'NodeJS / Express', rate: 40 },
            { title: 'React Native', rate: 40 },
            { title: 'Flutter', rate: 40 },
        ],
    },
    tags: [
        'Software Developer',
        'Backend Developer',
        'Cross-Platform Developer',
    ],
    about: `A backend developer from Lagos, Nigeria. I enjoy building everything from small sites to rich interactive cross platform mobile/web apps. If you are a business seeking a web presence or an employer looking to hire, you can get in touch with me.`,
    services: [
        {
            title: 'Web Development',
            description: `Modern and mobile-ready website that will help you reach all of your marketing.`,
            icon: <FiCode />,
        },
        {
            title: 'Web Scraping Applications',
            description: `Pulling large amount of data from websites which can then be helpful in various real-world processes such as price comparison, job listings, research and development and much more. `,
            icon: <FiStar />,
        },
        {
            title: 'Business Application',
            description: `From ERP to e-commerce systems`,
            icon: <FiStar />,
        }
    ],
    portfolio: {
        loaded: false,
        external: [],
        local: [
            {
                category: 'web',
                title: 'Taximoni',
                image: './assets/images/portfolio/web/taximoni.jpg',
                link: 'https://taximoni.com'
            },
            {
                category: 'web',
                title: 'Automart',
                image: './assets/images/portfolio/web/automart.jpg',
                link: 'https://automartt.herokuapp.com'
            },
            {
                category: 'web',
                title: 'Votes Hub',
                image: './assets/images/portfolio/web/voteshub.jpg',
                link: 'https://voteshub.herokuapp.com'
            },
            {
                category: 'web',
                title: 'Estam University',
                image: './assets/images/portfolio/web/estam.jpg',
                link: 'https://estamuni.net'
            },
            {
                category: 'web',
                title: 'Pricebuddy',
                image: './assets/images/portfolio/web/pricebuddy.jpg',
                link: 'https://pricebuddie.herokuapp.com'
            },
            {
                category: 'web',
                title: 'ACHIV',
                image: './assets/images/portfolio/web/achiv.jpg',
                link: 'https://achiv.org'
            },
            {
                category: 'web',
                title: 'ICRAD',
                image: './assets/images/portfolio/web/icrad.png',
                link: 'https://icradng.org'
            },
            {
                category: 'web',
                title: 'Le Citoyen University',
                image: './assets/images/portfolio/web/lcu.jpg',
                link: 'http://lecitoyenuniversity.com'
            },
        ]
    }
});

export default AppContext;
