import InputEgg from "./InputEgg";

export default function Holding(props) {
  const handleSubmit = (val) => {
    return props.setStock(val);
  };

  return (
    <div>
      <h2>Holding Room</h2>
      <p>Here we receive hatch Egg (HE) from Farm</p>
      <label>Received HE (Min: 15,000): </label>
      <InputEgg handleSubmit={handleSubmit} />
    </div>
  );
}
