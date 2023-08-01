import {Post} from "@/app/components/Post/Post";
import {CmtList} from "@/app/components/Post/CmtList";
import React from "react";

export const PostList = (data: any)=>{
    return (<ul className="list-none mt-20">
        {data.map((value: any, i: number) => (
            <Post value={value} id={i}>
                <CmtList id={value.id}/>
            </Post>
        ))}
    </ul>)
}