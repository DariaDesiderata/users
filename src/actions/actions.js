// action types
export const ADD_USER = 'ADD_USER';
export const DELETE_USER = 'DELETE_USER';
export const UPDATE_USER = 'UPDATE_USER';

// action creators
export function addUser(user) {
  return { type: ADD_USER, payload: { user } };
}

export function deleteUser(user) {
  if (window.confirm('Are you sure you want to remove this user?'))
    return { type: DELETE_USER, payload: { user } };
}

export function updateUser(user) {
  return { type: UPDATE_USER, payload: { user } };
}
