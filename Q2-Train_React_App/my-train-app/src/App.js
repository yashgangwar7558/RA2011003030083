import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import AllTrains from "./components/AllTrains";
import SpecificTrain from "./components/SpecificTrain";

function App() {
  return (

    <Router>

      <Routes>

      <Route path='/' element={<AllTrains/>} />

      <Route path='/train' element={<SpecificTrain/>} />

      </Routes>

    </Router>

  );
}

export default App;
