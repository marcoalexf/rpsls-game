import { GameScreens } from '../game/GameScreens'
import { changeScreen } from '../game/gameSlice'
import store from '../../store'

export const MenuButtons = [
    { 
        title: 'Start Game',
        action: () => store.dispatch(changeScreen(GameScreens.GAME_SCREEN))
    },
]

export default MenuButtons