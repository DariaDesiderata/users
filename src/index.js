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
      address: {
        street: '111 Cooper st',
        city: 'Denver',
        state: 'CO',
        zip: '80218',
        country: 'US'
      }
    },
    {
      id: 2,
      firstName: 'Jackie',
      lastName: 'Cooper',
      address: {
        street: '111 Cooper st',
        city: 'Denver',
        state: 'CO',
        zip: '80218',
        country: 'US'
      }
    },
    {
      id: 3,
      firstName: 'Jackie',
      lastName: 'Cooper',
      address: {
        street: '111 Cooper st',
        city: 'Denver',
        state: 'CO',
        zip: '80218',
        country: 'US'
      }
    },
    {
      id: 4,
      firstName: 'Jackie',
      lastName: 'Cooper',
      address: {
        street: '111 Cooper st',
        city: 'Denver',
        state: 'CO',
        zip: '80218',
        country: 'US'
      }
    }
  ]
};

const users = (state = [], action) => {
  switch (action.type) {
    case 'ADD_USER': {
      const { user } = action.payload;
      const newUser = {
        id: user.id,
        firstName: user.firstname,
        lastName: user.lasName,
        address: {
          street: user.street,
          city: user.city,
          state: user.state,
          zip: user.zip,
          country: user.country
        }
      };
      return {
        ...state,
        newUser
      };
    }
    case 'UPDATE_USER': {
      const { user } = action.payload;
      if (user.id === state.user.id)
        return {
          ...state,
          ...user
        };
    }
    case 'DELETE_USER': {
      const { user } = action.payload;
      return state.filter(item => item.id !== user.id);
    }

    default:
      return state;
  }
};

const store = createStore(users, initialState);
console.log(store.getState());
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
