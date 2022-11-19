import './App.css';
import ArticlePage from "./ArticlePage";
import {useState} from "react";

function App() {

  const [suitcase, setSuitcase] = useState(0)

  const suitcaseInPounds = Math.round((suitcase * 0.00220462) * 10) / 10

  return (
    <div className="App">
      <div className={suitcaseInPounds > 50 ? "full-header" : "header"}>
        <h1 className="App-header">
          What's your Baggage?
        </h1>
        <h2>
          Once you add items to your suitcase, the weight of your luggage will increase.
        </h2>
      </div>
      <ArticlePage suitcase={suitcase} setSuitcase={setSuitcase} suitcaseInPounds={suitcaseInPounds} />
    </div>
  );
}

export default App;
