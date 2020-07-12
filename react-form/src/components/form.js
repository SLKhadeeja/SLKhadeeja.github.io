import React, { Component } from "react";
import '../styles/form.css';

class Form extends Component {
    render() {
        return(
            <div className="form">
                <form className="main-form">
                    <div className="name">

                        <label className="input-field" id="firstName">
                            First Name 
                            <input type="text" required placeholder="First Name" />
                        
                        </label>
                        
                        <label className="input-field" id="lastName">
                            Last Name 
                            <input type="text" required placeholder="Last Name" />
                        </label>
                    </div>
                    
                    <div className="field">
                        <label className="input-field">
                            Email 
                            <input type="text" required  placeholder="Email" />
                        </label>
                        
                        <label className="input-field">
                            Password 
                            <input type="password" required placeholder="Password" />
                        </label>
                        
                        <label className="input-field">
                            Confirm Password 
                            <input type="password" required placeholder="Confirm Password" />
                        </label>
                        
                        <label className="input-field">
                            Website 
                            <input type="text" required placeholder="Website" />
                        </label>
                    </div>
                    
                    <div className="terms">
                        <input type="checkbox" id="checkbox" />
                        <p>I accept the terms and conditions</p>
                    </div>
                    
                    <button type="submit" className="a-button">Submit</button>
                        
                </form>
            </div>

        );
    }
}

export default Form;