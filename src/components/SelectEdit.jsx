import React from 'react';

const SelectEdit = ({ options, action, value }) => {
  return (
    <select value={value} onChange={action}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default SelectEdit;
