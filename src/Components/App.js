import React, { Component } from "react";
import Styled from "styled-components";
import TopBar from "Components/TopBar";
import Sequencer from "Components/Sequencer";
import { connect } from "react-redux";
import TrackEditor from "Components/TrackEditor";

class App extends Component {
  componentDidMount() {}
  render() {
    const { trackEditorOpen } = this.props;
    return (
      <AppDiv>
        <Shell />
        {trackEditorOpen && <TrackEditor />}
      </AppDiv>
    );
  }
}

const Shell = () => {
  return (
    <ShellDiv>
      <TopBar />
      <Sequencer />
    </ShellDiv>
  );
};

const ShellDiv = Styled.div`
display: grid;
grid-template-rows: 10% 90%;
`;

const AppDiv = Styled.div`
width: 100vw; 
height: 100vh;
position: relative;
backgroundColor: yellow;
`;

export default connect(state => ({ trackEditorOpen: state.trackEditor.open }))(
  App
);
