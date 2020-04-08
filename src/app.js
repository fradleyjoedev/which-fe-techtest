import NumberHelper from './helpers/numberHelper';
import { totalNumberDisplayed } from './config/config.json';

export default class App {
  constructor() {
    this.numberHelper = new NumberHelper();
  }

  // Initialise numbers displayed
  init() {
    this.numberHelper.initNumbers(totalNumberDisplayed);
  }
}