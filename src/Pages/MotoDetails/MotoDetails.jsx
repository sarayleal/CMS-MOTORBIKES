import './MotoDetails.css';

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MotoDetails = () => {
  const [details, setDetails] = useState('');
  const { id } = useParams();

  const getDetails = async () => {
    const res = await fetch(`https://63ed61e93d9c852c3f59f7e0.mockapi.io/motos/${id}`);
    const data = await res.json();
    setDetails(data);
  };

  useEffect(() => {
    getDetails();
  }, []);

  return (
    <main className="HomeDetails">
      <figure>
        <div className="NameMotoDetails">
          <h3>{details.brand}</h3>
          <h3>{details.name}</h3>
        </div>
        <img src={details.image} alt={details.name} />
        <div className="infoMotoDetails">
          <h3 className="year">
            {' '}
            <span>Year</span> {details.year}
          </h3>
          <h3 className="type">Type {details.type}</h3>
          <h3 className="price">Price {details.price}€</h3>
          <h3 className="km">KM {details.km}KM</h3>
          <h3 className="carnet">Carnet {details.carnet}</h3>
          <h3 className="cc">{details.cc}CC</h3>
          <h3 className="cv"> {details.cv}CV</h3>
          <h3 className="fuel">Fuel {details.fuel}</h3>
          <h3 className="company">Company {details.company}</h3>
        </div>
      </figure>
    </main>
  );
};

export default MotoDetails;
