export default function Status(props) {
  return (
    <footer className='status'>
      <p className='status-item'>
        Stock: <br />
        {props.stock}
      </p>
      <p className='status-item'>
        Incubated: <br />
        {props.incubated}
      </p>
      <p className='status-item'>
        Hacthed: <br />
        {props.hatched}
      </p>
      <p className='status-item'>
        Invertil: <br />
        {props.invertil}
      </p>
    </footer>
  );
}
