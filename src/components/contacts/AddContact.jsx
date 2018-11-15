import React, { Component } from "react";
import { Consumer } from "../../context";
import TextInputGroup from "../layouts/TextInputGroup";
import uuid from "uuid";

class AddContact extends Component {
    state = {
        name: "",
        email: "",
        phone: "",
        errors: {}
    };

    onFormSubmit = (dispatch, e) => {
        e.preventDefault(e);
        if (!this.handlePhoneValidation()) {
            alert("Enter a valid phone number");
            return false;
        }

        const { name, email, phone } = this.state;
        const newContact = {
            id: uuid(),
            name,
            email,
            phone
        };

        dispatch({ type: "ADD_CONTACT", payload: newContact });
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
                        <div className="card mb-3">
                            <div className="card-header">Add Contact</div>
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
