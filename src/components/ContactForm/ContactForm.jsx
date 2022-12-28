import PropTypes from 'prop-types';
import React from 'react';
import { useState } from 'react';
import './ContactForm.modules.css';

export function ContactForm({ onSubmit }) {
  const [contact, setContact] = useState({ name: '', number: '' });

  function handleChange(event) {
    const { target } = event;
    setContact(prevContact => ({
      ...prevContact,
      [target.name]: target.value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const { name, number } = contact;
    onSubmit({ name, number });
    event.currentTarget.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
        />
      </label>
      <button type="submit" className="button-submit">
        Add contact
      </button>
    </form>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
