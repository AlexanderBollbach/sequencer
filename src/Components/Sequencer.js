import React from "react";
import Styled from "styled-components";
import Track from "Components/Track";
import { connect } from "react-redux";

const SequencerDiv = Styled.div`
display: grid;
grid-auto-rows: 7vh;
width: 100%;
height: 100%;
backgroundColor: purple;
`;

const Sequencer = ({ trackIds }) => {
  return (
    <SequencerDiv>
      {trackIds.map((trackId, key) => (
        <Track {...{ key, trackId }} />
      ))}
    </SequencerDiv>
  );
};

export default connect(state => ({
  trackIds: state.tracks.trackIds
}))(Sequencer);
