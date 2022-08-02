import { useState } from "react";

export default function InvertilFilter(props) {
  const [percentage, setPercentage] = useState(0);

  const handleChange = (e) => {
    setPercentage(e.target.value);
  };

  const calculate = (e) => {
    e.preventDefault();
    const incubated = Number(props.incubated);

    const invertil = (incubated * percentage) / 100;
    props.setInvertil(Math.floor(invertil));
    props.setHatched(Math.floor(incubated - invertil));
  };
  return (
    <div className='section'>
      <h3 className='section-title'>
        After 18 days we filter the invertil eggs
      </h3>
      <p className='section-description'>
        Here is where we estimate how percent will hatching eggs is not hatched
        and will desroyed in process.
      </p>
      <form onSubmit={calculate}>
        <label>Estimation of invertile: </label>
        <br />
        <input
          className='input invertile-input'
          type='number'
          onChange={handleChange}
          value={percentage}
          max={100}
        />
        <span>%</span>
        <br />
        <button className='submit'>Submit</button>
      </form>
    </div>
  );
}
