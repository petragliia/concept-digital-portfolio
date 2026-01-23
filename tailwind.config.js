/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'digital-black': '#020408', // Even darker for contrast
                'digital-blue-dark': '#001233', // Deep Royal Blue
                'digital-blue-medium': '#002855', // Lighter Navy
                'digital-gold': '#FFD700', // Brighter Gold for blue contrast
                'digital-gold-muted': '#C5A059',
            },
            fontFamily: {
                montserrat: ['Montserrat', 'sans-serif'],
                inter: ['Inter', 'sans-serif'],
            },
            backgroundImage: {
                'luxury-gradient': 'linear-gradient(to bottom right, #001233, #001f3f, #002855)',
            },
            skew: {
                '-10': '-10deg',
            },
            borderRadius: {
                'card': '20px',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                'pulse-slow': {
                    '0%, 100%': { opacity: 0.1, transform: 'scale(1)' },
                    '50%': { opacity: 0.3, transform: 'scale(1.1)' },
                }
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'pulse-slow': 'pulse-slow 8s ease-in-out infinite',
                'fade-in-up': 'fadeInUp 0.8s ease-out forwards', // Assuming this might be used elsewhere or should be defined
            }
        },
    },
    plugins: [],
}
