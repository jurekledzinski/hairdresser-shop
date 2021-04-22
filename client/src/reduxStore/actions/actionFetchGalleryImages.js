import { fetchImagesGallery } from "../../utils/sessions";

export const FETCH_IMAGES_REQUEST = "FETCH_IMAGES_REQUEST";
export const FETCH_IMAGES_SUCCESS = "FETCH_IMAGES_SUCCESS";
export const FETCH_IMAGES_FAILURE = "FETCH_IMAGES_FAILURE";

export const fetchImagesRequest = () => ({
  type: FETCH_IMAGES_REQUEST,
});

const fetchImagesSuccess = (emails) => ({
  type: FETCH_IMAGES_SUCCESS,
  payload: emails,
});

const fetchImagesFailure = (error) => ({
  type: FETCH_IMAGES_FAILURE,
  payload: error,
});

export const fetchGalleryImgs = (type) => {
  return async (dispatch) => {
    await dispatch(fetchImagesRequest());
    const { data, status } = await fetchImagesGallery(type);
    console.log(data, status);

    if (status === 200) {
      await dispatch(fetchImagesSuccess(data));
    } else {
      const errorMessage = "Failed to fetch data";
      await dispatch(fetchImagesFailure(errorMessage));
    }
  };
};
