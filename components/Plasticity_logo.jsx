import React from "react";
import Image from "next/image";
import Logo from "public/img/plasticity_logo.png";
import styles from "styles/Plasticity_logo.module.css";

function Plasticity_logo() {
    return (
        <span className={styles.logo}>
            <Image src={Logo} alt="Plasticity Logo" width={60} height={60} />
        </span>
    );
}

export default Plasticity_logo;
