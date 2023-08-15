import {Dispatch, SetStateAction, useRef, useState} from "react";
import {TopNavBarLi} from "@/app/components/NavBar/TopNavBarLi";
import {LeftNavBarLi} from "@/app/components/NavBar/LeftNavBarLi";
import {leftNavBarList, topNavBarList} from "@/app/components/NavBar/List";
import {RightNavBarLi} from "@/app/components/NavBar/RightNavBarLi";
import {counterSlice, useDispatch} from "@/lib/redux";
import useOnClickOutside from "@/app/helper/OnClickOutSideHook";

export const ProductNavBar = ({isToggle, setIsToggle}: { isToggle: string, setIsToggle: Dispatch<SetStateAction<string>> }) => {
    const dispatch = useDispatch()
    const [isSelected, setIsSelected] = useState('1')
    const [isSelectedLeft, setIsSelectedLeft] = useState('1')
    const ref = useRef<HTMLDivElement>(null)

    const handleSelect = (event: any) => {
        setIsSelected(event.target.id)
    }

    const handleSelectLeft = (event: any) => {
        setIsSelectedLeft(event.target.id)
    }

    useOnClickOutside(ref, (event: Event) => {
        if (isToggle == '1') {
            setIsToggle('0')
            dispatch(counterSlice.actions.setOverflow(false))
        }
    }, 'SP');

    return <div className='w-full h-full bg-white' ref={ref}>
        <div className='flex items-center justify-between bg-[color:var(--bg-color)] relative px-[30px] py-0'>
            <div className='w-[1380px] relative flex justify-start mx-auto my-0'>
                <ul className='w-auto inline-block pr-2.5 p-0'>
                    {topNavBarList.map((e) => {
                        return <TopNavBarLi id={e.id} handleSelect={handleSelect} isSelected={isSelected} name={e.name}/>
                    })}
                </ul>
                <div className='inline-flex items-center m-0 bottom-0'>
                    <a href='/'
                       className='transition-[background-color] duration-[0.3s] ease-[ease] text-[color:var(--highlight-color)] text-[13px] leading-none inline-block uppercase relative m-0 pl-[25px] pr-[42px] py-0.5 rounded-[unset] border-l-[#d1d5e2] border-0 border-l border-solid after:top-[calc(50%_-_7px)] after:bg-[500px_auto] after:bg-[-107px_-76px] after:content-[""] after:w-[13px] after:h-[13px] after:absolute after:transition-all after:duration-[0.5s] after:ease-[ease] hover:after:scale-100 after:right-[23px] hover:after:right-[15px] after:bg-[image:var(--bg-icon-arrow)] after:bg-no-repeat'>
                        Khám phá tất cả sản phẩm1
                    </a>
                </div>
                <span className='absolute w-2.5 cursor-pointer flex flex-col justify-center items-center z-[3] left-auto right-3 top-[21px]
                after:content-[""] after:w-[29px] after:h-[29px] after:bg-white after:absolute after:z-0 after:shadow-[0_3px_7px_1px_rgba(173,166,166,0.21)] after:rounded-[50%] after:-left-2.5 after:-top-2.5'
                      onClick={() => {
                          setIsToggle('0')
                          dispatch(counterSlice.actions.setOverflow(false))
                      }}>
                <svg id="closeicon-svg" data-name="Layer 3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 21.77"
                     className='w-2 z-[1]'><title>đóng</title><path className="fill-none stroke-neutral-600 stroke-[3px]" strokeLinecap='round'
                                                                    strokeLinejoin='round'
                                                                    id="Union_1" data-name="Union 3"
                                                                    d="M11,10.82,1.5,20.27,11,10.82,1.63,1.5,11,10.82l9.24-9.2L11,10.82l9.5,9.45Z"></path></svg></span>
            </div>
        </div>
        <div className='w-full h-full shadow-[0_0_20px_rgba(0,0,0,0.3)]'>
            <div className='relative w-full h-full bg-white'>
                <div className={`overflow-hidden absolute w-full h-full bg-white transition-opacity duration-[0.4s] ease-[ease] p-0 top-0
                ${isSelected === '1' ? 'opacity-100 z-[2]' : 'opacity-0 z-[1]'}`}>
                    <div className='max-w-[1380px] h-full mx-auto my-0'>
                        <div className='h-[530px] w-[260px] relative float-left mt-[30px] border-r-0 pr-2.5
                        after:content-[""] after:w-px after:h-[500px] after:bg-[#e7ebf0] after:absolute after:left-auto after:right-0 after:top-0'>
                            <div className='pt-2.5 pb-[15px] px-0 border-0'>
                                <ul className='mb-0 border-l-transparent border-l border-solid list-none'>
                                    {leftNavBarList.map((e) => {
                                        return <LeftNavBarLi id={e.id} setIsSelectedLeft={handleSelectLeft} isSelectedLeft={isSelectedLeft}
                                                             name={e.name}/>
                                    })}
                                </ul>
                            </div>
                            <a className='leading-[1.3] text-[13px] bg-[color:var(--highlight-color)] text-white inline-block uppercase transition-[background-color] duration-[0.4s] ease-[ease] border border-[color:var(--highlight-color)] relative tracking-[0.2px] no-underline outline-0 ml-2.5 mr-0 mt-[5px] mb-0 pl-6 pr-[46px] py-[15px] rounded-sm border-solid top-auto cursor-pointer
                            after:bg-[-72px_-76px] after:top-[calc(50%_-_7px)] after:bg-[500px_auto] after:content-[""] after:w-[13px] after:h-[13px] after:absolute after:transition-all after:duration-[0.5s] after:ease-[ease] after:scale-100 after:right-[23px] after:bg-[image:var(--bg-icon-arrow)] after:bg-no-repeat hover:after:scale-100 hover:after:right-[15px]'>Khám
                                phá tất cả sản phẩm</a>
                        </div>
                        <div className='w-[calc(100%_-_260px)] relative h-full float-left p-0'>
                            <div className='w-full flex items-center justify-between'>
                                <div className='text-3xl tracking-[-0.5px] ml-[47px] mr-0 mt-[30px] mb-[15px]'>
                                    {leftNavBarList.find(e => {
                                        return e.id === isSelectedLeft
                                    })?.name}
                                </div>
                            </div>
                            {leftNavBarList.map((e) => {
                                return <RightNavBarLi isSelectedLeft={isSelectedLeft} id={e.id}/>
                            })}
                        </div>
                    </div>
                </div>
                <div
                    className={`overflow-hidden absolute w-full h-full bg-white transition-opacity duration-[0.4s] ease-[ease] pt-10 p-0 top-0 ${isSelected
                                                                                                                                                 === '2' ?
                                                                                                                                                 'opacity-100 z-[2]' :
                                                                                                                                                 'opacity-0 z-[1]'}`}>
                    <div className='h-full max-w-[1200px] mx-auto my-0'>
                        <div className='relative w-full h-full overflow-visible p-0'>
                            <div>
                                <div className='flex m-0'>
                                    <div className='w-full p-0'>
                                        <ul className='flex flex-wrap'>
                                            <li className='bg-[#eef5fd] border w-[31%] relative cursor-pointer transition-[background-color] duration-[0.4s] ease-[ease] mr-[15px] mb-[15px] px-[15px] py-[25px] rounded-[3px] border-solid border-[#d3e5fa] hover:border-[#afcbec] group'>
                                                <a href='/'
                                                   className='text-xl relative inline-block w-full no-underline text-[color:var(--primary-anchor-clr)] pl-[70px] pr-0 py-0'>
                                                    <span
                                                        className='bg-[position:var(--zp-crmplus-bp)] w-10 h-10 bg-[800px_auto] absolute mt-0 scale-[1.4] left-1.5 top-2 bg-[image:var(--product-icons)] bg-no-repeat'></span>
                                                    <span className='w-full block'>
                                                        <label
                                                            className='text-[22px] block text-[color:var(--primary-color)] cursor-pointer'>CRM Plus</label>
                                                        <small className='text-[color:var(--secondary-color)] text-sm block cursor-pointer'>Nền tảng hợp nhất để mang lại trải nghiệm khách hàng hàng đầu.</small>
                                                        <em className='text-xs text-[color:var(--highlight-color)] uppercase relative tracking-[0.2px] inline-block pr-7 group-hover:after:translate-x-[5px] after:bg-[-108px_-76px] after:top-[calc(50%_-_7px)] after:content-[""] after:w-[13px] after:h-[13px] after:absolute after:bg-[500px_auto] after:transition-all after:duration-[0.5s] after:ease-[ease] after:right-[3px] after:bg-[image:var(--bg-icon-arrow)] after:bg-no-repeat'>Dùng thử ngay</em>
                                                    </span>
                                                </a>
                                            </li>
                                            <li className='bg-[#e8faf2] border w-[31%] relative cursor-pointer transition-[background-color] duration-[0.4s] ease-[ease] mr-[15px] mb-[15px] px-[15px] py-[25px] rounded-[3px] border-solid border-[#ceeddf] hover:border-[#a2d4b6] group'>
                                                <a href='/'
                                                   className='text-xl relative inline-block w-full no-underline text-[color:var(--primary-anchor-clr)] pl-[70px] pr-0 py-0'>
                                                    <span
                                                        className='bg-[position:var(--zp-fplus-bp)] w-10 h-10 bg-[800px_auto] absolute mt-0 scale-[1.4] left-1.5 top-2 bg-[image:var(--product-icons)] bg-no-repeat'></span>
                                                    <span className='w-full block'>
                                                        <label
                                                            className='text-[22px] block text-[color:var(--primary-color)] cursor-pointer'>CRM Plus</label>
                                                        <small className='text-[color:var(--secondary-color)] text-sm block cursor-pointer'>Nền tảng hợp nhất để mang lại trải nghiệm khách hàng hàng đầu.</small>
                                                        <em className='text-xs text-[color:var(--highlight-color)] uppercase relative tracking-[0.2px] inline-block pr-7 group-hover:after:translate-x-[5px] after:bg-[-108px_-76px] after:top-[calc(50%_-_7px)] after:content-[""] after:w-[13px] after:h-[13px] after:absolute after:bg-[500px_auto] after:transition-all after:duration-[0.5s] after:ease-[ease] after:right-[3px] after:bg-[image:var(--bg-icon-arrow)] after:bg-no-repeat'>Dùng thử ngay</em>
                                                    </span>
                                                </a>
                                            </li>
                                            <li className='bg-[#f6f4ff] border w-[31%] relative cursor-pointer transition-[background-color] duration-[0.4s] ease-[ease] mr-[15px] mb-[15px] px-[15px] py-[25px] rounded-[3px] border-solid border-[#e1dbf7] hover:border-[#cfc7f6] group'>
                                                <a href='/'
                                                   className='text-xl relative inline-block w-full no-underline text-[color:var(--primary-anchor-clr)] pl-[70px] pr-0 py-0'>
                                                    <span
                                                        className='bg-[position:var(--zp-pplus-bp)] w-10 h-10 bg-[800px_auto] absolute mt-0 scale-[1.4] left-1.5 top-2 bg-[image:var(--product-icons)] bg-no-repeat'></span>
                                                    <span className='w-full block'>
                                                        <label
                                                            className='text-[22px] block text-[color:var(--primary-color)] cursor-pointer'>CRM Plus</label>
                                                        <small className='text-[color:var(--secondary-color)] text-sm block cursor-pointer'>Nền tảng hợp nhất để mang lại trải nghiệm khách hàng hàng đầu.</small>
                                                        <em className='text-xs text-[color:var(--highlight-color)] uppercase relative tracking-[0.2px] inline-block pr-7 group-hover:after:translate-x-[5px] after:bg-[-108px_-76px] after:top-[calc(50%_-_7px)] after:content-[""] after:w-[13px] after:h-[13px] after:absolute after:bg-[500px_auto] after:transition-all after:duration-[0.5s] after:ease-[ease] after:right-[3px] after:bg-[image:var(--bg-icon-arrow)] after:bg-no-repeat'>Dùng thử ngay</em>
                                                    </span>
                                                </a>
                                            </li>
                                            <li className='bg-[#fff2f4] border w-[31%] relative cursor-pointer transition-[background-color] duration-[0.4s] ease-[ease] mr-[15px] mb-[15px] px-[15px] py-[25px] rounded-[3px] border-solid border-[#f8dde1] hover:border-[#f9cad1] group'>
                                                <a href='/'
                                                   className='text-xl relative inline-block w-full no-underline text-[color:var(--primary-anchor-clr)] pl-[70px] pr-0 py-0'>
                                                    <span
                                                        className='bg-[position:var(--zp-workplace-bp)] w-10 h-10 bg-[800px_auto] absolute mt-0 scale-[1.4] left-1.5 top-2 bg-[image:var(--product-icons)] bg-no-repeat'></span>
                                                    <span className='w-full block'>
                                                        <label
                                                            className='text-[22px] block text-[color:var(--primary-color)] cursor-pointer'>CRM Plus</label>
                                                        <small className='text-[color:var(--secondary-color)] text-sm block cursor-pointer'>Nền tảng hợp nhất để mang lại trải nghiệm khách hàng hàng đầu.</small>
                                                        <em className='text-xs text-[color:var(--highlight-color)] uppercase relative tracking-[0.2px] inline-block pr-7 group-hover:after:translate-x-[5px] after:bg-[-108px_-76px] after:top-[calc(50%_-_7px)] after:content-[""] after:w-[13px] after:h-[13px] after:absolute after:bg-[500px_auto] after:transition-all after:duration-[0.5s] after:ease-[ease] after:right-[3px] after:bg-[image:var(--bg-icon-arrow)] after:bg-no-repeat'>Dùng thử ngay</em>
                                                    </span>
                                                </a>
                                            </li>
                                            <li className='bg-[#fff7ee] border w-[31%] relative cursor-pointer transition-[background-color] duration-[0.4s] ease-[ease] mr-[15px] mb-[15px] px-[15px] py-[25px] rounded-[3px] border-solid border-[#f3e2ba] hover:border-[#f8d1a4] group'>
                                                <a href='/'
                                                   className='text-xl relative inline-block w-full no-underline text-[color:var(--primary-anchor-clr)] pl-[70px] pr-0 py-0'>
                                                    <span
                                                        className='bg-[-120px_0] w-10 h-10 bg-[800px_auto] absolute mt-0 scale-[1.4] left-1.5 top-2 bg-[image:var(--product-icons)] bg-no-repeat'></span>
                                                    <span className='w-full block'>
                                                        <label
                                                            className='text-[22px] block text-[color:var(--primary-color)] cursor-pointer'>CRM Plus</label>
                                                        <small className='text-[color:var(--secondary-color)] text-sm block cursor-pointer'>Nền tảng hợp nhất để mang lại trải nghiệm khách hàng hàng đầu.</small>
                                                        <em className='text-xs text-[color:var(--highlight-color)] uppercase relative tracking-[0.2px] inline-block pr-7 group-hover:after:translate-x-[5px] after:bg-[-108px_-76px] after:top-[calc(50%_-_7px)] after:content-[""] after:w-[13px] after:h-[13px] after:absolute after:bg-[500px_auto] after:transition-all after:duration-[0.5s] after:ease-[ease] after:right-[3px] after:bg-[image:var(--bg-icon-arrow)] after:bg-no-repeat'>Dùng thử ngay</em>
                                                    </span>
                                                </a>
                                            </li>
                                            <li className='bg-[#eefcfd] border w-[31%] relative cursor-pointer transition-[background-color] duration-[0.4s] ease-[ease] mr-[15px] mb-[15px] px-[15px] py-[25px] rounded-[3px] border-solid border-[#d0e7ea] hover:border-[#bbe1e6] group'>
                                                <a href='/'
                                                   className='text-xl relative inline-block w-full no-underline text-[color:var(--primary-anchor-clr)] pl-[70px] pr-0 py-0'>
                                                    <span
                                                        className='bg-[position:var(--zp-mplus-bp)] w-10 h-10 bg-[800px_auto] absolute mt-0 scale-[1.4] left-1.5 top-2 bg-[image:var(--product-icons)] bg-no-repeat'></span>
                                                    <span className='w-full block'>
                                                        <label
                                                            className='text-[22px] block text-[color:var(--primary-color)] cursor-pointer'>CRM Plus</label>
                                                        <small className='text-[color:var(--secondary-color)] text-sm block cursor-pointer'>Nền tảng hợp nhất để mang lại trải nghiệm khách hàng hàng đầu.</small>
                                                        <em className='text-xs text-[color:var(--highlight-color)] uppercase relative tracking-[0.2px] inline-block pr-7 group-hover:after:translate-x-[5px] after:bg-[-108px_-76px] after:top-[calc(50%_-_7px)] after:content-[""] after:w-[13px] after:h-[13px] after:absolute after:bg-[500px_auto] after:transition-all after:duration-[0.5s] after:ease-[ease] after:right-[3px] after:bg-[image:var(--bg-icon-arrow)] after:bg-no-repeat'>Dùng thử ngay</em>
                                                    </span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className={`bg-[#fed600] overflow-hidden absolute w-full h-full transition-opacity duration-[0.4s] ease-[ease] p-0 top-0 ${isSelected
                                                                                                                                               === '3' ?
                                                                                                                                               'opacity-100 z-[2]' :
                                                                                                                                               'opacity-0 z-[1]'}`}>
                    <div className='max-w-[1380px] h-full mx-auto my-0'>
                        <div className='flex items-center w-full h-full relative float-left p-0'>
                            <div className='w-4/5 relative h-full mx-auto my-0 pt-0.5 pb-0 px-0'>
                                <div className='w-full flex text-left mt-[60px] p-0 border-r-0'>
                                    <div className='text-center float-left'>
                                        <a className='block text-[color:var(--primary-color)] text-[40px] tracking-[-0.5px]'>
                                            <span
                                                className='before:relative before:content-[""] before:w-10 before:h-[41px] before:bg-[position:var(--zp-one-bp)] before:bg-[800px_auto] before:block before:mt-5 before:mb-10 before:mx-auto before:scale-[2] before:-left-5 before:bg-[image:var(--product-icons)] before:bg-no-repeat'></span>
                                        </a>
                                    </div>
                                    <div className='w-full float-left pl-5 pr-0 py-0 border-0'>
                                        <sub className='text-base block mb-[5px]'>Bộ ứng dụng toàn diện</sub>
                                        <h3 className='text-[50px] leading-[1.2] tracking-[-1.5px] font-[normal] mb-0'>Zoho One</h3>
                                        <div className='text-lg mb-5'>Hệ điều hành dành cho doanh nghiệp</div>
                                        <p className='text-lg w-[90%] max-w-full tracking-[-0.2px] leading-[1.7] text-[#333] mt-0 mb-[30px] mx-0'>Điều
                                            hành toàn bộ doanh nghiệp của bạn trên Zoho bằng phần mềm đám mây hợp nhất của chúng tôi, được thiết kế để
                                            giúp bạn tháo gỡ chướng ngại ngăn cách giữa các bộ phận và tăng hiệu quả của tổ chức.</p>
                                        <a className='border bg-[#f60014] text-white uppercase leading-none transition-[background-color] duration-[0.4s] ease-[ease] relative tracking-[0.2px] inline-block text-sm pl-[30px] pr-12 py-[17px] rounded-sm border-solid border-[#f60014] cursor-pointer
                                        after:bg-[-72px_-76px] after:top-[calc(50%_-_7px)] after:content-[""] after:w-[13px] after:h-[13px] after:absolute after:bg-[500px_auto] after:transition-all after:duration-[0.5s] after:ease-[ease] after:scale-100 after:right-[23px] after:bg-[image:var(--bg-icon-arrow)] after:bg-no-repeat hover:after:translate-x-[5px]'>Dùng
                                            thử Zoho One</a>
                                    </div>
                                    <div>
                                        <img className='w-full max-w-full h-auto align-baseline box-border overflow-clip m-0 p-0 border-0' alt='Huy'
                                             src="//www.zohowebstatic.com/sites/zweb/images/zoho_general_pages/zh-one-poster.png"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`absolute w-full h-full bg-white transition-opacity duration-[0.4s] ease-[ease] top-0 ${isSelected
                                                                                                                        === '4' ?
                                                                                                                        'opacity-100 z-[2]' :
                                                                                                                        'opacity-0 z-[1]'}`}>
                    <div
                        className='relative h-full max-w-[1600px] w-full block overflow-hidden bg-white mx-auto my-0 pt-[50px] pb-0 px-0 border-0'>
                        <div className='w-[38%] float-left ml-[200px] mt-[50px]'>
                            <h3 className='text-[color:var(--primary-color)] relative leading-[1.2] text-[50px] tracking-[-1px] mb-2.5
                            before:content-[""] before:w-12 before:h-12 before:block before:bg-no-repeat before:bg-[0_0] before:bg-[200px_auto] before:mb-5 before:left-0
                            before:bg-[url(//www.zohowebstatic.com/sites/zweb/images/productlogos/marketplace.svg)]'>
                                Kho ứng dụng
                            </h3>
                            <p className='text-[color:var(--secondary-color)] w-[calc(100%_+_25px)] text-xl leading-[1.7] tracking-[-0.2px] mt-0 mb-[30px] mb-5 mx-0'>Với
                                hơn 1500 tiện ích mở rộng sẵn sàng sử dụng thuộc hơn 40 danh mục, hãy kết nối các công cụ kinh doanh bạn yêu thích với
                                các sản phẩm Zoho mà bạn đã sử dụng.</p>
                            <a className='bg-[color:var(--highlight-color)] text-white inline-block uppercase leading-none transition-[background-color] duration-[0.4s] ease-[ease] border border-[color:var(--highlight-color)] relative tracking-[0.2px] text-sm pl-[30px] pr-12 py-[17px] rounded-sm border-solid cursor-pointer
                            after:bg-[-72px_-76px] after:top-[calc(50%_-_7px)] after:bg-[500px_auto] after:content-[""] after:w-[13px] after:h-[13px] after:absolute after:bg-[image:var(--bg-icon-arrow)] after:bg-no-repeat after:transition-all after:duration-[0.5s] after:ease-[ease] after:scale-100 after:right-[23px] hover:after:translate-x-[5px] hover:after:scale-100'>Khám
                                phá Marketplace</a>
                        </div>
                        <div className='w-6/12 flex items-end h-full absolute float-left ml-[2%] right-0 top-0'>
                            <img className='w-[85%] max-w-full h-auto overflow-clip' alt='H'
                                 src='//www.zohowebstatic.com/sites/zweb/images/zoho_general_pages/zh-marketplace.png'/>
                        </div>
                    </div>
                </div>
                <div
                    className={`bg-[color:var(--bg-blue-color)] absolute w-full h-full transition-opacity duration-[0.4s] ease-[ease] top-0 ${isSelected
                                                                                                                                              === '5' ?
                                                                                                                                              'opacity-100 z-[2]' :
                                                                                                                                              'opacity-0 z-[1]'}`}>
                    <div className='flex justify-start h-full'>
                        <div className='max-w-[1100px] bg-transparent mx-auto my-0 pt-[50px] pb-0 px-0'>
                            <div className='w-3/5 float-left'>
                                <h3 className='text-[50px] leading-[1.2] tracking-[-1.5px] text-white font-[normal] mt-[50px] mb-2.5'>Ứng dụng dành
                                    cho thiết bị di động</h3>
                                <p className='text-xl text-white w-[90%] leading-[1.7] tracking-[-0.2px] mb-5 m-0'>Bạn phải rời xa máy tính? Chuyện
                                    nhỏ. Luôn tập trung vào khách hàng, quản lý doanh nghiệp của bạn và kết nối trên đường đi. Mọi lúc mọi nơi.</p>
                                <a className='bg-transparent border leading-none text-white uppercase transition-[background-color] duration-[0.4s] ease-[ease] relative tracking-[0.2px] inline-block text-sm mt-[30px] pl-[30px] pr-12 py-[17px] rounded-sm border-solid border-white cursor-pointer
                                after:bg-[-72px_-76px] after:top-[calc(50%_-_7px)] after:bg-[500px_auto] after:content-[""] after:w-[13px] after:h-[13px] after:absolute after:bg-[image:var(--bg-icon-arrow)] after:bg-no-repeat after:transition-all after:duration-[0.5s] after:ease-[ease] after:scale-100 after:right-[23px] hover:after:translate-x-[5px] hover:after:scale-100'>Khám
                                    phá tất cả ứng dụng</a>
                            </div>
                            <div className='w-[35%] flex items-end h-full float-left ml-[2%]'>
                                <img alt='h' className='w-full max-w-full h-auto'
                                     src='//www.zohowebstatic.com/sites/zweb/images/zoho_general_pages/zh-mobileapp.png'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
