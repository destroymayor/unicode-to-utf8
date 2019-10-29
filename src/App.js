import React, { useState, useEffect } from "react";
import "./App.css";

import { Button, Input, Icon, message } from "antd";
import useClippy from "use-clippy";

import unicodeToChar from "utils/unicodeToChar";

const { TextArea } = Input;

// \u4e0a\u6d77
function App() {
  const [encodeValue, setEncodeValue] = useState("");
  const [decodeValue, setDecodeValue] = useState("");

  const [clipboard, setClipboard] = useClippy();

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
      <Button
        icon="copy"
        onClick={() => {
          setClipboard(decodeValue);
          message.success(`Your clipboard contains: ${clipboard}`);
        }}>
        Copy
      </Button>
    </div>
  );
}

export default App;
