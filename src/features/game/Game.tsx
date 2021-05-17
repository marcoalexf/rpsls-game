import { PlayerMove } from './PlayerMoveI'
import PlayerMoves from './PlayerMoves'
import MoveButton from './MoveButton'
import { useDispatch } from 'react-redux'
import { playerAction } from './gameSlice'
import { PlayerChoices } from './PlayerChoices'

export const Game = (props: any) => {
    const moveSelected = (move: PlayerChoices) => {
        dispatch(playerAction(move))
    }
    const dispatch = useDispatch()
    return (
        <div className="h-screen bg-gray-700 flex flex-col justify-center items-center space-y-4" {...props}>
            <h1 className="text-white text-xl">Select your move!</h1>
            <div className="flex flex-wrap space-x-2">
                {
                    PlayerMoves.map((playerMove: PlayerMove) => <MoveButton
                    key={playerMove.move}
                    title={playerMove.move}
                    action={() => moveSelected(playerMove.move)}
                    ></MoveButton>)
                }
            </div>
        </div>
    )
}