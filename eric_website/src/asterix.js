import './App.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import BackArrow from './backarrow';

function Asterix() {
    return (
        <div className="Asterix">
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
                    Asterix's HTTP Store
                </Typography>
                <Link to="https://github.com/estevens2319/AsterixStore" target="_blank" rel="noopener noreferrer">
                    Link to Project on Github
                </Link>
                <br />
                <Typography variant="body1" component="div" textAlign='center' fontSize='130%' width='80%'>
                    Asterix's Store is the final project for my Distributed Operating Systems course.
                    <br />
                    This project utilizes many different principles of distributed systems and was a great way for me to have experience working with these distributed systems protocols.
                    <br /><br />

                </Typography>

            </Box>
        </div>
    );
}

export default Asterix;
