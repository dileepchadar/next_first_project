// components/InputField.js
"use client"; // This directive tells Next.js to treat this component as a Client Component

import React from 'react';
import PropTypes from 'prop-types';
import styles from './InputField.module.css';

const InputField = ({ id, label, type, value, onChange, required, error, className }) => {
  return (
    <div className={`${styles.inputGroup} ${className}`}>
      <label htmlFor={id} className={styles.label}>{label}</label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        className={styles.input}
        required={required}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      {error && <span id={`${id}-error`} className={styles.error}>{error}</span>}
    </div>
  );
};

InputField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  error: PropTypes.string,
  className: PropTypes.string,
};

InputField.defaultProps = {
  type: 'text',
  required: false,
  error: '',
  className: '',
};

export default InputField;
