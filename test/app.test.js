import NumberHelper from '../src/helpers/numberHelper';
import App from '../src/app';

jest.mock('../src/helpers/numberHelper');

describe('App', () => {
  beforeEach(() => {
    // Clear all instances and calls to constructor and all methods:
    NumberHelper.mockClear();
  });

  it('Check that the NumberHelper has been called', () => {
    const app = new App();
    expect(NumberHelper).toHaveBeenCalledTimes(1);
  });

  it('Check if initNumbers was called a method on the class instance', () => {
    expect(NumberHelper).not.toHaveBeenCalled();
  
    const application = new App();
    expect(NumberHelper).toHaveBeenCalledTimes(1);

    application.init();
  
    const mockNumberHelperInstance = NumberHelper.mock.instances[0];
    const mockInitNumbers = mockNumberHelperInstance.initNumbers;

    expect(mockInitNumbers).toHaveBeenCalledTimes(1);
  });
});