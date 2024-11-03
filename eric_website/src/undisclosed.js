import './App.css';
import BackArrow from './backarrow';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
function Undisclosed() {
    
    return (
        <div className="Undisclosed">
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
                    Undisclosed Machine Learning Project
                </Typography>
                
                <br />
                <Typography variant="body1" component="div" textAlign='center' fontSize='130%' width='80%'>
                    This is a personal project I am working on that I hope to turn into a complete product some day.
                    <br />
                    For the final product, I hope to train my own machine learning model or use pre-existing large language models
                    and integrate them into a web application that will solve a fundamental problem that faces nearly everyone who
                    uses the internet.
                    <br />
                    I am still in the development stages for this project and will update this page when I better understand how to publish
                    my own product.
                    <br />
                    In the mean time, feel free to contact me to inquire more!

                </Typography>

            </Box>
        </div>
    );
}

export default Undisclosed;
