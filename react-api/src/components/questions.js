import React from "react";
/* import Choices from "components/choices";

var linkChoices = "http://localhost:8000/api/choices/";
var init = {
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};

class Choice extends React.Component {
  
  state = {
    choices: [],
  };

  componentDidMount() {
    fetch(linkChoices, init)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          choices: json,
        });
      })
      .catch(console.log);
  }

  render() {
    return <Choices choices={this.state.choices}></Choices>;
  }
} */

const Questions = ({ questions }) => {
  return (
    <div>
      {questions.map((question) => (
        <div className="card my-5 shadow" key={question.id}>
          <div className="card-body p-0">
            <h6 className="card-header h6 m-0 bg-light text-muted">
              Question {question.id}
            </h6>
            <h3 className="card-title h3 p-3">{question.question_text}</h3>
            <small className="px-3 text-muted">{question.pub_date}
{/*               {new Intl.DateTimeFormat("en-GB", {
                year: "numeric",
                month: "long",
                day: "2-digit",
              }).format(question.pub_date)} */}
            </small>
            <div className="form p-3"></div>
          </div>
        </div>
      ))}
      <a href="#" className="btn btn-lg btn-info w-100 shadow-sm">
        Send
      </a>
    </div>
  );
};

export default Questions;
