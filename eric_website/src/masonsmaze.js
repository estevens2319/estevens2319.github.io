import './App.css';
import BackArrow from './backarrow';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
function Masonsmaze() {
    
    return (
        <div className="Masonsmaze">
            <BackArrow />
            <Box
                sx={{
                    padding: 4,
                    backgroundColor: '#f5f5f5',
                    borderRadius: 2,
                    boxShadow: 3,
                    width: '60%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 1,
                }}
            >
                <Typography variant="h4" component="div" gutterBottom>
                    Mason's Maze Unity Game
                </Typography>
                <Link to="https://github.com/estevens2319/Masonsmaze" target="_blank" rel="noopener noreferrer">
                    Link to Project on Github
                </Link>
                <br />
                <Typography variant="body1" component="div" textAlign='center' fontSize='130%' width='80%'>
                    Mason's Maze is the final project for my Game Programming course.
                    <br />
                    This game was created using Unity and many C# scripts and implements many different principles of game programming. 
                    The game includes AI enemies that will track the player, utalizes a randomly generated map for 
                    a new maze each iteration, adds character animations, and smooth player controls.
                    <br />
                    Please see the demonstration video on the Github page to see how the game turned out! 

                </Typography>

            </Box>
        </div>
    );
}

export default Masonsmaze;
