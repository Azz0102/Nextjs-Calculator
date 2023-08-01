import {counterSlice, useDispatch} from "@/lib/redux";
import {router} from "next/client";

export const SignoutHandler = () => {
    const dispatch = useDispatch()
    dispatch(counterSlice.actions.userNameInput(''))
    dispatch(counterSlice.actions.passWordInput(''))
    router.push('/signin')
}