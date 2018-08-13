export default class Sampler {
  update(startTime, sampleRate, bpm, steps, param1) {
    this.startTime = startTime;
    this.sampleRate = sampleRate;
    this.bpm = bpm;
    this.steps = steps;
    this.param1 = param1;
    this.generateSamples();
  }

  generateSamples() {
    let SR = this.sampleRate;
    let BPM = this.bpm;

    let secondsPerStep = 60 / BPM;
    let samplesPerStep = SR * secondsPerStep;

    var samples = [];

    for (var i = 0; i < samplesPerStep; i++) {
      let progress = i / samplesPerStep;
      let mag = Math.pow(1 - progress, this.param1 * 15);
      samples[i] = Math.random() * mag;
    }

    this.samples = samples;
  }

  getSample(currentTime) {
    let step = this.getStep(currentTime);

    if (!this.steps[Math.floor(step)]) {
      return 0;
    }

    let phase = step - Math.floor(step);
    let idx = Math.floor(this.samples.length * phase);
    return this.samples[idx];
  }

  getStep(currentTime) {
    let stepLength = 60 / this.bpm;
    let deltaTime = currentTime - this.startTime;
    let numStepsTotal = deltaTime / stepLength;
    let step = numStepsTotal % 16;
    return step;
  }
}
