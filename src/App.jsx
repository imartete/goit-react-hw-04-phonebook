import React from 'react';
import { Section } from 'components/Section';
import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/SearcFilter';
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
  };

  handleSubmit = event => {
    event.preventDefault();
    const { currentTarget } = event;
    const form = currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    this.addContact({ name, number });
  };

  removeContact = event => {
    const { contacts } = this.state;
    const contactId = event.target.closest('LI').id;

    this.setState({
      contacts: contacts.filter(el => el.id != contactId),
    });
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
        <h1>Phonebook</h1>
        <ContactForm
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
        />
        <div>
          <h1>Contacts</h1>
          <Filter
            searchItemHandler={this.handleSearch}
            value={normalizedFilter}
          />
          <ContactList
            contactsArray={contacts}
            filter={filter}
            removeItem={this.removeContact}
          />
        </div>
      </div>
    );
  }
}
