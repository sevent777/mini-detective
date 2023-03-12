/**
 * 全局状态管理器
 */
export default class DataBus {
  animations = [];
  constructor() {
    this.reset();
  }

  reset() {
    this.frame = 0;
    this.score = 0;
    this.enemys = [];
    this.animations = [];
    this.gameOver = false;
  }
}
