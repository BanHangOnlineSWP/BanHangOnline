import React from "react";
import './Login.css';
// import './script.js';
class Login extends React.Component {
    render() {
        return (
            // Login - Register
            <div class="signin">
                <div class="form-parent">

                    <div class="sign-up-img"></div>
                    <div class="sign-in-img"></div>

                    <div class="form-container">
                        <div class="form" id="sign-in-form">
                            <h1 class="title">Welcome to Student Deal</h1>
                            <h5 class="title-text">Sign in to continue your progress</h5>

                            <div class="fields">
                                <input type="text" placeholder="username" />
                                <input type="password" placeholder="password" />
                            </div>

                            <div class="submit-container">
                                <button type="submit" class="btn">sign in</button>
                                <p class="link"  onClick={() => switchForm('register')}>Don't have an account? Sign up here</p>
                            </div>
                        </div>

                        <div class="form" id="sign-up-form">
                            <h1 class="title">Sign up</h1>
                            <div class="fields">
                                <input type="text" placeholder="name" />
                                <input type="text" placeholder="username" />
                                <input type="text" placeholder="email" />
                                <input type="password" placeholder="password" />
                            </div>
                            <div class="submit-container">
                                <button type="submit" class="btn">sign up</button>
                                <p class="link" onClick={() => switchForm('login')}>Already have an account? Sign in here</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Login;