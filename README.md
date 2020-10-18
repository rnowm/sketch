# Sketch frontend coding test 

## Installation

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

### `yarn start` or `npm run start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Notes

### Tools

- I have used `Style components` as CSS framework, some components (like Layout) I had built them before in a previous project I worked in, see[ Styleguide](https://demo.gokernel.com/styleguide). That made the CSS para a bit easier.
- That was my first time using `graphQL`, I only had experience with REST API's, so after doing some research I decided to use `Apollo` to fetch the data.


### Improvements

Some things that I would do to improve this test ff that was a real producction application:

- First thing I would add is a routing library (`React Router` most probably). This exercise required only two pages, so for faster development I decided to go with one view on top of the other.

- Second thing would be a proper state management. I went for basic state storage. As there's only one page, there's no need to persist the state, again for easier development. I would choose `Redux`, this way state would not vanish when navigating between pages.


