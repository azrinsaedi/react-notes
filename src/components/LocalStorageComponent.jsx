import { useEffect } from 'react';

const LocalStorageComponent = ({ storedValue, updateStoredValue }) => {
  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === 'myKey') {
        updateStoredValue(event.newValue); // Update state in the parent
      }
    };

    // Listen for storage events
    window.addEventListener('storage', handleStorageChange);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [updateStoredValue]);

  return (
    <>
      <div>
        <p>Stored Value in Child: {storedValue}</p>
        <button onClick={() => updateStoredValue(JSON.stringify(new Date()))}>
          Update Value
        </button>
      </div>
    </>
  );
};
export default LocalStorageComponent;
