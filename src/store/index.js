import { createStore } from 'redux';

function counter(count = 0, action) {
    switch (action.type) {
    case 'INCREMENT':
      return count + 1;
    case 'DECREMENT':
      return count - 1;
    default:
      return count;
    }
  }

const store = createStore(counter);
export default store
