export const START_CLOCK = "START_CLOCK";
export const STOP_CLOCK = "STOP_CLOCK";
export const UPDATE_STEP = "UPDATE_STEP";
export const RESTART = "RESTART";
export const CHANGE_BPM = "CHANGE_BPM";

export const startClock = startTime => ({
  type: START_CLOCK,
  startTime
});

export const stopClock = () => ({ type: STOP_CLOCK });

export const updateStep = step => ({
  type: UPDATE_STEP,
  step
});

export const changeBPM = bpm => ({ type: CHANGE_BPM, bpm });

export const restart = startTime => ({ type: RESTART, startTime });
