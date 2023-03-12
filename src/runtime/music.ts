export default class Music {
  bgmAudio: HTMLAudioElement;
  constructor() {
    this.bgmAudio = new Audio();
    this.bgmAudio.loop = true;
    this.bgmAudio.src = 'audio/bgm.mp3';

    this.playBgm();
  }

  playBgm() {
    this.bgmAudio.play();
  }
}
