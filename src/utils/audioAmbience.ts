// Web Audio API Medieval Atmosphere Synthesizer
// Provides subtle candlelight/fireplace crackle and gentle lute harmonic resonance

class MedievalAmbienceEngine {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private masterGain: GainNode | null = null;
  private crackleNode: AudioBufferSourceNode | null = null;
  private droneOsc1: OscillatorNode | null = null;
  private droneOsc2: OscillatorNode | null = null;

  public init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
  }

  public toggle(): boolean {
    this.init();
    if (!this.ctx) return false;

    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  public start() {
    if (!this.ctx || this.isPlaying) return;

    this.isPlaying = true;
    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.setValueAtTime(0.08, this.ctx.currentTime); // Very soft and unobtrusive
    this.masterGain.connect(this.ctx.destination);

    // Warm atmospheric low harmonic drone (D2 & A2 medieval perfect fifth)
    this.droneOsc1 = this.ctx.createOscillator();
    this.droneOsc1.type = 'sine';
    this.droneOsc1.frequency.setValueAtTime(73.42, this.ctx.currentTime); // D2

    this.droneOsc2 = this.ctx.createOscillator();
    this.droneOsc2.type = 'triangle';
    this.droneOsc2.frequency.setValueAtTime(110.0, this.ctx.currentTime); // A2

    const droneFilter = this.ctx.createBiquadFilter();
    droneFilter.type = 'lowpass';
    droneFilter.frequency.setValueAtTime(220, this.ctx.currentTime);

    const droneGain = this.ctx.createGain();
    droneGain.gain.setValueAtTime(0.04, this.ctx.currentTime);

    this.droneOsc1.connect(droneFilter);
    this.droneOsc2.connect(droneFilter);
    droneFilter.connect(droneGain);
    droneGain.connect(this.masterGain);

    this.droneOsc1.start();
    this.droneOsc2.start();

    // Gentle candle crackle noise
    const bufferSize = this.ctx.sampleRate * 3;
    const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      // Pink noise with random subtle clicks
      const r = Math.random() * 2 - 1;
      const isClick = Math.random() < 0.003;
      output[i] = (r * 0.15) + (isClick ? (Math.random() - 0.5) * 0.8 : 0);
    }

    this.crackleNode = this.ctx.createBufferSource();
    this.crackleNode.buffer = noiseBuffer;
    this.crackleNode.loop = true;

    const crackleFilter = this.ctx.createBiquadFilter();
    crackleFilter.type = 'bandpass';
    crackleFilter.frequency.setValueAtTime(1200, this.ctx.currentTime);
    crackleFilter.Q.setValueAtTime(2.5, this.ctx.currentTime);

    const crackleGain = this.ctx.createGain();
    crackleGain.gain.setValueAtTime(0.05, this.ctx.currentTime);

    this.crackleNode.connect(crackleFilter);
    crackleFilter.connect(crackleGain);
    crackleGain.connect(this.masterGain);

    this.crackleNode.start();
  }

  public stop() {
    if (!this.ctx || !this.isPlaying) return;

    if (this.masterGain) {
      this.masterGain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.8);
      setTimeout(() => {
        try {
          this.droneOsc1?.stop();
          this.droneOsc2?.stop();
          this.crackleNode?.stop();
          this.droneOsc1?.disconnect();
          this.droneOsc2?.disconnect();
          this.crackleNode?.disconnect();
          this.masterGain?.disconnect();
        } catch {
          // ignore
        }
        this.isPlaying = false;
      }, 900);
    } else {
      this.isPlaying = false;
    }
  }

  // Play a soft ancient lute/harp pluck chord on interaction
  public playHarpPluck(noteFreq = 293.66) { // D4
    if (!this.ctx) this.init();
    if (!this.ctx) return;
    if (this.ctx.state === 'suspended') this.ctx.resume();

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(noteFreq, this.ctx.currentTime);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1400, this.ctx.currentTime);
    filter.frequency.exponentialRampToValueAtTime(300, this.ctx.currentTime + 1.2);

    gain.gain.setValueAtTime(0.06, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 1.4);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start();
    osc.stop(this.ctx.currentTime + 1.5);
  }

  public getStatus(): boolean {
    return this.isPlaying;
  }
}

export const ambienceEngine = new MedievalAmbienceEngine();
