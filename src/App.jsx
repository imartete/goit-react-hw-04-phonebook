import React from 'react';
import { Section } from 'components/Section/Section';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/SearchFilter/SearcFilter';
import { nanoid } from 'nanoid';

export class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const { contacts } = this.state;
    const existingContact = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (!existingContact) {
      this.setState({
        contacts: [{ name, number, id: nanoid() }, ...contacts],
      });
      return;
    }
    alert(`${name} is alredy in contacts.`);
  };

  removeContact = contactId => {
    this.setState({
      contacts: this.state.contacts.filter(el => el.id !== contactId),
    });
  };

  handleSearch = value => {
    this.setState({
      filter: value,
    });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase().trim();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const visibleContacts = this.getVisibleContacts();

    return (
      <div>
        <Section title={'Phonebook'}>
          <ContactForm onSubmit={this.addContact} />
        </Section>
        <Section title={'Contacts'}>
          <Filter
            searchItemHandler={this.handleSearch}
            value={this.state.filter}
          />
          <ContactList
            contacts={visibleContacts}
            removeItem={this.removeContact}
          />
        </Section>
      </div>
    );
  }
}
