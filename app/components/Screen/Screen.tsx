import {selectNum, selectRes, selectSign, useSelector} from "@/lib/redux";

export const Screen = () => {
    const num = useSelector(selectNum)
    const res = useSelector(selectRes)
    const sign = useSelector(selectSign)
    let prev = `${res} ${sign}`

    return (
        <div className='bg-amber-700 col-span-full h-20 flex flex-col items-end justify-around break-all mb-2 p-3'>
            <div className='text-white text-2xl'>{prev}</div>
            <div className='text-white text-[2.5rem]'>{num}</div>
        </div>
    )
}

