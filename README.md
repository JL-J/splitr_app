# Splitr - split the bill... not your friendships

## Getting started
To get run a simulation of Splitr on your computer you'll need to download Xcode (Iphone simulator) and/or Android Studio (Android emulator). Please note this may take a few minutes.

Once you've downloaded one or both programs, clone this repo and run the following command:
`npm install`

For the Iphone simulator, open the `ios` folder of this program in Xcode and press the "play" button.

For the android simulator, run the following commands in two seperate terminals:
`npm start`
`react-native run-android`


## To run tests
We have used two testing frameworks for this project: Jest and Enzyme. To run these tests, use the following command:
`npm test`

## To run linter
We have used ESlint to keep our code clean. To run our linter, use the following command:
`./node_modules/.bin/eslint .`

## User Stories
Our app allows users to split payment of a receipt at a restaurant.

```
As a user
So that I can assign diners to pay for certain dishes,
I want to enter all diners' names.
```

```
As a user
So that I can organise payment for the meal,
I want to be able to add each dish (with price) one by one
```

```
As a user
So I can correct my mistakes
I want to be able to edit and delete dishes
```

```
As a user
So I assign dishes to diners for payment,
I want to be able to add dishes to a diners' bill.
```

```
As a user
So I can determine which diner will pay for each dish,
I want to be able assign dishes to a selected diner
```

```
As a user
So I determine which diner will pay for each dish,
I want to see the total amount each diner owes
```

## Technologies
* Javascript
* React Native
* Redux
* Jest
* Enzyme
* XCode


## Tech Team
Jude Lloyd-Jones
Bill Muxworthy
Reka Pap
Raylene Smith
