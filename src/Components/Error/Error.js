import React from 'react';
import { Link } from 'react-router-dom';
import errimg from '../../Images/error.gif';

const Error = () => {
    return (
        <div className='text-center'>
            <img src={errimg} alt="" />
            <br />
            <br />
            <Link to='/'className='btn btn-secondary'>Back To Homepage</Link>
        </div>
    );
};

export default Error;