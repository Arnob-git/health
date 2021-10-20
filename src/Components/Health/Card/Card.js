import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {
    const { name, simpleDescription, image } = props.info;
    return (
        <div className="card col-12 col-md-3 mx-1 my-4">
            <img src={image} className="card-img-top img-fluid" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{simpleDescription}</p>
                <Link to='/description' onClick={()=>props.handleDescription(props.info)} className="btn btn-primary">More Information</Link>
            </div>
        </div>
    );
};

export default Card;