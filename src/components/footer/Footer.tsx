"use client";

import React from "react";
import styles from "./footer.module.css";

export default function Footer() {
    console.log("hello");
    return (
        <footer className={styles.container}>
            <div>©2023. All rights reserved.</div>
        </footer>
    );
}
