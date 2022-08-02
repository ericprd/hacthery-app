import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./Components/Home";
import Holding from "./Components/Holding";
import IncubationPhase from "./Components/IncubationPhase";
import InvertilFilter from "./Components/InvertilFilter";
import Status from "./Components/Status";
import Navbar from "./Components/Navbar";
import NotFound from "./Components/NotFound";
import "./App.css";
import "./AppMobile.css";

export default function App() {
  const [stock, setStock] = useState(0);
  const [incubated, setIncubated] = useState(0);
  const [hatched, setHatched] = useState(0);
  const [invertil, setInvertil] = useState(0);

  return (
    <div>
      <Navbar />

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
        <Route path='*' element={<NotFound />} />
      </Routes>

      <Status
        stock={stock}
        incubated={incubated}
        hatched={hatched}
        invertil={invertil}
      />
    </div>
  );
}
