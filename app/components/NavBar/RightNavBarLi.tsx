import {rightList} from "@/app/components/NavBar/List";

export const RightNavBarLi = ({isSelectedLeft, id}: {
    isSelectedLeft: string,
    id: string
}) => {
    if (id === '2' || id === '5' || id === '8') {
        return <div
            className={`h-[460px] w-[calc(100%_-_20px)] absolute transition-opacity duration-[0.5s] ease-[ease] pl-5 ${isSelectedLeft
                                                                                                                       === id ?
                'opacity-100 visible' : 'opacity-0 invisible'}`}>
            <div className='h-full w-full relative overflow-y-scroll box-border p-0'>
                <ul className='flex flex-wrap'>
                    {rightList.find(e => {
                        return e.id === isSelectedLeft
                    })?.list.map((e, ids) => {
                        if (e.style === 'beta' || e.style === 'new') {
                            return <li key={ids}
                                       className='w-[31.33%] relative cursor-pointer transition-[background-color] duration-[0.4s] ease-[ease] mr-[2%] mb-2.5 px-5 py-[15px] rounded-[3px] hover:bg-[color:var(--bg-color)]'>
                                <a href={e.link}
                                   className='text-sm relative inline-block w-full no-underline text-[color:var(--primary-anchor-clr)] pl-[60px] pr-0 py-0'>
                                    <div
                                        className='top-[-15px] text-[8px] absolute text-white uppercase align-baseline m-0 pt-0.5 pb-px px-[7px] rounded-none border-0 left-[62px] right-auto bg-[#049949] leading-normal'>{e.style
                                                                                                                                                                                                                            === 'beta' ?
                                        'Beta' : 'New'}</div>
                                    <span
                                        className={`w-10 h-10 bg-[800px_auto] absolute mt-0 scale-110 left-0 top-0 bg-[image:var(--product-icons)] bg-no-repeat bg-[${e.bg}]`}></span>
                                    <span className='w-full block'>
                                <label
                                    className='text-[22px] tracking-[-0.2px] leading-[1.2] block text-[color:var(--primary-color)] cursor-pointer'>{e.name}</label>
                                <small
                                    className='w-[85%] min-h-[50px] text-[13px] leading-[1.45] text-[color:var(--secondary-color)] block cursor-pointer mt-[7px]'>{e.content}</small>
                            </span>
                                </a>
                            </li>
                        }
                        else if (e.style === 'app') {
                            return <li key={ids}
                                       className='relative bg-[#eef5fd] border flex items-center transition-[border-color] duration-[0.4s] ease-[ease] w-[31.33%] cursor-pointer mr-[2%] mb-2.5 p-5 rounded-[3px] border-solid border-[#d3e5fa] hover:border-[#afcbec]'>
                                <div
                                    className='text-[10px] uppercase absolute text-[color:var(--primary-color)] tracking-[0.3px] align-baseline m-0 p-0 border-0 right-2.5 top-[5px]'>Bộ
                                    ứng dụng
                                </div>
                                <a href={e.link}
                                   className='text-xl relative inline-block w-full no-underline text-[color:var(--primary-anchor-clr)] pl-[70px]'>
                            <span
                                className={`bg-[position:var(${e.bg})] w-10 h-10 bg-[800px_auto] absolute mt-0 scale-[1.4] left-1.5 top-2 bg-[image:var(--product-icons)] bg-no-repeat`}></span>
                                    <span className='w-full block'>
                                <label
                                    className='text-[22px] tracking-[-0.2px] leading-[1.2] block text-[color:var(--primary-color)] cursor-pointer'>{e.name}</label>
                                <small
                                    className='min-h-[unset] w-full text-[13px] leading-[1.45] text-[color:var(--secondary-color)] block cursor-pointer mt-[7px]'>{e.content}</small>
                            </span>
                                </a>
                            </li>
                        }
                        else {
                            return <li key={ids}
                                       className='w-[31.33%] relative cursor-pointer transition-[background-color] duration-[0.4s] ease-[ease] mr-[2%] mb-2.5 px-5 py-[15px] rounded-[3px] hover:bg-[color:var(--bg-color)]'>
                                <a href={e.link}
                                   className='text-sm relative inline-block w-full no-underline text-[color:var(--primary-anchor-clr)] pl-[60px] pr-0 py-0'>
                            <span
                                className={`bg-[position:var(${e.bg})] w-10 h-10 bg-[800px_auto] absolute mt-0 scale-110 left-0 top-0 bg-[image:var(--product-icons)] bg-no-repeat`}></span>
                                    <span className='w-full block'>
                                <label
                                    className='text-[22px] tracking-[-0.2px] leading-[1.2] block text-[color:var(--primary-color)] cursor-pointer'>{e.name}</label>
                                <small
                                    className='w-[85%] min-h-[50px] text-[13px] leading-[1.45] text-[color:var(--secondary-color)] block cursor-pointer mt-[7px]'>{e.content}</small>
                            </span>
                                </a>
                            </li>
                        }
                    })}
                </ul>
            </div>
            {/*<div className='h-[51.2249%] bg-[rgba(0,0,0,0.4)] w-[7px] z-[2] cursor-pointer absolute rounded-[5px] right-0 top-[48.6637%]'></div>*/}
        </div>
    }
    return <div className={`w-[calc(100%_-_20px)] absolute transition-opacity duration-[0.5s] ease-[ease] pl-5 
                            ${isSelectedLeft === id ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <ul className='flex flex-wrap'>
            {rightList.find(e => {
                return e.id === isSelectedLeft
            })?.list.map((e, ids) => {
                if (e.style === 'beta' || e.style === 'new') {
                    return <li key={ids}
                               className='w-[31.33%] relative cursor-pointer transition-[background-color] duration-[0.4s] ease-[ease] mr-[2%] mb-2.5 px-5 py-[15px] rounded-[3px] hover:bg-[color:var(--bg-color)]'>
                        <a href={e.link}
                           className='text-sm relative inline-block w-full no-underline text-[color:var(--primary-anchor-clr)] pl-[60px] pr-0 py-0'>
                            <div
                                className='top-[-15px] text-[8px] absolute text-white uppercase align-baseline m-0 pt-0.5 pb-px px-[7px] rounded-none border-0 left-[62px] right-auto bg-[#049949] leading-normal'>{e.style
                                                                                                                                                                                                                    === 'beta' ?
                                'Beta' : 'New'}</div>
                            <span
                                className={`w-10 h-10 bg-[800px_auto] absolute mt-0 scale-110 left-0 top-0 bg-[image:var(--product-icons)] bg-no-repeat bg-[position:var(${e.bg})]`}></span>
                            <span className='w-full block'>
                                <label
                                    className='text-[22px] tracking-[-0.2px] leading-[1.2] block text-[color:var(--primary-color)] cursor-pointer'>{e.name}</label>
                                <small
                                    className='w-[85%] min-h-[50px] text-[13px] leading-[1.45] text-[color:var(--secondary-color)] block cursor-pointer mt-[7px]'>{e.content}</small>
                            </span>
                        </a>
                    </li>
                }
                else if (e.style === 'app') {
                    return <li key={ids}
                               className='relative bg-[#eef5fd] border flex items-center transition-[border-color] duration-[0.4s] ease-[ease] w-[31.33%] cursor-pointer mr-[2%] mb-2.5 p-5 rounded-[3px] border-solid border-[#d3e5fa] hover:border-[#afcbec]'>
                        <div
                            className='text-[10px] uppercase absolute text-[color:var(--primary-color)] tracking-[0.3px] align-baseline m-0 p-0 border-0 right-2.5 top-[5px]'>Bộ
                            ứng dụng
                        </div>
                        <a href={e.link}
                           className='text-xl relative inline-block w-full no-underline text-[color:var(--primary-anchor-clr)] pl-[70px]'>
                            <span
                                className={`bg-[position:var(${e.bg})] w-10 h-10 bg-[800px_auto] absolute mt-0 scale-[1.4] left-1.5 top-2 bg-[image:var(--product-icons)] bg-no-repeat`}></span>
                            <span className='w-full block'>
                                <label
                                    className='text-[22px] tracking-[-0.2px] leading-[1.2] block text-[color:var(--primary-color)] cursor-pointer'>{e.name}</label>
                                <small
                                    className='min-h-[unset] w-full text-[13px] leading-[1.45] text-[color:var(--secondary-color)] block cursor-pointer mt-[7px]'>{e.content}</small>
                            </span>
                        </a>
                    </li>
                }
                else {
                    return <li key={ids}
                               className='w-[31.33%] relative cursor-pointer transition-[background-color] duration-[0.4s] ease-[ease] mr-[2%] mb-2.5 px-5 py-[15px] rounded-[3px] hover:bg-[color:var(--bg-color)]'>
                        <a href={e.link}
                           className='text-sm relative inline-block w-full no-underline text-[color:var(--primary-anchor-clr)] pl-[60px] pr-0 py-0'>
                            <span
                                className={`bg-[position:var(${e.bg})] w-10 h-10 bg-[800px_auto] absolute mt-0 scale-110 left-0 top-0 bg-[image:var(--product-icons)] bg-no-repeat`}></span>
                            <span className='w-full block'>
                                <label
                                    className='text-[22px] tracking-[-0.2px] leading-[1.2] block text-[color:var(--primary-color)] cursor-pointer'>{e.name}</label>
                                <small
                                    className='w-[85%] min-h-[50px] text-[13px] leading-[1.45] text-[color:var(--secondary-color)] block cursor-pointer mt-[7px]'>{e.content}</small>
                            </span>
                        </a>
                    </li>
                }
            })}
        </ul>
    </div>
}