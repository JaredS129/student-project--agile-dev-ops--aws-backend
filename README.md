# AWS Copilot PERN Stack - Client (Create React App)

This repository contains starter code to run a React App. Follow the tutorial in Google Classroom to deploy this React App service to AWS using [AWS Copilot](https://aws.github.io/copilot-cli/).

## Prerequisites

1. [Docker](https://www.docker.com/) installed and running
2. AWS Account configured (your instructor will provide this)
3. [AWS Credentials configured](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html)
4. [AWS Copilot installed](https://aws.github.io/copilot-cli/)

## Docker

This project uses Docker to serve the build on an nginx server. Ensure you run and test your application using the supplied `Dockerfile`. You can amend the `Dockerfile` as needed by your application.

## Viewing the pipelines

1. Open AWS Console, and navigate to CodePipeline
2. Find your application to view the CodePipeline for it

# Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!