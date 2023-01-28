import {Component} from 'react'

import './index.css'

const required = 'Required'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    firsterror: '',
    lasterror: '',
    submitted: false,
  }

  onfirst = event => {
    this.setState({firstName: event.target.value})
  }

  onlast = event => {
    this.setState({lastName: event.target.value})
  }

  onfirstBlur = () => {
    const {firstName} = this.state
    if (firstName === '') {
      this.setState({firsterror: required})
    } else {
      this.setState({firsterror: ''})
    }
  }

  onlastBlur = () => {
    const {lastName} = this.state
    if (lastName === '') {
      this.setState({lasterror: required})
    } else {
      this.setState({lasterror: ''})
    }
  }

  onSubmit = event => {
    event.preventDefault()

    const {firstName, lastName} = this.state

    if (firstName === '' && lastName === '') {
      this.setState({firsterror: required, lasterror: required})
    } else if (firstName === '') {
      this.setState({firsterror: required})
    } else if (lastName === '') {
      this.setState({lasterror: required})
    } else {
      this.setState({
        firstName: '',
        lastName: '',
        firsterror: '',
        lasterror: '',
        submitted: true,
      })
    }
  }

  onAnother = () =>
    this.setState({
      firstName: '',
      lastName: '',
      firsterror: '',
      lasterror: '',
      submitted: false,
    })

  render() {
    const {firstName, lastName, firsterror, lasterror, submitted} = this.state

    return (
      <div className="mainContainer">
        <h1 className="mainheading">Registration</h1>
        <form className="form" onSubmit={this.onSubmit}>
          {submitted ? (
            <>
              <img
                className="successimg"
                alt="success"
                src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
              />
              <p className="submittedpara">Submitted Successfully</p>
              <button className="button" type="button" onClick={this.onAnother}>
                Submit Another Response
              </button>
            </>
          ) : (
            <>
              <label className="label" htmlFor="firstname">
                FIRST NAME
              </label>
              <input
                value={firstName}
                placeholder="First name"
                className="input"
                type="input"
                onChange={this.onfirst}
                onBlur={this.onfirstBlur}
                id="firstname"
              />
              <p className="error">{firsterror}</p>
              <label className="label" htmlFor="lastname">
                LAST NAME
              </label>
              <input
                value={lastName}
                placeholder="Last name"
                className="input"
                type="input"
                onChange={this.onlast}
                onBlur={this.onlastBlur}
                id="lastname"
              />
              <p className="error">{lasterror}</p>
              <button className="button" type="submit">
                Submit
              </button>
            </>
          )}
        </form>
      </div>
    )
  }
}

export default RegistrationForm
