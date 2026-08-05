import React from 'react'

import '../styling/StopWatch.css'

import { useState, useEffect } from 'react';

const StopWatch = () => {

      const [second, setSecond] = useState(0);
      const [running, setRunning] = useState(false);

       useEffect(()=> {

           if(!running){
             return ;
           }

          const id =  setInterval( ()=> {
               setSecond( cnt => cnt+1);

          },1000)

          return ()=> {
               clearInterval(id);
          }

       },[running]);


return (
    <div className="stopwatch">

        <h2>Stop Watch</h2>

        <div className="timer-circle">
            <h1>{second}s</h1>
        </div>

        <div className="buttons">

            <button
                className="start"
                onClick={() => setRunning(true)}
            >
                Start
            </button>

            <button
                className="stop"
                onClick={() => setRunning(false)}
            >
                Stop
            </button>

            <button
                className="reset"
                onClick={() => setSecond(0)}
            >
                Reset
            </button>

        </div>

    </div>
);

}

export default StopWatch;
