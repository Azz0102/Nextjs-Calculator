'use client'
/* Components */
import {Providers} from '@/lib/providers'
import {Header} from './components/NavBar/Nav'

import {PersistGate} from 'redux-persist/es/integration/react'


/* Instruments */
import './styles/globals.css'
import React from "react";
import {persist} from "@/lib/redux";
import {Section} from "@/app/components/Section/Section";
import {Footer} from "@/app/components/Footer/Footer";


export default function RootLayout(props: React.PropsWithChildren) {

    return (
        <Providers>
            <html lang="en" suppressHydrationWarning={true}>
            <body>
            <PersistGate loading={null} persistor={persist}>
                <Header/>
                <Section children={props.children}></Section>
                <Footer/>
            </PersistGate>
            </body>
            </html>
        </Providers>
    )
}

