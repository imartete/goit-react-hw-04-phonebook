import React from 'react';
import { Section } from 'components/Section';
import { ContactForm } from 'components/ContactForm';
import { nanoid } from 'nanoid';
import { useState } from 'react';

const INITIAL_STATE = {
  filter: '',
  name: '',
  number: '',
};
export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  addContact = ({ name, number }) => {
    const { contacts } = this.state;
    const existingContact = contacts.some(contact => contact.name === name);

    if (!existingContact) {
      this.setState({
        contacts: [...contacts, { name, number, id: nanoid() }],
      });
    } else {
      alert(`${name} is alredy in contacts.`);
    }
    // TODO прокинути з сабміту дані в параментри з компоненту форми
  };

  handleChange = event => {
    const { target, currentTarget } = event;
    this.setState({
      [target.name]: target.value,
    });
  };

  handleSearch = event => {
    const { target } = event;
    this.setState({
      filter: target.value,
    });
    console.log(this.state.filter);
  };

  handleSubmit = event => {
    event.preventDefault();
    const { currentTarget } = event;
    const form = currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    this.addContact({ name, number });
    console.log(this.state);
    // this.reset();
  };

  removeContact = event => {
    const { contacts } = this.state;
    const contactId = event.target.closest('LI').id;
    console.dir(contactId);

    this.setState({
      contacts: contacts.filter(el => el.id != contactId),
    });
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 24,
          color: '#010101',
        }}
      >
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleChange}
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
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
        <div>
          <h1>Contacts</h1>
          <input
            type="search"
            name="search"
            onChange={this.handleSearch}
            value={filter}
            // onSubmit={this.test}
          ></input>
          <ul>
            {contacts
              .filter(contact =>
                contact.name.toLowerCase().includes(normalizedFilter)
              )
              .map(el => (
                <li key={el.id} data-id={el.id} id={el.id}>
                  {el.name}: {el.number}
                  <button type="remove" onClick={this.removeContact}>
                    Delete
                  </button>
                </li>
              ))}
          </ul>
        </div>
        {/* <Section title=""></Section> */}
        <div></div>
      </div>
    );
  }
}
