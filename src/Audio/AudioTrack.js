import store from "Redux/Store";
import Sampler from "./Sampler";

export default class AudioTrack {
  constructor(context, id) {
    this.bufferSize = 4096;
    this.store = store;
    this.id = id;
    this.context = context;
    this.node = context.createScriptProcessor(this.bufferSize, 1, 1);
    this.node.connect(context.destination);
    this.node.onaudioprocess = this.process.bind(this);

    this.sampler = new Sampler();
    this.updateSampler();
    store.subscribe(() => {
      this.updateSampler();
    });
  }

  updateSampler() {
    let track = getTrack(this.id);
    this.sampler.update(
      startTime(),
      this.context.sampleRate,
      bpm(),
      track.steps,
      track.param1
    );
  }

  process = e => {
    let data = e.outputBuffer.getChannelData(0);

    for (var i = 0; i < this.bufferSize; i++) {
      data[i] = 0;
    }

    if (!store.getState().clock.isRunning) {
      return;
    }

    let ict = this.context.currentTime;

    for (var i = 0; i < this.bufferSize; i++) {
      const ct = ict + i / this.context.sampleRate;
      data[i] = this.sampler.getSample(ct);
    }
  };
}

const bpm = () => store.getState().clock.bpm;
const startTime = () => store.getState().clock.startTime;
const getTrack = id => store.getState().tracks.tracksById[id];
