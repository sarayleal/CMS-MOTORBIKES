import './Home.css';

import axios from 'axios';
import { useEffect, useState } from 'react';

import MotoCard from '../../components/MotoCard/Motocard';
import useDebounce from '../../hook/useDebounce';

const Home = () => {
  const [motos, setMotos] = useState([]);
  const [filter, setFilter] = useState([]);
  const debounceValue = useDebounce(filter, 1000);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios.get('https://63ed61e93d9c852c3f59f7e0.mockapi.io/motos').then((res) => {
      setMotos(res.data);
      setFilter(res.data);
      setLoaded(true);
    });
  }, []);

  const filterFunction = (value) => {
    const arrayFilter = motos.filter(
      (moto) =>
        moto.name.toLowerCase().includes(value) ||
        moto.brand.toLowerCase().includes(value),
    );
    setFilter(arrayFilter);
  };

  return (
    <main className="Home">
      <input
        type="text"
        placeholder="Search..."
        onChange={(ev) => filterFunction(ev.target.value.toLowerCase())}
      />
      <div className="grid">
        {loaded ? (
          debounceValue.map((moto) => <MotoCard key={moto.id} moto={moto} />)
        ) : (
          <p>Cargando...</p>
        )}
      </div>
    </main>
  );
};
export default Home;
