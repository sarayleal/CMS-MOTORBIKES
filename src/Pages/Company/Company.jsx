import './Company.css';

import { useEffect, useState } from 'react';

/* import { UserContext } from '../../components/context/userContext'; */
import MotoCard from '../../components/MotoCard/MotoCard';

const Company = () => {
  //GET
  const [motos, setMotos] = useState([]);
  const [loaded, setLoaded] = useState(false);
  // const [error, setError] = useState(null);
  // const [newMoto, setNewMoto] = useState({
  //   image: '',
  //   brand: '',
  //   name: '',
  //   year: '',
  //   type: '',
  //   km: '',
  //   cv: '',
  //   price: '',
  //   cc: '',
  //   carnet: '',
  //   company: '',
  //   fuel: '',
  // });
  const getMotos = async () => {
    const res = await fetch('https://63ed61e93d9c852c3f59f7e0.mockapi.io/motos');
    const data = await res.json();
    setMotos(data);
    setLoaded(true);
  };
  //CREATE
  // const createMotos = (ev) => {
  //   ev.preventDefault();
  //   if (
  //     !newMoto.image ||
  //     !newMoto.brand ||
  //     !newMoto.name ||
  //     !newMoto.year ||
  //     !newMoto.type ||
  //     !newMoto.km ||
  //     !newMoto.cv ||
  //     !newMoto.price ||
  //     !newMoto.cc ||
  //     !newMoto.carnet ||
  //     !newMoto.company ||
  //     !newMoto.fuel
  //   ) {
  //     setError('faltan datos');
  //   } else {
  //     setError(null);
  //     fetch('https://63ed61e93d9c852c3f59f7e0.mockapi.io/motos', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(newMoto),
  //     }).then((res) => {
  //       getMotos();
  //     });
  //   }
  // };

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
