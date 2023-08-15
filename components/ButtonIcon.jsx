import React from "react";
import Image from "next/image";
import styles from 'styles/ButtonIcon.module.css'

function ButtonImage({ type }) {
    const imagePath = `/img/${type}.png`;

    return (
        <span className={styles.buttonIcon}>
            <Image src={imagePath} alt={type} width={32} height={32} />
        </span>
    );
}

export default ButtonImage;
