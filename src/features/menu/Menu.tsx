import React from 'react'
import MenuOption from './MenuOption'
import MenuButtons from './MenuButtons'

export const Menu = (props: any) => {
    return (
        <div className="h-screen bg-gray-700 flex flex-col justify-center items-center space-y-4" {...props}>
            <h1 className="text-white text-xl text-yellow-500">Welcome to Rock-Paper-Scissors-Lizard-Spock!</h1>
            { MenuButtons.map(button => <MenuOption key={button.title} title={button.title} action={button.action}/>) }
        </div>
    )
}