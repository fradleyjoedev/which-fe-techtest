import NumberHelper from '../src/helpers/numberHelper';
import App from '../src/app';

jest.mock('../src/helpers/numberHelper');

describe('App', () => {
  beforeEach(() => {
    // Clear all instances and calls to constructor and all methods:
    NumberHelper.mockClear();
  });

  it('We can check if the consumer called the class constructor', () => {
    const app = new App();
    expect(NumberHelper).toHaveBeenCalledTimes(1);
  });
});