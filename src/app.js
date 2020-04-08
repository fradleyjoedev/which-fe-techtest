import NumberHelper from './helpers/numberHelper';

export default class App {
  constructor() {
    this.numberHelper = new NumberHelper();
  }

  init() {
    this.numberHelper.initNumbers();
  }
}