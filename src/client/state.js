import State from './lib/state';

const initialState = process.env.IS_BROWSER
  ? window._appState
  : require('../server/initialstate');

export const appState = new State(initialState, function(key, value) {
  switch (key) {
    // revive here
  }
});

export const pendingActionsCursor = appState.cursor(['pendingActions']);
