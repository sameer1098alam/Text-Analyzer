import React, { useState } from 'react'; // Import useState hook

export default function TextForm(props) {
  const [text, setText] = useState('Enter the text here'); // Uncomment useState declaration

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText); // Update the state with the new uppercase text
  }

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText); // Update the state with the new uppercase text
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  }

  const downloadTextFile = () => {
    const fileBlob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(fileBlob);
    a.download = 'text.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(text);
  }

  return (
    <div className="container my-3">
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" onChange={handleOnChange} id="myBox" rows="8" value={text}></textarea>
      </div>
      <button className="btn btn-primary me-2" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary me-2" onClick={handleLoClick}>Convert to Uppercase</button>
      <button className="btn btn-success me-2" onClick={downloadTextFile}>Download Text</button>
      <button className="btn btn-info" onClick={copyToClipboard}>Copy to Clipboard</button>
      <div className="container mt-3">
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words, {text.length} characters</p>
        <h2>preview</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}
