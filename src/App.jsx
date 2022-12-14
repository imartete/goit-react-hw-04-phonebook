import React from 'react';
import { Section } from 'components/Section';
import { ContactForm } from 'components/ContactForm';
import { nanoid } from 'nanoid';
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

  handleSubmit = event => {
    event.preventDefault();
    const { currentTarget } = event;
    const { contacts } = this.state;
    const form = currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    this.setState({
      contacts: [...contacts, { name, number, id: nanoid() }],
    });
  };

  handleChange = event => {};

  render() {
    const { contacts } = this.state;
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
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
        <div>
          <h1>Contacts</h1>
          <input
            type="search"
            name="search"
            onSubmit={this.handleChange}
          ></input>
          <ul>
            {contacts.map(el => (
              <li key={el.id}>
                {el.name}: {el.number}
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
