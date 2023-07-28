'use client'
/* Components */
import {Providers} from '@/lib/providers'
import {Nav} from './components/Nav'

import {PersistGate} from 'redux-persist/es/integration/react'


/* Instruments */
import './styles/globals.css'
import React from "react";
import {persist} from "@/lib/redux";


export default function RootLayout(props: React.PropsWithChildren) {
    return (
        <Providers>
            <html lang="en" suppressHydrationWarning={true}>
            <body>
            <PersistGate loading={null} persistor={persist}>
                <section className='container'>
                    <main className='main'>{props.children}</main>
                </section>
            </PersistGate>
            </body>
            </html>
        </Providers>
    )
}

