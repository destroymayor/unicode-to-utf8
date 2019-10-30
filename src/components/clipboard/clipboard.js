import React, { useEffect, useCallback } from "react";
import { Button, message } from "antd";
import { useClipboard } from "use-clipboard-copy";

export default props => {
  const clipboard = useClipboard({ copiedTimeout: 600 });

  useEffect(() => {
    if (props.decodeValue !== "") {
      clipboard.copied && message.success(`Your clipboard contains: ${props.decodeValue}`);
    }
  }, [clipboard.copied, props.decodeValue]);

  const handleClipboard = useCallback(() => {
    clipboard.copy(props.decodeValue);
  }, [clipboard, props.decodeValue]);

  return (
    <Button icon="copy" onClick={handleClipboard}>
      Copy
    </Button>
  );
};
