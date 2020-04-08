import { totalNumberDisplayed } from '../config/config.json';

export default class NumberHelper {
  constructor() {
    // A type of state to determine if multiples are being 
    // displayed
    this.activeMultiples = false;  
  }

  // Find each multiple of the number selected
  selectMultipleNumbers(element) {
    if(!this.activeMultiples) {
      if (element.target && element.target.attributes) {
        const number = element.target.attributes.numberid.value;
    
        for (let i = 1; i <= totalNumberDisplayed; i++) {
          // divide by the number
          if (i % number === 0) { 
            const element = document.querySelector(`[numberid='${i}']`);
    
            if(element) {
              element.classList.add('container__element--active');
            }

            this.activeMultiples = true;
          }
        }
      } else {
        throw new Error('Cannot find attribute for numberid');
      }
    } else {
      this.removeMultipleNumbers();
    }
  }

  // Remove all active elements selected
  removeMultipleNumbers() {
    document.querySelectorAll('.container__element--active')
            .forEach(el => el.classList.remove('container__element--active'));
    
    this.activeMultiples = false;
  }

  // Append numbers based on the amount defined in the config
  initNumbers(totalNumberDisplayed) {
    const numberContainer = document.createElement('div');
    numberContainer.classList.add('container');
  
    // Starting loop at 1
    for (let i = 1; i <= totalNumberDisplayed; i++) {
      const number = document.createElement('button');
  
      number.setAttribute('numberId', i);
      number.classList.add('container__element');
      number.onclick = this.selectMultipleNumbers.bind(this);
      number.innerHTML = i;
      numberContainer.appendChild(number);
    }
  
    document.body.appendChild(numberContainer);
  };  
}
