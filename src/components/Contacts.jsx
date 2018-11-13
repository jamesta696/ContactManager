import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from "../context";

class Contacts extends Component {
    // onRemoveContact = contact => {
    //     let contacts = [...this.state.contacts];
    //     contacts = contacts.filter(c => c.id !== contact.id);
    //     this.setState({ contacts });
    //     console.log(contact);
    // };

    render() {
        return (
            <Consumer>
                {value => {
                    const { contacts } = value;
                    return (
                        <React.Fragment>
                            {contacts.map(contact => (
                                <Contact key={contact.id} contact={contact} />
                            ))}
                        </React.Fragment>
                    );
                }}
            </Consumer>
        );
    }
}

export default Contacts;
