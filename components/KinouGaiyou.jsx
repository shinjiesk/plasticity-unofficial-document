import React from "react";
import { Callout } from "nextra/components";

const KinouGaiyou = ({ shortcut, command, button }) => {
  const keys = shortcut.split("+").map((key, index) => (
    <React.Fragment key={index}>
      <code>{key.trim()}</code>
      {index < shortcut.split("+").length - 1 && "+"}
    </React.Fragment>
  ));

  return (
    <Callout emoji="">
      <ul>
        <li>ショートカット :{shortcut ? <strong>{keys}</strong> : "なし"}</li>
        <li>
          コマンド: <strong>{command}</strong>
        </li>
        <li>ボタン :{button ? <strong>{button}</strong> : "なし"}</li>
      </ul>
    </Callout>
  );
};

export default KinouGaiyou;
