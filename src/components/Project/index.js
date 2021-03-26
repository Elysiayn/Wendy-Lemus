import React, { useState } from 'react';
import Modal from '../Modal';

function ProjectList() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      name: 'Something Special',
      description: 'A community driven forum dedicated to finding local event related goods created with MySQL.',
      repo: 'https://github.com/Elysiayn/something-special',
      deployed: 'https://cmnw-something-special.herokuapp.com/login'
    },
    {
      name: 'Dungeons End',
      description: 'A combat oriented game based on Dungeons & Dragons developed in JavaScript, CSS and HTML.',
      repo: 'https://github.com/Elysiayn/dungeons-end',
      deployed: 'https://elysiayn.github.io/dungeons-end/'
    },
    {
      name: 'Photo Port',
      description: 'Mock profile created with react.',
      repo: 'https://github.com/Elysiayn/photo-port',
      deployed: 'https://elysiayn.github.io/photo-port/'
    },
    {
      name: 'Pizza Hunt',
      description: 'Pizza themed blog created utilizing MongoDB and Mongoose.',
      repo: 'https://github.com/Elysiayn/pizza-hunt',
      deployed: 'https://fierce-springs-35562.herokuapp.com/'
    },
    {
      name: 'Weather Dashboard',
      description: 'A weather application utilizing an API to forcast weather near user.',
      repo: 'https://github.com/Elysiayn/weather-dashboard',
      deployed: 'https://elysiayn.github.io/weather-dashboard/'
    },
    {
      name: 'Run Buddy',
      description: 'Mock fitness site created with CSS and HTML.',
      repo: 'https://github.com/Elysiayn/run-buddy',
      deployed:'https://elysiayn.github.io/run-buddy/'
    },
    
  ];

  // useEffect(() => {
  //   window.scrollTo(0, 0)
  // }, [])

  const [currentProject, setCurrentProject] = useState();

  const toggleModal = (image, i) => {
    setCurrentProject({ ...image, index: i });
    setIsModalOpen(!isModalOpen);
  }

  return (
    <div className="portfolio about row">
      {isModalOpen && <Modal currentProject={currentProject} onClose={toggleModal} />}
      <div className="container center">
        {projects.map((image, i) => (
          <div className="col s12 m6 l4">
            <img
              src={require(`../../assets/project-screenshots/${i}.png`).default}
              alt={image.name}
              className="img-thumbnail card"
              onClick={() => toggleModal(image, i)}
              key={image.name}
              
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;