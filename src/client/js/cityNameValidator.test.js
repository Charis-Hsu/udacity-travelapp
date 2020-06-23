import { isValidCityName } from './cityNameValidator.js';

describe('Check city name', function () {
  it('should be a invalid city name', function () {
    const cityName = 'NewY0rk';
    expect(isValidCityName(cityName)).toBe(false);
  });

  it('should be a valid city name', function () {
    const cityName = 'NewYork';
    expect(isValidCityName(cityName)).toBe(true);
  });
});
