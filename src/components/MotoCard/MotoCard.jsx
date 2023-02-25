import './MotoCard.css';

import { Link } from 'react-router-dom';

const MotoCard = ({ moto }) => {
  return (
    <figure>
      <img src={moto.image} alt={moto.name} />
      <h3>{moto.name}</h3>
      <h3>{moto.year}</h3>
      <h3>{moto.fuel}</h3>
      <h3>{moto.type}</h3>
      <h3>{moto.carnet}</h3>
      <h3>{moto.company}</h3>
      <button>
        <Link to={`/Home/${moto.id}`}>More Details</Link>
      </button>
    </figure>
  );
};

export default MotoCard;
