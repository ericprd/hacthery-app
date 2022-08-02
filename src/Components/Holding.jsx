import { useEffect } from "react";
import InputEgg from "./InputEgg";

export default function Holding(props) {
  useEffect(() => {
    document.title = "Holding";
  }, []);

  const handleSubmit = (val) => {
    return props.setStock((prev) => Number(prev) + Number(val));
  };

  return (
    <div className='section'>
      <h2 className='section-title'>Holding Room</h2>
      <p className='section-description'>
        Here we receive hatch Egg (HE) from Farm, hatching eggs we receive from
        farm then will be our stocks.
      </p>
      <label>Please input how many hatching eggs we receive:</label>
      <InputEgg handleSubmit={handleSubmit} />
      <i className='note'>Received HE (Min: 15,000)</i>
    </div>
  );
}
