import React, { useState } from "react";
import './Login2.css';

const Login = () => {
    const [addclass, setaddclass] = useState("");
    return (
        <div className={`container ${addclass}`} id="container">
            <div class="sign-in-img"></div>
            <div class="sign-up-img"></div>
            <div class="google-img"></div>

            <div className="form-container sign-up-container">
                <form>
                <h1 class="title">Sign up</h1>
                    <text className="title-text">Begin your journey with us today</text>
                    <input type="text" placeholder="Username" />
                    <input type="number" placeholder="Age" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button type="submit" className="btn">Sign up</button>
                    <text>OR SIGN UP WITH</text>
                    <button type="submit" className="google">Google</button>
                </form>
            </div>

            <div className="form-container sign-in-container">
                <form>
                    <h1 class="title">Welcome to Student Deal</h1>
                    <text class="title-text">Sign in to continue your progress</text>
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                    <button type="submit" className="btn">Sign in</button>
                    <text>OR SIGN IN WITH</text>
                    <button type="submit" className="google">Google</button>
                </form>
            </div>

            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-panel overlay-left">
                        <p className="ghost" id="signIn" onClick={() => setaddclass()}>Already have an account? Sign in here</p>
                    </div>

                    <div className="overlay-panel overlay-right">
                        <p className="ghost" id="signUp" onClick={() => setaddclass("right-panel-active")}>Don't have an account? Sign up here</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
