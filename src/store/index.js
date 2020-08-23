

const middleware= [thunk];

const reducers = combinereducers({
    saveMoviesReducer,
})
const composeEnhancers= 
typeof window === 'object' && window._REDUX_