import React, { useState } from "react";
import FrontCard from "./components/FrontCard";
import RearCard from "./components/RearCard";
import Form from "./components/Form";
import SubmitMessage from "./components/SubmitMessage";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "CARDHOLDER NAME",
    number: "0000 0000 0000 0000",
    month: "00",
    year: "00",
    cvv: "000",
    submitted: false,
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
        {formData.submitted ? (
          <SubmitMessage />
        ) : (
          <Form setFormData={setFormData} formData={formData} />
        )}
      </div>
    </div>
  );
}

export default App;
