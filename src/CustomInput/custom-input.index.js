import './custom-input.css';

export default function CustomInput({currentValue, setValue}) {
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <input type='text' value={currentValue} onChange={handleChange}/>
  )
}