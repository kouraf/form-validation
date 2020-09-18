import React, { useState } from 'react';
import Input from "./Input";
import "./Form.css"

export default function Form() {
    // states
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    });

    // validation

    const validateEmail = (email) => {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    const isFormvalidate = () => {
        var noError = true;
        if (!firstName) {
            setError(error => ({ ...error, firstName: "Field required !" }));
            noError = false;
        }
        else
            setError(error => ({ ...error, firstName: "" }));

        if (!lastName) {
            setError(error => ({ ...error, lastName: "Field required !" }));
            noError = false;
        }
        else
            setError(error => ({ ...error, lastName: "" }));

        if (!email) {
            setError(error => ({ ...error, email: "Field required !" }));
            noError = false;
        }
        else if (!validateEmail(email)) {
            setError(error => ({ ...error, email: "Invalid email !" }));
            noError = false;
        }
        else
            setError(error => ({ ...error, email: "" }));

        if (!password) {
            setError(error => ({ ...error, password: "Field required !" }));
            noError = false;
        }
        else if (password.length < 5) {
            setError(error => ({ ...error, password: "Password must be at least 5 character !" }));
            noError = false;
        }
        else
            setError(error => ({ ...error, password: "" }));

        return noError;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isFormvalidate())
            alert('no error')
    }
    // on error add input-error class
    return (
        <div className="form-side row">
            <p className="p-top">Try it free 7 days then $20/mo. thereafter</p>
            <form onSubmit={handleSubmit}>
                <Input error={error.firstName} setValue={setFirstName} value={firstName} type="text" placeholder="First Name" />
                <Input error={error.lastName} setValue={setLastName} value={lastName} type="text" placeholder="Last Name" />
                <Input error={error.email} setValue={setEmail} value={email} type="email" placeholder="Email Address" />
                <Input error={error.password} setValue={setPassword} value={password} type="password" placeholder="Password" />
                <button type="submit">Claim your free trial </button>
                <p className="p-bot">By clicking the button, you are agreeing to our <span>Terms and Services</span></p>
            </form>
        </div>
    )
}
