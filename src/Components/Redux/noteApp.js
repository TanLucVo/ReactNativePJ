export const ADD_NOTE = "ADD_NOTE";
export const DELETE_NOTE = "DELETE_NOTE";
export const EDIT_NOTE = "EDIT_NOTE";
// import { AsyncStorage } from "react-native";
import remove from "lodash.remove";
import AsyncStorage from "@react-native-community/async-storage";

export function addnote(note) {
    return {
        type: ADD_NOTE,
        payload: note,
    };
}

export function deletenote(id) {
    return {
        type: DELETE_NOTE,
        payload: id,
    };
}

export function editnote(note) {
    return {
        type: EDIT_NOTE,
        payload: note,
    };
}

// reducer

export var initialState = [];

export const storeData = async (value) => {
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem("data", jsonValue);
    } catch (e) {
        // saving error
    }
};

function notesReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_NOTE:
            const newState = [
                ...state,
                {
                    title: action.payload.title,
                    time: action.payload.time,
                    completed: false,
                    important: action.payload.important,
                    note: action.payload.note,
                },
            ];
            return newState;
        case EDIT_NOTE:
            return [...action.payload];
        case DELETE_NOTE:
            const deletedNewArray = remove(state, (obj) => {
                return obj.time != action.payload;
            });
            return deletedNewArray;

        default:
            return state;
    }
}

export default notesReducer;