const users = (state = {}, action) => {
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

export default users;
