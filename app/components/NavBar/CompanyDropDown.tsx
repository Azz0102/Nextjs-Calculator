import {counterSlice, useDispatch} from "@/lib/redux";
import {Dispatch, SetStateAction, useRef} from "react";
import useOnClickOutside from "@/app/helper/OnClickOutSideHook";

export const CompanyDropDown = ({isToggle, setIsToggle}: { isToggle: string, setIsToggle: Dispatch<SetStateAction<string>> }) => {
    const dispatch = useDispatch()
    const ref = useRef<HTMLLIElement>(null)

    useOnClickOutside(ref, (event: Event) => {
        if (isToggle === '2') {
            setIsToggle('0')
            dispatch(counterSlice.actions.setOverflow(false))
        }
    }, 'cpny');

    return <li className='cursor-pointer text-[17px] tracking-[-0.2px] relative inline-block mr-[35px] font-[opensansregular]' ref={ref}>
                                <span className={`${isToggle === '2' ? 'text-[color:var(--highlight-color)]'
                                                                     : 'hover:text-[color:var(--highlight-color)]'}`} onClick={() => {
                                    setIsToggle(() => {
                                        if (isToggle !== '2') {

                                            dispatch(counterSlice.actions.setOverflow(true))
                                            return '2'
                                        }
                                        else {
                                            dispatch(counterSlice.actions.setOverflow(false))
                                            return '0'
                                        }
                                    })

                                }}>Công ty
                                <span className={`after:content-[""]
                                        after:inline-block after:relative 
                                        after:clear-both after:ml-[7px] after:transition-all after:duration-[0.3s] after:ease-[ease] after:p-[3.3px] after:border-[solid] after:border-[#777] after:border-r
                                        after:border-b after:border-t-0 after:border-l-0 after:font-[opensansregular]
                                        after:-top-0.5 ${isToggle === '2' ? 'after:rotate-[-135deg] after:border-[color:var(--highlight-color)]'
                                                                            + ' after:top-0.5'
                                                                          :
                                                         'after:text-[color:var(--primary-color)] after:rotate-45'}`}></span></span>
        <div
            className={`w-[260px] absolute z-[9999] bg-white shadow-[0_11px_90px_0_rgba(65,67,132,0.13)] origin-[0_0] border px-0 py-[15px] rounded-[3px] border-solid border-[#e7ebf0] left-0 top-[67px]  duration-[0.2s,0.2s,0.2s] ease-[ease,ease,ease] delay-[0s,0s,0s] transition-[transform,opacity,visibility] ${isToggle
                                                                                                                                                                                                                                                                                                                        === '2' ?
                                                                                                                                                                                                                                                                                                                        'opacity-100 visible translate-y-[-25px] z-[22] pointer-events-auto' :
                                                                                                                                                                                                                                                                                                                        'opacity-0 invisible z-0 pointer-events-none translate-y-0 '}`}>
            <ul>
                <li className='font-[opensansregular]'>
                    <a href='/'
                       className='block text-base leading-[1.1] text-[#111] transition-[0.3s] duration-[ease] cursor-pointer tracking-[-0.2px] pl-[35px] pr-2.5 pt-1.5 pb-2.5 hover:text-[color:var(--highlight-color)]'>Về
                        chúng tôi</a>
                </li>
                <li className='font-[opensansregular]'>
                    <a href='/'
                       className='block text-base leading-[1.1] text-[#111] transition-[0.3s] duration-[ease] cursor-pointer tracking-[-0.2px] pl-[35px] pr-2.5 pt-1.5 pb-2.5 hover:text-[color:var(--highlight-color)]'>Câu
                        chuyện của chúng tôi</a>
                </li>
                <li className='font-[opensansregular]'>
                    <a href='/'
                       className='block text-base leading-[1.1] text-[#111] transition-[0.3s] duration-[ease] cursor-pointer tracking-[-0.2px] pl-[35px] pr-2.5 pt-1.5 pb-2.5 hover:text-[color:var(--highlight-color)]'>Hồi
                        sinh vùng nông thôn</a>
                    <span
                        className='block leading-[0] w-[68%] mt-2.5 mb-[13px] mx-auto border-b-[#e7ebf0] border-b border-solid'></span>
                </li>
                <li className='font-[opensansregular]'>
                    <a href='/'
                       className='block text-base leading-[1.1] text-[#111] transition-[0.3s] duration-[ease] cursor-pointer tracking-[-0.2px] pl-[35px] pr-2.5 pt-1.5 pb-2.5 hover:text-[color:var(--highlight-color)]'>Báo
                        chí</a>
                </li>
                <li className='font-[opensansregular]'>
                    <a href='/'
                       className='block text-base leading-[1.1] text-[#111] transition-[0.3s] duration-[ease] cursor-pointer tracking-[-0.2px] pl-[35px] pr-2.5 pt-1.5 pb-2.5 hover:text-[color:var(--highlight-color)]'>Sự
                        kiện</a>
                    <span
                        className='block leading-[0] w-[68%] mt-2.5 mb-[13px] mx-auto border-b-[#e7ebf0] border-b border-solid'></span>
                </li>
                <li className='font-[opensansregular]'>
                    <a href='/'
                       className='block text-base leading-[1.1] text-[#111] transition-[0.3s] duration-[ease] cursor-pointer tracking-[-0.2px] pl-[35px] pr-2.5 pt-1.5 pb-2.5 hover:text-[color:var(--highlight-color)]'>Nghề
                        nghiệp</a>
                </li>
                <li className='font-[opensansregular]'>
                    <a href='/'
                       className='block text-base leading-[1.1] text-[#111] transition-[0.3s] duration-[ease] cursor-pointer tracking-[-0.2px] pl-[35px] pr-2.5 pt-1.5 pb-2.5 hover:text-[color:var(--highlight-color)]'>Humans
                        of Zoho</a>
                </li>
            </ul>
        </div>
    </li>
}