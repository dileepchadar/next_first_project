import React from "react";
import LoginForm from "../Login/loginForm";

export default function page() {
  return (
    <div>
      <p>SIGN UP</p>

      <a href="/Login" rel="noopener noreferrer">
        <p> login</p>
      </a>
      <LoginForm></LoginForm>
    </div>
  );
}
