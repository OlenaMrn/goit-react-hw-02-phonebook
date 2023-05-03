import React from 'react';

export const ContactList = ({ contacts, onRemoveContact }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          <p>{contact.name}</p>
          <p>{contact.number}</p>
          <button onClick={() => onRemoveContact(contact.id)}>Remove</button>
        </li>
      ))}
    </ul>
  );
};
