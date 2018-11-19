import React, { Component } from "react";
import { Consumer } from "../../context";
import TextInputGroup from "../layouts/TextInputGroup";
import axios from "axios";

class EditContact extends Component {
    state = {
        name: "",
        email: "",
        phone: "",
        errors: {}
    };

    async componentDidMount() {
        const { id } = this.props.match.params;
        const response = await axios.get(
            `https://jsonplaceholder.typicode.com/users/${id}`
        );
        const contact = response.data;

        this.setState({
            name: contact.name,
            email: contact.email,
            phone: contact.phone
        });
    }

    onFormSubmit = async (dispatch, e) => {
        e.preventDefault(e);
        if (!this.handlePhoneValidation()) {
            alert("Enter a valid phone number");
            return false;
        }

        const { name, email, phone } = this.state;
        const { id } = this.props.match.params;
        const updateContact = {
            name,
            email,
            phone
        };

        const response = await axios.put(
            `https://jsonplaceholder.typicode.com/users/${id}`,
            updateContact
        );

        dispatch({ type: "UPDATE_CONTACT", payload: response.data });

        this.setState({
            name: "",
            email: "",
            phone: "",
            errors: {}
        });
        console.log("Updated Contact -", updateContact);
        this.props.history.push("/");
    };

    onInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handlePhoneValidation = e => {
        let fields = this.state;
        let errors = {};
        let formIsValid = true;
        var phoneno = /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/i;

        if (!fields["phone"].match(phoneno)) {
            formIsValid = false;
            errors["phone"] = "Only Numbers";
        }

        this.setState({ errors: errors });
        return formIsValid;
    };

    render() {
        const { name, email, phone } = this.state;

        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div className="card mb-3 mt-3">
                            <div className="card-header">
                                <i className="fas fa-user-edit" /> Edit Contact
                            </div>
                            <div className="card-body">
                                <form
                                    onSubmit={this.onFormSubmit.bind(
                                        this,
                                        dispatch
                                    )}
                                >
                                    <TextInputGroup
                                        label="Name"
                                        name="name"
                                        placeholder="Enter Name..."
                                        value={name}
                                        onChange={this.onInputChange}
                                        required="required"
                                    />
                                    <TextInputGroup
                                        label="Email"
                                        name="email"
                                        type="email"
                                        placeholder="Enter Email..."
                                        value={email}
                                        onChange={this.onInputChange}
                                        required="required"
                                    />
                                    <TextInputGroup
                                        label="Phone"
                                        name="phone"
                                        type="tel"
                                        placeholder="Enter Phone..."
                                        value={phone}
                                        onChange={this.onInputChange}
                                        required="required"
                                    />
                                    <input
                                        type="submit"
                                        value="Update Contact"
                                        className="btn btn-light btn-block"
                                    />
                                </form>
                            </div>
                        </div>
                    );
                }}
            </Consumer>
        );
    }
}

export default EditContact;
