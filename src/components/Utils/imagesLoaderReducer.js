export const IMAGE_LOAD_START = 'IMAGE_LOAD_START';
export const IMAGE_LOAD_SUCCESS = 'IMAGE_LOAD_SUCCESS';
export const IMAGE_LOAD_FAILURE = 'IMAGE_LOAD_FAILURE';

export const initialState = {
  loading: true,
  loaded: []
};

const imagesLoaderReducer = (state, action) => {
  switch (action.type) {
    case IMAGE_LOAD_START:
      return {
        ...state,
        loading: true,
        loaded: Array(action.payload.length).fill(false),
      };
    case IMAGE_LOAD_SUCCESS:
      const newLoadedStatus = [...state.loaded];
      newLoadedStatus[action.payload.index] = true;
      return {
        ...state,
        loading: newLoadedStatus.some(loaded => !loaded),
        loaded: newLoadedStatus,
      };
    case IMAGE_LOAD_FAILURE:
      const failureLoadedStatus = [...state.loaded];
      failureLoadedStatus[action.payload.index] = false;
      return {
        ...state,
        loading: failureLoadedStatus.some(loaded => !loaded),
        loaded: failureLoadedStatus,
      };
    default:
      return state;
  }
};

export default imagesLoaderReducer;