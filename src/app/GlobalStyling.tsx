import React from "react";

export default function GlobalStyling() {
    return (
        <style jsx global>
            {`
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                    color: red !important;
                }
            `}
        </style>
    );
}
