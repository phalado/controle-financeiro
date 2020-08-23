const accountReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_ACCOUNT':
      console.log(action, state)
      return ({
        ...state,
        [action.account.name]: { ...action.account },
      })
    default:
      return state;
  }
}

export default accountReducer;
