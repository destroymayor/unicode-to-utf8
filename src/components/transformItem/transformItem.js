import React from "react";
import "components/transformItem/transformItem.css";

import { Button } from "antd";

export default props => {
  return (
    <div class="transformItem">
      <Button className="transformItem-btn" onClick={props.unicodeToChar} icon="arrow-down">
        To String
      </Button>
      <Button className="transformItem-btn" onClick={props.charToUnicode} icon="arrow-up">
        To Unicode
      </Button>
    </div>
  );
};
