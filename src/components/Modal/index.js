import React from 'react';

const Modal = ({ onClose, currentProject }) => {
  const { name, description, index  } = currentProject;

  return (
    <div className="modalBackdrop container">
      <div className="modalContainer center teal darken-2 card">
        <h1 className="modalTitle">{name} </h1>
        <div className="center">
          <img  
          className="modalProject center card" 
          src={require(`../../assets/project-screenshots/${index}.png`).default} 
          alt="current-project" />
          <div className="links">
            <a href={currentProject.repo} target='_blank' rel='noreferrer' >Go To Project Repository!</a>
            <a href={currentProject.deployed} target='_blank' rel='noreferrer' >Go To Deployed Project!</a>
          </div>
        </div>
        <p className="modalText flow-text">
          {description}
        </p>
        <div className="center">
          <button className="modalButton center btn"  name="action" type="button" onClick={onClose}>
          <i className="material-icons right">send</i>Close this project
          </button>
          </div>
      </div>
    </div>
  );
};

// need to add scroll up effect for modal

export default Modal;