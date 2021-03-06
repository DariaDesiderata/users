import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './components/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const initialState = {
  users: [
    {
      id: 1,
      firstName: 'Jackie',
      lastName: 'Cooper',
      street: '111 Cooper st',
      city: 'Denver',
      state: 'CO',
      zip: '80218',
      country: 'US'
    },
    {
      id: 2,
      firstName: 'Johnathan',
      lastName: 'Reese',
      street: '111 Reese st',
      city: 'Denver',
      state: 'CO',
      zip: '80218',
      country: 'US'
    },
    {
      id: 3,
      firstName: 'Claire',
      lastName: 'Dennis',
      street: '111 Dennis st',
      city: 'Denver',
      state: 'CO',
      zip: '80218',
      country: 'US'
    },
    {
      id: 4,
      firstName: 'Stanley',
      lastName: 'Erickson',
      street: '111 Erickson st',
      city: 'Denver',
      state: 'CO',
      zip: '80218',
      country: 'US'
    }
  ]
};

const users = (state = [], action) => {
  switch (action.type) {
    case 'ADD_USER': {
      const { user } = action.payload;
      state.users.push(user);
      return {
        ...state,
        users: state.users
      };
    }
    case 'UPDATE_USER': {
      const { user } = action.payload;
      const updatedUsers = state.users.map(item => {
        if (item.id === user.id) {
          return { ...item, ...user };
        } else {
          return item;
        }
      });
      return {
        ...state,
        users: updatedUsers
      };
    }
    case 'DELETE_USER': {
      const { user } = action.payload;
      const filtered = state.users.filter(item => item.id !== user.id);
      return {
        ...state,
        users: filtered
      };
    }

    default:
      return state;
  }
};

const store = createStore(users, initialState);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
