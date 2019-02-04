/* store.js
   Simple app-wide data store (Redux-lite)
*/
let state = {
  show: false,
};

let listeners = [];

export default {
  getState() {
    return state;
  },
  setState(newState) {
    state = { ...state, ...newState };
    console.log("---------------- store::setState ----------------------");
    console.log("Adding: ", newState);
    console.log("-------------------------------------");
    console.log("New store: ", state);
    console.log("-------------------------------------");
    console.log("Listener count: ", listeners.length);
    console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
    listeners.forEach(listener => listener());
  },
  onChange(newListener) {
    listeners.push(newListener);
    return () => {
      listeners = listeners.filter(listener => listener !== newListener);
    }
    },
};
