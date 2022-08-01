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
    props.setInvertil(invertil);
    props.setHatched(incubated - invertil);
  };
  return (
    <div>
      <h3>After 18 days we filter the invertil eggs</h3>
      <form onSubmit={calculate}>
        <label>Estimation of invertil (%): </label>
        <input type='number' onChange={handleChange} value={percentage} />
        <button>Submit</button>
      </form>
    </div>
  );
}
