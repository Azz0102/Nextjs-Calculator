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
    return (
        <nav className='nav'>
            <div className='flex flex-col items-center md:justify-normal md:flex-row gap-2 p-2 m-2'>
                <button data-collapse-toggle="navbar-solid-bg" type="button"
                        className={`inline-flex self-end items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg 
                        md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400
                        dark:hover:bg-gray-700 dark:focus:ring-gray-600 ${pathname === '/signin' ? 'hidden' : ''}`}
                        aria-controls="navbar-solid-bg" aria-expanded="false" onClick={() => setIsToggle(!isToggle)}>
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                         viewBox="0 0 17 14">
                        <path stroke="currentColor" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                <div className={`${isToggle ? 'block' : 'hidden'} w-full md:block`} id="navbar-solid-bg">
                    <div
                        className="flex flex-col font-medium md:text-2xl mt-4 rounded-lg bg-gray-500 md:flex-row md:justify-normal
                         md:items-center md:mt-0 md:border-0 md:bg-transparent md:dark:bg-transparent dark:border-gray-700">
                        <a
                            className={`block py-2 pl-3 pr-4 ${pathname === '/' ? 'text-white bg-blue-700 md:text-blue-700 md:dark:text-blue-500' : 'text-gray-900'} 
                                rounded md:bg-transparent md:p-2 md:mr-2 md:dark:bg-transparent hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 ${pathname === '/signin' ? 'hidden' : ''}`}
                            aria-current="page"
                            href="/"
                        >
                            {pathname !== '/signin' ? 'Home' : ''}
                        </a>
                        <a
                            className={`block py-2 pl-3 pr-4 ${pathname === '/posts' ? 'text-white bg-blue-700 md:text-blue-700 md:dark:text-blue-500' : 'text-gray-900'} 
                                rounded md:bg-transparent  md:p-0 md:dark:bg-transparent hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 
                                ${pathname === '/signin' ? 'hidden' : ''} md:mr-auto`}
                            href="/posts"
                        >
                            {pathname !== '/signin' ? 'Post' : ''}
                        </a>
                        <button
                            className={`block py-2 pl-3 pr-4 rounded hover:bg-red-700 md:hover:bg-transparent 
                                    md:focus:outline-none md:text-white md:bg-red-700 md:hover:bg-red-800 md:focus:ring-4
                                    md:focus:ring-red-300 md:font-medium md:rounded-lg md:text-sm md:px-5 md:py-2.5 md:dark:bg-red-600 md:basis-32
                                    md:dark:hover:bg-red-700 md:dark:focus:ring-red-900 ${pathname === '/signin' ? 'invisible' : ''}`}
                            onClick={() => {
                                dispatch(counterSlice.actions.userNameInput(''))
                                dispatch(counterSlice.actions.passWordInput(''))
                                dispatch(counterSlice.actions.resetClick(''))
                                router.push('/signin')
                            }}
                        >Sign out
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}
