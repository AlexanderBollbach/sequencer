import audioEngine from "Audio/AudioEngine";
import {
  START_CLOCK,
  STOP_CLOCK,
  updateStep
} from "Redux/Actions/ClockActions";

export const audioMiddleware = store => next => action => {
  if (action.type == "UPDATE_STEP") {
    next(action);

    let state = store.getState();

    let tracksById = state.tracks.tracksById;
    let newTracks = Object.keys(tracksById).map(k => {
      let t = tracksById[k];
      t.id = k;
      return t;
    });

    audioEngine.updateWithTracks(newTracks);

    return;
  }

  return next(action);
};

var mainTimer = null;

export const clockMiddleware = store => next => action => {
  if (action.type == START_CLOCK) {
    next(action);

    mainTimer = setInterval(() => {
      let clock = store.getState().clock;

      let ct = audioEngine.context.currentTime;
      let startTime = clock.startTime;

      let secsForBeat = 60 / clock.bpm;
      let delta = ct - startTime;
      let numBeatsTotal = delta / secsForBeat;
      let numBeat = Math.floor(numBeatsTotal);
      let currStep = numBeat % 16;

      if (currStep != store.getState().clock.step) {
        store.dispatch(updateStep(currStep));
      }
    }, 90);

    return;
  } else if (action.type == STOP_CLOCK) {
    clearInterval(mainTimer);
  }

  return next(action);
};
