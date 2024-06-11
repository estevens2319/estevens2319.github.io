import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom"
const pages = ['About Me', 'Projects', 'Work History', 'Education'];

const ResponsiveAppBar = () => {

    const navigate = useNavigate();

    const buttonClicked = (page) => {
        let path = '';
        switch (page) {
            case 'Projects':
                path = '/Projects';
                break;

            case 'Work History':
                path = 'Work';
                break;
            case 'Education':
                path = 'Education';
                break;
            case 'About Me':
                path = ''
                break;

            default:
                path = '';
                break;
        }
        navigate(path);
    };

    return (
        <AppBar position="static" sx={{ backgroundColor: '#123456' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ justifyContent: 'center', flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={() => buttonClicked(page)}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;
