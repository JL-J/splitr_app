# Splitr
## Split responsibilities, not your friendships

Big tasks often require division of labour. A lack of organisation can cause total chaos. Splitr is a simple way to split up tasks between a group of friends in preparation for an event such as a group holiday, hen/stag party or camping trip.

## Getting started
To get run a simulation of Splitr on your Mac you'll need to download Xcode (iPhone simulator) and/or Android Studio with Java Development Kit (Android emulator). Full instructions of how to set up the simulators can be found [here](https://facebook.github.io/react-native/docs/getting-started.html) Please note this may take a few minutes.

Once you've downloaded one or both programs, clone this repo and run the following command:
`npm install`

For the iPhone simulator, open the `ios` folder of this program in Xcode and press the "play" button.

For the Android simulator, run the following commands in two separate terminals: `react-native run-android`


## To run tests
We have used two testing frameworks for this project: Jest and Enzyme. To run these tests, use the following command:
`npm test`

## To run linter
We have used ESlint to keep our code clean. To run our linter, use the following command:
`./node_modules/.bin/eslint .`

## User Stories
Our app allows users to split tasks in preparation for an event.

```
As a user
So that I can organise a division of labour for a specific event
I want to create a new event
```

```
As a user
So that I can assign people to take care of specific tasks,
I want to enter peoples names.
```

```
As a user
So that I can organise tasks,
I want to be able to add each task one by one (with estimated cost)
```

```
As a user
So my friends can see their assigned tasks,
I want to be able to add the tasks to someone's task list.
```

```
As a user
So that I can confirm the details of the event
I would like to see a summary page
```

## Technologies
* Javascript
* React Native
* Redux
* Jest
* Enzyme
* ESlint
* XCode
* Android Studio


## Tech Team
* [Jude Lloyd-Jones](https://github.com/JL-J)
* [Bill Muxworthy](https://github.com/BillMux/)
* [Reka Pap](https://github.com/rekapap)
* [Raylene Smith](https://github.com/rsmith88)
