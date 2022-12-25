import moviewHome from './assets/moviewHome.png';
import anindexHome from './assets/anindexHome.png';
import binanceHome from './assets/binanceHome.png';
import todolistapp from './assets/todolistapp.png';
import connectHome from './assets/connectHome.png';
import connchat from './assets/connchat.png';
import planetProfile from './assets/planet-profile.png';

import nextjsLogo from './assets/nextjsLogo.svg';
import reactLogo from './assets/react.svg';
import reactQuery from './assets/reactQuery.svg';
import redux from './assets/redux.svg';
import tsLogo from './assets/tsLogo.svg';
import tailwindcss from './assets/tailwindcss.svg';
import mongodb from './assets/mongodb.svg';
import nodejs from './assets/nodejs.svg';
import expressjs from './assets/expressjs.svg';
import postman from './assets/postman.svg';
import postgresql from './assets/postgresql.png';

//Projects data
export const projects = [
    {
        title: 'Moview',
        techs: [
            {
                tech: 'React JS',
                color: 'cyan'
            },
            {
                tech: 'Tailwind CSS',
                color: 'sky'
            },
            {
                tech: 'React Query',
                color: 'rose'
            },
        ],
        imageUrl: moviewHome,
        content: 'Moview is a movie web application, fetching data from an external API called The MovieDB. I had so much fun building this website!',
        githubLink: 'https://github.com/limnixon03292001/Moview-app',
        liveDemoLink: 'https://moview-app-iota.vercel.app/'
    },
    {
        title: 'Anindex',
        techs: [
            {
                tech: 'React JS',
                color: 'cyan'
            },
            {
                tech: 'CSS',
                color: 'green'
            },
            {
                tech: 'React Query',
                color: 'rose'
            },
        ],
        imageUrl: anindexHome,
        content: 'Anindex is an anime web application, fetching data from an external API called Jikan API. This project was one of my goals to build.',
        githubLink: 'https://github.com/limnixon03292001/Anindex',
        liveDemoLink: 'https://anindex.vercel.app/'
    },
    {
        title: 'Connect',
        techs: [
            {
                tech: 'React JS',
                color: 'cyan'
            },
            {
                tech: 'Tailwind CSS',
                color: 'sky'
            },
            {
                tech: 'Redux',
                color: 'violet'
            },
            {
                tech: 'MongoDB',
                color: 'green'
            },
            {
                tech: 'Express JS',
                color: 'teal'
            },
            {
                tech: 'Node JS',
                color: 'emerald'
            },
        ],
        imageUrl: connectHome,
        content: 'This is one of my dream project, building a social media application just like facebook. Connect is a full stack social media application. Test account below.',
        testAccount: {
            email: 'Email: test123@gmail.com',
            password: 'Password: 123123',
        },
        githubLink: 'https://github.com/limnixon03292001/connect-mern',
        liveDemoLink: 'https://connect-app.onrender.com/'
    },
    {
        title: 'PLANeT',
        techs: [
            {
                tech: 'React JS',
                color: 'cyan'
            },
            {
                tech: 'Tailwind CSS',
                color: 'sky'
            },
            {
                tech: 'React Query',
                color: 'violet'
            },
            {
                tech: 'Socket.io',
                color: 'yellow'
            },
            {
                tech: 'PostgreSQL',
                color: 'green'
            },
            {
                tech: 'Express JS',
                color: 'teal'
            },
            {
                tech: 'Node JS',
                color: 'emerald'
            },
        ],
        imageUrl: planetProfile,
        content: 'An e-commerce / social media platform, that let the user sell plants, post and send a message in realtime! Test account below.',
        testAccount: {
            email: 'Email: test123@gmail.com',
            password: 'Password: 123123',
        },
        githubLink: 'https://github.com/limnixon03292001/planet-capstone',
        liveDemoLink: 'https://planet-capstone-production.up.railway.app/'
    },
    // {
    //     title: 'Conn Chat',
    //     techs: [
    //         {
    //             tech: 'React JS',
    //             color: 'cyan'
    //         },
    //         {
    //             tech: 'Tailwind CSS',
    //             color: 'sky'
    //         },
    //         {
    //             tech: 'React Query',
    //             color: 'violet'
    //         },
    //         {
    //             tech: 'Mongo DB',
    //             color: 'green'
    //         },
    //         {
    //             tech: 'Express JS',
    //             color: 'teal'
    //         },
    //         {
    //             tech: 'Node JS',
    //             color: 'emerald'
    //         },
    //         {
    //             tech: 'Socket.io',
    //             color: 'yellow'
    //         },
    //     ],
    //     imageUrl: connchat,
    //     content: 'Conn Chat is a full stack messaging web application, using Socket.io to send messages in real time! Test account below.',
    //      testAccount: {
    //         email: 'Email: test123@gmail.com',
    //         password: 'Password: 123123',
    //     },
    //     githubLink: 'https://github.com/limnixon03292001/conn-chat-app',
    //     liveDemoLink: 'http://conn-chat-app.herokuapp.com/'
    // },
    {
        title: 'Binance Clone',
        techs: [
            {
                tech: 'React JS',
                color: 'cyan'
            },
            {
                tech: 'Tailwind CSS',
                color: 'sky'
            },
        ],
        imageUrl: binanceHome,
        content: 'I built this website to enhance and practice my skills to Tailwind CSS.',
        githubLink: 'https://github.com/limnixon03292001/Binance-clone',
        liveDemoLink: 'https://binance-clone-pi.vercel.app/'
    },
    {
        title: 'Todo List',
        techs: [
            {
                tech: 'React JS',
                color: 'cyan'
            },
            {
                tech: 'CSS',
                color: 'green'
            },
        ],
        imageUrl: todolistapp,
        content: 'A simple todo list application, this is one of my first project in React JS. All the data are stored in local storage.',
        githubLink: 'https://github.com/limnixon03292001/todolist-app',
        liveDemoLink: 'https://todolist-app-phi.vercel.app/'
    },
  
]

//Skills data
export const skills = [
    {
        svgUrl: reactLogo,
        title: 'React JS',
        color: 'rgb(0, 216, 255)',
    },
    // {
    //     svgUrl: nextjsLogo,
    //     title: 'Next JS'
    // },
    {
        svgUrl: reactQuery,
        title: 'React Query',
        color: 'rgb(255, 65, 84)',
    },
    {
        svgUrl: redux,
        title: 'Redux',
        color: 'violet',
    },
    {
        svgUrl: tsLogo,
        title: 'Typescript',
        color: 'rgb(13, 129, 207)',
    },
    {
        svgUrl: tailwindcss,
        title: 'Tailwind CSS',
        color: 'rgb(56, 189, 248)',
    },
    {
        svgUrl: postgresql,
        title: 'PostgreSQL',
        color: 'rgb(51, 103, 145)',
    },
    {
        svgUrl: mongodb,
        title: 'Mongo DB',
        color: 'rgb(0, 237, 100)',
    },
    {
        svgUrl: expressjs,
        title: 'Express JS',
        color: 'white',
    },
    {
        svgUrl: nodejs,
        title: 'Node JS',
        color: 'rgb(83, 158, 67)',
    },
    {
        svgUrl: postman,
        title: 'Postman',
        color: 'rgb(255, 108, 55)',
    },
]