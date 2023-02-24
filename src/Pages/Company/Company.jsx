import './Company.css';

import { useEffect, useState } from 'react';

import InputCreate from '../../components/InputCreate';
/* import { UserContext } from '../../components/context/userContext'; */
import MotoCard from '../../components/MotoCard/MotoCard';
import SelectCreate from '../../components/SelectCreate';
import { carnet, fuel, type, typesText } from '../../data/data.js';

const Company = () => {
  //GET
  const [motos, setMotos] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [newMoto, setNewMoto] = useState({
    image: '',
    brand: '',
    name: '',
    year: '',
    type: '',
    km: '',
    cv: '',
    price: '',
    cc: '',
    carnet: '',
    company: '',
    fuel: '',
  });
  const getMotos = async () => {
    const res = await fetch('https://63ed61e93d9c852c3f59f7e0.mockapi.io/motos');
    const data = await res.json();
    setMotos(data);
    setLoaded(true);
  };
  //CREATE
  const createMotos = (ev) => {
    ev.preventDefault();
    if (
      !newMoto.image ||
      !newMoto.brand ||
      !newMoto.name ||
      !newMoto.year ||
      !newMoto.type ||
      !newMoto.km ||
      !newMoto.cv ||
      !newMoto.price ||
      !newMoto.cc ||
      !newMoto.carnet ||
      !newMoto.company ||
      !newMoto.fuel
    ) {
      setError('faltan datos');
    } else {
      setError(null);
      fetch('https://63ed61e93d9c852c3f59f7e0.mockapi.io/motos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newMoto),
      }).then(() => {
        getMotos();
      });
    }
  };

  // DELETE

  const deleteMoto = (id) => {
    fetch(`https://63ed61e93d9c852c3f59f7e0.mockapi.io/motos/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(() => {
      getMotos();
    });
  };

  useEffect(() => {
    getMotos();
  }, []);

  /*  const { user } = useContext(UserContext); */
  return (
    <main className="Company">
      <div>
        {loaded ? (
          motos.map((moto) => (
            <div key={moto.id}>
              <MotoCard moto={moto} />
              <button onClick={() => deleteMoto(moto.id)}>Delete</button>
            </div>
          ))
        ) : (
          <p>Cargando...</p>
        )}
      </div>
      <div>
        <form onSubmit={(ev) => createMotos(ev)}>
          {typesText.map((info) => (
            <InputCreate
              type={info}
              key={info}
              action={(ev) => {
                setNewMoto({ ...newMoto, [info]: ev.target.value }), console.log(newMoto);
              }}
            />
          ))}
          <SelectCreate
            options={fuel}
            action={(ev) => setNewMoto({ ...newMoto, fuel: ev.target.value })}
          />
          <SelectCreate
            options={carnet}
            action={(ev) => setNewMoto({ ...newMoto, carnet: ev.target.value })}
          />
          <SelectCreate
            options={type}
            action={(ev) => setNewMoto({ ...newMoto, type: ev.target.value })}
          />

          <button onClick={() => console.log(newMoto)} type="submit">
            Create
          </button>
        </form>
        {error && <h3>{error}</h3>}
      </div>
    </main>
  );
};

export default Company;
