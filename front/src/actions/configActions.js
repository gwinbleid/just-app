import keyMirror from 'keymirror';
import axios from 'axios';

export const configActionType = keyMirror(
    {
        GET_CONFIGS: null
    }
);

const api = "http://localhost:3001/config";

export const getConfig = () => {
    return (dispatch) => {
        axios.get(api)
            .then((data) => {
                dispatch(getConfigs(data.config));
            })
    }
}

function getConfigs(data) {
    return {
        type: configActionType.GET_CONFIGS,
        payload: data
    }
}