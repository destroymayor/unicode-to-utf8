import React, { useState } from "react";
import "page/index.css";

import { Input } from "antd";

import ClipboardButton from "components/clipboard/clipboard";
import TransformItem from "components/transformItem/transformItem";
import { unicodeToChar, charToUnicode } from "utils/unicodeToChar";

const { TextArea } = Input;

// \u4e0a\u6d77
function App() {
  const [encodeValue, setEncodeValue] = useState("");
  const [decodeValue, setDecodeValue] = useState("");

  return (
    <div className="App">
      <a className="github-link" target="_blank" rel="noopener noreferrer" href="https://github.com/destroymayor/unicode-to-utf8">
        GitHub
      </a>
      <TextArea
        className="App-input"
        placeholder={"Input Unicode"}
        rows={4}
        value={encodeValue}
        onChange={e => setEncodeValue(e.target.value)}
      />
      <TransformItem
        unicodeToChar={() => setDecodeValue(unicodeToChar(encodeValue))}
        charToUnicode={() => setEncodeValue(charToUnicode(decodeValue))}
      />
      <TextArea
        className="App-input"
        placeholder={"Result"}
        rows={4}
        value={decodeValue}
        onChange={e => setDecodeValue(e.target.value)}
      />
      <ClipboardButton decodeValue={decodeValue} />
    </div>
  );
}

export default App;
