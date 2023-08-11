import {counterSlice, useDispatch} from "@/lib/redux";
import {Dispatch, SetStateAction, useRef, useState} from "react";
import {languageList} from "@/app/components/NavBar/List";
import useOnClickOutside from "@/app/helper/OnClickOutSideHook";

export const Language = ({isToggle, setIsToggle}: {
    isToggle: string,
    setIsToggle: Dispatch<SetStateAction<string>>
}) => {
    const ref = useRef<HTMLDivElement>(null)

    useOnClickOutside(ref, (event: Event) => {
        if (isToggle === '5') {
            setIsToggle('0')
            dispatch(counterSlice.actions.setOverflow(false))
        }
    }, 'langue');
    const [isLanguage, setIsLanguage] = useState(12)
    const dispatch = useDispatch()
    return <div className='inline-flex relative items-center pr-1.5 px-[15px] py-[26px]'>
        <div className='flex items-center justify-between cursor-pointer'  onClick={() => {
            setIsToggle(() => {
                if (isToggle !== '5') {
                    dispatch(counterSlice.actions.setOverflow(true))
                    return '5'
                }
                else {
                    dispatch(counterSlice.actions.setOverflow(false))
                    return '0'
                }
            })
        }}>
            <span
                className='bg-[-352px_0] cursor-pointer w-[22px] h-4 relative inline-block bg-[image:var(--country-flags)] bg-no-repeat bg-[528px_auto] mr-2' id='langue'></span>
            <span className='text-sm font-opensansregular uppercase' id='langue'>vi</span>
        </div>
        <div
            className={` w-[480px] border bg-white absolute duration-[0.5s,0.5s,0.3s] ease-[ease,ease,ease] delay-[0s,0s,0s] transition-[all,visibility,transform]  shadow-[0_11px_90px_0_rgba(65,67,132,0.13)] rounded-[0_0_5px_5px] border-solid border-[#e7ebf0] left-auto right-0 top-16 ${isToggle === '5' ?
                'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2.5'} 
            before:content-[""] before:absolute before:right-[calc(24%_-_98px)] before:w-0 before:h-0 before:border-b-8 before:border-b-[#e7ebf0] before:border-x-8 before:border-x-transparent before:border-solid before:-top-2
            after:content-[""] after:absolute after:top-[-7px] after:right-[calc(24%_-_98px)] after:w-0 after:h-0 after:border-b-8 after:border-b-white after:border-x-8 after:border-x-transparent after:border-solid max-[650px]:w-[250px] max-[767px]:right-0 max-[767px]:before:right-[23px]`}
        ref={ref}>
            <ul className='flex justify-between flex-row flex-wrap ml-[50px] mr-10 mt-10 mb-[30px] max-[650px]:ml-[30px] max-[650px]:mr-5 max-[650px]:mt-[30px] max-[650px]:mb-5'>
                {languageList.map((e) => {
                    return <li
                        className={`inline-flex items-center w-6/12 text-[15px] mr-0 mb-5 p-0 font-opensansregular max-[650px]:w-full max-[650px]:text-[13px] max-[650px]:mb-4 max-[650px]:p-0 group/li ${e.id % 2 === 0 ? 'pl-5' :
                            ''} `}>
                        <a className={`flex items-center group-hover/li:text-[color:var(--highlight-color)] cursor-pointer ${isLanguage === e.id ?
                            'text-[color:var(--highlight-color)] after:inline-block after:content-[""]'
                            + ' after:w-[13px] after:h-2.5'
                            + ' after:bg-[image:var(--tick-icon)] after:bg-no-repeat after:bg-[100%] after:ml-[7px]' : 'text-[color:var(--primary-color)]'}`}>
                            <span
                                className={`bg-[image:var(--country-flags)] w-[22px] h-4 relative inline-block ${e.bg} bg-no-repeat bg-[528px_auto] mr-3`}></span>
                            {e.name}
                        </a>
                    </li>
                })}
            </ul>
        </div>
    </div>
}