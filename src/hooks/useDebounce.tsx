import { useState, useEffect } from "react";

function useDebounce<T>(value: T, delay = 500) {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;

// ดีเลย์ค่าที่เปลี่ยนแปลง

// import { useState } from "react";
// import useDebounce from './hooks/useDebounce';

// const SearchComponent = () => {
//   const [query, setQuery] = useState("");
//   const debouncedQuery = useDebounce(query, 500);

//   return (
//     <div>
//       <input
//         type="text"
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//         placeholder="Search..."
//       />
//       <p>Debounced Query: {debouncedQuery}</p>
//     </div>
//   );
// };
