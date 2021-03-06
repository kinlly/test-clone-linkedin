import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import { auth } from './firebase';
import './Login.css'

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [profilePic, setProfilePic] = useState("");
    const dispatch = useDispatch();


    const loginToApp = (e) => {
        e.preventDefault();
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        
        auth.signInWithEmailAndPassword(email, password).then(
            (userAuth) => {
                dispatch(
                    login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: userAuth.user.displayName,
                        photoURL: userAuth.user.photoURL,
                    })
                );
            }).catch(error => alert(error));
    };
    const register = () => {
        if (!name) {
            return alert("Please enter a full email");
        }

        auth.createUserWithEmailAndPassword(email, password).then(
            (userAuth) => {
                userAuth.user
                    .updateProfile({
                        displayName: name,
                        photoURL: profilePic,
                    })
                    .then(() => {
                        dispatch(
                            login({
                                email: userAuth.user.email,
                                uid: userAuth.user.uid,
                                displayName: name,
                                photoURL: profilePic,
                            })
                        );
                    });
            }).catch(error => alert(error));
    };


    return (
        <div className="login">
            <img src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lR0Vks" alt="" />

            <form>
                <input placeholder="Full name (required if registering)"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text" />
                <input placeholder="Profile pic URL (optional)"
                    value={profilePic}
                    onChange={(e) => setProfilePic(e.target.value)}
                    type="text" />
                <input placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email" />
                <input placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password" />
                <button type="submit" onClick={loginToApp}>Sign in</button>
            </form>
            <p> Not a member?{" "}
                <span className="login__register" onClick={register}>Register now!</span>
            </p>
        </div>
    )
}


export default Login
