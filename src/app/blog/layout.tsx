import React from "react";

interface Props {
    children: React.ReactNode;
}

export default function BlogLayout({ children }: Props) {
    return (
        <div>
            <h1>This is blog</h1>
            {children}
        </div>
    );
}
