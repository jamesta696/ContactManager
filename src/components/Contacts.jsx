import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
    state = {
        contacts: [
            {
                id: 1,
                name: "John Doe",
                email: "johndoe@gmail.com",
                phone: "555-555-5555"
            },
            {
                id: 2,
                name: "Mary Sanders",
                email: "msanders@gmail.com",
                phone: "333-333-3333"
            },
            {
                id: 3,
                name: "Rob Smith",
                email: "rsmith@gmail.com",
                phone: "222-222-2222"
            }
        ]
    };

    onRemoveContact = contact => {
        let contacts = [...this.state.contacts];
        contacts = contacts.filter(c => c.id !== contact.id);
        this.setState({ contacts });
        console.log(contact);
    };

    render() {
        const { contacts } = this.state;
        return (
            <React.Fragment>
                {contacts.map(contact => (
                    <Contact
                        key={contact.id}
                        contact={contact}
                        onDeleteContact={() => this.onRemoveContact(contact)}
                    />
                ))}
            </React.Fragment>
        );
    }
}

export default Contacts;
