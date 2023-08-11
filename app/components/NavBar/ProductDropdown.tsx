import React, {Dispatch, SetStateAction, useRef, useState} from "react";
import {ProductNavBar} from "@/app/components/NavBar/ProductNavBar";
import {counterSlice, useDispatch} from "@/lib/redux";
import useOnClickOutside from "@/app/helper/OnClickOutSideHook";

export const ProductDropdown = ({isToggle, setIsToggle}: { isToggle: string, setIsToggle: Dispatch<SetStateAction<string>> }) => {
    const dispatch = useDispatch()

    return <li className='relative inline-block mr-[35px] font-[opensansregular]' >
        <span
            className={`cursor-pointer text-[17px] text-[color:var(--primary-color)] tracking-[-0.2px] transition-[color] duration-[0.4s] ease-[ease]
                after:text-clip hover:text-[color:var(--highlight-color)] ${isToggle === '1' ? 'text-[color:var(--highlight-color)]'
                                                                                             : 'hover:text-[color:var(--highlight-color)]'}`}
            onClick={() => {
                setIsToggle(() => {
                    if (isToggle !== '1') {
                        dispatch(counterSlice.actions.setOverflow(true))
                        return '1'
                    }
                    else {
                        dispatch(counterSlice.actions.setOverflow(false))
                        return '0'
                    }
                })
            }} id='SP'>Sản phẩm
                                <span
                                    className={`after:content-[""]
                                        after:inline-block after:relative 
                                        after:clear-both after:ml-[7px] after:transition-all after:duration-[0.3s] after:ease-[ease] after:p-[3.3px] after:border-[solid] after:border-[#777] after:border-r
                                        after:border-b after:border-t-0 after:border-l-0 after:font-[opensansregular]
                                        after:-top-0.5 ${isToggle === '1' ? 'after:rotate-[-135deg] after:border-[color:var(--highlight-color)]'
                                                                            + ' after:top-0.5'
                                                                          : 'after:text-[color:var(--primary-color)] after:rotate-45'}`}>
                                </span>
                                </span>
        <div
            className={`w-[260px] absolute z-[9999] bg-white shadow-[0_11px_90px_0_rgba(65,67,132,0.13)]  duration-[0.2s,0.2s,0.2s] ease-[ease,ease,ease] delay-[0s,0s,0s] transition-[transform,opacity,visibility] origin-[0_0] opacity-0 border translate-y-0 pointer-events-none px-0 py-[15px] rounded-[3px] border-solid border-[#e7ebf0] left-0 top-[67px] 'hidden'}`}>
            <ul className='ull'></ul>
        </div>
        <div className={`ull fixed w-full h-[580px] bg-white left-0 top-[75px]
        duration-[0.4s,0.4s] ease-[ease,ease] delay-[0s,0s] transition-[opacity,visibility] ${isToggle === '1' ?
                                                                                              'opacity-100 visible z-[3] pointer-events-auto'
                                                                                              + ' custom-backdrop' :
                                                                                              'opacity-0 invisible z-0 pointer-events-none'}`}>
            <ProductNavBar setIsToggle={setIsToggle} isToggle={isToggle}/>
        </div>
    </li>
}