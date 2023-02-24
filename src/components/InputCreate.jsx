import React from 'react';

const InputCreate = ({ type, newMoto, setNewMoto }) => {
  return (
    <input
      type="text"
      placeholder={type}
      onChange={(ev) => setNewMoto({ ...newMoto, type: ev.target.value })}
    />
  );
};

export default InputCreate;
