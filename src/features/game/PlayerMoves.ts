import { PlayerChoices } from "./PlayerChoices";
import { PlayerMove } from "./PlayerMoveI";

export const PlayerMoves: PlayerMove[] = [
    {
        icon: '',
        animation: '',
        move: PlayerChoices.ROCK,
        loosesTo: [PlayerChoices.PAPER, PlayerChoices.SPOCK],
        winsAgainst: [PlayerChoices.SCISSORS, PlayerChoices.LIZARD],
    },
    {
        icon: '',
        animation: '',
        move: PlayerChoices.PAPER,
        loosesTo: [PlayerChoices.LIZARD, PlayerChoices.SCISSORS],
        winsAgainst: [PlayerChoices.SPOCK, PlayerChoices.ROCK],
    },
    {
        icon: '',
        animation: '',
        move: PlayerChoices.SCISSORS,
        loosesTo: [PlayerChoices.SPOCK, PlayerChoices.ROCK],
        winsAgainst: [PlayerChoices.PAPER, PlayerChoices.LIZARD],
    },
    {
        icon: '',
        animation: '',
        move: PlayerChoices.LIZARD,
        loosesTo: [PlayerChoices.SCISSORS, PlayerChoices.ROCK],
        winsAgainst: [PlayerChoices.SPOCK, PlayerChoices.PAPER],
    },
    {
        icon: '',
        animation: '',
        move: PlayerChoices.SPOCK,
        loosesTo: [PlayerChoices.PAPER, PlayerChoices.LIZARD],
        winsAgainst: [PlayerChoices.ROCK, PlayerChoices.SCISSORS],
    },
]

export default PlayerMoves