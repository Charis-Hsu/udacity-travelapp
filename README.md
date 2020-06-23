

### Project
This project requires you to build out a travel app that, at a minimum, obtains a desired trip location & date from the user, and displays weather and an image of the location using information obtained from external APIs.

## API(s) Used

* [Geonames API](http://www.geonames.org/export/web-services.html) - Geographical database from which the location data is pulled
* [Weatherbit API](https://www.weatherbit.io/) - Weather API for current and future weather data
* [Pixabay API](https://pixabay.com/api/docs/) - RESTful interface for searching and retrieving free images


## Getting Started

1. Download or clone the project

2. Set `env` by looking `env.sample` and

Install dependencies
```
npm install --save-dev
```
3. Start the server
```
npm start
```
4. Setup the environment development or production
```
npm run build-dev
```
or
```
npm run build-prod
```
5. Test with Jest
```
npm run test
