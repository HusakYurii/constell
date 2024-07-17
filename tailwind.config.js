/** @type {import('tailwindcss').Config} */
export default {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        backgroundColor: {
            backgroundLight: "#e2e2e2",
            backgroundDark: "#282829",
            teamCardBackgroundLight: "#EFEFEF",
        },
        borderColor: {
            borderLight: "#D2D2D2",
        },
        textColor: {
            fontWhite: "#FFFFFF",
            fontLight: "#5F5F5F",
            fontDark: "#17171D",
        },
        fontFamily: {
            spaceGrotes: "Space Grotes",
            cormorantInfant: "Cormorant Infant"
        }
    },
    plugins: [],
}