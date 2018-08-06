Minso FE Smove Challenges
===

[ReactJS] Smove bookings, users can see an array of bookings with some interesting information like start / end times, user, assigned car, and pickup / dropoff locations.
[![Build Status](https://travis-ci.org/thongnx6/fe-smove-challenges.svg?branch=master)](https://travis-ci.org/thongnx6/fe-smove-challenges)


### Demo

- https://thongnx6.github.io/fe-smove-challenges/
- note: please enable Cross-Origin Resource Sharing (CORS)
![screen shoot](/__demo/screenshoot.png)

### Setup

1. Clone the repo
2. `$ cd fe-smove-challenges`
3. Run either `$ yarn` or `$ npm install`

### Development

1. Run `$ yarn start`

### Test

The project currently contains test for actions, reducers and components within `__test__` folder or any files have name include regex `.spec.js`

- **Unit Test**: `$ yarn test`
- **Test Coverage**: `$ yarn test:coverage`
![screen shoot](/__demo/testshoot.png)

### Overview

```bash
/src                    # Root of our app
  - actions/            # Redux Actions
  - api/                # Make data provider can control Our calls apis
  - components/         # Our core component
  - reducers/           # Redux reducer
  - routes/             # Our routes app
  - view/               # Our Screen
```

- Based on ReactJS, Material-UI, Redux, Redux-thunk, Jest, Enzyme.
- Apply husky, reformat code using prettier in conjunction lint
- Continues Integration and Continues Deployment with TravisCI

### Contributing and License

Author: Minso, thongnx6@gmail.com.
