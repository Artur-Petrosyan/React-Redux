export const LIGHT = "LIGHT";
export const DARK = "DARK"

const themeReducer = (state = "light", { type }) => {
    switch (type) {
        case DARK: return 'dark'
        case LIGHT: return 'light'
        default : return state
    }
}
export default themeReducer;