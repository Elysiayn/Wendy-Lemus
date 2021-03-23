import React, { useState } from 'react';
import Modal from '../Modal';

const ProjectList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      name: 'Something Special',
      description: 'A community driven forum dedicated to finding local event related goods created with MySQL.',
      url: 'https://github.com/Elysiayn/something-special'
      // url: 'https://cmnw-something-special.herokuapp.com/login'
    },
    {
      name: 'Dungeons End',
      description: 'A combat oriented game based on Dungeons & Dragons developed in JavaScript, CSS and HTML.',
      url: 'https://github.com/Elysiayn/dungeons-end'
      // url: 'https://elysiayn.github.io/dungeons-end/'
    },
    {
      name: 'Photo Port',
      description: 'Mock profile created with react.',
      url: 'https://github.com/Elysiayn/photo-port'
      // url: 'https://elysiayn.github.io/photo-port/'
    },
    {
      name: 'Pizza Hunt',
      description: 'Pizza themed blog created utilizing MongoDB and Mongoose.',
      url: 'https://github.com/Elysiayn/pizza-hunt'
      // url: 'https://fierce-springs-35562.herokuapp.com/'
    },
    {
      name: 'Weather Dashboard',
      description: 'A weather application utilizing an API to forcast weather near user.',
      url: 'https://github.com/Elysiayn/weather-dashboard'
      // url: 'https://elysiayn.github.io/weather-dashboard/'
    },
    {
      name: 'Run Buddy',
      description: 'Mock fitness site created with CSS and HTML.',
      url: 'https://github.com/Elysiayn/run-buddy'
      // url:'https://elysiayn.github.io/run-buddy/'
    },
    
  ];

  const [currentProject, setCurrentProject] = useState();

  const toggleModal = (image, i) => {
    setCurrentProject({ ...image, index: i });
    setIsModalOpen(!isModalOpen);
  }

  return (
    <div className="portfolio about row">
      {isModalOpen && <Modal onClose={toggleModal} currentProject={currentProject} />}
      <div className="container center">
        {projects.map((image, i) => (
          <img
            src={require(`../../assets/project-screenshots/${i}.png`).default}
            alt={image.name}
            className="img-thumbnail card col s12 m6 l4"
            onClick={() => toggleModal(image, i)}
            key={image.name}
            />
          // <a href={image.url} target='_blank' rel='noreferrer' className='dest-links'>Go To Project </a>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;