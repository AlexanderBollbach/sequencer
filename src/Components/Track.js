import React from "react";
import { connect } from "react-redux";
import Styled from "styled-components";
import { bindActionCreators } from "redux";
import { openTrackEditor } from "Redux/Actions";
import Steps from "./Steps";

const TrackDiv = Styled.div`
display: grid;
grid-template-columns: 80% 20%
height: 100%;w
`;

const Track = ({ trackId, openTrackEditor }) => {
  return (
    <TrackDiv>
      <Steps trackId={trackId} />
      <div onClick={() => openTrackEditor(trackId)}>foo</div>
    </TrackDiv>
  );
};

export default connect(
  null,
  d => bindActionCreators({ openTrackEditor }, d)
)(Track);
