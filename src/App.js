import React, { useState, useEffect } from "react";
import "./App.css";
import Input from "@material-ui/core/Input";

// \u4e0a\u6d77
function App() {
  const [value, setValue] = useState("");
  const [decodeValue, setDecodeValue] = useState("");

  const unicodeToChar = text => {
    return text.replace(/\\u[\dA-F]{4}/gi, function(match) {
      return String.fromCharCode(parseInt(match.replace(/\\u/g, ""), 16));
    });
  };

  useEffect(() => {
    setDecodeValue(unicodeToChar(value));
  }, [value]);

  return (
    <div className="App">
      <Input multiline={true} value={value} onChange={e => setValue(e.target.value)} />
      {decodeValue}
    </div>
  );
}

export default App;
