import * as Actions from "Redux/Actions";
import * as TrackActions from "Redux/Actions/TrackActions";

const initialState = {
  tracksById: {},
  trackIds: [],
  nextTrackId: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TrackActions.UPDATE_PARAM_1:
      return {
        ...state,
        tracksById: {
          ...state.tracksById,
          [action.id]: {
            ...state.tracksById[action.id],
            param1: action.value
          }
        }
      };

    case Actions.CREATE_TRACK:
      let track = action.track;
      track.param1 = 1;
      return {
        ...state,
        tracksById: { ...state.tracksById, [action.track.id]: track },
        trackIds: [...state.trackIds, action.track.id],
        nextTrackId: action.track.id + 1
      };

    case Actions.TOGGLE_TRACK_STEP:
      const { trackId, stepId } = action.payload;
      return {
        ...state,
        tracksById: {
          ...state.tracksById,
          [trackId]: {
            ...state.tracksById[trackId],
            steps: state.tracksById[trackId].steps.map(
              (b, i) => (i == stepId ? !b : b)
            )
          }
        }
      };

    default:
      return { ...state };
  }
};
