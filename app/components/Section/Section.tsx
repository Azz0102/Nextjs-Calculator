import {useRouter} from "next/navigation";
import {selectPassword, selectUserName, useSelector} from "@/lib/redux";
import React, {useEffect} from "react";
import {Footer} from "@/app/components/Footer/Footer";
import {Header} from "@/app/components/NavBar/Nav";

export const Section = ({children}: { children: React.ReactNode }) => {
    const router = useRouter()
    let userName = useSelector(selectUserName)
    let passWord = useSelector(selectPassword)
    useEffect(() => {
            if (typeof window !== "undefined") {
                if (!userName || !passWord) {
                    router.push('/signin')
                }
            }
        }
    )
    return (<section className='container'>
        <main className='main'>{children}</main>
    </section>)
}