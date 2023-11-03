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
        de: {
            shortcutLabel: "Tastenkombination",
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
                    padding: 16px;
                    border: 1px solid #888;
                    border-radius: 6px;
                    margin-top: 1rem;
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
