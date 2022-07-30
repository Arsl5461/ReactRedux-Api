import { ActionTypes } from "../constants/action-types";

export const setBlogs = (products) => {
  return {
    type: ActionTypes.SET_BLOGS,
    payload: products,
  };
};

export const selectedBlog = (product) => {
  return {
    type: ActionTypes.SELECTED_BLOG,
    payload: product,
  };
};
export const removeSelectedBlog = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_BLOG,
  };
};
