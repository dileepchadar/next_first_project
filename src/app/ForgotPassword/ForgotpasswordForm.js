// components/LoginForm.js
"use client";

import { useState } from 'react';
import InputField from '../components/InputField';
import styles from '../Login/LoginForm.module.css';
import { usePathname } from 'next/navigation';


const forgotpassword = () => {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});

  const pathname = usePathname();
  const screenName = pathname.split('/').pop(); 
  console.log("fffffffff", screenName);

  const validate = () => {
    const newErrors = {};
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email address is invalid';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      // Handle login logic here
      console.log('Email:', email);
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        {screenName==="ForgotPassword"?
        <h2 className={styles.title}>ForgotPassword</h2>:""
        // <h2 className={styles.title}>Signup</h2>

        }
        <InputField
          id="email"
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          error={errors.email}
        />
        <button type="submit" className={styles.button}>Send</button>
      </form>
    </div>
  );
};

export default forgotpassword;
