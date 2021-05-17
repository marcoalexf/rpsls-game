import React from 'react'

interface Props {
    title?: string,
    action?: Function,
    color?: string,
}

export default function MoveButton({title = 'NO_TITLE', action = () => { console.log('ACTION_NOT_IMPLEMENTED')}, color = 'red'}: Props) {
    return (
        <button 
        className={`w-fit border-2 border-${color}-600 rounded-lg px-3 py-2 text-${color}-400 cursor-pointer hover:bg-${color}-600 hover:text-${color}-200 active:bg-gray-600 focus:outline-none`}
        onClick={e => action()}
        >
            { title }
        </button>
    )
}
