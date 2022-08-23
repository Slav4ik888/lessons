// ========= NODES ========= //
const resultValue = document.querySelector(`#result-value`);
const minus       = document.querySelector(`#minus`);
const plus        = document.querySelector(`#plus`);
const restart     = document.querySelector(`#restart`);
const addInput    = document.querySelector(`#add-input`);
const someValue   = document.querySelector(`#some-value`);


// ========= ACTION TYPES ========= //
const INC_COUNT      = `INC_COUNT`;
const DEC_COUNT      = `DEC_COUNT`;
const RESTART        = `RESTART`;
const ADD_SOME_VALUE = `ADD_SOME_VALUE`;

// =========  LISTENERS  ========= //

minus.addEventListener(`click`, () => store.dispatch({ type: INC_COUNT }));
plus.addEventListener(`click`, () => store.dispatch({ type: DEC_COUNT }));
restart.addEventListener(`click`, () => store.dispatch({ type: RESTART })) ;

someValue.addEventListener(`click`, () => {
  const value = +addInput.value;
  store.dispatch({ type: ADD_SOME_VALUE, payload: value });
  addInput.value = null;
});

// ========= FUNCTIONS ========= //

class CreateStore {
  constructor(reducer, initialState) {
    this._state = initialState;
    this._reducer = reducer;
    this._subscribers = [];
  }

  dispatch(action) {
    this._state = this._reducer(this._state, action);
    this._subscribers.forEach(cb => cb());
  }

  getState() {
    return this._state;
  }

  subscribe(callback) {
    this._subscribers.push(callback);
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
  resultValue.textContent = count?.toString();
}

// ========= START ========= //
const store = new CreateStore(updateStore, 0);
store.subscribe(() => updateHeader(store.getState()));
