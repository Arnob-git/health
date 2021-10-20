import React from 'react';
import doc from '../../Images/doc.jpg';

const Footer = () => {
    return (
        <div className='top-space footer px-1'>
            <div style={{textAlign: 'center' }}>
                        <h3 className='name'>Web Health Org</h3>
                        <h6 className='name'>A Web Tech Hospital</h6>
                    </div>
            <div className="row mt-2 d-flex justify-content-center align-items-center">
                <div className="col-12 col-md-3 mb-3">
                    <img src={doc} className='img-fluid w-75' alt="" />
                </div>
                <div className="col-12 col-md-7 fs-6">
                    <h4 className='name'>Our Hospital's Extra Services</h4>
                    <ul className='text-light'>
                        <li>emergency room services</li>
                        <li>x-ray/radiology services</li>
                        <li>general and speciality surgical services</li>
                        <li>blood services</li>
                        <li>laboratory services</li>
                    </ul>
                </div>
            </div>
            <div className='text-center'>
                <small>&copy;2021. Web Health Org all rights reserved.</small>
            </div>
        </div>
    );
};

export default Footer;