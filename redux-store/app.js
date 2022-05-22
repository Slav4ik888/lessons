// ========= NODES ========= //
const resultValue = document.querySelector(`#result-value`);
const minus       = document.querySelector(`#minus`);
const plus        = document.querySelector(`#plus`);
const restart     = document.querySelector(`#restart`);
const addInput    = document.querySelector(`#add-input`);
const someValue   = document.querySelector(`#some-value`);

// =========     STORE    ========= //
const store = createStore(updateStore, 0);

// ========= ACTION TYPES ========= //
const INC_COUNT      = `INC_COUNT`;
const DEC_COUNT      = `DEC_COUNT`;
const RESTART        = `RESTART`;
const ADD_SOME_VALUE = `ADD_SOME_VALUE`;

// =========  LISTENERS  ========= //

minus.addEventListener(`click`, () => {
  store.dispatch({ type: INC_COUNT });
  updateHeader(store.getState());
});
plus.addEventListener(`click`, () => {
  store.dispatch({ type: DEC_COUNT });
  updateHeader(store.getState());
});
restart.addEventListener(`click`, () => {
  store.dispatch({ type: RESTART });
  updateHeader(store.getState());
});
someValue.addEventListener(`click`, () => {
  const value = +addInput.value;
  store.dispatch({ type: ADD_SOME_VALUE, payload: value });
  addInput.value = null;
  updateHeader(store.getState());
});

// ========= FUNCTIONS ========= //

function createStore(reducer, initialState) {
  return {
    _state: initialState,

    dispatch(action) {
      this._state = reducer(this._state, action);
    },

    getState() {
      return this._state;
    }
  }
}

function updateStore(state, action) {
  switch (action.type) {
    case INC_COUNT:
      return state - 1;
    
    case DEC_COUNT:
      return state + 1;
    
    case RESTART:
      return 0;
    
    case ADD_SOME_VALUE:
      return state + action.payload;
    
    default: return state
  }
}


function updateHeader(count) {
  resultValue.textContent = count.toString();
}

// ========= START ========= //
updateHeader();
