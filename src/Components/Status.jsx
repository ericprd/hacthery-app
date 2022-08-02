export default function Status(props) {
  return (
    <footer className='status'>
      <h3 className='status-item'>Stock: {props.stock}</h3>
      <h3 className='status-item'>Incubated: {props.incubated}</h3>
      <h3 className='status-item'>Hacthed: {props.hatched}</h3>
      <h3 className='status-item'>Invertil: {props.invertil}</h3>
    </footer>
  );
}
