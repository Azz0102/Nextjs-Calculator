/* Core */
import {configureStore, type ThunkAction, type Action} from '@reduxjs/toolkit'
import {
    useSelector as useReduxSelector,
    useDispatch as useReduxDispatch,
    type TypedUseSelectorHook,
} from 'react-redux'

/* Instruments */
import {reducer} from './rootReducer'
import {middleware} from './middleware'
import {persistReducer, persistStore} from "redux-persist";
import {createPersistStorage} from "@/app/LocalStore/store";
import logger from 'redux-logger'
import thunk from 'redux-thunk'

const storage = createPersistStorage()

const persistConfig = {
    key: 'counter',
    storage
}

const persistedReducer = persistReducer(persistConfig, reducer.counter)
export const reduxStore = configureStore({
    reducer: persistedReducer,
    middleware: [thunk, logger]
})

export const persist = persistStore(reduxStore)
export const useDispatch = () => useReduxDispatch<ReduxDispatch>()
export const useSelector: TypedUseSelectorHook<ReduxState> = useReduxSelector

/* Types */
export type ReduxStore = typeof reduxStore
export type ReduxState = ReturnType<typeof reduxStore.getState>
export type ReduxDispatch = typeof reduxStore.dispatch
export type ReduxThunkAction<ReturnType = void> = ThunkAction<
    ReturnType,
    ReduxState,
    unknown,
    Action
>
