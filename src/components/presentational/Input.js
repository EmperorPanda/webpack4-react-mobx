import React from "react";
import PropTypes from "prop-types";
import '../../assets/css/index.css'
const Input = ({ label, text, type, id, value, handleChange }) => (
  <div className="form-group">
    <label htmlFor={label} className="title">{text}</label>
    <input
      type={type}
      className="form-control"
      id={id}
      value={value}
      onChange={handleChange}
      required
    />
  </div>
);
Input.propTypes = {
  label: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};
export default Input;