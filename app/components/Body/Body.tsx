import {selectOverflow, useSelector} from "@/lib/redux";
import React from "react";

export const Body = ({children}: { children: React.ReactNode }) => {
    const overflow = useSelector(selectOverflow)
    return <body className={`${overflow ? 'overflow-hidden' : ''}`}>{children}</body>
}