import Player from './player/index';
import BackGround from './runtime/background';
import GameInfo from './runtime/gameinfo';
import Music from './runtime/music';
import DataBus from './databus';

const ctx = canvas.getContext('2d');
const databus = new DataBus();

/**
 * 游戏主函数
 */
export default class Main {
  gameinfo: GameInfo;
  player: Player;
  bg: BackGround;
  music: Music;

  constructor() {
    this.restart();
  }

  restart() {
    databus.reset();

    this.bg = new BackGround(ctx);
    this.player = new Player();
    this.gameinfo = new GameInfo();
    this.music = new Music();
    this.render();
  }

  /**
   * canvas重绘函数
   * 每一帧重新绘制所有的需要展示的元素
   */
  render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    this.bg.render(ctx);

    databus.bullets.concat(databus.enemys).forEach((item) => {
      item.drawToCanvas(ctx);
    });

    this.player.drawToCanvas(ctx);

    databus.animations.forEach((ani) => {
      if (ani.isPlaying) {
        ani.aniRender(ctx);
      }
    });

    this.gameinfo.renderGameScore(ctx, databus.score);
  }
}
