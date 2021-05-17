import { PlayerChoices } from "./PlayerChoices";

export interface PlayerMove {
    icon: '',
    animation: '',
    move: PlayerChoices,
    winsAgainst: PlayerChoices[],
    loosesTo: PlayerChoices[],
}