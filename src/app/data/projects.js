import { describe } from "node:test";

const projects = [
  {
    id: 1,
    title: 'Calculates the daily amount of water',
    imageUrl: '/project1.png',
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
    imageUrl: '/project2.png',
    description: 'Adaptive design,  an application with cooking recipes.',
    repository: 'https://github.com/HannaNikola/project-team-12',
    githubUrl: 'https://tamia5.github.io/project-team-12/',
  },
  {
    id: 3,
    title: 'Food Delivery',
    imageUrl: '/project3.png',
    description: 'Adaptive design, a food delivery application.',
    repository: 'https://github.com/HannaNikola/food-delivery-project',
    githubUrl: 'https://ingvar789.github.io/food-delivery-project/',
  },
  {
    id: 4,
    title: 'Rental car',
    imageUrl: '/project4.png',
    description: 'Desktop-only design for a rental camper application.',
    repository: 'https://github.com/HannaNikola/Rental_Car_Front_End',
    githubUrl: 'https://hannanikola.github.io/Rental_Car_Front_End/',
  },
  // {
  //   id: 5,
  //   title: 'WebStudio',
  //   imageUrl: '/project5.png',
  //   description: 'It was my first project, Adaptive design.',
  //   repository: 'https://hannanikola.github.io/goit-markup-hw-08/',
  //   githubUrl: 'https://hannanikola.github.io/goit-markup-hw-08/',
  // },
];

export default projects;
