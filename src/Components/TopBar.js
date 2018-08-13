import React from "react";
import { connect } from "react-redux";
import Styled from "styled-components";
import { bindActionCreators } from "redux";
import { createTrack } from "Redux/Actions";
import {
  startClock,
  stopClock,
  restart,
  changeBPM
} from "Redux/Actions/ClockActions";
import audioEngine from "Audio/AudioEngine";
var TopBar = ({
  createTrack,
  nextTrackId,
  startClock,
  stopClock,
  clockIsRunning,
  clockStep,
  lastStartTime,
  restart,
  bpm,
  changeBPM
}) => {
  return (
    <TopBarDiv>
      <button onClick={() => createTrack(nextTrackId)}>new track</button>
      <button
        onClick={() => {
          clockIsRunning
            ? stopClock()
            : startClock(audioEngine.context.currentTime);
        }}
      >
        {clockIsRunning ? "stop" : "start"}
      </button>
      <div>{clockStep}</div>

      <button onClick={() => restart(audioEngine.context.currentTime)}>
        restart
      </button>
      <input
        type="range"
        min="50"
        max="1000"
        value={bpm}
        id="myRange"
        onChange={e => changeBPM(e.target.value)}
      />
      <div>{`bpm ${bpm}`}</div>
      <div>{`start: ${Math.round(lastStartTime)}`}</div>
    </TopBarDiv>
  );
};

export default connect(
  state => ({
    nextTrackId: state.tracks.nextTrackId,
    clockIsRunning: state.clock.isRunning,
    clockStep: state.clock.step,
    lastStartTime: state.clock.startTime,
    bpm: state.clock.bpm
  }),
  d =>
    bindActionCreators(
      { createTrack, startClock, stopClock, restart, changeBPM },
      d
    )
)(TopBar);

const TopBarDiv = Styled.div`
display: flex;

`;
