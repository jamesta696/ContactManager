import React from "react";
import PropTypes from "prop-types";

const TextInputGroup = ({
    label,
    name,
    value,
    placeholder,
    type,
    onChange,
    required
}) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input
                type={type}
                name={name}
                className="form-control form-control-lg"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required={required}
            />
        </div>
    );
};

TextInputGroup.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    required: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired
};

TextInputGroup.defaultProps = {
    type: "text"
};
export default TextInputGroup;
