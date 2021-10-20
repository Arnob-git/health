import React, { useEffect, useState } from 'react';
import Card from '../Health/Card/Card';


const Doctors = () => {

    const handleDescription = (description) => {
        !localStorage.data ? localStorage.setItem("data", JSON.stringify(description)) :
        localStorage.clear();
        localStorage.setItem("data", JSON.stringify(description));
    }
    const [doctorsData, setDoctorsData] = useState([]);
    useEffect(() => {
        fetch('doctor.json')
            .then(res => res.json())
            .then(data => setDoctorsData(data))
    }, [])

    return (
        <div className='simp-space'>
            <h1>Our Experts</h1>
            <div className="d-flex flex-wrap justify-content-around w-100">
                {
                    doctorsData.map(info => <Card key={info.name} handleDescription={handleDescription} info={info} />)
                }
            </div>
        </div>
    );
};

export default Doctors;