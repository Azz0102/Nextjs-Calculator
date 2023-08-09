import {EventHandler} from "react";

export const LeftNavBarLi = ({id, isSelectedLeft, setIsSelectedLeft, name}: {
    id: string, setIsSelectedLeft: EventHandler<any>, isSelectedLeft: string, name: string
}) => {
    return <li className={`relative z-[2] text-sm cursor-auto w-[92%] pl-2.5 px-0 py-[5px]
                            before:content-[""] before:w-full before:bg-transparent before:h-full before:absolute before:z-[-1] before:transition-[background-color] before:duration-[0.4s] before:ease-[ease] before:left-0 before:top-0
                            after:bg-[-107px_-77px] after:top-[calc(50%_-_7px)] after:content-[""] after:w-[13px] after:h-[13px] after:absolute after:bg-[500px_auto] after:bg-[image:var(--bg-icon-arrow)] after:bg-no-repeat hover:after:scale-[0.8] hover:after:right-2.5 hover:after:opacity-100 after:transition-all after:duration-[0.6s] hover:after:ease-[ease]
                                    ${isSelectedLeft === id ? 'after:right-2.5 after:opacity-100 after:scale-[0.8] bg-[color:var(--bg-color)] text-[color:var(--highlight-color)]' :
        'after:right-[30px] after:opacity-0 '}
                                    `} onMouseEnter={setIsSelectedLeft} id={id}>
        <span className='w-[180px] cursor-pointer block'>{name}</span>
    </li>
}