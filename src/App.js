import React, {useState, useEffect} from 'react'
import './App.css'

function App() {
    const [time, setTime] = useState(0)
    const [timerOn, setTimeOn] = useState(false)

    useEffect(() => {
        let interval = null

        if (timerOn) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 10)
            }, 10)
        } else {
            clearInterval(interval)
        }

        return () => clearInterval(interval)
    }, [timerOn])

    return (
        <div className='App'>
            <div className='timer__board'>
                <span className='timer__msec'>{('0' + Math.floor((time / 60000) % 60)).slice(-2)}</span>
                <span className='timer__min'>{('0' + Math.floor((time / 1000) % 60)).slice(-2)}</span>
                <span className='timer__sec'>{('0' + ((time / 10) % 100)).slice(-2)}</span>
            </div>
            <div>
                {!timerOn && time === 0 && (
                    <button onClick={() => setTimeOn(true)}>START</button>
                )}
                {timerOn && (
                    <button onClick={() => setTimeOn(false)}>STOP</button>
                )}
                {!timerOn && time !== 0 && (
                    <button onClick={() => setTimeOn(true)}>RESUME</button>
                )}
                {!timerOn && time > 0 && (
                    <button
                        onClick={() => {
                            setTime(0)
                            setTimeOn(false)
                        }}
                    >
                        RESET
                    </button>
                )}
            </div>
        </div>
    )
}

export default App
