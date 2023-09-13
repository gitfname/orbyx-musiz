/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/**/*.tsx"
    ],
    theme: {
        extend: {
            screens: {
                "max-sm": {
                    max: "540px"
                },
                "max-md": {
                    max: "720px"
                },
                "max-xl": {
                    max: "1140px"
                }
            }
        },
    },
    plugins: [
        require("tailwindcss-animated")
    ],
}