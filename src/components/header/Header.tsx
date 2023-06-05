"use client";

import Link from "next/link";
import React from "react";
import _ from "lodash";
import styles from "./header.module.css";

const links = [
    {
        id: 1,
        title: "Home",
        url: "/",
    },
    {
        id: 2,
        title: "Protfolio",
        url: "/portfolio",
    },
    {
        id: 3,
        title: "Blog",
        url: "/blog",
    },
    {
        id: 4,
        title: "About",
        url: "/about",
    },
    {
        id: 5,
        title: "Contact",
        url: "/contact",
    },
    {
        id: 6,
        title: "Dashboard",
        url: "/dashboard",
    },
];

export default function Header() {
    return (
        <header className={styles.container}>
            <nav>
                {_.map(links, (el, idx) => {
                    return (
                        <Link key={el.id} href={el.url}>
                            {el.title}
                        </Link>
                    );
                })}
            </nav>
            <button
                onClick={() => {
                    console.log("logged out!");
                }}
            >
                Logout
            </button>
        </header>
    );
}
