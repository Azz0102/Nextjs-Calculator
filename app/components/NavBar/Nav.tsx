'use client'

/* Core */
import {usePathname, useRouter} from 'next/navigation'

/* Instruments */
import '../../styles/globals.css'
import {counterSlice, useDispatch} from "@/lib/redux";
import {useEffect, useRef, useState} from "react";
import {ProductDropdown} from "@/app/components/NavBar/ProductDropdown";
import {SlideImage} from "@/app/components/NavBar/SlideImage";
import {Language} from "@/app/components/NavBar/Language";
import {CompanyDropDown} from "@/app/components/NavBar/CompanyDropDown";
import useOnClickOutside from "@/app/helper/OnClickOutSideHook";


export const Header = () => {
    const pathname = usePathname()
    const dispatch = useDispatch()
    const router = useRouter()
    const [isToggle, setIsToggle] = useState('0')
    const [isNotifi, setIsNotifi] = useState(false)
    const [indexSlide, setIndexSlide] = useState(1)
    const ref1 = useRef<HTMLDivElement>(null)
    const ref2 = useRef<HTMLDivElement>(null)

    const handleResize = () => {
        if (isToggle !== '4') {
            if (window.innerWidth <= 767) {
                setIsToggle('0')
            }
        }
    }

// create an event listener
    useEffect(() => {
        window.addEventListener("resize", handleResize)
    })

    useOnClickOutside(ref1, (event: Event) => {

        if (isToggle == '3') {
            setIsToggle('0')
            dispatch(counterSlice.actions.setOverflow(false))
        }
    }, 'search-icon-svg');

    useOnClickOutside(ref2, (event: Event) => {

        if (isToggle == '4') {
            setIsToggle('0')
            dispatch(counterSlice.actions.setOverflow(false))
        }
    }, 'notifi');
    return (
        <div className='nav'>
            <div
                className='bg-white relative w-full z-10 h-[75px] px-[30px] py-0 border-b-[#e7ebf0] border-b border-solid left-0 top-0 before:content-[""] before:bg-white before:fixed before:w-full before:left-0 before:top-0'>
                <div className='flex items-center h-full max-w-[1380px] mx-auto my-0'>
                    {/*icon*/}
                    <div className='h-full flex flex-wrap items-center pt-0 pb-[3px] px-0'>
                        <a className='bg-[130px_auto] w-[130px] h-[65px] indent-[-99999px] bg-[1px_5px]
                        bg-[image:var(--zoho-logo-web)] bg-no-repeat inline-block no-underline text-[#03a9f5] outline-0'>Zoho.com</a>
                    </div>
                    {/*navigation_menu*/}
                    <div className='opacity-100 float-left flex-1 flex items-center pl-10 pr-0 py-0 max-[767px]:opacity-0'>
                        <ul className='list-none'>
                            {/*product dropdown*/}
                            <ProductDropdown isToggle={isToggle} setIsToggle={setIsToggle}/>
                            <li className='relative inline-block mr-[35px] max-[1023px]:hidden'>
                                <a href='/'
                                   className='text-[17px] text-[color:var(--primary-color)] tracking-[-0.2px] transition-[color] duration-[0.4s] ease-[ease] inline-block px-0 py-[9px] font-opensansregular hover:text-[color:var(--highlight-color)]'>Khách
                                    hàng</a>
                            </li>
                            <CompanyDropDown isToggle={isToggle} setIsToggle={setIsToggle}/>
                            <li className='relative inline-block mr-[35px] font-opensansregular group/item'>
                                <div className='cursor-pointer inline-block relative px-2.5 py-1 top-0'>
                                    <span className='w-[5px] h-[5px] inline-block bg-[color:var(--primary-color)] mr-[3px] rounded-[50%]'></span>
                                    <span
                                        className='w-[5px] h-[5px] inline-block bg-[color:var(--primary-color)] mr-[3px] rounded-[50%]'></span>
                                    <span
                                        className='w-[5px] h-[5px] inline-block bg-[color:var(--primary-color)] mr-[3px] rounded-[50%]'></span>
                                </div>
                                <div
                                    className='w-[260px] absolute z-[9999] bg-white shadow-[0_11px_90px_0_rgba(65,67,132,0.13)] origin-[0_0] opacity-0 invisible border translate-y-0 px-0 py-[15px] rounded-[3px] border-solid border-[#e7ebf0] left-0 top-[67px] group-hover/item:opacity-100 group-hover/item:visible group-hover/item:-translate-y-10 group-hover/item:z-[22] duration-[0.2s,0.2s,0.2s] ease-[ease,ease,ease] delay-[0s,0s,0s] transition-[transform,opacity,visibility] pointer-events-auto'>
                                    <ul>
                                        <li className='font-opensansregular'>
                                            <a href='/'
                                               className='block text-base leading-[1.1] text-[#111] transition-[0.3s] duration-[ease] cursor-pointer tracking-[-0.2px] pl-[35px] pr-2.5 pt-1.5 pb-2.5 hover:text-[color:var(--highlight-color)]'>Blog</a>

                                        </li>
                                        <li className='font-opensansregular'>
                                            <a href='/'
                                               className='block text-base leading-[1.1] text-[#111] transition-[0.3s] duration-[ease] cursor-pointer tracking-[-0.2px] pl-[35px] pr-2.5 pt-1.5 pb-2.5 hover:text-[color:var(--highlight-color)]'>Cộng
                                                đồng</a>
                                            <span
                                                className='block leading-[0] w-[68%] mt-2.5 mb-[13px] mx-auto border-b-[#e7ebf0] border-b border-solid'></span>
                                        </li>
                                        <li className='font-opensansregular'>
                                            <a href='/'
                                               className='block text-base leading-[1.1] text-[#111] transition-[0.3s] duration-[ease] cursor-pointer tracking-[-0.2px] pl-[35px] pr-2.5 pt-1.5 pb-2.5 hover:text-[color:var(--highlight-color)]'>Hợp
                                                tác với chúng tôi</a>

                                        </li>
                                        <li className='font-opensansregular'>
                                            <a href='/'
                                               className='block text-base leading-[1.1] text-[#111] transition-[0.3s] duration-[ease] cursor-pointer tracking-[-0.2px] pl-[35px] pr-2.5 pt-1.5 pb-2.5 hover:text-[color:var(--highlight-color)]'>Hỗ
                                                trợ</a>

                                        </li>
                                        <li className='font-opensansregular'>
                                            <a href='/'
                                               className='block text-base leading-[1.1] text-[#111] transition-[0.3s] duration-[ease] cursor-pointer tracking-[-0.2px] pl-[35px] pr-2.5 pt-1.5 pb-2.5 hover:text-[color:var(--highlight-color)]'>Liên
                                                hệ với chúng tôi</a>

                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                        <div></div>
                    </div>
                    {/*search_notifi_signinout*/}
                    <div className='inline-flex justify-end'>
                        <div className='relative h-[60px] items-center flex'>
                            {/*search*/}
                            <div
                                className='inline-flex items-center relative px-[15px] py-[26px] max-[767px]:hidden max-[820px]:px-2.5 max-[820px]:py-[26px]'>
                                <span className='inline-block w-[18px] leading-none cursor-pointer' onClick={() => {
                                    setIsToggle(() => {
                                        if (isToggle !== '3') {
                                            dispatch(counterSlice.actions.setOverflow(true))
                                            return '3'
                                        }
                                        else {
                                            dispatch(counterSlice.actions.setOverflow(false))
                                            return '0'
                                        }
                                    })
                                    dispatch(counterSlice.actions.setOverflow(() => {
                                        return true;
                                    }))
                                }} >
                                   <svg id="search-icon-svg" className={`${isToggle === '3' ? 'hidden' : 'block'}`} viewBox="0 0 35 32.3" >
                                       <g id="Layer_2" data-name="Layer 2">
                                           <g id="Layer_6" data-name="Layer 6">
                                       <path
                                           d="M16.1,32.3A16.2,16.2,0,1,1,32.3,16.1,16.2,16.2,0,0,1,16.1,32.3Zm0-29.8A13.7,13.7,0,1,0,29.8,16.1,13.6,13.6,0,0,0,16.1,2.5Z"></path>
                                       <path
                                           d="M33.7,32.2a.9.9,0,0,1-.8-.4l-5.7-5.6a1.2,1.2,0,0,1,1.7-1.7l5.7,5.6a1.1,1.1,0,0,1,0,1.7A1,1,0,0,1,33.7,32.2Z"></path>
                                   </g>
                                   </g>
                                   </svg>
                                    <svg id="search-icon-svg" data-name="Layer 3" viewBox="0 0 22 21.77"
                                         className={`${isToggle === '3' ? 'block' : 'hidden'}`} strokeLinecap="round"
                                         strokeLinejoin="round" >
                                        <path id="Union_1" data-name="Union 3" className="fill-none stroke-[#f60014] stroke-[2px]"
                                              d="M11,10.82,1.5,20.27,11,10.82,1.63,1.5,11,10.82l9.24-9.2L11,10.82l9.5,9.45Z"></path></svg>
                                </span>
                                <div className={`fixed w-full h-full z-[-1] duration-[0.5s,0.5s,0.5s,0.5s] ease-[ease,ease,ease,ease] delay-[0s,0s,0s,0s] transition-[transform,opacity,visibility,z-index] bg-[rgba(0,0,0,0.35)] left-0 -top-2.5 
                                ${isToggle === '3' ? 'opacity-100 visible translate-y-[85px]' : 'opacity-0 invisible translate-y-[65px]'}`}
                                     >
                                    <div className='flex justify-center w-full z-[1] relative bg-white' ref={ref1}>
                                        <div className='w-full relative max-w-[1050px] mx-auto my-0'>
                                            <div className='bg-white relative z-[2]'>
                                                <div className='relative max-w-[1050px] w-full m-auto px-5 py-[19px]'>
                                                    <form className='relative'>
                                                        <input
                                                            className='border text-[17px] max-w-full h-[initial] indent-[0] w-full block bg-white m-0 pl-4 pr-0 py-[15px] rounded-[3px] border-solid border-[#e8eef6]'
                                                            placeholder="Tìm kiếm thông tin về sản phẩm, câu hỏi thường gặp..." type="text"/>
                                                        <input/>
                                                        <input
                                                            className='text-[17px] block bg-white bg-[url(//www.zohowebstatic.com/sites/zweb/images/zoho\_general\_pages/zh-newhome-sprite.png)] bg-[500px_auto] bg-[-254px_-106px] w-[25px] box-border h-[25px] absolute cursor-pointer p-0 rounded-[3px] border-[none] right-2 top-[13px] bg-no-repeat'/>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*notifi*/}
                            <div className={`inline-flex items-center relative px-[15px] py-[26px] max-[820px]:px-2.5 max-[820px]:py-[26px]
                                before:content-[""] before:absolute before:bottom-[-3px] before:w-0 before:h-0 before:transition-opacity before:duration-[0.2s] before:ease-[ease] before:border-b-8 before:border-b-white before:border-x-8 before:border-x-transparent before:border-solid before:right-3.5 before:top-auto
                                after:border-b-[color:var(--bg-color)] after:content-[""] after:absolute after:w-0 after:h-0 after:transition-opacity after:duration-[0.4s] after:ease-[ease] after:border-b-8 after:border-x-8 after:border-x-transparent after:border-solid after:right-3.5 after:top-auto after:-bottom-1 after:box-border max-[820px]:after:bottom-[4px] before:box-border ${isToggle
                                                                                                                                                                                                                                                                                                                                                                                                 === '4' ?
                                                                                                                                                                                                                                                                                                                                                                                                 'before:opacity-100 after:opacity-100' :
                                                                                                                                                                                                                                                                                                                                                                                                 'before:opacity-0 after:opacity-0'}`}>
                                <div className='inline-block w-[18px] leading-none cursor-pointer' onClick={() => {
                                    setIsToggle(() => {
                                        if (isToggle !== '4') {
                                            dispatch(counterSlice.actions.setOverflow(true))
                                            return '4'
                                        }
                                        else {
                                            dispatch(counterSlice.actions.setOverflow(false))
                                            return '0'
                                        }
                                    })
                                    dispatch(counterSlice.actions.setOverflow(() => {
                                        return true;
                                    }))
                                    setIsNotifi(true)
                                }} >
                                    <span className={`pointer-events-none ${isNotifi ? 'hidden' : ''}`}>
                                        <span
                                            className='absolute w-2 h-2 [background:#de5456] animate-[wave_1s_infinite] box-border shadow-[0_0_0_0_rgba(222,84,86,0.3)] rounded-[100%] right-1/4 top-[23px]'></span>
                                        <span
                                            className='absolute [background:transparent] animate-[waveLine_1s_infinite] box-border w-2 h-2 origin-center rounded-[100%] border-[0.5px] border-solid border-[#de5456] right-1/4 top-[23px]'></span>
                                        <span
                                            className='absolute [background:transparent] animate-[waveLine_1s_infinite] box-border w-2 h-2 origin-center rounded-[100%] border-[0.5px] border-solid border-[#de5456] right-1/4 top-[23px]'></span>
                                        <span
                                            className='absolute [background:transparent] animate-[waveLine_1s_infinite] box-border w-2 h-2 origin-center rounded-[100%] border-[0.5px] border-solid border-[#de5456] right-1/4 top-[23px]'></span>
                                        <span
                                            className='absolute [background:transparent] animate-[waveLine_1s_infinite] box-border w-2 h-2 origin-center rounded-[100%] border-[0.5px] border-solid border-[#de5456] right-1/4 top-[23px]'></span>
                                        <span
                                            className='absolute [background:transparent] animate-[waveLine_1s_infinite] box-border w-2 h-2 origin-center rounded-[100%] border-[0.5px] border-solid border-[#de5456] right-1/4 top-[23px]'></span>
                                    </span>
                                    <svg xmlns="" viewBox="0 0 41 34.7" id='notifi'>
                                        <g id="Layer_2" data-name="Layer 2">
                                            <g id="Layer_6" data-name="Layer 6">
                                                <path
                                                    d="M6,25.7H1.2A1.3,1.3,0,0,1,0,24.4V9.2A1.3,1.3,0,0,1,1.2,8H6A1.2,1.2,0,0,1,7.2,9.2V24.4A1.2,1.2,0,0,1,6,25.7ZM2.5,23.2H4.7V10.5H2.5Z"></path>
                                                <path
                                                    d="M39.8,33.7h-.3l-33.8-8a1.2,1.2,0,0,1-1-1.2V9.2A1.4,1.4,0,0,1,5.7,8L39.5,0a1,1,0,0,1,1,.3,1.2,1.2,0,0,1,.5.9V32.4a1.2,1.2,0,0,1-.5,1A1.1,1.1,0,0,1,39.8,33.7ZM7.2,23.4l31.3,7.4V2.8L7.2,10.2Z"></path>
                                                <path
                                                    d="M21.9,34.7h-.3l-9.1-2a1.4,1.4,0,0,1-1-1.3V26.3a1.3,1.3,0,0,1,.4-1,1.4,1.4,0,0,1,1.1-.2l9.1,2a1.2,1.2,0,0,1,1,1.2v5.1a1.5,1.5,0,0,1-.4,1A1.3,1.3,0,0,1,21.9,34.7ZM14,30.4l6.6,1.5V29.3L14,27.9Z"></path>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                <div
                                    className={`fixed w-full h-full rounded-[0_0_5px_5px] custom-backdrop left-0 top-[75px] max-[820px]:top-[60px] ${isToggle
                                                                                                                                                     === '4' ?
                                                                                                                                                     'opacity-100'
                                                                                                                                                     + ' visible'
                                                                                                                                                     + ' translate-y-0 transition-all duration-[0.3s] ease-[ease] [pointer-events:initial] z-10' :
                                                                                                                                                     'opacity-0 invisible translate-y-5 transition-all duration-[0.1s] ease-[ease] pointer-events-none'
                                                                                                                                                     + ' after:content-[""] after:bg-[rgba(0,0,0,0.4)] after:w-full after:h-full after:fixed after:z-[-1] after:left-0 after:top-[130px]'}`}>
                                    <div
                                        className=''
                                        ref={ref2}>
                                    <span className='absolute w-3.5 cursor-pointer flex flex-col justify-center items-center z-[14] left-auto right-10 top-5 max-[1023px]:right-[80px] max-[767px]:right-[25px]
                                    after:content-[""] after:w-[29px] after:h-[29px] after:bg-white after:absolute after:z-0 after:shadow-[0_3px_7px_1px_rgba(173,166,166,0.21)] after:rounded-[50%] after:-left-2 after:-top-2.5'
                                          onClick={() => {
                                              setIsToggle('0')
                                              dispatch(counterSlice.actions.setOverflow(false))
                                          }}>
                                        <svg id="closeicon-svg" data-name="Layer 3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 21.77"
                                             className='z-[1] w-2.5'>
                                            <path
                                                id="Union_3" data-name="Union 1"
                                                className="fill-none stroke-neutral-600 [stroke-linecap:round] [stroke-linejoin:round] stroke-[3px]"
                                                d="M11,10.82,1.5,20.27,11,10.82,1.63,1.5,11,10.82l9.24-9.2L11,10.82l9.5,9.45Z"></path></svg>
                                    </span>
                                        <div className='bg-[color:var(--bg-color)] flex max-[960px]:relative max-[960px]:w-full max-[960px]:h-[calc(100%_-_60px)] max-[960px]:overflow-auto max-[960px]:items-start max-[960px]:left-0 max-[960px]:top-0
                                    after:border-b-neutral-100 after:transition-opacity after:duration-[0.4s] after:ease-[ease] after:content-[""] after:absolute after:w-0 after:h-0 after:border-b-8 after:border-x-8 after:border-x-transparent after:border-solid after:right-3.5 after:top-auto after:bottom-[5px]'>
                                            <div className='w-full relative max-w-[1330px] mx-auto my-0 px-0 py-[60px] max-[1390px]:max-w-[95%]'>
                                                <div>
                                                    <div className='flex max-[1023px]:flex-wrap max-[1023px]:justify-center'>
                                                        <div
                                                            className='flex bg-white border flex-col min-h-[355px] cursor-pointer relative overflow-visible w-3/12 transition-all duration-[0.8s] ease-[ease] mr-3 p-0 rounded-[3px] border-solid border-[#e7ebf0] max-[767px]:w-[45%] max-[767px]:ml-0 max-[767px]:mr-[15px] max-[767px]:mt-0 max-[767px]:mb-[15px] max-[1023px]:min-h-[435px] max-[1023px]:w-2/5 max-[1023px]:ml-0 max-[1023px]:mr-[30px] max-[1023px]:mt-0 max-[1023px]:mb-[30px] max-[650px]:min-h-[unset] max-[650px]:w-[70%] max-[650px]:mt-0 max-[650px]:mb-[30px] max-[650px]:mx-0'>
                                                            <div
                                                                className='bg-[#f60728] z-[2] absolute text-white uppercase text-[10px] pt-0.5 pb-px px-[7px] rounded-tl-none rounded-br-none rounded-bl-none rounded-sm right-0 top-0 font-opensansregular'>Tin
                                                                tức
                                                            </div>
                                                            <ul className='relative block mb-[30px]'>
                                                                <button
                                                                    className='transition-[0.5s] duration-[ease] absolute [background:#fff] opacity-80 block w-[30px] h-[30px] z-[1] translate-x-0 -translate-y-2/4 cursor-pointer text-transparent [outline:0] p-0 border-0 left-0 top-[32%]
                                                                before:opacity-30 before:transition-[0.5s] before:duration-[ease] before:rotate-45 before:content-[""] before:absolute before:w-0.5 before:h-2 before:bg-[color:var(--primary-color)] before:left-3.5 before:top-[9px]
                                                                after:opacity-30 after:transition-[0.5s] after:duration-[ease] after:rotate-[135deg] after:content-[""] after:absolute after:w-0.5 after:h-2 after:bg-[color:var(--primary-color)] after:left-3.5 after:bottom-2'
                                                                    type="button" onClick={() => {
                                                                    if (indexSlide === 1) {
                                                                        setIndexSlide(4)
                                                                    }
                                                                    else {
                                                                        setIndexSlide(indexSlide - 1)
                                                                    }
                                                                }}></button>
                                                                <SlideImage indexSlide={indexSlide} setIndexSlide={setIndexSlide}/>
                                                                <button
                                                                    className='transition-[0.5s] duration-[ease] absolute [background:#fff] opacity-80 block w-[30px] h-[30px] z-[1] translate-x-0 -translate-y-2/4 cursor-pointer text-transparent [outline:0] p-0 border-0 right-0 top-[32%]
                                                                before:opacity-30 before:transition-[0.5s] before:duration-[ease] before:-rotate-45 before:content-[""] before:absolute before:w-0.5 before:h-2 before:bg-[color:var(--primary-color)] before:left-3.5 before:top-[9px]
                                                                after:opacity-30 after:transition-[0.5s] after:duration-[ease] after:rotate-[45deg] after:content-[""] after:absolute after:w-0.5 after:h-2 after:bg-[color:var(--primary-color)] after:left-3.5 after:bottom-2'
                                                                    type="button" onClick={() => {
                                                                    if (indexSlide === 4) {
                                                                        setIndexSlide(1)
                                                                    }
                                                                    else {
                                                                        setIndexSlide(indexSlide + 1)
                                                                    }
                                                                }}></button>
                                                                <ul className='absolute block w-full [list-style:none] text-center m-0 p-0 -bottom-2.5 font-opensansregular'>
                                                                    <li className={`w-1 h-1 inline-block cursor-pointer transition-[0.5s] duration-[ease] mx-0.5 my-0 p-0 rounded-[100%] ${indexSlide
                                                                                                                                                                                           === 1 ?
                                                                                                                                                                                           'bg-[#3f51b6] border border-solid border-[#3f51b6]' :
                                                                                                                                                                                           'bg-[#c7d0df] border-solid border-white border'}`}
                                                                        onClick={() => setIndexSlide(1)}></li>
                                                                    <li className={`w-1 h-1 inline-block cursor-pointer transition-[0.5s] duration-[ease] mx-0.5 my-0 p-0 rounded-[100%] ${indexSlide
                                                                                                                                                                                           === 2 ?
                                                                                                                                                                                           'bg-[#3f51b6] border border-solid border-[#3f51b6]' :
                                                                                                                                                                                           'bg-[#c7d0df] border-solid border-white border'}`}
                                                                        onClick={() => setIndexSlide(2)}></li>
                                                                    <li className={`w-1 h-1 inline-block cursor-pointer transition-[0.5s] duration-[ease] mx-0.5 my-0 p-0 rounded-[100%] ${indexSlide
                                                                                                                                                                                           === 3 ?
                                                                                                                                                                                           'bg-[#3f51b6] border border-solid border-[#3f51b6]' :
                                                                                                                                                                                           'bg-[#c7d0df] border-solid border-white border'}`}
                                                                        onClick={() => setIndexSlide(3)}></li>
                                                                    <li className={`w-1 h-1 inline-block cursor-pointer transition-[0.5s] duration-[ease] mx-0.5 my-0 p-0 rounded-[100%] ${indexSlide
                                                                                                                                                                                           === 4 ?
                                                                                                                                                                                           'bg-[#3f51b6] border border-solid border-[#3f51b6]' :
                                                                                                                                                                                           'bg-[#c7d0df] border-solid border-white border'}`}
                                                                        onClick={() => setIndexSlide(4)}></li>
                                                                </ul>
                                                            </ul>
                                                        </div>
                                                        <div
                                                            className='flex bg-white border flex-col min-h-[355px] cursor-pointer relative overflow-visible w-3/12 transition-all duration-[0.8s] ease-[ease] mr-3 p-2.5 rounded-[3px] border-solid border-[#e7ebf0] max-[767px]:w-[45%] max-[767px]:ml-0 max-[767px]:mr-[15px] max-[767px]:mt-0 max-[767px]:mb-[15px] max-[1023px]:min-h-[435px] max-[1023px]:w-2/5 max-[1023px]:ml-0 max-[1023px]:mr-[30px] max-[1023px]:mt-0 max-[1023px]:mb-[30px] max-[650px]:min-h-[unset] max-[650px]:w-[70%] max-[650px]:mt-0 max-[650px]:mb-[30px] max-[650px]:mx-0'>
                                                            <div
                                                                className='bg-[#fff7e9] text-center border h-full w-full relative overflow-hidden px-0 py-[30px] rounded-[3px] border-solid border-[#f7ecd9] group/div'>
                                                                <div
                                                                    className='text-[28px] w-full leading-[1.2] tracking-[-0.3px] text-[color:var(--primary-color)] mt-2.5 mb-0.5 mx-auto'>
                                                                    <span className='block'>Bộ ứng dụng email sạch, không có quảng cáo</span>
                                                                </div>
                                                                <p className='w-[88%] text-sm text-[color:var(--secondary-color)] leading-[1.7] tracking-[-0.2px] mx-auto my-0 font-opensansregular'>Zoho
                                                                    Mail là nền tảng email bảo mật và mạnh mẽ dành cho các nhóm thuộc mọi quy mô. Dễ
                                                                    dàng
                                                                    bắt đầu hoặc di chuyển.</p>
                                                                <div>
                                                                    <a className='text-[13px] min-w-[100px] border border-[color:var(--redclr)] relative tracking-[0.2px] [background:#f60014] text-white [transition:background-image_0.2s_ease-in-out,box-shadow_0.5s_ease,background-size_0.2s_ease-in-out,background-color_0.4s_ease] uppercase inline-block leading-none mt-[15px] pl-[25px] pr-[38px] py-[13px] rounded-sm border-solid
                                                                after:top-[calc(50%_-_7px)] after:bg-[-72px_-76px] after:content-[""] after:w-[13px] after:h-[13px] after:absolute after:bg-[image:var(--bg-icon-arrow)] after:bg-no-repeat after:bg-[500px_auto] after:transition-all after:duration-[0.5s] after:ease-[ease] after:scale-100 after:right-3.5 group-hover/div:after:translate-x-[5px]'>Dùng
                                                                        thử ngay</a>
                                                                    <span className='text-xs text-[color:var(--secondary-color)] block mt-[7px]'>Miễn phí mãi mãi cho tối đa 5 người dùng</span>
                                                                </div>
                                                                <div className='relative w-[92%] -right-6 -bottom-10 max-[650px]:hidden'>
                                                                    <img
                                                                        src='//www.zohowebstatic.com/sites/zweb/images/zoho_general_pages/zh-home-mailbanner.png'
                                                                        className='max-w-full h-auto' alt='h'/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className='flex bg-white border flex-col min-h-[355px] cursor-pointer relative overflow-visible w-3/12 transition-all duration-[0.8s] ease-[ease] mr-3 p-2.5 rounded-[3px] border-solid border-[#e7ebf0] max-[767px]:w-[45%] max-[767px]:ml-0 max-[767px]:mr-[15px] max-[767px]:mt-0 max-[767px]:mb-[15px] max-[1023px]:min-h-[435px] max-[1023px]:w-2/5 max-[1023px]:ml-0 max-[1023px]:mr-[30px] max-[1023px]:mt-0 max-[1023px]:mb-[30px] max-[650px]:min-h-[unset] max-[650px]:w-[70%] max-[650px]:mt-0 max-[650px]:mb-[30px] max-[650px]:mx-0'>
                                                            <div
                                                                className='bg-[#eef5fb] border text-center h-full w-full relative overflow-hidden px-2.5 py-[30px] rounded-[3px] border-solid border-[#e4ecf3] group/div'>
                                                                <div
                                                                    className='absolute [background:#049949] text-white uppercase text-[10px] pt-0.5 pb-px px-[7px] rounded-tl-none rounded-br-none rounded-bl-none rounded-sm -right-px -top-px font-opensansregular'>mới
                                                                </div>
                                                                <div>
                                                                    <div
                                                                        className='text-2xl text-[color:var(--primary-color)] leading-none tracking-[normal] mt-0 mb-2.5 mx-0'>
                                                                    <span
                                                                        className='w-[42px] h-[41px] block [position:inherit] [background:var(--product-icons)_no-repeat] bg-[800px_auto] bg-[position:var(--zp-workplace-bp)] text-2xl tracking-[-0.3px] mt-0 mb-[18px] mx-auto scale-[1.3]'></span>
                                                                        <span className='text-2xl tracking-[-0.3px] block'>Workplace</span>
                                                                    </div>
                                                                    <p className='text-sm w-full leading-[1.6] text-[color:var(--secondary-color)] tracking-[-0.2px] mt-2.5 mb-[15px] mx-0 font-opensansregular'>Trụ
                                                                        sở ảo cho nhóm của bạn với email, chat, tài liệu và nhiều tính năng khác.</p>
                                                                    <div><a className='text-[13px] bg-[color:var(--highlight-color)] text-white inline-block uppercase leading-none transition-[background-color] duration-[0.4s] ease-[ease] border border-[color:var(--highlight-color)] relative tracking-[0.2px] pl-[25px] pr-[38px] py-[13px] rounded-sm border-solid
                                                                after:bg-[-72px_-76px] after:top-[calc(50%_-_7px)] after:bg-[500px_auto] after:content-[""] after:w-[13px] after:h-[13px] after:absolute after:bg-[image:var(--bg-icon-arrow)] after:bg-no-repeat after:transition-all after:duration-[0.5s] after:ease-[ease] after:scale-100 after:right-3.5 group-hover/div:after:translate-x-[5px]'>Dùng
                                                                        thử miễn phí</a></div>
                                                                </div>
                                                                <div className='w-[94%] absolute right-1.5 -bottom-1.5 max-[650px]:hidden'>
                                                                    <img
                                                                        src="//www.zohowebstatic.com/sites/zweb/images/zoho_general_pages/zh-announcement-workplace.png"
                                                                        alt="Zoho Workplace" className='max-w-full h-auto'/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className='flex bg-white border flex-col min-h-[355px] cursor-pointer relative overflow-visible w-3/12 transition-all duration-[0.8s] ease-[ease] p-2.5 rounded-[3px] border-solid border-[#e7ebf0] max-[767px]:w-[45%] max-[767px]:ml-0 max-[767px]:mr-[15px] max-[767px]:mt-0 max-[767px]:mb-[15px] max-[1023px]:min-h-[435px] max-[1023px]:w-2/5 max-[1023px]:ml-0 max-[1023px]:mr-[30px] max-[1023px]:mt-0 max-[1023px]:mb-[30px] max-[650px]:min-h-[unset] max-[650px]:w-[70%] max-[650px]:mt-0 max-[650px]:mb-[30px] max-[650px]:mx-0'>
                                                            <div
                                                                className='bg-[#eef5fb] border text-center h-full w-full relative overflow-hidden px-[35px] py-10 rounded-[3px] border-solid border-[#e4ecf3] group/div'>
                                                                <div
                                                                    className='absolute [background:#049949] text-white uppercase text-[10px] pt-0.5 pb-px px-[7px] rounded-tl-none rounded-br-none rounded-bl-none rounded-sm -right-px -top-px font-opensansregular'>mới
                                                                </div>
                                                                <div>
                                                                    <div
                                                                        className='text-2xl text-[color:var(--primary-color)] leading-none tracking-[normal] mt-0 mb-2.5 mx-0'>
                                                                        <img className='w-[76%] max-w-full h-auto mb-[15px] m-auto'
                                                                             src="//www.zohowebstatic.com/sites/zweb/images/zoho_general_pages/canvaslogo.svg"
                                                                             alt="Canvas"/>
                                                                        <span className='text-lg tracking-[-0.3px] block'>cho Zoho CRM</span>
                                                                    </div>
                                                                    <p className='text-base w-full leading-[1.6] text-[color:var(--secondary-color)] tracking-[-0.2px] mt-0 mb-5 mx-0 my-[15px] font-opensansregular'>Studio
                                                                        thiết kế CRM không cần lập trình đầu tiên trong ngành.</p>
                                                                    <div>
                                                                        <a className='text-[color:var(--highlight-color)] uppercase relative tracking-[0.2px] inline-block text-sm pr-7 after:top-[calc(50%_-_7px)] after:bg-[-108px_-76px] after:content-[""] after:w-[13px] after:h-[13px] after:absolute after:bg-[image:var(--bg-icon-arrow)] after:bg-no-repeat after:bg-[500px_auto] after:transition-all after:duration-[0.5s] eafter:ase-[ease] after:scale-100 after:right-[3px] group-hover/div:after:translate-x-[5px]'>Dùng
                                                                            thử ngay</a>
                                                                    </div>
                                                                </div>
                                                                <div className='absolute w-[85%] right-[7.5%] bottom-0 max-[650px]:hidden'><img
                                                                    className='max-w-full h-auto'
                                                                    src="//www.zohowebstatic.com/sites/zweb/images/zoho_general_pages/zh-announcement-canvas.png"
                                                                    alt="Zoho BackToWork"/></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*language*/}
                            <Language isToggle={isToggle} setIsToggle={setIsToggle}/>
                            {/*signinout*/}
                            <div className='text-[15px] text-white cursor-pointer flex items-center relative pl-[22px] pr-0 py-0
                            max-[767px]:hidden max-[767px]:pl-0 max-[820px]:px-2.5 max-[820px]:py-[26px] max-[1050px]:text-sm'>
                                <div>
                                    <a className='text-[color:var(--primary-color)] transition-[color] duration-[0.3s] ease-[ease] hover:text-[color:var(--highlight-color)]'>Đăng
                                        nhập</a>
                                    <a className='text-[#f60014] font-opensansregular border bg-transparent transition-[background-color] duration-[0.3s] ease-[ease] tracking-[-0.1px] ml-[25px] px-[13px] py-2 rounded-sm border-solid border-[#f60014] hover:text-white hover:bg-[#f60014]'>Đăng
                                        ký</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
