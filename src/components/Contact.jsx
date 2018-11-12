import React, { Component } from "react";
import PropTypes from "prop-types";

class Contact extends Component {
    state = {
        showContactDetails: false
    };

    onShowContactDetails = () => {
        this.setState({ showContactDetails: !this.state.showContactDetails });
    };

    onDeleteContact = () => {
        console.log("clicked");
    };

    render() {
        const { name, email, phone } = this.props.contact;
        const { showContactDetails } = this.state;
        const { onDeleteContact } = this.props;

        return (
            <div className="card card-body mb-3">
                <h4>
                    {name}{" "}
                    <i
                        onClick={this.onShowContactDetails}
                        className="fas fa-sort-down"
                        style={{ cursor: "pointer" }}
                    />
                    <i
                        className="fas fa-times"
                        style={{
                            cursor: "pointer",
                            float: "right",
                            color: "#dc3545"
                        }}
                        onClick={onDeleteContact}
                    />
                </h4>
                {showContactDetails ? (
                    <ul className="list-group">
                        <li className="list-group-item">Email: {email}</li>
                        <li className="list-group-item">Phone: {phone}</li>
                    </ul>
                ) : null}
            </div>
        );
    }
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired,
    onDeleteContact: PropTypes.func.isRequired
};

export default Contact;
