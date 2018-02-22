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
      firstName: 'Johnathan',
      lastName: 'Reese',
      address: {
        street: '111 Reese st',
        city: 'Denver',
        state: 'CO',
        zip: '80218',
        country: 'US'
      }
    },
    {
      id: 3,
      firstName: 'Claire',
      lastName: 'Dennis',
      address: {
        street: '111 Dennis st',
        city: 'Denver',
        state: 'CO',
        zip: '80218',
        country: 'US'
      }
    },
    {
      id: 4,
      firstName: 'Stanley',
      lastName: 'Erickson',
      address: {
        street: '111 Erickson st',
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
      const updatedUser = state.map(item => {
        if (item.id === user.id) {
          return { ...item, ...user };
        }
        return item;
      });
      return updatedUser;
    }

    case 'DELETE_USER': {
      const { user } = action.payload;
      return state.users.filter(item => item.id !== user.id);
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
