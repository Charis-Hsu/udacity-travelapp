

### Project
This project requires you to build out a travel app that, at a minimum, obtains a desired trip location & date from the user, and displays weather and an image of the location using information obtained from external APIs.

## Features
* Integrate the [REST Countries API](https://restcountries.eu/) for the country to be visited.
* Use .env file to keep API safety.
* Use countDown Timer to calculate departure days.
* Pull the forecast for multiple days.
* Print their trip and export to PDF.

## Getting Started

1. Download or clone the project

2. Set `env` by looking `env.example` and

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
