import React from "react";
import styles from "/styles/KeyboardShortcutsTitle.module.css";

const KeyboardShortcutsTitle = ({ children }) => {
    return (
        <>
            <span className={styles.container}>{children}</span>
        </>
    );
};

export default KeyboardShortcutsTitle;
