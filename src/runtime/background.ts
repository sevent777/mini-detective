import Sprite from '../base/sprite';

const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

const BG_IMG_SRC = 'images/bg.jpg';
const BG_WIDTH = 512;
const BG_HEIGHT = 512;

/**
 * 游戏背景类
 * 提供update和render函数实现无限滚动的背景功能
 */
export default class BackGround extends Sprite {
  constructor(ctx: CanvasRenderingContext2D) {
    super(BG_IMG_SRC, BG_WIDTH, BG_HEIGHT);

    this.render(ctx);
  }

  render(ctx: CanvasRenderingContext2D) {
    ctx.drawImage(
      this.img,
      0,
      0,
      this.width,
      this.height,
      0,
      -screenHeight,
      screenWidth,
      screenHeight
    );

    ctx.drawImage(this.img, 0, 0, this.width, this.height, 0, 0, screenWidth, screenHeight);
  }
}
