import { totalNumberDisplayed, mainBodyContainerId } from '../config/config.json';

export default class NumberHelper {
  // Find each multiple of the number selected
  findMultipleNumbers(element) {
    if (element.target && element.target.attributes) {
      const number = element.target.attributes.numberid.value;
  
      for (let i = 1; i <= totalNumberDisplayed; i++) {
        // divide by the number
        if (i % number === 0) { 
          const element = document.querySelector(`[numberid='${i}']`);
  
          if(element) {
            element.classList.add("container__element--active");
          }
        }
      }
    } else {
      // Proper error handling should be here.
      console.log('Cannot find attribute for numberid');
    }
  }

  // Append numbers based on the amount defined in the config
  initNumbers() {
    const numberContainer = document.createElement('div');
    numberContainer.classList.add("container");
  
    // Starting loop at 1
    for (let i = 1; i <= totalNumberDisplayed; i++) {
      const number = document.createElement('div');
  
      number.setAttribute('numberId', i);
      number.classList.add("container__element");
      number.onclick = this.findMultipleNumbers;
      number.innerHTML = i;
      numberContainer.appendChild(number);
    }
  
    document.getElementById(mainBodyContainerId).appendChild(numberContainer);
  };  
}
