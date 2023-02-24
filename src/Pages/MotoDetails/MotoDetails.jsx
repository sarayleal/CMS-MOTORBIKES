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
    <figure>
      <img src={details.image} alt={details.name} />
      <h3>{details.brand}</h3>
      <h3>{details.name}</h3>
      <h3>{details.year}</h3>
      <h3>{details.type}</h3>
      <h3>{details.price}</h3>
      <h3>{details.km}KM</h3>
      <h3>Carnet:{details.carnet}</h3>
      <h3>{details.cc}CC</h3>
      <h3>{details.cv}CV</h3>
      <h3>{details.fuel}</h3>
      <h3>{details.company}</h3>
    </figure>
  );
};

export default MotoDetails;
