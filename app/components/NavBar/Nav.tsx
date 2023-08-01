'use client'

/* Core */
import {usePathname, useRouter} from 'next/navigation'

/* Instruments */
import '../../styles/globals.css'
import {counterSlice, useDispatch} from "@/lib/redux";


export const Nav = () => {
    const pathname = usePathname()
    const dispatch = useDispatch()
    const router = useRouter()
    return (
        <nav className='nav'>
            <a
                className={`block py-2 pl-3 pr-4 ${pathname === '/' ? 'text-white bg-blue-700 hover:bg-blue-600' : 'text-gray-900 bg-slate-100 hover:bg-slate-300'} rounded
                ${pathname === '/signin' ? 'hidden':''}`}
                href="/"
            >
                {pathname !== '/signin' ? 'Home' : ''}
            </a>
            <a
                className={`block py-2 pl-3 pr-4 ${pathname === '/posts' ? 'text-white bg-blue-700 hover:bg-blue-600' : 'text-gray-900 bg-slate-100 hover:bg-slate-300'} rounded mr-auto
                ${pathname === '/signin' ? 'hidden':''}`}
                href="/posts"
            >
                {pathname !== '/signin' ? 'Post' : ''}
            </a>
            <button
                className={`focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4
                focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-red-600 
                dark:hover:bg-red-700 dark:focus:ring-red-900 ${pathname === '/signin' ? 'invisible' : ''}`}
                onClick={() => {
                    dispatch(counterSlice.actions.userNameInput(''))
                    dispatch(counterSlice.actions.passWordInput(''))
                    dispatch(counterSlice.actions.resetClick(''))
                    router.push('/signin')
                }}
            >Sign out
            </button>
        </nav>
    )
}
