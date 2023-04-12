import { CHANGE_THEME } from "../actionTypes/theme";
import { THEMES } from "../../constants/theme";

const initialStore = {
    theme: THEMES.light
};

const themeReducer = (store = initialStore, action) => {
    switch (action.type) {
        case CHANGE_THEME:
            return {
                ...store,
                theme: action.payload.newTheme
            };
        default:
            return store;
    }
};

export default themeReducer;