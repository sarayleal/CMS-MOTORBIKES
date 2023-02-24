import React from 'react';

const InputEdit = ({ type, action, value }) => {
  return <input value={value} onChange={action} type="text" placeholder={type} />;
};

export default InputEdit;
