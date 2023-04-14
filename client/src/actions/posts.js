import * as api from '../api/index.js';
import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes.js'

// Action Creators
export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();
        dispatch({ type: FETCH_ALL, payload: data });
    }
    catch (error) {
        console.log(error);
    }
}

export const createPost = (post) => async (dispatch) => {
    try {

        //it is for back-end api
        const { data } = await api.createPost(post);
        //It is for maintaing state of front-end store
        dispatch({ type: CREATE, payload: data });

    } catch (error) {
        console.log(error);
    }
};

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, post);

        dispatch({ type: UPDATE, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const deletePost = (id, post) => async (dispatch) => {
    try {
        await api.deletePost(id, post);
        dispatch({ type: DELETE, payload: id })
    }
    catch (err) {
        console.log(err);
    }
}

export const likePost = (id) => async (dispatch) => {
    try {
        const { data } = await api.likePost(id);
        dispatch({ type: UPDATE, payload: data });
    }
    catch (err) {
        console.log(err);
    }
}