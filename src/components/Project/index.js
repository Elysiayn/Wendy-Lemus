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
    <div className="container row">
      {isModalOpen && <Modal onClose={toggleModal} currentProject={currentProject} />}
      <div className="flex-row project-div">
        {projects.map((image, i) => (
          <img
            src={require(`../../assets/project-screenshots/${i}.png`).default}
            alt={image.name}
            className="img-thumbnail mx-1 modal-img"
            onClick={() => toggleModal(image, i)}
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;