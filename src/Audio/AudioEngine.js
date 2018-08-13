import AudioTrack from "Audio/AudioTrack";

class AudioEngine {
  constructor() {
    this.context = new AudioContext();
    this.tracks = {};
  }

  updateWithTracks(newTracks) {
    // append
    for (var k in newTracks) {
      if (!this.tracks[k]) {
        this.createTrack(k, "osc", newTracks[k].frequency);
      }
    }

    // delete
    for (var k in this.tracks) {
      if (newTracks.findIndex(el => el.id == k) == -1) {
        this.tracks[oldTrack.id] = null;
      }
    }

    // update
    for (var k in this.tracks) {
      this.tracks[k].track = newTracks.find(e => e.id == k);
    }
  }

  createTrack(id) {
    this.tracks[id] = new AudioTrack(this.context, id);
  }

  trigger(id) {
    this.tracks[id].trigger();
  }
}

let audio = new AudioEngine();
export default audio;
