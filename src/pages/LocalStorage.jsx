import { useState } from 'react';
import LocalStorageComponent from '../components/LocalStorageComponent';

const LocalStorage = () => {
  // Manage the stored value state in the parent
  const [storedValue, setStoredValue] = useState(() => {
    return localStorage.getItem('myKey') || ''; // Initialize with localStorage value
  });

  // Function to update the localStorage and state
  const updateStoredValue = (newValue) => {
    localStorage.setItem('myKey', newValue);
    setStoredValue(newValue); // Update state in the parent
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <p>Stored Value in Parent: {storedValue}</p>
      <LocalStorageComponent
        storedValue={storedValue}
        updateStoredValue={updateStoredValue}
      />
    </div>
  );
};
export default LocalStorage;
