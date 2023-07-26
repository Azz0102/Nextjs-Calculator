/* Instruments */
import type { ReduxState } from '@/lib/redux'

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectSign = (state: ReduxState) => state.counter.sign
export const selectNum = (state: ReduxState) => state.counter.num
export const selectRes = (state: ReduxState) => state.counter.res