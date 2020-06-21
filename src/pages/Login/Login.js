import React, { useState } from "react";
import { Button, Input } from "@holism/core";
import { Link } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <Input
          type="email"
          title="Корпоративная почта"
          dimension="small"
          className="log"
          value={email}
          onChange={(e, val) => setEmail(val)}
        />
        <Input
          type="password"
          title="Пароль"
          dimension="small"
          className="pass"
          value={password}
          onChange={(e, val) => setPassword(val)}
        />
        <Link to="/ideas">
          <Button
            className="btn"
            dimension="medium"
            color="primary"
            disabled={!validateForm()}
            type="submit"
          >
            <span>Вход</span>
          </Button>
        </Link>
      </form>
    </div>
  );
}
