import React, { useEffect } from 'react'
import assets from '../assets/assets'

const ThemeToggleBtn = ({ them, setThem }) => {

    useEffect(() => {
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setThem(them || (prefersDarkMode ? 'dark' : 'light'))
    }, [])

    useEffect(() => {
        if (them === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('them', them)
    }, [them])

    return (
        <div> 
            <button>
                {them === 'dark' ? (
                    <img onClick={() => setThem('light')} src={assets.sun_icon} className='size-8.5 p-1.5 border border-gray-500 rounded-full' alt="" />
                ) : (
                    <img onClick={() => setThem('dark')} src={assets.moon_icon} className='size-8.5 p-1.5 border border-gray-500 rounded-full' alt="" />
                )}
            </button>
        </div>
    )
}

export default ThemeToggleBtn
