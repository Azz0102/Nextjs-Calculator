import {useEffect, useState} from "react";

export const MobileMenu = () => {
    const [isToggle, setIsToggle] = useState(false)
    const [isActive, setIsActive] = useState('0')

    const handleResize = () => {
        if (window.innerWidth > 767) {
            setIsToggle(false)
        }
    }

// create an event listener
    useEffect(() => {
        window.addEventListener("resize", handleResize)
    })

    return (
        <aside className='block'>
            <div className={`relative ${isToggle ? 'z-[9999]' : 'z-[999]'}`}>
                <div
                    className='hidden max-[767px]:fixed max-[767px]:z-[100] max-[767px]:w-full max-[767px]:h-[50px] max-[767px]:shadow-[0_1px_12px_0_rgba(0,0,0,0.1)] max-[767px]:block max-[767px]:bg-[#f8f8f8] max-[767px]:left-0 max-[767px]:bottom-0'>
        <span
            className={`indent-[0] absolute w-[50px] cursor-pointer h-[50px] transition-all duration-[0.3s] ease-[ease] text-center left-0 top-0 font-[var(--zf-primary-semibold)] ${isToggle ? 'bg-white':'bg-black'}`} onClick={()=>setIsToggle(!isToggle)}>
            <span
                className={`w-[26px] h-[15px] block relative rotate-[0] transition-[0.5s] duration-[ease-in-out] cursor-pointer pointer-events-none font-[var(--zf-primary-bold)] mt-[18px] mb-0 mx-auto ${isToggle ? 'text-[#757575]': ''}`}>
                <span
                    className={`block absolute h-0.5 w-6/12 opacity-100 transition-[0.25s] duration-[ease-in-out]  ${isToggle ? 'rotate-45 bg-[#8c8c8c] rounded-[9px_0_0_9px] left-1 top-[5px]' : 'bg-white rotate-[0] rounded-[9px_0_0_9px] left-0 top-0'}`}></span>
                <span
                    className={`block absolute h-0.5 w-6/12 opacity-100 transition-[0.25s] duration-[ease-in-out] rounded-[0_9px_9px_0] ${isToggle ? 'left-[calc(50%_-_4px)] -rotate-45 bg-[#8c8c8c] top-[5px]': 'bg-white rotate-[0] top-0 left-2/4'}`}></span>
                <span
                    className={`block absolute h-0.5 w-6/12 rotate-[0] transition-[0.25s] duration-[ease-in-out] rounded-[0_9px_9px_0] top-1.5 ${isToggle ? 'opacity-0 bg-[#8c8c8c] -left-2/4':'opacity-100 bg-white left-0'}`}></span>
                <span
                    className={`block absolute h-0.5 w-6/12 rotate-[0] transition-[0.25s] duration-[ease-in-out] rounded-[0_9px_9px_0] top-1.5 ${isToggle ? 'opacity-0 bg-[#8c8c8c] left-full': 'bg-white opacity-100 left-2/4'}`}></span>
                 <span
                     className={`block absolute h-0.5 w-6/12 opacity-100 transition-[0.25s] duration-[ease-in-out] rounded-[0_9px_9px_0] ${isToggle ? '-rotate-45 bg-[#8c8c8c] left-1 top-2.5':'bg-white rotate-[0] left-0 top-3'}`}></span>
                 <span
                     className={`block absolute h-0.5 w-6/12 opacity-100 transition-[0.25s] duration-[ease-in-out] rounded-[0_9px_9px_0] ${isToggle ? 'left-[calc(50%_-_4px)] rotate-45 bg-[#8c8c8c] top-2.5':'left-2/4 top-3 bg-white rotate-[0]'}`}></span>
            </span>
        </span>
                    <a className='bg-[#f1f1f1] text-[#f0483e] block [font-family:var(--zf-primary-semibold)] w-[calc(100%_-_50px)] text-center transition-[0.4s] duration-[ease-out] ease-[all] h-full uppercase text-[15px] ml-[50px] px-0 py-3.5'>
                        <span>Đăng kí miễn phí</span>
                    </a>
                </div>
                <div className={`fixed [background:transparent] h-[calc(100%_-_50px)] w-full z-[99] transition-[background] duration-[0.3s] ease-[ease-in] left-0 top-0 ${isToggle ? 'visible block': 'invisible'} min-[767px]:hidden`}>
                    <div className={`overflow-y-scroll absolute w-[300px] transition-all duration-[0.3s] ease-[ease] max-h-[calc(100%_-_65px)] overflow-hidden bg-white shadow-[40px_40px_300px_100px_rgba(0,0,0,0.4)] rounded-[10px] left-[5px] ${isToggle ? 'opacity-100 bottom-[5px]':'bottom-[-70px] opacity-0'}`}>
                        <div className='absolute h-[50px] bg-[#f9f9f9] z-[9] px-[15px] py-2.5 border-b-[#efefef] border-b border-solid top-0 inset-x-0'>
                            <div className='relative'>
                                <form>
                                    <input className='[background:transparent] text-[15px] max-w-full h-[initial] leading-[initial] indent-[0] w-full [font-family:var(--zf-primary-regular)] appearance-none m-0 pl-2.5 pr-[50px] py-[5px] border-0' type='text' placeholder='Tìm kiếm zoho.com' />
                                    <button type='submit' className='[background:transparent] h-7 w-10 cursor-pointer absolute [outline:0] mx-auto my-0 p-0 border-0 right-0 inset-y-0
                                    before:content-[""] before:h-[15px] before:w-px before:bg-neutral-300 before:absolute before:left-[-5px] before:m-auto before:inset-y-0'>
                                        <span className='bg-[#f7f7f7] bg-[600px_auto] bg-[-285px_1px] inline-block w-[15px] h-4 align-middle opacity-70 bg-[image:var(--common-elements)] bg-no-repeat'></span>
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className='overflow-auto max-h-[calc(100vh_-_140px)]'>
                            <div className='overflow-scroll h-full'>
                                <ul className='w-full pl-[25px] pr-5 pt-[60px] pb-[15px]'>
                                    <li className={`block`} onClick={()=>{
                                        if(isActive !== '1') {
                                            setIsActive('1')
                                        }
                                        else setIsActive('0')
                                    }}>
                                        <span className='block text-[#333] relative pl-0 pr-[25px] py-2'>Sản phẩm
                                        <span className={`bg-[image:var(--mobile-menu-arrow)] [background-position-x:-168px] [background-position-y:-6px] bg-[990px] bg-no-repeat h-1.5 w-2.5 inline-block duration-[0.3s] ease-[ease] delay-[0s] transition-transform absolute right-2.5 top-[19px] ${isActive === '1'?'rotate-180':' rotate-[0]'}`}></span>
                                        </span>
                                        <div className={`transition-all duration-[0.3s] ease-[ease] overflow-hidden ${isActive === '1' ? 'block' 
                                                                                                                                         + ' opacity-100 h-28':'opacity-0 h-0'}  pl-0`}>
                                            <ul className='w-full pt-0 pb-1.5 px-0'>
                                                <li className='block'>
                                                    <a className={`text-base block text-[#333] duration-[0.3s] ease-[ease] delay-[0s] transition-all cursor-pointer tracking-[-0.2px] relative pl-3 pr-0 py-[7px] `}>Ứng dụng</a>
                                                </li>
                                                <li className='block'>
                                                    <a className={`text-base block text-[#333] duration-[0.3s] ease-[ease] delay-[0s] transition-all cursor-pointer tracking-[-0.2px] relative pl-3 pr-0 py-[7px]`}>Bộ ứng dụng</a>
                                                </li>
                                                <li className='block'>
                                                    <a className={`text-base block text-[#333] duration-[0.3s] ease-[ease] delay-[0s] transition-all cursor-pointer tracking-[-0.2px] relative pl-3 pr-0 py-[7px]`}>Nền tảng</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className='block'>
                                        <a className='block text-[#333] pl-0 pr-[25px] py-2'>Khách hàng</a>
                                    </li>
                                    <li className={`block`} onClick={()=>{
                                        if(isActive !== '2') {
                                            setIsActive('2')
                                        }
                                        else setIsActive('0')
                                    }}>
                                        <span className='block text-[#333] relative pl-0 pr-[25px] py-2'>Công ty
                                        <span className={`bg-[image:var(--mobile-menu-arrow)] [background-position-x:-168px] [background-position-y:-6px] bg-[990px] bg-no-repeat h-1.5 w-2.5 inline-block transition-[0.3s] duration-[transform] ease-[ease] absolute right-2.5 top-[19px] ${isActive === '2'?'rotate-180':' rotate-[0]'}`}></span>
                                        </span>
                                        <div className={`transition-all duration-[0.3s] ease-[ease] overflow-hidden ${isActive === '2' ? 'block'
                                                                                                                                         + ' opacity-100 h-56':'opacity-0 h-0'}  pl-0`}>
                                            <ul className='w-full pt-0 pb-1.5 px-0'>
                                                <li className='block'>
                                                    <a className='text-base block text-[#333] transition-[0.3s] duration-[ease] cursor-pointer tracking-[-0.2px] relative pl-3 pr-0 py-[7px]'>Ứng dụng</a>
                                                </li>
                                                <li className='block'>
                                                    <a className='text-base block text-[#333] transition-[0.3s] duration-[ease] cursor-pointer tracking-[-0.2px] relative pl-3 pr-0 py-[7px]'>Bộ ứng dụng</a>
                                                </li>
                                                <li className='block'>
                                                    <a className='text-base block text-[#333] transition-[0.3s] duration-[ease] cursor-pointer tracking-[-0.2px] relative pl-3 pr-0 py-[7px]'>Nền tảng</a>
                                                </li>
                                                <li className='block'>
                                                    <a className='text-base block text-[#333] transition-[0.3s] duration-[ease] cursor-pointer tracking-[-0.2px] relative pl-3 pr-0 py-[7px]'>Nền tảng</a>
                                                </li>
                                                <li className='block'>
                                                    <a className='text-base block text-[#333] transition-[0.3s] duration-[ease] cursor-pointer tracking-[-0.2px] relative pl-3 pr-0 py-[7px]'>Nền tảng</a>
                                                </li>
                                                <li className='block'>
                                                    <a className='text-base block text-[#333] transition-[0.3s] duration-[ease] cursor-pointer tracking-[-0.2px] relative pl-3 pr-0 py-[7px]'>Nền tảng</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className={`block`} onClick={()=>{
                                        if(isActive !== '3') {
                                            setIsActive('3')
                                        }
                                        else setIsActive('0')
                                    }}>
                                        <span className='block text-[#333] relative pl-0 pr-[25px] py-2'>Khác
                                        <span className={`bg-[image:var(--mobile-menu-arrow)] [background-position-x:-168px] [background-position-y:-6px] bg-[990px] bg-no-repeat h-1.5 w-2.5 inline-block transition-[0.3s] duration-[transform] ease-[ease] absolute right-2.5 top-[19px] ${isActive === '3'?'rotate-180':' rotate-[0]'}`}></span>
                                        </span>
                                        <div className={`transition-all duration-[0.3s] ease-[ease] overflow-hidden ${isActive === '3' ? 'block'
                                                                                                                                         + ' opacity-100 h-56':'opacity-0 h-0'}  pl-0`}>
                                            <ul className='w-full pt-0 pb-1.5 px-0'>
                                                <li className='block'>
                                                    <a className='text-base block text-[#333] transition-[0.3s] duration-[ease] cursor-pointer tracking-[-0.2px] relative pl-3 pr-0 py-[7px]'>Ứng dụng</a>
                                                </li>
                                                <li className='block'>
                                                    <a className='text-base block text-[#333] transition-[0.3s] duration-[ease] cursor-pointer tracking-[-0.2px] relative pl-3 pr-0 py-[7px]'>Bộ ứng dụng</a>
                                                </li>
                                                <li className='block'>
                                                    <a className='text-base block text-[#333] transition-[0.3s] duration-[ease] cursor-pointer tracking-[-0.2px] relative pl-3 pr-0 py-[7px]'>Nền tảng</a>
                                                </li>
                                                <li className='block'>
                                                    <a className='text-base block text-[#333] transition-[0.3s] duration-[ease] cursor-pointer tracking-[-0.2px] relative pl-3 pr-0 py-[7px]'>Nền tảng</a>
                                                </li>
                                                <li className='block'>
                                                    <a className='text-base block text-[#333] transition-[0.3s] duration-[ease] cursor-pointer tracking-[-0.2px] relative pl-3 pr-0 py-[7px]'>Nền tảng</a>
                                                </li>
                                                <li className='block'>
                                                    <a className='text-base block text-[#333] transition-[0.3s] duration-[ease] cursor-pointer tracking-[-0.2px] relative pl-3 pr-0 py-[7px]'>Nền tảng</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                                <div className='bg-white pt-[5px] pb-[30px] border-t-[#efefef] border-t border-solid'>
                                    <span className='block pl-[25px] pr-5 pt-2 pb-[3px]'>
                                        <a className='text-[#f0483e] font-[var(--zf-primary-semibold)]'>Đăng nhập</a>
                                    </span>
                                    <span className='block text-left pl-[25px] pr-5 pt-2 pb-[3px]'>
                                        <a className='text-[#333]'>Tất cả các sản phẩm zoho</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    )
}