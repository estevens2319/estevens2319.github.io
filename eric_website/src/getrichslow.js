import './App.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import BackArrow from './backarrow';
function Getrichslow() {
    return (
        <div className="FoodChive">
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
                    FoodChive
                </Typography>
                <Link to="https://main.d357tcqgb48nwk.amplifyapp.com" target="_blank" rel="noopener noreferrer">
                    Link to live product
                </Link>

                <br />
                <Typography variant="body1" component="div" textAlign='center' fontSize='130%' width='80%'>
                    Get Rich Slow is a website that compiles odds data from many different sports betting sports books in order to place educated bets.
                    <br />
                    Using some clever math, it is possible to hedge bets for sports events such that no matter the outcome, you are able to make a profit!
                    This project is ongoing, tweaks to the user interface are on the way!
                    <br />
                    The website is built using REACT for the front end and Node.js for the server. The entire project is hosted on AWS, with an AWS Dynamo database,
                    AWS amplify to server the front end, and AWS Lambda for the server.
                    <br />
                    Check out the live website using the link

                </Typography>
                <Typography color="white">
                    9b33523b4f89f48256892d0b7bd5d5c9
                </Typography>

            </Box>
        </div>
    );
}

export default Getrichslow;
