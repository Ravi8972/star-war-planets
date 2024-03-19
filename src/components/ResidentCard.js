import React, { useEffect, useState } from 'react';
import './ResidentCard.css'

const ResidentCard = ({ residentUrl, index }) => {

    const [residentDetails, setResidentDetails] = useState();
    const [flag, setFlag] = useState(false);

    useEffect(() => {
        getResidentDetails();
    }, []);

    const getResidentDetails = async () => {
        try {
            let res = await fetch(residentUrl);
            res = await res.json();
            
            setResidentDetails(res);
        } catch (e) {
            console.log(e);
        }
    };

  
  
    return (
        <div className='residentNumber'>
            <p className='resident' onClick={() => setFlag(!flag)} >Resident {index + 1}</p>
             <div>
             {flag && <div  className='residentInfo'>
                <h4>Name: {residentDetails?.name}</h4>
                <p>Height: {residentDetails?.height}</p>
                <p>Mass: {residentDetails?.mass}</p>
                <p>Gender: {residentDetails?.gender}</p>
            </div>}
             </div>
           
        </div>
    );
}

export default ResidentCard;