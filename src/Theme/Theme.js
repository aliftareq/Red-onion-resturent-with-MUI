import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main: '#f91944',
            mainBg: '#191919',
            hover: '#ff9caf',
            greyText: '#727272',
        },
    },

    components: {
        MuiContainer: {
            defaultProps: {
                maxWidth: 'lg'
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    fontSize: '1rem',
                    padding: '0.5rem 2rem',
                    borderRadius: '40px',
                    textTransform: 'capitalize'
                }
            },
            defaultProps: {
                variant: 'contained'
            }
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    color: '#191919'
                }
            }
        }
    },
    typography: {
        fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    },
});