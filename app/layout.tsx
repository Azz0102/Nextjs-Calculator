'use client'
/* Components */
import {Providers} from '@/lib/providers'
import {Nav} from './components/NavBar/Nav'

import {PersistGate} from 'redux-persist/es/integration/react'


/* Instruments */
import './styles/globals.css'
import React from "react";
import {persist} from "@/lib/redux";
import {Section} from "@/app/components/Section/Section";


export default function RootLayout(props: React.PropsWithChildren) {

    return (
        <Providers>
            <html lang="en" suppressHydrationWarning={true}>
            <body>
            <PersistGate loading={null} persistor={persist}>
                <Nav />
                <Section children={props.children}></Section>
            </PersistGate>
            </body>
            </html>
        </Providers>
    )
}

