import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';

const pages = ['About Me', 'Projects', 'Work History', 'Education'];

const ResponsiveAppBar = () => {
    const navigate = useNavigate();
    const [drawerOpen, setDrawerOpen] = useState(false);

    const buttonClicked = (page) => {
        let path = '';
        switch (page) {
            case 'Projects':
                path = '/Projects';
                break;
            case 'Work History':
                path = '/Work';
                break;
            case 'Education':
                path = '/Education';
                break;
            case 'About Me':
                path = '/';
                break;
            default:
                path = '';
                break;
        }
        navigate(path);
        setDrawerOpen(false); // Close the drawer when a link is clicked
    };

    return (
        <AppBar position="static" sx={{ backgroundColor: '#123456' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'space-between' }}>
                        <IconButton
                            size="large"
                            aria-label="menu"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={() => setDrawerOpen(true)}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Drawer
                            anchor="left"
                            open={drawerOpen}
                            onClose={() => setDrawerOpen(false)}
                        >
                            <Box
                                sx={{ width: 250 }}
                                role="presentation"
                                onClick={() => setDrawerOpen(false)}
                                onKeyDown={() => setDrawerOpen(false)}
                            >
                                <List>
                                    {pages.map((page) => (
                                        <ListItem key={page} disablePadding>
                                            <ListItemButton onClick={() => buttonClicked(page)}>
                                                <ListItemText primary={page} />
                                            </ListItemButton>
                                        </ListItem>
                                    ))}
                                </List>
                            </Box>
                        </Drawer>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={() => buttonClicked(page)}
                                sx={{ my: 2, color: 'white', display: 'block', fontSize:'120%' }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default ResponsiveAppBar;
