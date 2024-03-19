import React, { useState } from 'react'
import ResidentCard from  './ResidentCard';
import './PlanetCard.css'
const PlanetCard = ({planet}) => {
   const  [flag, setFlag] = useState(false);


  return (
    <div className='planet-card'>
      <h2>Planet Name : {planet.name}</h2>
      <p>Climate : {planet.climate}</p>
      <p>Population : {planet.population}</p>
      <p>Terrain : {planet.terrain}</p>
      <p>Rotation period : {planet.rotation_period}</p>
      <p>Climate : {planet.climate}</p>

      <h3 className='residentList' onClick = {() => setFlag(!flag)}> <span> Resident List </span> </h3>
        {
          flag && <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '4px' }}>
               {(planet.residents.length > 0) ? planet.residents?.map((residentUrl, index) =>
                        <ResidentCard key={index} residentUrl={residentUrl} index={index} />
                    ) : null}
        </div>
} 
    </div>
  )
}

export default PlanetCard
