import { CHANGE_THEME } from "../actionTypes/theme";

export const changeTheme = (newTheme) => ({
    type: CHANGE_THEME,
    payload: {
        newTheme
    }
});