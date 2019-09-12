import {UserPreference} from './userPreference';

const perf1 = UserPreference.getInstance();
perf1.color = 'red';

const perf2 = UserPreference.getInstance();
console.log(perf2.color);