const initialState = {
    config: []
};

export default function settings(state = initialState, action) {
    switch (action.type) {
        case 'GET_CONFIGS':
            return Object.assign({}, state);
        default:
            return state;
    }
}