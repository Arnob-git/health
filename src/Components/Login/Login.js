import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { googleSignIn, setUser, signInEmailPass } = useAuth();
    const [email, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/';
    const handleGoogleLogIn = () => {
        googleSignIn()
            .then(result => {
                setUser(result.user);
                history.push(redirect_uri)
            })
    }

    const emailGet = e => {
        setMail(e.target.value);
    }
    const passGet = e => {
        setPassword(e.target.value);
    }
    const handleSubmit = e => {
        e.preventDefault()
        signInEmailPass(email, password)
            .then(result => {
                setUser(result.user);
                history.push(redirect_uri)
                setError('');
            })
            .catch((error) => {
                setError('Wrong Email or Password')
            });
    }

    return (
        <div className="container login-form">
            <h3>Please Sign in</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input required onBlur={emailGet} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input required onBlur={passGet} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <div className='mt-3 text-center'>
                    <p className='text-danger'>{error}</p>
                </div>
                <button type="submit" className="btn btn-primary mt-4">Submit</button>
                <p>Don't have any account? <Link to='/register'>Sign Up</Link> Now.</p>
            </form>
            <div className="mt3">
                <h5>or login with</h5>
                <button className='btn btn-secondary' onClick={handleGoogleLogIn}>Google</button>
            </div>
        </div>
    );
};

export default Login;