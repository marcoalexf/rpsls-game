import { createSlice } from '@reduxjs/toolkit'
import { GameScreens } from './GameScreens'
import initialState from './initialState'
import { PlayerChoices } from './PlayerChoices'
import PlayerMoves from './PlayerMoves'

export const game = createSlice({
  name: 'game',
  initialState,
  reducers: {
    changeScreen: (state, action) => {
      if (action.payload === GameScreens.MENU || action.payload === GameScreens.GAME_SCREEN) {
        state.cpuChoice = PlayerChoices.UNDEFINED
        state.playerChoice = PlayerChoices.UNDEFINED
        state.playerWon = -2
      }
      state.screen = action.payload
    },
    playerAction: (state, action) => {
      state.playerChoice = action.payload
      state.countdownActive = true
      state.screen = GameScreens.COUNTDOWN
    },
    playerWon: (state) => {
      state.playerWon = 1
    },
    playerLost: (state) => {
      state.playerWon = -1
    },
    activateCountdown: (state) => {
        state.countdownActive = true
    },
    deactivateCountdown: (state) => {
      const playerMove = state.playerChoice
      state.countdownActive = false
      const cpuMove = PlayerMoves[(Math.floor(Math.random() * 5))]
      state.cpuChoice = cpuMove.move
      if (cpuMove.winsAgainst.filter(el => el === playerMove).length > 0) {
        // cpu won
        state.playerWon = 0
        state.screen = GameScreens.LOST_SCREEN
      } else if (cpuMove.loosesTo.filter(el => el === playerMove).length > 0) {
        // player won
        state.playerWon = 1
        state.screen = GameScreens.VICTORY_SCREEN
      } else {
        // tie
        state.playerWon = -1
        state.screen = GameScreens.TIE_SCREEN
      }
    },
  },
})

export const { changeScreen, playerAction, playerWon, playerLost, activateCountdown, deactivateCountdown } = game.actions

export default game.reducer