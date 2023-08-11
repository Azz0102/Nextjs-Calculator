import {slideList} from "@/app/components/NavBar/List";
import {Dispatch, SetStateAction, useEffect, useState} from "react";
import {set} from "zod";

export const SlideImage = ({indexSlide, setIndexSlide}: {
    indexSlide: number,
    setIndexSlide: Dispatch<SetStateAction<number>>
}) => {
    useEffect(() => {
        // set an interval timer if we are currently moused over
        if (indexSlide < 4) {
            const timer = setInterval(() => {
                setIndexSlide(indexSlide + 1);
            }, 5000);
            // automatically clear timer the next time this effect is fired or
            // the component is unmounted
            return () => clearInterval(timer);
        }
        else {
            const timer = setInterval(() => {
                setIndexSlide(1);
            }, 5000);
            // automatically clear timer the next time this effect is fired or
            // the component is unmounted
            return () => clearInterval(timer);
        }
    });
    // [transform:translate3d(-${indexSlide * 331}px,0px,0px)] transition-transform

    return <div className='[transform:translate3d(0,0,0)] overflow-hidden relative block m-0 p-0'>
        <div
            className={`opacity-100 w-[2979px] -translate-x-[${indexSlide * 331}px] relative block mx-auto left-0 top-0 after:clear-both after:table after:content-[""] after:box-border duration-1000 ease-[ease] delay-[0s] `}>
            <li className='w-[331px] block relative float-left h-full min-h-[1px] p-0 font-[opensansregular]'>
            </li>
            {slideList.map((e) => {
                               return <li className='w-[331px] block relative float-left h-full min-h-[1px] p-0 font-[opensansregular]'
                                          aria-hidden={indexSlide !== e.id}>
                                   < div className='flex flex-col'>
                                       <a className='no-underline [outline:0] text-[color:var(--primary-anchor-clr)]'>
                                           <div className='flex flex-col'>
                                               <div>
                                                   <img className='max-w-full h-auto' alt='H'
                                                        src={`${e.image}`}/>
                                               </div>
                                               <div className='pl-[25px] pr-[5px] py-[5px]'>
                                                   <p className='w-[94%] leading-[1.7] tracking-[-0.2px] mt-0 mb-[15px] mx-0 font-[opensansregular]'>
                                                       {e.content}</p>
                                               </div>
                                           </div>
                                       </a>
                                   </div>
                               </li>
                           }
            )
            }
        </div>
    </div>
}