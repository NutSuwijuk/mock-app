import { useState } from "react";

function useForm<T>(initialValues: T) {
  const [values, setValues] = useState<T>(initialValues);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const resetForm = () => setValues(initialValues);

  return { values, handleChange, resetForm };
}

export default useForm;

// จัดการฟอร์ม (ค่าฟอร์ม, การเปลี่ยนแปลง, รีเซ็ต)

// import useForm from './hooks/useForm';

// const MyForm = () => {
//   const { values, handleChange, resetForm } = useForm({ name: '', email: '' });

//   return (
//     <form>
//       <input 
//         type="text" 
//         name="name" 
//         value={values.name} 
//         onChange={handleChange} 
//       />
//       <input 
//         type="email" 
//         name="email" 
//         value={values.email} 
//         onChange={handleChange} 
//       />
//       <button type="button" onClick={resetForm}>Reset</button>
//     </form>
//   );
// };