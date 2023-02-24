import './MotoCard.css';

const MotoCard = ({ moto }) => {
  return (
    <figure>
      <img src={moto.image} alt={moto.name} />
      <h3>{moto.name}</h3>
      <h3>{moto.year}</h3>
      <h3>{moto.fuel}</h3>
      <h3>{moto.type}</h3>
      <h3>{moto.carnet}</h3>
    </figure>
  );
};

export default MotoCard;
