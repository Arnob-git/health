import React, { useEffect, useState } from 'react';
import Card from './Card/Card';


const Health = () => {

    const handleDescription = (description) => {
        !localStorage.data ? localStorage.setItem("data", JSON.stringify(description)) :
        localStorage.clear();
        localStorage.setItem("data", JSON.stringify(description));
    }
    const [healthsData, setHealthsData] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setHealthsData(data))
    }, [])

    return (
        <div className='simp-space'>
            <h1>Our Health Services</h1>
            <div className="d-flex flex-wrap justify-content-around w-100">
                {
                    healthsData.map(info => <Card key={info.name} handleDescription={handleDescription} info={info} />)
                }
            </div>
        </div>
    );
};

export default Health;