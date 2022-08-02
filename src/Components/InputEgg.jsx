import { useState } from "react";

export default function InputEgg(props) {
  const [eggs, setEggs] = useState(0);
  const handleChange = (e) => {
    setEggs(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (eggs < 15000) {
      alert("Too Little");
    } else {
      props.handleSubmit(eggs);
      setEggs(0);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        className='input'
        type='number'
        onChange={handleChange}
        value={eggs}
      />
      <br />
      <button className='submit'>Submit</button>
    </form>
  );
}
