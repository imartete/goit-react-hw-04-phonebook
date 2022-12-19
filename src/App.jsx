import React from 'react';
import { Section } from 'components/Section/Section';
import { Notification } from 'components/Notification/Notification';
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

  componentDidUpdate = prevState => {
    if (this.state.contacts != prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  };

  componentDidMount = () => {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (parsedContacts) this.setState({ contacts: parsedContacts });
  };

  render() {
    const visibleContacts = this.getVisibleContacts();
    const { contacts } = this.state;

    return (
      <div>
        <Section title={'Phonebook'}>
          <ContactForm onSubmit={this.addContact} />
        </Section>
        <Section title={'Contacts'}>
          {contacts.length ? (
            <>
              <Filter
                searchItemHandler={this.handleSearch}
                value={this.state.filter}
              />
              <ContactList
                contacts={visibleContacts}
                removeItem={this.removeContact}
              />
            </>
          ) : (
            <Notification message="No contacts added" />
          )}
        </Section>
      </div>
    );
  }
}
