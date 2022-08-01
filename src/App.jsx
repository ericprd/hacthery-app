import { Link, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Home from "./Components/Home";
import Holding from "./Components/Holding";
import IncubationPhase from "./Components/IncubationPhase";
import InvertilFilter from "./Components/InvertilFilter";
import "./App.css";

export default function App() {
  const [stock, setStock] = useState(0);
  const [incubated, setIncubated] = useState(0);
  const [hatched, setHatched] = useState(0);
  const [invertil, setInvertil] = useState(0);

  return (
    <div>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='holding'>Holding</Link>
        <Link to='incubate'>Incubate</Link>
        <Link to='hatch'>Hatch</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='holding' element={<Holding setStock={setStock} />} />
        <Route
          path='incubate'
          element={
            <IncubationPhase
              setIncubated={setIncubated}
              stock={stock}
              setStock={setStock}
            />
          }
        />
        <Route
          path='hatch'
          element={
            <InvertilFilter
              setHatched={setHatched}
              setInvertil={setInvertil}
              incubated={incubated}
            />
          }
        />
      </Routes>

      <h3>Stock: {stock}</h3>
      <h3>Incubated: {incubated}</h3>
      <h3>Hacthed: {hatched}</h3>
      <h3>Invertil: {invertil}</h3>
    </div>
  );
}
