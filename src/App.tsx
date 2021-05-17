import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import { GameScreens, Game, WinScreen, LostScreen, TieScreen, ResultScreen } from './features/game';
import { Menu } from './features/menu'
import { Countdown } from './features/countdown/Countdown'

const renderScreen = (screen: GameScreens) => {
  switch (screen) {
    case GameScreens.COUNTDOWN:
      return <Countdown />
    case GameScreens.VICTORY_SCREEN:
    case GameScreens.LOST_SCREEN:
    case GameScreens.TIE_SCREEN:
      return <ResultScreen result={screen}></ResultScreen>
    case GameScreens.GAME_SCREEN:
      return (
        <Game />
      )
    case GameScreens.MENU:
    default:
      return <Menu />
  }
}

function App() {
  const screen = useSelector((state: any) => state.game.screen)
  return (
    <div className="App">
      { renderScreen(screen) }
    </div>
  );
}

export default App;
