'use client'
/* Components */
import {Providers} from '@/lib/providers'
import {Header} from './components/NavBar/Nav'

import {PersistGate} from 'redux-persist/es/integration/react'


/* Instruments */
import './styles/globals.css'
import React from "react";
import {persist, selectOverflow, useSelector} from "@/lib/redux";
import {Section} from "@/app/components/Section/Section";
import {Footer} from "@/app/components/Footer/Footer";
import {Body} from "@/app/components/Body/Body";
import {MobileMenu} from "@/app/components/MobileMenu/MobileMenu";


export default function RootLayout(props: React.PropsWithChildren) {

    return (
        <Providers>
            <html lang="en" suppressHydrationWarning={true}>
            <Body>
                <PersistGate loading={null} persistor={persist}>
                    <Header/>
                    <Section children={props.children}></Section>
                    <Footer/>
                    <MobileMenu />
                </PersistGate>
            </Body>
            </html>
        </Providers>
    )
}

