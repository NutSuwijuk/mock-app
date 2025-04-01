import { useEffect, RefObject } from "react";

function useClickOutside(ref: RefObject<HTMLElement | null>, callback: () => void) {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref && ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [ref, callback]);
}

export default useClickOutside;

// ตรวจจับการคลิกรอบนอกของ Element

// import { useRef, useState } from "react";
// import useClickOutside from './hooks/useClickOutside';

// const Modal = () => {
//   const [open, setOpen] = useState(false);
//   const modalRef = useRef(null);

//   useClickOutside(modalRef, () => setOpen(false));

//   return (
//     <div>
//       <button onClick={() => setOpen(true)}>Open Modal</button>
//       {open && (
//         <div ref={modalRef} style={{ background: "white", padding: "20px" }}>
//           <p>This is a modal</p>
//         </div>
//       )}
//     </div>
//   );
// };
