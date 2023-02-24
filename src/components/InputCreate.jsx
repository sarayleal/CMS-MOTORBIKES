import React from 'react';

const InputCreate = ({ type, action }) => {
  return <input onChange={action} type="text" placeholder={type} />;
};

export default InputCreate;
