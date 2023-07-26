'use client'

import {Wrapper} from '../Wrapper/Wrapper'
import {Screen} from '../Screen/Screen'
import {ButtonBox} from '../ButtonBox/ButtonBox'
import {Button} from '../Button/Button'

const btnValues = [
    ["C", "+/-", "%", "/"],
    [7, 8, 9, "x"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".", "="],
];

export const Calculator = () => {
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

