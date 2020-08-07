This is a sample app which is responsible for authenticating and fetching the google package contacts. 
Authentication of user is handled via react-google-login component

## Project setup

Clone the repo

### `https://github.com/aishwaryaGHegde/google-contacts.git`

Navigate to project directory and install the dependencies 
Once done start the webpack server

## Useful commands

To install all dependencies run:

### `npm i`

Command to start webpack dev server:

### `npm run start`

Command to create a bundle:

### `npm run build`

Command to create docker image:

### `docker build . -t react-docker`

Command to start the docker image:

### `docker run -p 8000:80 react-docker`