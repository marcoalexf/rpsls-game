import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { deactivateCountdown } from '../game/gameSlice'

export const Countdown = (props: any) => {
    const [timer, setTimer] = useState(3)
    const dispatch = useDispatch()
    useEffect(() => {
        const interval = setInterval(() => {
            setTimer(timer => timer - 1)
        }, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [])

    useEffect(() => {
        if (timer === 0) {
            dispatch(deactivateCountdown())
        }
    }, [timer])
    return (
        <div className="h-screen bg-gray-700 flex flex-col justify-center items-center space-y-4" {...props}>
            <h1 className="text-white text-xl">Move selected! CPU Playing..</h1>
            <p className="text-white">{timer}</p>
            
        </div>
    )
}