import React from "react";
// import logo from "./logo.svg";
import "./App.css";

/* function App() {
  return (
    <div className="App">
      <header className="App-header p-2">
                 <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
} */

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <div className="card m-5">
          <h6 className="card-header h6 p-2 m-0 bg-light text-muted">
            Question #
          </h6>
          <div className="card-body">
            <h3 className="card-title h3 mb-3">Question...?</h3>
            <div className="form">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios1"
                  value="option1"
                  checked
                />
                <label className="form-check-label" for="exampleRadios1">
                  Choice 1
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios2"
                  value="option2"
                />
                <label className="form-check-label" for="exampleRadios2">
                  Choice 2
                </label>
              </div>
              <a href="#" className="btn btn-md btn-info mt-3 w-100">
                Send
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
