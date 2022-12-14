import React from 'react';
import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/SearcFilter';
import { nanoid } from 'nanoid';

export class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
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
  };

  removeContact = event => {
    const { contacts } = this.state;
    const contactId = event.target.closest('LI').id;

    this.setState({
      contacts: contacts.filter(el => el.id != contactId),
    });
  };

  handleSearch = event => {
    const { target } = event;
    this.setState({
      filter: target.value,
    });
  };

  render() {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase().trim();

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
        <ContactForm onSubmit={this.addContact} />
        <div>
          <h1>Contacts</h1>
          <Filter
            searchItemHandler={this.handleSearch}
            value={normalizedFilter}
          />
          <ContactList
            contactsArray={contacts}
            filterKey={normalizedFilter}
            removeItem={this.removeContact}
          />
        </div>
      </div>
    );
  }
}
