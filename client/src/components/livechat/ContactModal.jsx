import React, {useState} from 'react';
import {useContacts, ContactsProvider} from './contexts/ContactsProvider.jsx';
import './modal.scss';

const ContactModal = ({closeModal}) => {
  const [idText, setIdText] = useState('');
  const [nameText, setNameText] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    createContact(idText, nameText);
    closeModal();
  };

  const idListener = (event) => {
    const payload = event.target.value;
    setIdText(payload);
  };

  const nameListener = (event) => {
    const payload = event.target.value;
    setNameText(payload);
  };

  return (
    <div className="modalBackgroundDF">
      <div className="modalContainerDF">
        <div className="titleCloseBtn">
          <button onClick={() => {
            closeModal(false);
          }}>X</button>
        </div>
        <div className = "title">
          <h1>Create Contact</h1>
        </div>
        <div className="body">
          <p>ID: </p>
          <input
            type="text"
            placeholder="Enter Your ID"
            value={idText}
            onChange={idListener}>
          </input>
          <p>Name: </p>
          <input
            type="text"
            placeholder="Enter Your name"
            value={nameText}
            onChange={nameListener}>
          </input>
        </div>
        <div className="footer">
          <button onClick={() => {
            handleSubmit;
          }}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
