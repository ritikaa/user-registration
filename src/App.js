import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      email: '',
      phone: '',
      gender: 'Male',
      country: 'India',
      message: '',
      password: '',
      checkbox: [],
      error: '',
    };
  }

  handleChange  = (event) =>  {
    const { name, value } = event.target;
    if (name === 'checkbox') {
      let { checkbox } = this.state;
      checkbox = checkbox.includes(value) ? checkbox.filter(item => item !== value) : [...checkbox, value];
      this.setState({ checkbox: checkbox });
    } else {
      this.setState( {
        [name]: value
      } );
    }
    this.state.error && this.setState({ error: ''})
  };

  handleSubmit = event => {
    event.preventDefault();
    if ( this.state.fullName !== '' && this.state.email !== '' && this.state.phone !== '' && this.state.gender !== '' && this.state.country !== '' && this.state.message !== '' && this.state.password !== '' && this.state.checkbox.length ) {
      this.setState({error: ''}, ()=> {
        alert( 'A new Form has been submitted with : ' + '\r\n' + 'Full Name :' + ' ' + this.state.fullName + '\r\n' + 'E-mail : ' + ' ' + this.state.email + '\r\n' + 'Phone : ' + ' ' + this.state.phone + '\r\n' + 'Gender : ' + ' ' + this.state.gender + '\r\n' + 'Country : ' + ' ' + this.state.country + '\r\n' + 'Message : ' + this.state.message + '\r\n' + 'Password : ' + ' ' + this.state.password + '\r\n' + 'Checkbox Selection :' + ' ' + this.state.checkbox );
      });
    } else {
      this.setState({ error: "submission error" });
    }
  };

  render() {
    return (
      <>
          <form onSubmit={this.handleSubmit}>
            <h3>------ User Registration ------ </h3>
            {
              this.state.error &&
                <div>Error!!</div>
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
                checked={this.state.gender === 'female'}
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
              <select name="country" id="name" onChange={this.handleChange} value={this.state.country}>
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

            {/*Type: Checkbox*/}
            <div>
              <input
                type="checkbox"
                id="yes"
                name="checkbox"
                onChange={this.handleChange}
                value="yes"
                checked={this.state.checkbox.includes('yes')}
              />
              <label htmlFor="yes">Yes</label>
              <input
              type="checkbox"
              id="no"
              name="checkbox"
              onChange={this.handleChange}
              value="no"
              checked={this.state.checkbox.includes('no')}
            />
              <label htmlFor="no">No</label>
              <input
                type="checkbox"
                id="maybe"
                name="checkbox"
                onChange={this.handleChange}
                value="may be"
                checked={this.state.checkbox.includes('may be')}
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