// import axios from 'axios';

// creating types here instead of separate file

export const FETCH_USERS = 'fetch_users';
export const fetchUsers = () => async (dispatch, getState, api) => {

    // customized axios instance (api)
    const res = await api.get('/users');

    dispatch({
        type: FETCH_USERS,
        payload: res
    });
};

export const FETCH_CURRENT_USER = 'fetch_current_user';
// action creator
export const fetchCurrentUser = () => async (dispatch, getState, api) => {
    const res = await api.get('/current_user');

    dispatch({
        type: FETCH_CURRENT_USER,
        payload: res
    });
};

export const FETCH_ADMINS = 'fetch_admins';
// action creator
export const fetchAdmins = () => async (dispatch, getState, api) => {

    // customized axios instance (api)
    const res = await api.get('/admins');

    // handle the response
    dispatch({
        type: FETCH_ADMINS,
        payload: res
    });
};