import FrontCard from "./components/FrontCard";
import RearCard from "./components/RearCard";
import "./App.css";

function App() {
  return (
    <div className="main">
      <div className="cards">
        <div className="front-card-container"><FrontCard /></div>
        <div className="rear-card-container"><RearCard /></div>
      </div>
      <div className="form"></div>
    </div>
  );
}

export default App;
