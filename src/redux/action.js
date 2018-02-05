export const getUserName = (userName) => 
    {
         return dispatch => {
             console.log('getUserName');
             dispatch ({type: "USER_NAME", payload: userName}) 
            }
    };