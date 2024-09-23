// src/components/Auth.js
import React, { useState } from 'react';
import { auth } from '../firebase/firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const Auth = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = async () => {
        await createUserWithEmailAndPassword(auth, email, password);
        // Maneja la navegación o mensajes
    };

    const handleLogin = async () => {
        await signInWithEmailAndPassword(auth, email, password);
        // Maneja la navegación o mensajes
    };

    return (
        <div>
            <input type="email" onChange={e => setEmail(e.target.value)} placeholder="Email" />
            <input type="password" onChange={e => setPassword(e.target.value)} placeholder="Password" />
            <button onClick={handleSignUp}>Sign Up</button>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Auth;
