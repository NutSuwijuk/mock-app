import { useState, useEffect } from "react";

function useSessionStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = sessionStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    sessionStorage.setItem(key, JSON.stringify(storedValue));
  }, [key, storedValue]);

  return [storedValue, setStoredValue] as const;
}

export default useSessionStorage;

// จัดการ Session Storage

// import useSessionStorage from './hooks/useSessionStorage';

// const SessionStorageComponent = () => {
//   const [sessionData, setSessionData] = useSessionStorage("userSession", { name: 'John Doe' });

//   return (
//     <div>
//       <p>{sessionData.name}</p>
//       <button onClick={() => setSessionData({ name: 'Jane Doe' })}>Change Name</button>
//     </div>
//   );
// };