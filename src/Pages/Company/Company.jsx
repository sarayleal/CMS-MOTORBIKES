import './Company.css';

import { useContext } from 'react';

import { UserContext } from '../../components/context/userContext';

const Company = () => {
  const { user } = useContext(UserContext);
  return (
    <main className="Company">
      <h1>Company, Wellcome {user}</h1>
    </main>
  );
};
export default Company;
