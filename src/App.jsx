import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" component={Home} />
      </Routes>
    </div>
  );
}

export default App;
