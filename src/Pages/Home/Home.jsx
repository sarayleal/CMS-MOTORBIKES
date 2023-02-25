import './Home.css';

import axios from 'axios';
import { useEffect, useState } from 'react';

//import { useDebounce } from 'use-debounce';
import MotoCard from '../../components/MotoCard/Motocard';

const Home = () => {
  const [motos, setMotos] = useState([]);
  const [filter, setFilter] = useState([]);
  //const debounceValue = useDebounce(filter, 1000);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios.get('https://63ed61e93d9c852c3f59f7e0.mockapi.io/motos').then((res) => {
      setMotos(res.data);
      setFilter(res.data);
      setLoaded(true);
    });
  }, []);

  const filterFunction = (value) => {
    const arrayFilter = motos.filter((moto) => moto.name.toLowerCase().includes(value));
    setFilter(arrayFilter);
  };

  return (
    <main className="Home">
      <div className="input-wrapper">
        <button className="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            height="25px"
            width="25px"
          >
            <path
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="1.5"
              stroke="#fff"
              d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
            ></path>
            <path
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="1.5"
              stroke="#fff"
              d="M22 22L20 20"
            ></path>
          </svg>
        </button>
        <input
          className="input"
          name="text"
          type="text"
          placeholder="Search..."
          onChange={(ev) => filterFunction(ev.target.value.toLowerCase())}
        />
      </div>

      <div className="Gallery">
        {loaded ? (
          filter.map((moto) => <MotoCard key={moto.id} moto={moto} />)
        ) : (
          <p>Cargando...</p>
        )}
      </div>
    </main>
  );
};
export default Home;
