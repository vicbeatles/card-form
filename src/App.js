import FrontCard from "./components/FrontCard";
import RearCard from "./components/RearCard";
import Form from "./components/Form";
import "./App.css";

function App() {
  return (
    <div className="main">
      <div className="cards">
      <div className="rear-card-container"><RearCard /></div>
        <div className="front-card-container"><FrontCard /></div>
      </div>
      <div className="form-container">
        <Form />
      </div>
    </div>
  );
}

export default App;
