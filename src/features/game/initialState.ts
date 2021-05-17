import { GameScreens } from './GameScreens';
import GameState from './GameState';
import { PlayerChoices } from './PlayerChoices';

const initialState: GameState = {
    screen: GameScreens.MENU,
    playerChoice: PlayerChoices.UNDEFINED,
    cpuChoice: PlayerChoices.UNDEFINED,
    playerWon: -2,
    countdownActive: false,
}

export default initialState;