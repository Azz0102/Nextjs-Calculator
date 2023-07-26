import {ReactNode} from "react";

export const Wrapper = ({children}: { children: ReactNode }) => {
    return (
        <div
            className='w-80 shadow-[0px_9px_15px_-3px_rgba(0,0,0,0.1)] grid mt-16 p-8 rounded-2xl bg-gray-50'>{children}</div>
    )
}

