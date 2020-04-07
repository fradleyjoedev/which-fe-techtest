import { totalNumberDisplayed, mainBodyContainerId } from './config.json';
import { findMultiples } from './utils/findMultiples';

//This function appends the numbers 
const appendNumbers = () => {
  const numberContainer = document.createElement('div');
  numberContainer.classList.add("container");

  // Starting loop at 1
  for (let i = 1; i <= totalNumberDisplayed; i++) {
    const number = document.createElement('div');

    number.setAttribute('numberId', i);
    number.classList.add("container__element");
    number.onclick = findMultiples;
    number.innerHTML = i;
    numberContainer.appendChild(number);
  }

  document.getElementById(mainBodyContainerId).appendChild(numberContainer);
};

const app = () => {
  appendNumbers();
};

export default app;
