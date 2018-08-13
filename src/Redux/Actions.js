export const CREATE_TRACK = "CREATE_TRACK";
export const TOGGLE_TRACK_STEP = "TOGGLE_TRACK_STEP";
export const OPEN_TRACK_EDITOR = "OPEN_TRACK_EDITOR";
export const CLOSE_TRACK_EDITOR = "CLOSE_TRACK_EDITOR";
export const UPDATE_TRACK_FREQUENCY = "UPDATE_TRACK_FREQUENCY";

export const createTrack = id => {
  return {
    type: CREATE_TRACK,
    track: {
      steps: new Array(16).fill(false),
      id
    }
  };
};

export const toggleTrackStep = (trackId, stepId) => {
  return {
    type: TOGGLE_TRACK_STEP,
    payload: {
      trackId,
      stepId
    }
  };
};

export const openTrackEditor = trackId => {
  return {
    type: OPEN_TRACK_EDITOR,
    trackId
  };
};

export const updateTrackFrequency = (trackId, frequency) => ({
  type: UPDATE_TRACK_FREQUENCY,
  trackId,
  frequency
});

export const closeTrackEditor = () => ({ type: CLOSE_TRACK_EDITOR });
