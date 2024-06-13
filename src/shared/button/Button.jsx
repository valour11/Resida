import React from 'react';
import PropTypes from 'prop-types';
import "../button/ButtonStyle.css";

var Button = ({ onClick, btnName, type = 'button', className = '', outline = false, disabled = false }) => {
    return (
    <button
        type={type}
        className={`custom-button ${outline ? 'outline' : ''} ${className}`}
        onClick={onClick}
        disabled={disabled}
        >
        {btnName}
    </button>
    );
};

Button.propTypes = {
    onClick: PropTypes.func,
    btnName: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    className: PropTypes.string,
    outline: PropTypes.bool,
    disabled: PropTypes.bool,
};

export default Button
