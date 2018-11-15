import React, { Component } from "react";
import { Consumer } from "../../context";
import TextInputGroup from "../layouts/TextInputGroup";
// import uuid from "uuid";
import axios from "axios";

class AddContact extends Component {
    state = {
        name: "",
        email: "",
        phone: "",
        errors: {}
    };

    onFormSubmit = async (dispatch, e) => {
        e.preventDefault(e);
        if (!this.handlePhoneValidation()) {
            alert("Enter a valid phone number");
            return false;
        }

        const { name, email, phone } = this.state;
        const newContact = {
            name,
            email,
            phone
        };

        const response = await axios.post(
            "https://jsonplaceholder.typicode.com/users",
            newContact
        );

        dispatch({
            type: "ADD_CONTACT",
            payload: response.data,
            log: console.log("[Back-End Database] - Add Request - ", response)
        });

        this.setState({
            name: "",
            email: "",
            phone: ""
        });

        console.log("CONTACT ADDED - ", newContact);
        this.props.history.push("/");
    };

    onInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handlePhoneValidation = e => {
        let fields = this.state;
        let errors = {};
        let formIsValid = true;
        var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

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
                                <i className="fas fa-plus-circle" /> Add Contact
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
                                        value="Add Contact"
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

export default AddContact;
