import './MotoCard.css';

const MotoCard = ({ moto }) => {
  return (
    <figure>
      <img src={moto.image} alt={moto.name} />
      <h3>{moto.name}</h3>
    </figure>
  );
};

export default MotoCard;
