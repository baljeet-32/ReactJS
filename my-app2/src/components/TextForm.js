import React, { useState } from "react";

export default function TextForm() {
  const handleOnChange = (e) => {
    setInputText(e.target.value);
  };

  const changeToLowerCase = () => {
    let newText = inputtext.toLowerCase();
    setOutputText(newText);
  };
  const changeToUpperCase = () => {
    let newText = inputtext.toUpperCase();
    setOutputText(newText);
  };

  const countWords = () => {
    let s = inputtext;
    let arr = s.split(" ");
    setOutputText("No of Words : " + arr.filter((word) => word !== "").length);
  };

  const countChar = () => {
    let x = inputtext;
    setOutputText("No of Character : " + x.length);
  };
  const [inputtext, setInputText] = useState("Enter Your Text Here . . . ");
  const [outputtext, setOutputText] = useState("");

  return (
    <div className="container my-3">
      <h5>Enter Your Text Here :</h5>
      <textarea
        className="mt-3 form-control bg-dark text-white"
        rows="8"
        value={inputtext}
        onChange={handleOnChange}
      />
      <h5 className="my-4">Result Box : </h5>
      <textarea
        className="mt-3 form-control bg-dark text-white"
        rows="8"
        value={outputtext}
      />

      <h5 className="my-5">Perform Operation : </h5>
      <div className="my-3 ">
        <button
          className="m-1 btn btn-outline-primary"
          onClick={changeToUpperCase}
        >
          Convert to Uppercase
        </button>
        <button
          className="m-1 btn btn-outline-primary"
          onClick={changeToLowerCase}
        >
          Convert to LowerCase
        </button>
        <button className="m-1 btn btn-outline-primary" onClick={countWords}>
          Count Words
        </button>
        <button className="m-1 btn btn-outline-primary" onClick={countChar}>
          Count Character
        </button>
      </div>
    </div>
  );
}
