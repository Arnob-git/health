import React from 'react';
import { Link } from 'react-router-dom';

const Description = () => {
    const { name, image, simpleDescription, description } = JSON.parse(localStorage.getItem('data'));
    return (
        <div className='simp-space'>
            <div className='col-12'>
                <h1 className='text-center mb-3'>{name}</h1>
                <h3 className="text-center">{simpleDescription}</h3>
            </div>
            <div className='row mt-5 d-flex align-items-center'>
                <div className="col-12 col-md-5">
                    <img src={image} className='img-fluid' alt="" />
                </div>
                <div className="col-12 col-md-5">
                    <h5>{description}</h5>
                </div>
            </div>
            <Link to='/thumbs-up' className='btn btn-outline-info'>Book Appointment</Link>
        </div>
    );
};

export default Description;