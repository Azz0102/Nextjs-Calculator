'use client'

/* Core */
import {usePathname, useRouter} from 'next/navigation'

/* Instruments */
import '../../styles/globals.css'
import {counterSlice, useDispatch} from "@/lib/redux";
import {useState} from "react";


export const Header = () => {
    const pathname = usePathname()
    const dispatch = useDispatch()
    const router = useRouter()
    const [isToggle, setIsToggle] = useState(false)
    const [isToggleDropDown, setIsToggleDropDown] = useState(false)
    return (
        <nav className='nav font-semibold '>
            <div className="px-12 mx-auto md:flex md:items-center md:justify-between">
                <div className="flex justify-between items-center">
                    <a href={`${pathname === '/signin' ? '/signin' : '/'}`}
                       className="font-bold text-xl text-indigo-600">HUY</a>
                    <button
                        className={`${pathname === '/signin' ? 'hidden' : 'md:hidden'} border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 `}
                        onClick={() => setIsToggle(!isToggle)}>
                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none"
                             viewBox="0 0 17 14">
                            <path stroke="currentColor" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                </div>
                <div className={`${pathname === '/signin' ? ' hidden' : 'mt-3 md:mt-0'}`}>
                    <div
                        className={` ${isToggle ? 'flex flex-col md:flex-row justify-between' : 'hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0'}`}>
                        <a href="/"
                           className={`p-2 lg:px-4 md:mx-2 ${pathname === '/' ? ' text-white rounded bg-indigo-600' : 'text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300'}`}
                           onClick={() => setIsToggle(false)}>Home</a>
                        <a href="/posts"
                           className={`p-2 lg:px-4 md:mx-2 ${pathname === '/posts' ? ' text-white rounded bg-indigo-600' : 'text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300'}`}
                           onClick={() => setIsToggle(false)}>Posts</a>
                        <div onMouseEnter={() => {
                            setIsToggleDropDown(true)
                        }} onMouseLeave={() => {
                            setIsToggleDropDown(false)
                        }} className='group'>
                            <button
                                className="w-full md:w-auto flex items-center justify-between p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">Dropdown <svg
                                className="transform group-hover:-rotate-180
                                transition duration-150 ease-in-out w-2.5 h-2.5 ml-2.5" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" d="m1 1 4 4 4-4"/>
                            </svg></button>
                            {/*Dropdown menu*/}
                            <div
                                className={`w-full md:w-40 md:absolute z-[-1] group-hover:animate-[growDown_300ms_ease-in-out_forwards] group-hover:origin-[top_center] md:top-[58px] 
                                ${isToggleDropDown ? 'flex flex-col' : 'hidden'} font-normal bg-white divide-y divide-gray-100 
                                rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}>
                                <ul className="py-1 text-sm text-gray-700 dark:text-gray-400"
                                    aria-labelledby="dropdownLargeButton">
                                    <li>
                                        <a href="/"
                                           className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                    </li>
                                    <li>
                                        <a href="/"
                                           className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                    </li>
                                    <li>
                                        <a href="/"
                                           className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                    </li>
                                </ul>
                                <div className="py-1">
                                    <a href="#"
                                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Sign
                                        out</a>
                                </div>
                            </div>
                        </div>
                        <a href="/"
                           className={`p-2 lg:px-4 md:mx-2 ${pathname === 'About' ? ' text-white rounded bg-indigo-600' : 'text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300'}`}
                           onClick={() => setIsToggle(false)}>About</a>
                        <a href="/"
                           className={`p-2 lg:px-4 md:mx-2 ${pathname === '/Contact' ? ' text-white rounded bg-indigo-600' : 'text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300'}`}
                           onClick={() => setIsToggle(false)}>Contact</a>
                    </div>
                </div>
                <div className={`${pathname === '/signin' ? ' hidden' : 'mt-3 md:mt-0'}`}>
                    <a
                        className="hidden md:block p-2 lg:px-4 md:mx-2 text-red-700 text-center border border-solid border-red-700 rounded cursor-pointer hover:bg-red-700 hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1"
                        onClick={() => {
                            setIsToggle(false)
                            dispatch(counterSlice.actions.userNameInput(''))
                            dispatch(counterSlice.actions.passWordInput(''))
                            dispatch(counterSlice.actions.resetClick(''))
                            router.push('/signin')
                        }}
                    >Signout</a>
                </div>
            </div>
        </nav>
    )
}
