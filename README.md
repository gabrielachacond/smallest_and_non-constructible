You can see Web interface to run the solution: index.html 
open in the browser, preference google chrome.

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\


The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.


### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.


----

***This repository is related to the 2 technical challenges:***

#### Minimal difference

Given two arrays of integers, compute the pair of values (one value in each array) with the smallest (non-negative) difference. Return the difference.

###### Examples

const a = [1, 3, 15, 11, 2];
const b = [23, 127, 235, 19, 8];

smallestDifference(a, b); // output: 3


const a = [10, 5, 40];
const b = [50, 90, 80];

smallestDifference(a, b); // output: 10




#### Non-constructible change

Given an array of positive integers representing the values of coins in your possession, write a function that returns the minimum amount of change (the minimum sum of money) that you cannot create. The given coins can have any positive integer value and aren't necessarily unique (i.e., you can have multiple coins of the same value).

For example, if you're givencoins = [1, 2, 5], the minimum amount of change that you can't create is 4. If you're given no coins, the minimum amount of change that you can't create is 1.

###### Sample Test
coins = [5, 7, 1, 1, 2, 3, 22]

###### Sample Output
20


**The expected behavior of both challenges has been checked by unit test**

------------------------------------------------------------------------------------------------