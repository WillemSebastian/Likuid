import { SEARCH_UNIVERSITY } from "../../helpers/actionTypes"

const initialState = {
    universityList: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SEARCH_UNIVERSITY: {
            console.log(action.payload.data)
            if (action.payload.target.charCode === 13) {
                document
                .getElementById("section-example")
                .scrollIntoView();
            }
            return {
                ...state,
            };
        }
        default:
            return state;
    }
}
