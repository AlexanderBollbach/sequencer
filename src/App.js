import React, { Component } from "react";

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

    const tracks = trackData.map((t, i) => {
      return <Track key={i} clock={clock} trackData={t} />;
    });
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          backgroundColor: "purple"
        }}
      >
        {tracks}
      </div>
    );
  }
}

const Track = ({ clock, trackData }) => {
  const divs = trackData.map((b, i) => {
    const amount = i == 0 ? 0 : i / trackData.length;
    const x = amount * 100;

    return (
      <div
        key={i}
        style={{
          //   position: "absolute",
          //   top: `${0}%`,
          //   left: `${x}%`,
          backgroundColor: i == clock ? "black" : "red",
          flexBasis: "100%"
          //   width: `5%`,
          //   height: "100%"
        }}
      />
    );
  });
  return (
    <div
      style={{
        backgroundColor: "green",
        // position: "relative",
        display: "flex",
        flexBasis: "100%"
      }}
    >
      {divs}
    </div>
  );
};

export default App;
