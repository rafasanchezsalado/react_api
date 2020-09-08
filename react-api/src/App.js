import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Questions from "./components/questions";

/* 
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
} 
*/

var linkQuestions = "http://localhost:8000/api/questions/";
var init = {
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};

class App extends React.Component {
  
  state = {
    questions: [],
  };

  componentDidMount() {
    fetch(linkQuestions, init)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          questions: json,
        });
      })
      .catch(console.log);
  }

  render() {
    return <Questions questions={this.state.questions}></Questions>;
  }
}

export default App;
