import {ReactNode} from "react";

export const Wrapper = ({children}: { children: ReactNode }) => {
    return (
        <div
            className='w-96 bg-zinc-700 shadow-[0px_9px_15px_-3px_rgba(0,0,0,0.1)] grid mt-16 p-8 rounded-2xl '>{children}</div>
    )
}

