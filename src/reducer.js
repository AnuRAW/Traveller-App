const initialState = {
    data: [],
    loading: false,
    error: null,
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_DATA_SUCCESS':
        return { ...state, data: action.payload, loading: false };
      case 'FETCH_DATA_FAILURE':
        return { ...state, error: action.payload, loading: false };
      default:
        return state;
    }
  };
  
  export default reducer;
  