import {ReactNode} from "react";

export const ButtonBox = ({children}: { children: ReactNode }) => {
    return (
        <div className='grid grid-cols-[repeat(4,1fr)] gap-2'>{children}</div>
    )
}

