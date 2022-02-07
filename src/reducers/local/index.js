
const INITIAL_STATE = {
    anon_token: "",
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_LOCAL_TOKEN':

            console.log("SET_LOCAL_TOKEN: ", action.payload)

            state.anon_token = action.payload;

            return {
                ...state
            }

        default:
            return state
    }
};