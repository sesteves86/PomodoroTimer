import React from 'react';
import { useTimer } from 'use-timer';
const audioFile = require("../../assets/audio/gong.mp3");

const Timer = (props: any): JSX.Element => {
    const {timePeriod, startNextPeriod } = props;
    const { time, start, pause, reset, status } = useTimer({
        initialTime: timePeriod * 60,
        timerType: "DECREMENTAL",
        endTime: 0,
        onTimeOver: () => {
          const audioElement = document.querySelector("audio");
          audioElement?.load();
          audioElement?.play();
          startNextPeriod();
        },
      });
    
      const stopAudio = () => {
        const audioElement = document.querySelector("audio");
        audioElement?.pause();
      }
    
      const startTimer = () => {
        start();
        stopAudio();
      };
    
      const pauseTimer = () => {
        pause();
        stopAudio();
      }
    
      const resetTimer = () => {
        reset();
        stopAudio();
      }
    
    
      const getMinutes = ():string => {
        const minutes = Math.floor(time / 60);
    
        if (minutes < 10)
          return "0" + minutes;
    
        return minutes.toString();
      };
      const getSeconds = ():string => {
        const seconds = Math.floor(time % 60);
    
        if (seconds < 10)
          return "0" + seconds;
    
        return seconds.toString();
      };
    
      const getAppClassName = ():string => {
        if (status === "RUNNING")
          return "App App_running";
        
        return "App";
      }
    
      return (
        <div className={getAppClassName()}>
          <h1>Pomodoro Timer</h1>
    
          <h2>{getMinutes()}:{getSeconds()}</h2>
    
          <button className="timerButton" type="button" onClick={startTimer}>Start</button>
          <button className="timerButton" type="button" onClick={pauseTimer}>Pause</button>
          <button className="timerButton" type="button" onClick={resetTimer}>Reset</button>
    
          <audio id="audiotag1" src={audioFile}></audio>
        </div>
      );
};

export default Timer;