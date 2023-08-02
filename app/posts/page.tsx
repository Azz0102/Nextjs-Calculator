import React, {Suspense} from "react";
import {getPost} from "@/app/posts/getPost";
import Loading from "@/app/posts/loading";
import {PostForm} from "@/app/components/PostForm/PostForm";
import {Post} from "@/app/components/Post/Post";
import {CmtList} from "@/app/components/Post/CmtList";

export default async function IndexPage() {

    const {data} = await getPost();

    return (<Suspense fallback={<Loading/>}>
            <PostForm/>
            {/*<PostList data={data}/>*/}
            <ul className="list-none mt-20">
                {data.map((value: any, i: number) => (
                    <Post value={value} id={i}>
                        <CmtList id={value.id}/>
                    </Post>
                ))}
            </ul>
        </Suspense>
    )
}
