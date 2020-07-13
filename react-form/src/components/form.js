import React, { Component } from 'react';
import '../styles/form.css';

class Form extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const email = document.querySelector('#email');
    const password = document.querySelector('#password');

    let isEmailValid = false;
    let isPasswordValid = false;

    // Check if email contains any text before doing the email check
    if (this.isFilled(email.value)) {
        isEmailValid = this.validateEmail(email);
    } else {
        email.classList.add('error');
        email.nextSibling.textContent = 'This field is required';
    }

    // Check if password contains any text before doing the email check
    if (this.isFilled(email.value)) {
        isPasswordValid = this.validatePassword(password);
    } else {
        password.classList.add('error');
        password.nextSibling.textContent = 'This field is required';
    }


    if (this.isFormInvalid([isEmailValid, isPasswordValid])) {
      console.log('object');
    } else {
        alert('Your registration has been successfully submitted');
    }
  };

  isFormInvalid = (validations) => {
    // You'll pass all the check here and if any of the parameters is false, return false,
    // else return true;
    const notValid = validations.some((validation) => {
      return validation === false;
    });

    return notValid;
  };

  isFilled = (field) => {
      return field.length > 0;
  }

  validateEmail = (emailField) => {
    var reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (reg.test(emailField.value)) {
        emailField.classList.remove('error');
        emailField.nextSibling.textContent = '';
      return true;
    } else {
        emailField.classList.add('error');
        emailField.nextSibling.textContent = 'Email is not valid';
      return false;
    }
  };

  validatePassword = (password) => {
    var reg = /^[A-Za-z]\w{7,14}$/;

    if (reg.test(password.value)) {
        password.classList.remove('error');
        password.nextSibling.textContent = '';
      return true;
    } else {
      password.classList.add('error');
      password.nextSibling.textContent = 'Password is not valid';
      return false;
    }
  };

  // errorMessage = () => {
  //     input.setCustomValidity('This field is required')
  // }

  render() {
    return (
      <div className='form' onSubmit={this.handleSubmit.bind(this)} noValidate>
        <form className='main-form'>
          <div className='name'>
            <label className='input-field' id='firstName'>
              First Name
              <input type='text' placeholder='First Name' />
            </label>

            <label className='input-field' id='lastName'>
              Last Name
              <input type='text' placeholder='Last Name' />
            </label>
          </div>

          <div className='field'>
            <label className='input-field'>
              Email
              <input
                id='email'
                type='email'
                placeholder='Email'
              />
              <p></p>
            </label>

            <label className='input-field'>
              Password
              <input
                id="password"
                type='password'
                placeholder='Password'
              />
              <p></p>
            </label>

            <label className='input-field'>
              Confirm Password
              <input
                type='password'
                placeholder='Confirm Password'
                onChange={this.validatePassword.bind(this)}
              />
            </label>

            <label className='input-field'>
              Website
              <input type='text' placeholder='Website' />
            </label>
          </div>

          <div className='terms'>
            <input type='checkbox' id='checkbox' />
            <p>I accept the terms and conditions</p>
          </div>

          <button type='submit' className='a-button'>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
