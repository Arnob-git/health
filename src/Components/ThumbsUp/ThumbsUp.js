import React from 'react';
import thumbs from '../../Images/thumbs.jpg';

const ThumbsUp = () => {
    return (
        <div className='row'>
            <div className="col-12 col-md-10 m-auto">
                <img src={thumbs} className='img-fluid' alt="" />
            </div>
        </div>
    );
};

export default ThumbsUp;