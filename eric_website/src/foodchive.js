import './App.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import BackArrow from './backarrow';
function FoodChive() {
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
                <Link to="https://foodchive-xm1l.onrender.com" target="_blank" rel="noopener noreferrer">
                    Link to live product
                </Link>
                <Link to="https://github.com/estevens2319/FoodChive" target="_blank" rel="noopener noreferrer">
                    Link to Project on Github
                </Link>
                <br />
                <Typography variant="body1" component="div" textAlign='center' fontSize='130%' width='80%'>
                    FoodChive is a semester final project for my Software Engineering course and is a web application designed to find and save new recipes for users
                    <br />
                    Over the course of this project, many principles of Software Engineering were utalized, however my biggest takeaway from the project was working 
                    with a real group, with real deadlines and goals to hit, while using Jyra for work flow and Github for version control across group members.
                    <br />
                    Check out the live website using the link {"(Allow for a few moments for the recipes to load as we are using the free version of Mongo DB)"}, or check out the code base on Github!

                </Typography>

            </Box>
        </div>
    );
}

export default FoodChive;
