import {ReactNode} from "react";

export const Wrapper = ({children}: { children: ReactNode }) => {
    return (
        <div
            className='max-[280px]:w-72 max-[280px]:p-1 w-96 bg-zinc-700 shadow-[0px_9px_15px_-3px_rgba(0,0,0,0.1)] grid mt-40 p-8 rounded-2xl'>{children}</div>
    )
}

