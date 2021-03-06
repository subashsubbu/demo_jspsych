import React from 'react';
import ReactDOM from 'react-dom';
import { ExperimentWindow } from 'jspsych-react';
import { timelineFactory } from './timeline';
import callbackImageKeyboardResponsePlugin from './callbackImageKeyboardResponsePlugin';

// Define callback function
const callback = (targetID) => console.log(targetID);
const timeline = timelineFactory(callback);

ReactDOM.render(
    <ExperimentWindow
      settings={{ timeline }}
      plugins={{ callbackImageKeyboardResponsePlugin }}
    />

  , document.querySelector('.container'));
