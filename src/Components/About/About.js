import React from 'react';
import aboutdoc from '../../Images/aboutdoc.jpg';

const About = () => {
    return (
        <div className='simp-space row top-story py-3 px-1 d-flex align-items-center'>
            <div className="col-12 col-md-6">
                <img src={aboutdoc} className='img-fluid' alt="" />
            </div>
            <div className=" col-12 col-md-6">
                <h1>About Web Health Org Hospital</h1>
                <h4>Web Health Org Group has over two decades of experience in the healthcare sector, and is known for providing quality healthcare and valuable experience to all domestic and international patients. Our healthcare offerings are supported by a team of compassionate and dedicated medical professionals who have rich knowledge and experience in their respective domains.</h4>
                <h5>Web Health Org, a healthcare landmark, has been a household name to more than 50 million Indians. We currently have branches in Mumbai and Visakhapatnam.</h5>
            </div>
        </div>
    );
};

export default About;