import { combineReducers } from "redux";
import trackEditorReducer from "./TrackEditorReducer";
import tracksReducer from "./TracksReducer";
import clockReducer from "./ClockReducer";

export default combineReducers({
  trackEditor: trackEditorReducer,
  tracks: tracksReducer,
  clock: clockReducer
});
