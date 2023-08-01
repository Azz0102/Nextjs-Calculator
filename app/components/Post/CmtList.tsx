import {getCmt} from "@/app/components/Post/getCmt";
import React from "react";
import {Cmt} from "@/app/components/Post/Cmt";

export const CmtList = async ({id}: { id: any }) => {

    const {data} = await getCmt(id);

    return (<ul className="flex flex-col">
        {data.map((value: any, i: number) => (
            <Cmt value={value} id={i}/>
        ))}
    </ul>)
}