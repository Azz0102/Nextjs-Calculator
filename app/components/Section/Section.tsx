import {usePathname, useRouter} from "next/navigation";
import {selectPassword, selectUserName, useSelector} from "@/lib/redux";
import React, {useEffect} from "react";

export const Section = ({children}: { children: React.ReactNode }) => {
    const pathname = usePathname()
    const router = useRouter()
    let userName = useSelector(selectUserName)
    let passWord = useSelector(selectPassword)
    useEffect(() => {
            if (typeof window !== "undefined") {
                if (!userName || !passWord) {
                    router.push('/signin')
                } else {
                    if (pathname === '/signin') {
                        router.back()
                    }
                }
            }

        }
    )
    return (<section className='container'>
        <main className='main'>{children}</main>
    </section>)
}