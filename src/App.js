import React, { Component } from "react";
import Styled from "styled-components";

const Centered = Styled.div`
display: flex;
justify-content: center;
align-items: center;
`;

const App = () => {
  return (
    <div style={{ width: "100%", height: "100%", backgroundColor: "yellow" }}>
      <Sequencer />
    </div>
  );
};

class Sequencer extends Component {
  state = {
    clock: 0
  };

  constructor() {
    super();
    setInterval(() => {
      let val = this.state.clock + 1;
      this.setState({ clock: val % 16 });
    }, 150);
  }

  render() {
    const { clock } = this.state;
    const trackData = [new Array(16).fill(false), new Array(16).fill(false)];
    return (
      <SequencerDiv>
        {trackData.map((t, i) => {
          return <Track key={i} clock={clock} trackData={t} />;
        })}
      </SequencerDiv>
    );
  }
}

const Track = ({ clock, trackData }) => {
  return (
    <TrackDiv>
      {trackData.map((b, i) => (
        <TrackCell key={i}>
          <TrackCellHighlightDiv />
        </TrackCell>
      ))}
    </TrackDiv>
  );
};

const SequencerDiv = Styled.div`
display: grid;
grid-template-rows: 30% 70%;
width: 100%;
height: 100%;
backgroundColor: purple;
`;

const TrackDiv = Styled.div`
display: flex;
`;

const TrackCell = Styled.div`
width: 100%;
height: 100%;
// position: relative;
background-color: green;
border: 1px solid black
// padding: 10px
`;

const TrackCellHighlightDiv = Styled.div`
background-color: orange;
// height: 100%;
`;

export default App;
