import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { decrement, fetchPost, increment, setUserName } from "../../store/slices/counter.slice";

export default function Counter() {
    const dispatch = useDispatch()
    const count = useSelector((store) => store.counterSlice.count);
    const userName = useSelector((store) => store.counterSlice.userName);
    const isLogin = useSelector((store) => store.userSlice.isLogin);
    const post = useSelector((store) => store.counterSlice.post);
    console.log(post)

    const onClickHandler = () => {
        console.log("onClickHandler clicked");
        dispatch(setUserName("Akbar"))
        dispatch(increment())
    }
    const onDecrementHandler = () => {
        console.log("onDecrementHandler Clicked");
        dispatch(decrement())
    }

    useEffect(() => {
        dispatch(fetchPost({
            page: 1,
            limit: 10,
        }))
    }, [])

    return (
        <div style={{ backgroundColor: "wheat" }}>
            <button onClick={onClickHandler}>+</button>
            <h1>{count}-{userName}</h1>
            <button onClick={onDecrementHandler}>-</button>
        </div>
    )
}