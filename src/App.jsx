import { useState } from "react";
import "./App.css";
import Quote from "./components/Quote/Quote";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <Quote />
      </div>
    </>
  );
}

export default App;
