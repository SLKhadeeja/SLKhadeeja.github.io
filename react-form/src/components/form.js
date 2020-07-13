import React, { Component } from "react";
import '../styles/form.css';

class Form extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        alert("Your registration has been successfully submitted")
    }

    validateEmail = (emailField)=> {
        var reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (reg.test(emailField.value)) 
        {
            return true;
        }
        else{
            return false;
        }
        }

    validatePassword = (password)=> {
        var reg = /^[A-Za-z]\w{7,14}$/;

        if (reg.test(password.value)) 
        {
           return true; 
        }
        else{
            alert('Password must contain lowercase, uppercase and numbers');
            return false;
        }
        }

    // errorMessage = () => {
    //     input.setCustomValidity('This field is required')
    // }


    render() {
        return(
            <div className="form" onSubmit={this.handleSubmit.bind(this)} noValidate >
                <form className="main-form" >
                    <div className="name">

                        <label className="input-field" id="firstName">
                            First Name 
                            <input type="text" required="required" placeholder="First Name"
                                
                                />
                        
                        </label>
                        
                        <label className="input-field" id="lastName">
                            Last Name 
                            <input type="text" required="required" placeholder="Last Name" />
                        </label>
                    </div>
                    
                    <div className="field">
                        <label className="input-field">
                            Email 
                            <input type="email" required="required"  placeholder="Email" onChange={this.validateEmail.bind(this)} />
                        </label>
                        
                        <label className="input-field">
                            Password 
                            <input type="password" required="required" placeholder="Password" onChange={this.validatePassword.bind(this)} />
                        </label>
                        
                        <label className="input-field">
                            Confirm Password 
                            <input type="password" required="required" placeholder="Confirm Password" onChange={this.validatePassword.bind(this)} />
                        </label>
                        
                        <label className="input-field">
                            Website 
                            <input type="text" required="required" placeholder="Website" />
                        </label>
                    </div>
                    
                    <div className="terms">
                        <input type="checkbox" id="checkbox" required="required" />
                        <p>I accept the terms and conditions</p>
                    </div>
                    
                    <button type="submit" className="a-button" >
                                Submit
                    </button>
                        
                </form>
            </div>

        );
    }
}

export default Form;