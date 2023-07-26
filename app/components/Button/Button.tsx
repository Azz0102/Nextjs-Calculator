import {
    counterSlice,
    useSelector,
    useDispatch,
    selectSign,
    selectNum,
    selectRes,
} from '@/lib/redux'

const getStyleName = (btn: string) => {
    const className: any = {
        '=': 'equals',
        'x': 'opt',
        '-': 'opt',
        '+': 'opt',
        '/': 'opt',
    }
    return className[btn]
}

export const Button = ({value}: { value: any }) => {
    const dispatch = useDispatch()

    const handleBtnClick = () => {

        const results: any = {
            '.': () => dispatch(counterSlice.actions.commaClick('.')),
            'C': () => dispatch(counterSlice.actions.resetClick('C')),
            '/': () => dispatch(counterSlice.actions.signClick('/')),
            'x': () => dispatch(counterSlice.actions.signClick('x')),
            '-': () => dispatch(counterSlice.actions.signClick('-')),
            '+': () => dispatch(counterSlice.actions.signClick('+')),
            '=': () => dispatch(counterSlice.actions.equalsClick('=')),
            '%': () => dispatch(counterSlice.actions.persenClick('%')),
            '+/-': () => dispatch(counterSlice.actions.invertClick('+/-'))
        }
        if (results[value]) {
            return results[value]()
        } else {
            return dispatch(counterSlice.actions.handleClickButton(value))
        }
    }

    const styledName = getStyleName(value)

    return (
        <button onClick={handleBtnClick}
                className={`${styledName ? styledName : 'bg-gray-400'} h-14 flex items-center justify-center cursor-pointer text-[#242424] 
                text-2xl p-2.5 rounded-[10px] border-[none] hover:border-2 hover:border-dotted hover:border-[#242424]`}>{value}</button>
    )
}

