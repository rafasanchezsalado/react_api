import React from "react";

const Questions = ({ questions }) => {
  return (
    <div>
    {
    /*      
    <center>
        <h1>Preguntas</h1>
    </center>
    */
    }
      {questions.map((question) => (
        <div className="card my-5 shadow" key={question.id}>
          <div className="card-body p-0">
            <h6 className="card-header h6 m-0 bg-light text-muted">
              Question {question.id}
            </h6>
            <h3 className="card-title h3 p-3">{question.question_text}</h3>
            <small className="px-3 text-muted">{question.pub_date}</small>
            <div className="form p-3">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios1"
                  value="option1"
                />
                <label className="form-check-label" htmlFor="exampleRadios1">
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
                <label className="form-check-label" htmlFor="exampleRadios2">
                  Choice 2
                </label>
              </div>
            </div>
          </div>
        </div>
      ))}
        <a href="#" className="btn btn-lg btn-info w-100 shadow-sm">Send</a>
    </div>
  );
};

export default Questions;
