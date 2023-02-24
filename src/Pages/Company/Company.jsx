import './Company.css';

import { useEffect, useState } from 'react';

/* import { UserContext } from '../../components/context/userContext'; */
import MotoCard from '../../components/MotoCard/MotoCard';

const Company = () => {
  //CREATE
  const [motos, setMotos] = useState([]);
  const [loaded, setLoaded] = useState(false);
  /* const [newMoto, setNewMoto] = useState({
    name: '',
    year: '',
  }); */
  const getMotos = async () => {
    const res = await fetch('https://63ed61e93d9c852c3f59f7e0.mockapi.io/motos');
    const data = await res.json();
    setMotos(data);
    setLoaded(true);
  };

  useEffect(() => {
    getMotos();
  }, []);

  /*  const { user } = useContext(UserContext); */
  return (
    <main className="Company">
      {loaded ? (
        motos.map((moto) => <MotoCard key={moto.id} moto={moto} />)
      ) : (
        <p>Cargando...</p>
      )}
    </main>
  );
};

export default Company;
