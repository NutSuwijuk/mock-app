import { useState, useEffect } from "react";

function useThrottle<T>(value: T, limit = 500) {
  const [throttledValue, setThrottledValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => setThrottledValue(value), limit);
    return () => clearTimeout(handler);
  }, [value, limit]);

  return throttledValue;
}

export default useThrottle;

// ควบคุมความถี่ของ event

// import { useState } from "react";
// import useThrottle from './hooks/useThrottle';

// const ScrollComponent = () => {
//   const [scrollPosition, setScrollPosition] = useState(0);
//   const throttledPosition = useThrottle(scrollPosition, 200);

//   const handleScroll = () => {
//     setScrollPosition(window.scrollY);
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div>
//       <p>Throttled Scroll Position: {throttledPosition}</p>
//     </div>
//   );
// };
