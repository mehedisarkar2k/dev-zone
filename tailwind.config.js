module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},

        colors: {
            primary: {
                DEFAULT: '#725AC1',
                light: '#8D86C9',
                dark: '#242038',
            },
            secondary: {
                DEFAULT: '#E952DE',
                light: '#FFA0FD',
                dark: '#FFE1EA',
            },
            white: '#FFFFFF',
            black: '#001514',
            gray: {
                DEFAULT: '#efefef',
                ligth: '#f9f9f9',
                dark: '#D0CCD0',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
