import React, { useState } from "react";
import FrontCard from "./components/FrontCard";
import RearCard from "./components/RearCard";
import Form from "./components/Form";

import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    month: "",
    year: "",
    cvv: "",
  });

  return (
    <div className="main">
      <div className="cards">
        <div className="rear-card-container">
          <RearCard formData={formData} />
        </div>
        <div className="front-card-container">
          <FrontCard formData={formData} />
        </div>
      </div>
      <div className="form-container">
        <Form setFormData={setFormData} formData={formData} />
      </div>
    </div>
  );
}

export default App;
