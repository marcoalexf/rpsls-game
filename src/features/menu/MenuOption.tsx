import React from 'react'

interface Props {
    title: string,
    action: Function,
}

export default function MenuOption({title = 'NO_TITLE', action = () => { console.log('ACTION_NOT_IMPLEMENTED')}}: Props) {
    return (
        <button 
        className="w-fit border-2 
        border-yellow-600 rounded-lg px-3 py-2 
        text-yellow-400 cursor-pointer hover:bg-yellow-600 
        hover:text-yellow-200 active:bg-gray-600 focus:outline-none"
        onClick={e => action()}
        >
            { title }
        </button>
    )
}
