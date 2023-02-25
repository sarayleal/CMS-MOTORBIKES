import React from 'react';

const SelectCreate = ({ options, action }) => {
  return (
    <select onChange={action}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default SelectCreate;
