import React from 'react';

const InputCreate = ({ type, action, value }) => {
  return <input onChange={action} type="text" value={value} placeholder={type} />;
};

export default InputCreate;
