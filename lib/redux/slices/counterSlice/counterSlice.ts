/* Core */
import {createSlice, type PayloadAction} from '@reduxjs/toolkit'

/* Instruments */

const initialState: CounterSliceState = {
    sign: '',
    num: 0,
    res: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        commaClick: (state, action) => {
            state.num = !state.num.toString().includes('.') ? state.num + action.payload : state.num
        },
        resetClick: (state, action) => {
            state.sign = ''
            state.num = 0
            state.res = 0
        },
        handleClickButton: (state, action) => {
            const numberString = action.payload.toString()

            let numberValue;
            if (numberString === '0' && state.num === 0) {
                numberValue = "0"
            } else if (state.num === 0 && state.res != 0 && !state.sign) {
                state.res = 0
                numberValue = action.payload
            } else {
                let value = state.num + numberString
                if (value.length < 9)
                    numberValue = Number(value)
                else numberValue = state.num
            }

            state.num = numberValue
        },
        signClick: (state, action) => {
            state.sign = action.payload
            state.res = !state.res && state.num ? state.num : state.res
            state.num = 0
        },
        equalsClick: (state, action) => {
            if (state.res && state.num && state.sign) {
                const math = (a: number, b: number, sign: string) => {
                    const result: any = {
                        '+': (a: number, b: number) => a + b,
                        '-': (a: number, b: number) => a - b,
                        'x': (a: number, b: number) => a * b,
                        '/': (a: number, b: number) => a / b,
                    }
                    return result[sign](a, b);
                }
                let result = math(state.res, state.num, state.sign)
                if (result.toString().length > 16) {
                    if (result.toString().includes('.')) {
                        state.res = +result.toFixed(2)
                    } else
                        state.res = 'out of memory'
                } else
                    state.res = math(state.res, state.num, state.sign)
                state.sign = ''
                state.num = 0
            }
        },
        persenClick: (state, action) => {
            state.num = state.num / 100
            // state.res = state.res / 100
        },
        invertClick: (state, action) => {
            state.num = state.num ? state.num * -1 : 0
            // state.res = state.res ? state.res * -1 : 0
        }
    },
})

/* Types */
export interface CounterSliceState {
    sign: string,
    num: any,
    res: any
}
