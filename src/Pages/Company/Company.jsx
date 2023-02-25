import './Company.css';

import { useContext, useEffect, useState } from 'react';

import { UserContext } from '../../components/context/userContext';
import InputCreate from '../../components/InputCreate';
import InputEdit from '../../components/InputEdit';
import MotoCard from '../../components/MotoCard/MotoCard';
import SelectCreate from '../../components/SelectCreate';
import SelectEdit from '../../components/SelectEdit';
import { carnet, fuel, type, typesText } from '../../data/data.js';

const Company = () => {
  //GET
  const { user } = useContext(UserContext);
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
    company: user,
    fuel: '',
  });
  const [editMoto, setEditMoto] = useState({
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
    const filteredMotos = await data.filter((moto) => moto.company === user);
    setMotos(filteredMotos);
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

  /// Edit

  const handleEditMoto = (ev, id) => {
    ev.preventDefault();
    fetch(`https://63ed61e93d9c852c3f59f7e0.mockapi.io/motos/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(editMoto),
    }).then(() => {
      getMotos();
    });
  };

  useEffect(() => {
    getMotos();
  }, []);

  return (
    <main>
      <div className="Company">
        {loaded ? (
          motos.map((moto) => (
            <div key={moto.id}>
              <MotoCard moto={moto} />
              <button onClick={() => deleteMoto(moto.id)}>Delete</button>
              <button onClick={() => setEditMoto(moto)}>Edit</button>
            </div>
          ))
        ) : (
          <p>Cargando...</p>
        )}
      </div>
      <div className="create-edit">
        <div>
          <h2>CREATE MOTO</h2>
          <form className="create" onSubmit={(ev) => createMotos(ev)}>
            {typesText.map((info) => (
              <InputCreate
                type={info}
                key={info}
                action={(ev) => {
                  setNewMoto({ ...newMoto, [info]: ev.target.value });
                }}
              />
            ))}
            <input
              type="text"
              value={user}
              disabled

              //  setNewMoto({...newMoto, company:value})
              // onChange={(ev) => setNewMoto({ ...newMoto, company: ev.target.value })}
            />
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
        <div>
          <h2>EDIT MOTO</h2>
          <form className="edit" onSubmit={(ev) => handleEditMoto(ev, editMoto.id)}>
            {typesText.map((info) => (
              <InputEdit
                value={editMoto[info]}
                type={info}
                key={info}
                action={(ev) => {
                  setEditMoto({ ...editMoto, [info]: ev.target.value });
                }}
              />
            ))}
            <SelectEdit
              value={editMoto.fuel}
              options={fuel}
              action={(ev) => setEditMoto({ ...editMoto, fuel: ev.target.value })}
            />
            <SelectEdit
              value={editMoto.carnet}
              options={carnet}
              action={(ev) => setEditMoto({ ...editMoto, carnet: ev.target.value })}
            />
            <SelectEdit
              value={editMoto.type}
              options={type}
              action={(ev) => setEditMoto({ ...editMoto, type: ev.target.value })}
            />
            <button type="submit">Edit</button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Company;
