import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className='nav'>
      <Link to='/' className='nav-menu'>
        Home
      </Link>
      <Link to='holding' className='nav-menu'>
        Holding
      </Link>
      <Link to='incubate' className='nav-menu'>
        Incubate
      </Link>
      <Link to='hatch' className='nav-menu'>
        Hatch
      </Link>
    </nav>
  );
}
