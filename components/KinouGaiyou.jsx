import React from "react";
import { useRouter } from "next/router";
import { Callout } from "nextra/components";

const KinouGaiyou = ({ shortcut, command, button }) => {
  const router = useRouter();
  const { locale } = router;

  const keys = shortcut.split("+").map((key, index) => (
    <React.Fragment key={index}>
      <code>{key.trim()}</code>
      {index < shortcut.split("+").length - 1 && "+"}
    </React.Fragment>
  ));

  return (
    <Callout emoji="">
      <ul>
        <li>
          {locale === "ja" ? "ショートカット" : "Shortcut"}:{" "}
          {shortcut ? <strong>{keys}</strong> : "--"}
        </li>
        <li>
          {locale === "ja" ? "コマンド" : "Command"}: <strong>{command}</strong>
        </li>
        <li>
          {locale === "ja" ? "ボタン" : "Button"}:{" "}
          {button ? <strong>{button}</strong> : "--"}
        </li>
      </ul>
    </Callout>
  );
};

export default KinouGaiyou;
