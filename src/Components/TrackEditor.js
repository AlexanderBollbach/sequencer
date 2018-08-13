import React from "react";
import { connect } from "react-redux";
import { closeTrackEditor } from "Redux/Actions";
import { updateParam1 } from "Redux/Actions/TrackActions";
import { bindActionCreators } from "redux";
import Modal from "Components/Modal";

const TrackEditor = ({ closeTrackEditor, track, updateParam1 }) => {
  return (
    <Modal outsideTapped={closeTrackEditor}>
      <div
        onClick={e => {
          e.stopPropagation();
          console.log("trackeditor tapped");
        }}
        style={{ width: "50%", height: "50%", backgroundColor: "red" }}
      >
        <input
          type="range"
          min="0"
          max="100"
          value={track.param1 * 100}
          id="myRange"
          onChange={e => {
            updateParam1(track.id, e.target.value / 100);
          }}
        />
      </div>
    </Modal>
  );
};

export default connect(
  state => ({ track: state.tracks.tracksById[state.trackEditor.trackId] }),
  d => bindActionCreators({ closeTrackEditor, updateParam1 }, d)
)(TrackEditor);
