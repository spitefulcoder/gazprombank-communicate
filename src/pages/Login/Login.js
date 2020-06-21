import React, { useState } from "react";
import { Button, Input } from "@holism/core";
import {Redirect } from "react-router-dom";
import {host} from '../../api'
import "./Login.css";
import {LOGIN} from '../../actions'
import {connect} from 'react-redux'

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [shouldRedirect, changeRedirectStatus] = useState(false)

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  async function onLoginButtonClick() {
    let email = document.querySelector('.email input').value
    let password = document.querySelector('.pass input').value
    let authData = {
      email: ''+email,
      password: ''+password
    }
    let response = await fetch(`${host}/auth/login/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(authData)
    })
    let result = await response.json()
    if (result.key !== undefined) {
      let token = result.key
      let response2 = await fetch(`${host}/user/`, {
        method: 'GET',
        headers: {
          'Authorization': `Token ${token}`,
          'Content-Type': 'application/json;charset=utf-8'
        }
      })
      let userResult = await response2.json()
      if (response2.status === 200) {
        let userData = userResult.data
        userData.token = token
        props.loginUser(userData)
        changeRedirectStatus(true)
      }
    }
  }

  return (
    <div className="Login">
      {
        shouldRedirect === true ? 
          <Redirect to='/ideas'/>
          :
          null
      }
      <form onSubmit={handleSubmit}>
        <Input
          type="email"
          title="Корпоративная почта"
          dimension="small"
          className="email"
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
        <Button
          className="btn"
          dimension="medium"
          color="primary"
          disabled={!validateForm()}
          type="submit"
          onClick={() => {onLoginButtonClick()}}
        >
          <span>Вход</span>
        </Button>
      </form>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loginUser: user => dispatch({type: LOGIN, user: user})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
