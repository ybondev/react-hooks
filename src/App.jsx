import { useState } from "react";
import "./App.css";

function App() {
  // USESTATE USING NUMBER
  const [counter, setCounter] = useState(0);

  const INCREMENT = () => {
    setCounter(counter + 1);
  };

  // USESTATE USING ONCHANGE
  const [val, setVal] = useState("");

  const HANDLE_VALUE = (event) => {
    const newValue = event.target.value;

    setVal(newValue);
  };

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">USESTATE COUNTER</div>
              <div className="card-body">
                <div className="counter-container">
                  <div className="counter-value">{counter}</div>
                  <button
                    className="btn btn-primary float-end"
                    onClick={INCREMENT}
                  >
                    Increment
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">USESTATE ONCHANGE</div>
              <div className="card-body">
                <div className="input-container">
                  <div className="input-value mb-3">{val}</div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter some text"
                    onChange={HANDLE_VALUE}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
