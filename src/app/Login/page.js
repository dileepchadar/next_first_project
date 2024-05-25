import React from 'react'
import LoginForm from './loginForm'

export default function lpage() {
  return (
    <div>
      <a href="/Signup" rel="noopener noreferrer">
            <p> SIGN</p>
          </a>
          <a href="/ForgotPassword" rel="noopener noreferrer">
            <p> ForgotPassword</p>
          </a>
    <LoginForm></LoginForm>
    </div>
  )
}
