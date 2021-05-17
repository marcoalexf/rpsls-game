import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GameScreens } from './GameScreens'
import { changeScreen } from './gameSlice'

export const ResultScreen = () => {
    const playerWon = useSelector((state: any) => state.game.playerWon)
    const dispatch = useDispatch()
    const matchResult = (result: number) => {
        if (result === -1) return 'Tie'
        if (result === 0) return 'Lost'
        if (result === 1) return 'Win'
    }
    return (
        <div className="h-screen bg-gray-700 flex flex-col justify-center items-center space-y-4">
            <h1 className="text-white text-xl">It's a {matchResult(playerWon)}!</h1>
            <button 
            className="w-fit border-2 
            border-yellow-600 rounded-lg px-3 py-2 
            text-yellow-400 cursor-pointer hover:bg-yellow-600 
            hover:text-yellow-200 active:bg-gray-600 focus:outline-none"
            onClick={e => dispatch(changeScreen(GameScreens.GAME_SCREEN))}
            >Play Again</button>
            <button 
            className="w-fit border-2 
            border-yellow-600 rounded-lg px-3 py-2 
            text-yellow-400 cursor-pointer hover:bg-yellow-600 
            hover:text-yellow-200 active:bg-gray-600 focus:outline-none"
            onClick={e => dispatch(changeScreen(GameScreens.MENU))}
            >Return to Menu</button>
        </div>
    )
}
