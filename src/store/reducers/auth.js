import * as actionTypes from '../actions/actionTypes';

const initialState = {
    token: null,
    userId: null,
    error: null,
    loading: false
};

const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START:
            return {}
    }
};

export default reducer;