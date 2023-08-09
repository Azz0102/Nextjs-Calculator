/* Instruments */
import type { ReduxState } from '@/lib/redux'

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectSign = (state: ReduxState) => state.sign
export const selectNum = (state: ReduxState) => state.num
export const selectRes = (state: ReduxState) => state.res

export const selectUserName = (state: ReduxState)=> state.userName
export const selectPassword = (state: ReduxState) => state.passWord

export const selectOverflow = (state: ReduxState) => state.overflow