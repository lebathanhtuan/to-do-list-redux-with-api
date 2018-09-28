import * as types from "./../constants/ActionTypes";
import axios from 'axios';

export const showList = (list) => {
    return{
        type: types.SHOW_LIST, 
        list
    }
}
export const fetchListJson = () => {
    return (dispatch) => {
        return axios.get('http://localhost:3001/List')
        .then(response => {
            dispatch(showList(response.data))
        })
        .catch(error => {
            throw(error);
        });
    };
};

export const addItem = (value) => {
    return (dispatch) => {
        return axios.post('http://localhost:3001/List', {
            name: value
        })
        .then(() => {
            dispatch(fetchListJson())
        })
        .catch(error => {
            throw(error);
        });
    };
};

export const deleteItem = (id) => {
    return (dispatch) => {
        return axios.delete('http://localhost:3001/List/'+id)
        .then(() => {
            dispatch(fetchListJson())
        })
        .catch(error => {
            throw(error);
        });
    };
};

export const editItem = (id, value) => {
    return (dispatch) => {
        return axios.put('http://localhost:3001/List/'+id, {
            name: value
        })
        .then(() => {
            dispatch(fetchListJson())
        })
        .catch(error => {
            throw(error);
        });
    };
};

export const filterItem = (value) => {
    return{
        type: types.FILTER_ITEM,
        value
    }
};



