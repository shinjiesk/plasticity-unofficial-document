// CopyToClipboard.js

import React, { useState } from "react";

export default function CopyToClipboard({ text }) {
  const [tooltipText, setTooltipText] = useState("Copy mail address");

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(text);
      console.log("Text copied to clipboard");
      setTooltipText("Copied!");
      // Reset the tooltip after 3 seconds
      setTimeout(() => setTooltipText("Copy mail address"), 3000);
    } catch (err) {
      console.error("Error in copying text: ", err);
    }
  };

  return (
    <button onClick={copyToClipboard} title={tooltipText}>
      Copy to clipboard
    </button>
  );
}
