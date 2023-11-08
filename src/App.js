import { useState } from "react";
import "./styles.css";

export default function App() {
  const [name, setName] = useState();
  const [surname, setSurName] = useState();

  function onChange1(e) {
    setName(e.target.value);
  }

  function onChange2(e) {
    setSurName(e.target.value);
  }

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <div>
        <label>
          İsim
          <input onChange={onChange1} value={name} />
        </label>
      </div>
      <div>
        <label>
          Soyisim
          <input onChange={onChange2} value={surname} />
        </label>
      </div>
      <div />
    </div>
  );
}
