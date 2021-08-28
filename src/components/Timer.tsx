import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react"

type TimerArgs = {
    miliseconds: number
}

const Timer = ( { miliseconds }: TimerArgs ) => {

    const [seconds, setSeconds] = useState(0);

    const ref = useRef<NodeJS.Timeout>();

    useEffect(() => {
        ref.current && clearInterval( ref.current )

        ref.current = setInterval(() => setSeconds( s => s + 1 ) , miliseconds );
    }, [miliseconds])

    return (
        <>
            <h4>Timer: <small>{ seconds }</small></h4>
        </>
    )
}

export default Timer
