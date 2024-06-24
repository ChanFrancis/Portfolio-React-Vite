import { useReducer, useEffect } from 'react';
import imagesLoaderReducer, { initialState, IMAGE_LOAD_START, IMAGE_LOAD_SUCCESS, IMAGE_LOAD_FAILURE } from './imagesLoaderReducer';


const useImageLoader = (receivedImages, title) => {
  const [state, dispatch] = useReducer(imagesLoaderReducer, initialState);
  const { loading, loaded, error } = state;

  useEffect(() => {
    dispatch({ type: IMAGE_LOAD_START, payload: { length: receivedImages.length } });
  }, [title, receivedImages.length]);

  const handleImageLoad = (index) => {
    dispatch({ type: IMAGE_LOAD_SUCCESS, payload: { index } });
  };

  const handleImageError = (index, error) => {
    dispatch({ type: IMAGE_LOAD_FAILURE, payload: { index, error } });
  };

  return {
    loading,
    loaded,
    error,
    handleImageLoad,
    handleImageError
  };
};

export default useImageLoader;