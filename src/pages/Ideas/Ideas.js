import React, {Component} from "react";
import "./Ideas.css";
import Item from "../../components/Item/Item";
import Filter from "../../components/FilteredSearch/Filter";
import Header from '../../components/Header/Header'
import {LOGIN} from '../../actions'
import {host} from '../../api'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

class Ideas extends Component{

  constructor(props) {
    super(props)
    this.state = {
      shouldRedirectToLogin: false,
      ideaCards: []
    }
  }

  async componentWillMount() {
    let user = JSON.parse(localStorage.getItem('user'))
    if (user != null) {
      this.props.loginUser(user)
    }
    else {
      this.setState({
        shouldRedirectToLogin: true
      })
    }

    let responce = await fetch(`${host}/idea/card/`, {
      method: 'GET',
      headers: {
        'Authorization': `Token ${user.token}`,
        'Content-Type': 'application/json;charset=utf-8'
      }
    })

  }


  render() {
    return (
      <div>
        {
          this.state.shouldRedirectToLogin === true ? 
            <Redirect to='/login' />
            :
            null
        }
        <Header/>
        <Filter />
        <div className="ideasContainer">
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
      </div>
    )
  }
  
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

export default connect(mapStateToProps, mapDispatchToProps)(Ideas)
