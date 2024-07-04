import { describe } from "node:test";

const projects = [
  {
    id: 1,
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
    id: 2,
    title: 'Tasty Treats',
    imageUrl: '/images/food-recepi.jpg',
    description: 'Adaptive design,  an application with cooking recipes.',
    repository: 'https://github.com/HannaNikola/project-team-12',
    githubUrl: 'https://tamia5.github.io/project-team-12/',
  },
  {
    id: 3,
    title: 'Food Delivery',
    imageUrl: '/images/food-delivery.jpg',
    description: 'Adaptive design, a food delivery application.',
    repository: 'https://github.com/HannaNikola/food-delivery-project',
    githubUrl: 'https://ingvar789.github.io/food-delivery-project/',
  },
  {
    id: 4,
    title: 'Rental car',
    imageUrl: '/images/rental-car.jpg',
    description: 'Desktop-only design for a rental camper application.',
    repository: 'https://github.com/HannaNikola/Rental_Car_Front_End',
    githubUrl: 'https://hannanikola.github.io/Rental_Car_Front_End/',
  },
  {
    id: 5,
    title: 'Trending movies today',
    imageUrl: '/images/movie.jpg',
    description:
      'Desktop-only design.The application shows trending movies for today. In the search, you can select movies, read comments, and also see the actors starring in the movie.',
    repository: 'https://github.com/HannaNikola/goit-react-hw-05-movies',
    githubUrl: 'https://hannanikola.github.io/goit-react-hw-05-movies/',
  },
];

export default projects;
