import { GameScreens } from "./GameScreens";
import { PlayerChoices } from "./PlayerChoices";

export default interface GameState {
    screen: GameScreens,
    playerChoice: PlayerChoices,
    cpuChoice: PlayerChoices,
    playerWon: number,
    countdownActive: boolean,
}