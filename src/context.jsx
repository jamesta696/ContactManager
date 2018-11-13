import React, { Component } from "react";
import uuid from "uuid";

const Context = React.createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case "DELETE_CONTACT":
            return {
                ...state,
                contacts: state.contacts.filter(c => c.id !== action.payload)
            };
        case "ADD_CONTACT":
            return {
                ...state,
                contacts: [action.payload, ...state.contacts]
            };
        default:
            return state;
    }
};

export class Provider extends Component {
    state = {
        contacts: [
            {
                id: uuid(),
                name: "John Doe",
                email: "johndoe@gmail.com",
                phone: "555-555-5555"
            },
            {
                id: uuid(),
                name: "Mary Sanders",
                email: "msanders@gmail.com",
                phone: "333-333-3333"
            },
            {
                id: uuid(),
                name: "Rob Smith",
                email: "rsmith@gmail.com",
                phone: "222-222-2222"
            }
        ],
        dispatch: action => this.setState(state => reducer(state, action))
    };
    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

export const Consumer = Context.Consumer;
