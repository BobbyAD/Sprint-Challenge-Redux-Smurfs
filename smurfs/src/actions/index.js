import axios from 'axios';

export const FETCH_SMURF_START = 'FETCH_SMURF_START'
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS'
export const FETCH_SMURF_FAILURE = 'FETCH_SMURF_FAILURE'

export const ADD_SMURF_START = 'ADD_SMURF_START'
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS'
export const ADD_SMURF_FAILURE = 'ADD_SMURF_FAILURE'

export const UPDATE_SMURF_START = 'UPDATE_SMURF_START'
export const UPDATE_SMURF_SUCCESS = 'UPDATE_SMURF_SUCCESS'
export const UPDATE_SMURF_FAILURE = 'UPDATE_SMURF_FAILURE'

export const DELETE_SMURF_START = 'DELETE_SMURF_START'
export const DELETE_SMURF_SUCCESS = 'DELETE_SMURF_SUCCESS'
export const DELETE_SMURF_FAILURE = 'DELETE_SMURF_FAILURE'

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export const getSmurfs = () => dispatch => {
    dispatch({ type: FETCH_SMURF_START });
    axios
        .get('http://localhost:3333/smurfs')
        .then(res => {
            dispatch({ type: FETCH_SMURF_SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.log(err);
            dispatch({
                type: FETCH_SMURF_FAILURE,
                payload: `${err.status} ${err.statusText}`
            })
        })
}
export const addSmurf = newSmurf => dispatch => {
    dispatch({ type: ADD_SMURF_START });
    axios
        .post(`http://localhost:3333/smurfs`, newSmurf)
        .then(res => {
            dispatch({ type: ADD_SMURF_SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.log(err)
            dispatch({
                type: ADD_SMURF_FAILURE,
                payload: `${err.status} ${err.statusText}`
            })
        })
}
export const updateSmurf = (updatedSmurf, id) => dispatch => {
    dispatch({ type: UPDATE_SMURF_START });
    axios
        .put(`/smurfs/${id}`, updatedSmurf)
        .then(res => {
            dispatch({type: UPDATE_SMURF_SUCCESS, payload: res.data})
        })
        .catch(err => {
            console.log(err)
            dispatch({
                type: UPDATE_SMURF_FAILURE,
                payload: `${err.status} ${err.statusText}`
            })
        })
}
export const deleteSmurfs = deleteMe => dispatch => {
    dispatch({ type: DELETE_SMURF_START});
    axios
        .delete(`http://localhost:3333/smurfs/${deleteMe}`)
        .then(res => {
            // console.log(res)
            dispatch({
                type: DELETE_SMURF_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            // console.log(err)
            dispatch({
                type: ADD_SMURF_FAILURE,
                payload: `${err.status} ${err.statusText}`
            })
        })
}