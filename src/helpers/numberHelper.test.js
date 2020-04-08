import NumberHelper from './numberHelper';

// Create mocked element
const numberContainer = document.createElement('div');
numberContainer.classList.add("container");
const number = document.createElement('div');
  
number.setAttribute('numberId', 1);
number.classList.add('container__element');
number.innerHTML = 1;
numberContainer.appendChild(number);

describe('NumberHelper', () => {
  it('Check if appended numbers', () => {
    jest.spyOn(document.body, 'appendChild');

    const numberHelper = new NumberHelper();

    numberHelper.initNumbers(1);

    expect(document.body.appendChild).toBeCalledWith(numberContainer);
  });
});