import defaultTheme from 'tailwindcss/defaultTheme'
import colors from 'tailwindcss/colors'

const MyTheme = {
    colors: {
        green: {
            DEFAULT: '#3BA676',
            50: '#B4E4CF',
            100: '#A5DFC5',
            200: '#87D4B2',
            300: '#69CA9E',
            400: '#4BBF8B',
            500: '#3BA676',
            600: '#2C7D59',
            700: '#1E533B',
            800: '#0F2A1E',
            900: '#000000'
        },
        blue: {
            DEFAULT: '#0096FF',
            50: '#B8E2FF',
            100: '#A3D9FF',
            200: '#7AC8FF',
            300: '#52B8FF',
            400: '#29A7FF',
            500: '#0096FF',
            600: '#0075C7',
            700: '#00548F',
            800: '#003357',
            900: '#00121F'
        },
        red: {
            DEFAULT: '#FF6464',
            50: '#FFFFFF',
            100: '#FFFFFF',
            200: '#FFDEDE',
            300: '#FFB6B6',
            400: '#FF8D8D',
            500: '#FF6464',
            600: '#FF2C2C',
            700: '#F30000',
            800: '#BB0000',
            900: '#830000'
        },
        gray: {
            100: '#0f1114',
            80: '#343a40',
            70: '#495057',
            60: '#74788d',
            50: '#adb5bd',
            40: '#ced4da',
            30: '#ddddd',
            20: '#eff2f7',
            10: '#f8f9fa'
        },
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        prim: {
            100: '#53c66e',
            20: '#d4dbf9'
        },
        success: {
            100: '#34c38f',
            20: '#ccf0e3'
        },
        info: {
            100: '#50a5f1',
            20: '#d3e8fb'
        },
        warning: {
            100: '#f1b44c',
            20: '#fbecd2'
        },
        danger: {
            100: '#f46a6a',
            20: '#fcdada'
        },
        dark: {
            100: '#343a40',
            20: '#cccecf'
        },
        second: {
            100: '#74788d',
            20: '#dcdde2'
        }
    }
}

export default {
    content: [
        './components/**/*.{vue,js,ts}',
        './assets/**/*.{scss,css,less}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './composables/**/*.{js,ts}',
        './plugins/**/*.{js,ts}',
        './App.{js,ts,vue}',
        './app.{js,ts,vue}',
        './Error.{js,ts,vue}',
        './error.{js,ts,vue}'
    ],
    safelist: [{
        pattern: /bg-(prim|blue|orange|red|yellow|gray|green)-100/
    }, {
        pattern: /border-(prim|blue|orange|red|yellow|gray|green)-100/
    }],
    theme: {
        extend: {
            fontSize: {
                '2xs': ['10px', { lineHeight: '14px' }],
                xs: ['12px', { lineHeight: '18px' }],
                sm: ['13px', { lineHeight: '20px' }],
                base: ['14px', { lineHeight: '22px' }],
                lg: ['16px', { lineHeight: '24px' }],
                xl: ['18px', { lineHeight: '28px' }],
                '2xl': ['20px', { lineHeight: '30px' }],
                '3xl': ['24px', { lineHeight: '36px' }],
                '4xl': ['36px', { lineHeight: '48px' }],
                '5xl': ['39px', { lineHeight: '51px' }],
                '6xl': ['46px', { lineHeight: '54px' }],
                '7xl': ['56px', { lineHeight: '64px' }]
            },
            aspectRatio: {
                video: '16 / 9',
                square: '1 / 1'
            },
            borderRadius: {
                none: '0px',
                sm: '4px',
                DEFAULT: '8px',
                md: '10px',
                lg: '16px',
                xl: '20px',
                full: '9999px'
            },
            colors: {
                primary: MyTheme.colors.green,
                green: MyTheme.colors.green,
                blue: MyTheme.colors.blue,
                red: MyTheme.colors.red,
                slate: colors.slate,
                transparent: 'transparent',
                current: 'currentColor',
                black: colors.black,
                white: colors.white,
                prim: {
                    100: '#53c66e',
                    20: '#d4dbf9'
                },
                success: {
                    100: '#34c38f',
                    20: '#ccf0e3'
                },
                info: {
                    100: '#50a5f1',
                    20: '#d3e8fb'
                },
                warning: {
                    100: '#f1b44c',
                    20: '#fbecd2'
                },
                danger: {
                    100: '#f46a6a',
                    20: '#fcdada'
                },
                dark: {
                    100: '#343a40',
                    20: '#cccecf'
                },
                second: {
                    100: '#74788d',
                    20: '#dcdde2'
                }
            },
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans]
            }
        }
    }
    // plugins: [
    //     require('@tailwindcss/line-clamp')
    // ]
}
