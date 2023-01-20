
// constants
const SET_USER = "session/SET_USER";
const REMOVE_USER = "session/REMOVE_USER";
const LOAD_USER = "session/LOAD_USER";

const setUser = (user) => ({
  type: SET_USER,
  payload: user
});

const removeUser = (user) => ({
  type: REMOVE_USER,
  payload: user
});

const loadUserAction = (user) => ({
  type: LOAD_USER,
  payload: user
});

const initialState = { user: null };

/*
export const loadUser = user => async dispatch => {
  const response = await fetch()
}
*/