import React from 'react'
import { UseTheme } from '../contexts/ThemeContext'

export const Switch = () => {
    const { toggleFunction } = UseTheme()

   
    return (
        <div>
            <button onClick={toggleFunction} > Toggle

            </button>
        </div>
    )
}
