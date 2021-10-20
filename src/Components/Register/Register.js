import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {

    const [email, setMail] = useState('');
    const [password, setPass] = useState('');
    const [passError, setPassError] = useState('');

    const { googleSignIn, emailPass, setUser } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/';


    const emailGet = e => {
        setMail(e.target.value);
    }
    const passGet = e => {
        setPass(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (password.length < 6) {
            setPassError('Password must be at least 6 characters long.')
            return;
        }
        if (!/(?=.*?[A-Z])/.test(password)) {
            setPassError('Password must contain 1 upper case letter')
            return;
        }
        emailPass(email, password)
            .then(result => {
                setUser(result.user);
                history.push(redirect_uri)
                setPassError('');
            })
            .catch((error) => {
                setPassError('Email already in use')
            });
    }


    const handleGoogleLogIn = () => {
        googleSignIn()
            .then(result => {
                setUser(result.user);
                history.push(redirect_uri)
            })
    }





    return (
        <div>

            <div className="container login-form">
                <h3>Please Sign Up</h3>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input required type="email" onBlur={emailGet} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input required type="password" onBlur={passGet} className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <div className='mt-3 text-center'>
                        <p className='text-danger'>{passError}</p>
                    </div>
                    <button type="submit" className="btn btn-primary mt-4">Submit</button>
                    <p>Already Have an account? <Link to='/login'>Login</Link> Now.</p>
                </form>
                <div className="mt3">
                    <h5>or login with</h5>
                    <button className='btn btn-secondary' onClick={handleGoogleLogIn}>Google</button>
                </div>
            </div>
        </div>
    );
};

export default Register;