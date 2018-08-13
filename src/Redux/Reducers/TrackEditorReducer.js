import * as Actions from "Redux/Actions";

const initialState = {
  open: false,
  trackId: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case Actions.OPEN_TRACK_EDITOR:
      return {
        ...state,
        open: true,
        trackId: action.trackId
      };

    case Actions.CLOSE_TRACK_EDITOR:
      return {
        ...state,
        open: false,
        trackId: null
      };
    default:
      return state;
  }
};
