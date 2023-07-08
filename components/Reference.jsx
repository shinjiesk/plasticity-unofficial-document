import React from "react";
import { useRouter } from "next/router";

const Reference = ({ shortcut, command, button }) => {
  const router = useRouter();
  const { locale } = router;

  const translations = {
    ja: {
      shortcutLabel: "ショートカット",
      commandLabel: "コマンド",
      buttonLabel: "ボタン",
    },
    en: {
      shortcutLabel: "Shortcut",
      commandLabel: "Command",
      buttonLabel: "Button",
    },
    // If a new locale is added, add it here.
    // fr: {
    //   shortcutLabel: "Raccourci",
    //   commandLabel: "Commande",
    //   buttonLabel: "Bouton",
    // },
  };

  const translation = translations[locale] || translations.en;

  return (
    <div className="reference">
      <table>
        <tbody>
          <tr>
            <td className="label">{translation.commandLabel}</td>
            <td className="value">{command}</td>
          </tr>
          <tr>
            <td className="label">{translation.shortcutLabel}</td>
            <td className="value">{shortcut || "--"}</td>
          </tr>
          <tr>
            <td className="label">{translation.buttonLabel}</td>
            <td className="value">{button || "--"}</td>
          </tr>
        </tbody>
      </table>

      <style jsx>{`
        .reference {
          width: 50%;
          background-color: #f5f5f5;
          padding: 16px;
          border-radius: 4px;
        }

        table {
          width: 100%;
          table-layout: fixed;
        }

        .label {
          width: 30%;
        }

        .value {
          width: 70%;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

export default Reference;

/* 
import React from "react";
import { useRouter } from "next/router";

const Reference = ({ shortcut, command, button }) => {
  const router = useRouter();
  const { locale } = router;

  const translations = {
    ja: {
      shortcutLabel: "ショートカット",
      commandLabel: "コマンド",
      buttonLabel: "ボタン",
    },
    en: {
      shortcutLabel: "Shortcut",
      commandLabel: "Command",
      buttonLabel: "Button",
    },
    // もし新しいロケールが追加された場合は、ここに追加する
    // fr: {
    //   shortcutLabel: "Raccourci",
    //   commandLabel: "Commande",
    //   buttonLabel: "Bouton",
    // },
  };

  const translation = translations[locale] || translations.en;

  return (
    <div className="reference bg-gray-200 p-4 rounded-lg">
      <table className="w-full">
        <tbody>
          <tr>
            <td className="font-bold w-2/5">{translation.commandLabel}</td>
            <td className="w-3/5">{command}</td>
          </tr>
          <tr>
            <td className="font-bold w-2/5">{translation.shortcutLabel}</td>
            <td className="w-3/5">{shortcut || "--"}</td>
          </tr>
          <tr>
            <td className="font-bold w-2/5">{translation.buttonLabel}</td>
            <td className="w-3/5">{button || "--"}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Reference;
 */
