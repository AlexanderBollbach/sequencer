import {
  START_CLOCK,
  STOP_CLOCK,
  UPDATE_STEP,
  RESTART,
  CHANGE_BPM
} from "Redux/Actions/ClockActions";

const initialState = {
  step: 0,
  bpm: 120,
  startTime: 0,
  isRunning: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_STEP:
      return {
        ...state,
        step: action.step
      };
    case CHANGE_BPM:
      return {
        ...state,
        bpm: action.bpm
      };
    case START_CLOCK:
      return {
        ...state,
        isRunning: true,
        startTime: action.startTime
      };
    case STOP_CLOCK:
      return {
        ...state,
        isRunning: false
      };
    case RESTART:
      return {
        ...state,
        startTime: action.startTime
      };
    default:
      return state;
  }
};
