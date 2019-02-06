import * as ActionTypes from './action-types';

export const login = (username, password) =>{
    console.log("username", username);
    console.log("password", password);
    
    if(username === "admin" & password === "b")
    {
        return (dispatch) =>{
            const action = {
                type: ActionTypes.LOGIN,
                payload: {username}
            } 
            dispatch(action);
        }
    }
}
export const logout = () => {
    return (dispatch) => {
        const action = {
            type: ActionTypes.LOGOUT
        } 
        dispatch(action);
    }
}