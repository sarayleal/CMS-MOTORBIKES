import './MotoCard.css';

import { Link } from 'react-router-dom';

const MotoCard = ({ moto }) => {
  return (
    <div className="cardMoto">
      <div className="content">
        <div className="thumb" style={{ backgroundImage: `url(${moto.image})` }}></div>
        <h3>{moto.name}</h3>
        <div className="line"></div>
        <div className="specifications">
          <span className="specification">
            {moto.brand}
            <p>Brand</p>
          </span>
          <span className="specification">
            {moto.year}
            <p>Year</p>
          </span>
          <span className="specification">
            {moto.fuel}
            <p>Fuel</p>
          </span>
          <span className="specification">
            {moto.type}
            <p>Type</p>
          </span>
          <span className="specification">
            {moto.carnet}
            <p>Carnet</p>
          </span>
          <span className="specification">
            {moto.company}
            <p>Company</p>
          </span>
        </div>
        <button>
          <Link to={`/Home/${moto.id}`}>More Details</Link>
        </button>
      </div>
    </div>
  );
};

export default MotoCard;
