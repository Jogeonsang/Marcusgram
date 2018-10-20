// imports

// actions

// action creators

// API actions

function facebookLogin(access_token) {
    return function(dispatch) {
        fetch("/users/login/facebook/", {
          method: 'POST',
          headers: {
              "Content-Type": 'application/json'
          },
          body: JSON.stringify({
              access_token
          })
    })
    .then(response => response.json())
    .then(json => console.log(json))
    .then(err => console.log(err))
}
}

// inital state
const initialState = {
    isLoggedIn: localStorage.getItem('jwt') || false
};

// reducer

function reducer(state = initialState, action){
    switch(action.type) {
        default:
        return state;
    }
}

const actionCreators = {
    facebookLogin
}

export { actionCreators };

export default reducer;