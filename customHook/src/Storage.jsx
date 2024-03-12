import { useState } from 'react';

const Storage = (key, initialValue) => {
  const [value, setIsValue] = useState(() => JSON.parse(localStorage.getItem(key)) || initialValue);

  const updateValue = (newData) => {
    setIsValue(newData);
    localStorage.setItem(key, JSON.stringify(newData));
    sessionStorage.setItem(key, JSON.stringify(newData));
  };

  return [value, updateValue];
};

export default Storage;