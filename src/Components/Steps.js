import { createTrack, toggleTrackStep } from "Redux/Actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import React from "react";
import Styled from "styled-components";

const Steps = ({ clockStep, track, trackId, toggleTrackStep }) => {
  return (
    <StepsDiv>
      {track.steps.map((b, i) => (
        <StepDiv
          key={i}
          onClick={() => {
            toggleTrackStep(trackId, i);
          }}
        >
          {track.steps[i] ? <StepCellStepActiveDiv /> : null}
          {i == clockStep ? <StepCellHighlightDiv /> : null}
        </StepDiv>
      ))}
    </StepsDiv>
  );
};

export default connect(
  (state, ownProps) => ({
    track: state.tracks.tracksById[ownProps.trackId],
    clockStep: state.clock.step
  }),
  d => bindActionCreators({ createTrack, toggleTrackStep }, d)
)(Steps);

const StepsDiv = Styled.div`
display: flex;
height: 100%;
`;

const StepDiv = Styled.div`
width: 100%;
height: 100%;
padding: 5px;
background-color: green;
border: 1px solid black;
position: relative;
`;

const StepCellHighlightDiv = Styled.div`
position: absolute;
top: 0;
left: 0;
background-color: orange;
height: 100%;
width: 100%;
`;

const StepCellStepActiveDiv = Styled.div`
position: absolute;
top: 0;
left: 0;
background-color: purple;
height: 100%;
width: 100%;
`;
