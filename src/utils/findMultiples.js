import { totalNumberDisplayed } from '../config.json';

export const findMultiples = (element) => {
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
