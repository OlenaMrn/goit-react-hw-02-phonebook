import React from 'react';
import css from './ContactList.module.css';

export const ContactList = ({ contacts, onRemoveContact }) => {
  return (
    <ul className={css.list}>
      {contacts.map(contact => (
        <li className={css.item} key={contact.id}>
          <p className={css.contact_name}>{contact.name}</p>
          <p className={css.contact_number}>{contact.number}</p>
          <button
            className={css.button}
            onClick={() => onRemoveContact(contact.id)}
          >
            X
          </button>
        </li>
      ))}
    </ul>
  );
};
