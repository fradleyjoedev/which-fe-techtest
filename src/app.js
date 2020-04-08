import NumberHelper from './helpers/numberHelper';

export default class app {
  constructor() {
    this.numberHelper = new NumberHelper();
  }

  init() {
    this.numberHelper.initNumbers();
  }
}