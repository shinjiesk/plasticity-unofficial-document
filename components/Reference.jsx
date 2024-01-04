import React from "react";
import { useRouter } from "next/router";
import ButtonIcon from "/components/ButtonIcon";

const Reference = ({ shortcut, command, button, buttonIcon }) => {
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
        de: {
            shortcutLabel: "Tastenkürzel",
            commandLabel: "Befehl",
            buttonLabel: "Schaltfläche",
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
        <div className="w-3/5 p-4 border border-gray-400 rounded-lg mt-4 grid grid-cols-10">
            <div className="col-span-3">{translation.commandLabel}</div>
            <div className="col-span-7 font-bold">{command}</div>
            <div className="col-span-3">{translation.shortcutLabel}</div>
            <div className="col-span-7 font-bold">{shortcut || "-"}</div>
            <div className="col-span-3">{translation.buttonLabel}</div>
            <div className="col-span-7 font-bold">
                {button || "-"}{" "}
                <ButtonIcon type={buttonIcon || "button-none"} />
            </div>
        </div>
    );
};

export default Reference;
