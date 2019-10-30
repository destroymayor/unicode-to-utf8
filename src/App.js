import React, { useState, useEffect } from "react";
import "./App.css";

import { Input, Icon } from "antd";

import ClipboardButton from "components/clipboard";
import unicodeToChar from "utils/unicodeToChar";

const { TextArea } = Input;

// \u4e0a\u6d77
function App() {
  const [encodeValue, setEncodeValue] = useState("");
  const [decodeValue, setDecodeValue] = useState("");

  useEffect(() => {
    setDecodeValue(unicodeToChar(encodeValue));
  }, [encodeValue]);

  return (
    <div className="App">
      <TextArea
        className="App-input"
        placeholder={"Input Unicode"}
        rows={4}
        value={encodeValue}
        onChange={e => setEncodeValue(e.target.value)}
      />
      <Icon className="App-icon" type="arrow-down" />
      <TextArea className="App-input" placeholder={"Result"} rows={4} value={decodeValue} />
      <ClipboardButton decodeValue={decodeValue} />
    </div>
  );
}

export default App;
