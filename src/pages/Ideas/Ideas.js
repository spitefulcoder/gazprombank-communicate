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
      userToken: 0,
      shouldRedirectToLogin: false,
      ideaCards: []
    }
    this.fetchIdeaCardsIntervalKey = 0
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
    this.setState({
      userToken: user.token
    })
  }

  componentDidMount() {
    this.fetchIdeaCards()
    this.fetchIdeaCardsIntervalKey = setInterval(() => {this.fetchIdeaCards() }, 10000)
  }

  async fetchIdeaCards() {
    let responce = await fetch(`${host}/idea/card/`, {
      method: 'GET',
      headers: {
        'Authorization': `Token ${this.state.userToken}`,
        'Content-Type': 'application/json;charset=utf-8'
      }
    })
    let result = await responce.json()
    let ideaCards = []
    if (responce.status === 200) {
      result.data.map(cardData => {
        ideaCards.push(cardData)
      })
      this.setState({
        ideaCards: ideaCards
      })
    }
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
          {
            this.state.ideaCards.map(cardData => {
              return <Item title={cardData.title} 
                description={cardData.description} 
                likes={cardData.likes} 
                dislikes={cardData.dislikes}
                cardID={cardData.id}
                key={cardData.id}/>
            })
          }
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
