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

export default Modal;