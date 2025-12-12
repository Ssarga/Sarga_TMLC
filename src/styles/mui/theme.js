const { createTheme } = require("@mui/material")

const backgroundcolour = "#846C5B"
const primarycolour = "#E3D3E4"
const text = "#070707"
const secondarycolour = "#4281A4"
const highlight = "#91C7B1"

//dark theme
const backgroundcolourdark = "#070707"
const primarycolourdark = "#E3D3E4"
const textdark = "#b93f3fff"
const secondarycolourdark = "#4281A4"
const highlightdark = "#91C7B1"

let darktheme = createTheme({
    palette: {
        mode: "dark",
        background: {
            default: backgroundcolourdark

        },
        primary: {
            main: primarycolourdark
        },
        secondary: {
            main: secondarycolourdark
        },
        icon: {
            main: textdark
        },
        tertiary: {
            main: highlightdark
        },
        error: {
            main: "#D80027"
        },



    },
});

//light
let theme = createTheme({
    palette: {
        mode: "light",
        background: {
            default: backgroundcolour

        },
        primary: {
            main: primarycolour
        },
        secondary: {
            main: secondarycolour
        },
        icon: {
            main: text
        },
        tertiary: {
            main: highlight
        },
        error: {
            main: "#D80027"
        },



    },
});
export { theme,darktheme };