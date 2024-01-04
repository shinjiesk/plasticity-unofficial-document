import React from "react";
import Image from "next/image";
import styles from "/styles/ButtonIcon.module.css";

function ButtonImage({ type, double = false }) {
    const imagePath = `/img/${type}.png`;

    return (
        <span className={styles.buttonIcon}>
            {double ? (
                <Image src={imagePath} alt={type} width={68} height={32} />
            ) : (
                <Image src={imagePath} alt={type} width={32} height={32} />
            )}
        </span>
    );
}

export default ButtonImage;
