import { describe } from "node:test";

const projects = [
  {
    id: 1,
    title: 'Calendar',
    imageUrl: '/images/calendar.jpg',
    description: 'This is my pet project that Im currently working on — a calendar application for creating events. At the moment, it includes functionality for creating, deleting, and updating events, drag and drop, and viewing events by year, week, and month. Adaptive design. The functionality will continue to expand.For this project, I built the backend using Node.js, with MongoDB as the database, and Swagger documentation for testing API requests. The frontend is built with React and Redux.'
     ,
    repository:
      'https://github.com/HannaNikola/calendar',
    backendRepository:
      'https://github.com/HannaNikola/Calendar_back_end',
    swagger: 'https://swagger-calendar.onrender.com/api-docs/',
    githubUrl:
      'https://calendar-rho-seven.vercel.app/',
  },
  {
    id: 2,
    title: 'Calculates the daily amount of water',
    imageUrl: '/images/water.jpg',
    description:
      'Adaptive design, application that calculates the daily amount of water consumption. Swagger documentation available http://localhost:8080/api-docs/ ',
    repository:
      'https://github.com/VladyslavKshenin/rtfm_water_tracker_frontend',
    backendRepository:
      'href="//github.com/HannaNikola/rtfm_water_tracker_backend',
    swagger: 'http://localhost:8080/api-docs/',
    githubUrl:
      'https://vladyslavkshenin.github.io/rtfm_water_tracker_frontend/',
  },
  {
    id: 3,
    title: 'Tasty Treats',
    imageUrl: '/images/food-recepi.jpg',
    description: 'Adaptive design,  an application with cooking recipes.',
    repository: 'https://github.com/HannaNikola/project-team-12',
    githubUrl: 'https://tamia5.github.io/project-team-12/',
  },
  {
    id: 4,
    title: 'Food Delivery',
    imageUrl: '/images/food-delivery.jpg',
    description: 'Adaptive design, a food delivery application.',
    repository: 'https://github.com/HannaNikola/food-delivery-project',
    githubUrl: 'https://ingvar789.github.io/food-delivery-project/',
  },
  {
    id: 5,
    title: 'Rental car',
    imageUrl: '/images/rental-car.jpg',
    description: 'Desktop-only design for a rental camper application.',
    repository: 'https://github.com/HannaNikola/Rental_Car_Front_End',
    githubUrl: 'https://hannanikola.github.io/Rental_Car_Front_End/',
  },
  {
    id: 6,
    title: 'Trending movies today',
    imageUrl: '/images/movie.jpg',
    description:
      'Desktop-only design.The application shows trending movies for today. In the search, you can select movies, read comments, and also see the actors starring in the movie.',
    repository: 'https://github.com/HannaNikola/goit-react-hw-05-movies',
    githubUrl: 'https://hannanikola.github.io/goit-react-hw-05-movies/',
  },
];

export default projects;
