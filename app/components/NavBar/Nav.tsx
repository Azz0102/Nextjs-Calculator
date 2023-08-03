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
            <div className="px-4 mx-auto md:flex md:items-center">
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

                <div
                    className={`${isToggle || pathname !== '/signin' ? 'flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0' : 'hidden'} `}>
                    <a href="/"
                       className={`p-2 lg:px-4 md:mx-2 ${pathname === '/' ? ' text-white rounded bg-indigo-600' : 'text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300'}`}
                       onClick={() => setIsToggle(false)}>Home</a>
                    <a href="/posts"
                       className={`p-2 lg:px-4 md:mx-2 ${pathname === '/posts' ? ' text-white rounded bg-indigo-600' : 'text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300'}`}
                       onClick={() => setIsToggle(false)}>Posts</a>
                    <a
                        className="p-2 lg:px-4 md:mx-2 text-red-700 text-center border border-solid border-red-700 rounded cursor-pointer hover:bg-red-700 hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1"
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
