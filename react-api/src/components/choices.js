import React from "react";

const Choices = ({ choices }) => {
  return (
    <div>
      {choices.map((choice) => (
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="exampleRadios"
            id="exampleRadios1"
            value="option1"
          />
          <label className="form-check-label" htmlFor="exampleRadios1">
            {choice.choice_text}
          </label>
        </div>
      ))}
    </div>
  );
};

export default Choices;
