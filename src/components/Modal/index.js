import React from 'react';

const Modal = ({ onClose, currentProject }) => {
  const { name, description, index  } = currentProject;

  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle">{name} </h3>
        <img className="modalProject" src={require(`../../assets/project-screenshots/${index}.png`).default} alt="current-project" />
        <p className="projectText">
          {description}
        </p>
        <button className="modalButton" type="button" onClick={onClose}>
          Close this project
        </button>
      </div>
    </div>
  );
};

export default Modal;