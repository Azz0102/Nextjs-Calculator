'use client'

import {Wrapper} from '../Wrapper/Wrapper'
import {Screen} from '../Screen/Screen'
import {ButtonBox} from '../ButtonBox/ButtonBox'
import {Button} from '../Button/Button'
import {useRouter} from "next/navigation";
import React, {useEffect, useState} from "react";

const btnValues = [
    ["AC", "+/-", "%", "/"],
    [7, 8, 9, "x"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".", "="],
];

export const Calculator = () => {
    let userName: string, passWord: string, storeObj: any
    const router = useRouter()
    useEffect(() => {
            if (typeof window !== "undefined") {
                storeObj = JSON.parse(localStorage.getItem("persist:counter"||"") || "")
            }
            userName = storeObj.userName || ""
            passWord = storeObj.password || ""
            if ((userName == "\"\"") || (passWord == "\"\"")) {
                router.push('/signin')
            }
        }
    )


    return (
        <Wrapper>
            <Screen/>
            <ButtonBox>
                {btnValues.flat().map((btn, i) => (
                    <Button
                        value={btn}
                        key={i}
                    />
                ))}
            </ButtonBox>
        </Wrapper>
    );
}

