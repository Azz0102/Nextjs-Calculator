import {EventHandler} from "react";

export const TopNavBarLi = ({id, handleSelect, isSelected, name}: {
    id: string, handleSelect: EventHandler<any>, isSelected: string, name: string
}) => {
    return <li className={`inline-block text-[15px] cursor-pointer mr-[50px] px-0 py-[15px] border-b-2 border-solid ${isSelected
                                                                                                                      === id ?
        'text-[color:var(--highlight-color)] border-[color:var(--redclr)] opacity-100' : 'border-b-transparent'}`}
               id={id} onClick={handleSelect}>{name}
    </li>
}
