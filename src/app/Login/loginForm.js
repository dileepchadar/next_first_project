// components/LoginForm.js
"use client";

import { useState } from "react";
import InputField from "../components/InputField";
import styles from "./LoginForm.module.css";
import { usePathname } from "next/navigation";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const pathname = usePathname();
  const screenName = pathname.split("/").pop();
  console.log("fffffffff", screenName);

  const validate = () => {
    const newErrors = {};
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email address is invalid";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
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
      console.log("Email:", email);
      console.log("Password:", password);
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        {screenName === "Login" ? (
          <h2 className={styles.title}>Login</h2>
        ) : (
          <h2 className={styles.title}>Signup</h2>
        )}
        <InputField
          id="email"
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          error={errors.email}
        />
        <InputField
          id="password"
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          error={errors.password}
        />
        <button type="submit" className={styles.button}>
          {screenName === "Login" ? "Login" : "Signup"}
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
