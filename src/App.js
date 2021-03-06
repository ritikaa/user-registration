import React, { Component } from 'react';
import './App.css';

const initialState = {
  fullName: '',
  email: '',
  phone: '',
  gender: 'Male',
  country: 'India',
  message: '',
  password: '',
  confirmPassword: '',
  checkbox: [],
  error: [],
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    let { checkbox } = this.state;
    if(name === 'checkbox') {
      checkbox = checkbox.includes(value) ? checkbox.filter(item => item !== value) : [...checkbox, value];
      this.setState({
        checkbox
      })
    } else {
      this.setState({
        [name] : value,
      })
    }
    this.state.error && this.setState({
      error: [],
    })
  };

  handleSubmit = event => {
    const { fullName, email, phone, gender, password, confirmPassword, checkbox, error } = this.state;
    event.preventDefault();
    if(fullName !== '' && email !== '' && phone !== '' && gender !== '' && password !== '' && confirmPassword !== '' && checkbox.length) {
      if(password !== confirmPassword) {
        error.push('Passwords doesn\'t match');
      }
      if(!this.state.email.includes("@") && !this.state.email.includes(".")) {
        error.push('Invalid email');
      }
      if(error.length) {
        this.setState({ error: [...error] })
      } else {
        this.setState({
          error: [],
        }, () => {
          alert( 'A new Form has been submitted with : ' + '\r\n' + 'Full Name :' + ' ' + this.state.fullName + '\r\n' + 'E-mail : ' + ' ' + this.state.email + '\r\n' + 'Phone : ' + ' ' + this.state.phone + '\r\n' + 'Gender : ' + ' ' + this.state.gender + '\r\n' + 'Country : ' + ' ' + this.state.country + '\r\n' + 'Message : ' + this.state.message + '\r\n' + 'Password : ' + ' ' + this.state.password + '\r\n' + 'Checkbox Selection :' + ' ' + this.state.checkbox);
        })
      }
    } else {
      error.push('Please fill all the fields!');
      this.setState({error: [...error]});
    }
    // this.setState(initialState);
  };

  render() {
    return(
      <>
        <form onSubmit={this.handleSubmit} noValidate={true}>
          <h3>------ User Registration ------ </h3>
          {
            this.state.error.map((err,index) => {
              return <div style={{color: 'red'}} key={index}>{err}</div>
            })
          }
          {/*Type: Text*/}
          <div>
            <label htmlFor="fullName">Full name : </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              onChange={this.handleChange}
              value={this.state.fullName}
            />
          </div>

          {/*Type: email*/}
          <div>
            <label htmlFor="email">Email : </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={this.handleChange}
              value={this.state.email}
            />
          </div>

          {/*Type: tel*/}
          <div>
            <label htmlFor="phone">Phone : </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              onChange={this.handleChange}
              value={this.state.phone}
            />
          </div>

          {/*Type: Radio*/}
          <div className="radioBtns">
            <h4>Gender</h4>
            <input
              type="radio"
              id="male"
              name="gender"
              onChange={this.handleChange}
              value="male"
              checked={this.state.gender === 'male'}
            />
            <label htmlFor="male">Male</label>
            <input
              type="radio"
              id="female"
              name="gender"
              onChange={this.handleChange}
              value="female"
              checked={this.state.gender == 'female'}
            />
            <label htmlFor="female">Female</label>
            <input
              type="radio"
              id="other"
              name="gender"
              onChange={this.handleChange}
              value="other"
              checked={this.state.gender === 'other'}
            />
            <label htmlFor="other">Other</label>
          </div>

          {/*Type: select dropdown*/}
          <div>
            <label htmlFor="country">Country</label>
            <select
              name="country"
              id="name"
              onChange={this.handleChange}
              value={this.state.country}
            >
              <option value="India">India</option>
              <option value="Germany">Germany</option>
              <option value="USA">U.S.A</option>
            </select>
          </div>

          {/*Type: Textarea*/}
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              rows="8"
              cols="40"
              name="message"
              id="message"
              onChange={this.handleChange}
              value={this.state.message}
            />
          </div>

          <div>
            <label htmlFor="password">Choose Password : </label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={this.handleChange}
              value={this.state.password}
            />
          </div>

          <div>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              onChange={this.handleChange}
              value={this.state.confirmPassword}
            />
          </div>

          {/*Type: Checkbox*/}
          <div>
            <input
              type="checkbox"
              id="yes"
              name="checkbox"
              onChange={this.handleChange}
              value="yes"
              checked={this.state.checkbox.includes("yes")}
            />
            <label htmlFor="yes">Yes</label>
            <input
              type="checkbox"
              id="no"
              name="checkbox"
              onChange={this.handleChange}
              value="no"
              checked={this.state.checkbox.includes("no")}
            />
            <label htmlFor="no">No</label>
            <input
              type="checkbox"
              id="maybe"
              name="checkbox"
              onChange={this.handleChange}
              value="may be"
              checked={this.state.checkbox.includes("may be")}
            />
            <label htmlFor="maybe">May Be</label>
          </div>

          <div>

          </div>


          <div>
            <input
              type="submit"
              value="Submit"
            />
          </div>
        </form>
      </>
    );
  }
}

export default App;