import './App.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import BackArrow from './backarrow';
function DiffieHellman() {
    return (
        <div className="DiffieHellman">
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
                    Diffie Hellman Example
                </Typography>
                <Link to="https://github.com/estevens2319/DiffieHellmanExample" target="_blank" rel="noopener noreferrer">
                    Link to Project on Github
                </Link>
                <br />
                <Typography variant="body1" component="div" textAlign='center' fontSize='130%' width='80%'>
                    This is the final project for my Principles of Applied Cryptography course.
                    <br />
                    This project implements the Diffie Hellman cryptography scheme for secure communication and was a fun and
                    very interesting way of seeing how the scheme is implemented
                    <br /><br />

                </Typography>

            </Box>
        </div>
    );
}

export default DiffieHellman;
