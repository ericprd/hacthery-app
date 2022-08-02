import InputEgg from "./InputEgg";

export default function IncubationPhase(props) {
  const handleSubmit = (val) => {
    const valNum = Number(val);
    const stockNum = Number(props.stock);
    if (valNum <= stockNum) {
      props.setIncubated(valNum);
      return props.setStock(stockNum - valNum);
    } else {
      alert("Not Enough Eggs");
    }
  };
  return (
    <div className='section'>
      <h2 className='section-title'>Incubation Phase</h2>
      <p className='section-description'>
        Here we will set how many hatching eggs that we will hatch, but we must
        calculate how many request form client
      </p>
      <label>Input how much eggs that you want to hatch: </label>
      <InputEgg handleSubmit={handleSubmit} />
      <i className='note'>Minimum is 15,000 eggs</i>
    </div>
  );
}
