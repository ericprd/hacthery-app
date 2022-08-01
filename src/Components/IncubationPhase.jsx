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
    <div>
      <label>Input how much eggs that you want to hatch (Min: 15,000): </label>
      <InputEgg handleSubmit={handleSubmit} />
    </div>
  );
}
