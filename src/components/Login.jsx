import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../assets/firebase';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import '../assets/CSS/LogIn.css'

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const logIn = e => {
        e.preventDefault()
        // Fancy firebase login
    }
    const register = e => {
        e.preventDefault()
        // console.log(email, password)
        // const auth = getAuth();
        // const doCreateUserWithEmailAndPassword = async (email, password) => {
        //     return createUserWithEmailAndPassword(auth, email, password);
        //   };
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Successfully signed up
                const user = userCredential.user;
                console.log(user);
                if (auth) {
                    navigate("/", {replace:true});
                }
            })
            .catch((error) => {
                console.error(error.message);
                alert(error.message);  // Use `error.message` for the actual error message
            });

        // doCreateUserWithEmailAndPassword(email, password);
        // Fancy firebase register
    }

    return (
        <div className="Login">
            <Link to="/">
                <img src="../Logo.png" alt="" className="Login__backgroundImage" />
            </Link>
            {/* <img src="./public/Logo.png" alt="" className="Login__logo" /> */}
            <div className="row">
                <div className="col">
                    <div className="card">
                        <div className="card-header">
                            <h2>Login</h2>
                        </div>
                        <div className="card-body">
                            {/* <h5 className="card-title">Special title treatment</h5> */}
                            {/* <p className="card-text">
                                <input className="Login__loginEmail" type="email" value={"Enter your Email"}/>
                                <input className="Login__loginPassword" type="password" value={"Enter your Password"}/>
                            </p> */}
                            <form action="">
                                <h5>Enter you Email</h5>
                                <input className="Login__loginEmail" type="email" value={email} onChange={e => setEmail(e.target.value)} />
                                <h5>Enter your Password</h5>
                                <input className="Login__loginPassword" type="password" value={password} onChange={e => setPassword(e.target.value)} />
                                <div className="card-footer text-body-secondary">
                                    <button href="#" type="submit" onClick={logIn} className="btn btn-primary">Login</button>
                                    <button href="#" onClick={register} className="btn btn-primary">Create an Account</button>
                                </div>
                            </form>

                        </div>

                    </div>
                </div>
                {/* <div className="col">
                    <div className="card text-center">
                        <div className="card-header">
                            SignUp
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Special title treatment</h5>
                            <p className="card-text">
                                <input className="Login__signupEmail" type="email"  value={"Enter your Email"}/>
                                <input className="Login__signupPassword" type="password"  value={"Enter your Password"}/>
                            </p>
                            <button href="#" className="btn btn-primary">Sign-Up</button>
                            <button href="#" className="btn btn-primary">Already have an Account</button>
                        </div>
                        <div className="card-footer text-body-secondary">
                            2 days ago
                        </div>
                    </div>

                </div> */}
            </div>

        </div>
    )
}

export default Login