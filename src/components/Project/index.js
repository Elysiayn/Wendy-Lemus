import React, { useState } from 'react';
import Modal from '../Modal';

const ProjectList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      name: 'Something Special',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      // url: 
    },
    {
      name: 'Dungeons End',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      // url: 
    },
    {
      name: 'Photo Port',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      // url: 
    },
    {
      name: 'Pizza Hunt',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      // url: 
    },
    {
      name: 'Weather Dashboard',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      // url: 
    },
    {
      name: 'Run Buddy',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      // url: 
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
        ))}
      </div>
    </div>
  );
};

export default ProjectList;