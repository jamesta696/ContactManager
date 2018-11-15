import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from "../../context";

class Contacts extends Component {
    render() {
        return (
            <Consumer>
                {value => {
                    const { contacts } = value;
                    return (
                        <React.Fragment>
                            <div className="card mt-3">
                                <div className="card-header">
                                    <i className="fas fa-users" /> Contacts List
                                </div>
                                <div className="card-body">
                                    {contacts.map(contact => (
                                        <Contact
                                            key={contact.id}
                                            contact={contact}
                                        />
                                    ))}
                                </div>
                            </div>
                        </React.Fragment>
                    );
                }}
            </Consumer>
        );
    }
}

export default Contacts;
