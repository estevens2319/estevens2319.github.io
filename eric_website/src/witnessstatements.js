import './App.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import BackArrow from './backarrow';
function WitnessStatementProcessor() {
    return (
        <div className="WitnessStatementProcessor">
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
                    Witness Statement Processor
                </Typography>
                <Link to="https://github.com/estevens2319/WitnessStatements" target="_blank" rel="noopener noreferrer">
                    Link to Project on Github
                </Link>
                <br />
                <Typography variant="body1" component="div" textAlign='center' fontSize='130%' width='80%'>
                    This was a semester long project with the goal being to create a software that could aid law enforcement in child rescue.
                    <br />
                    This project combines Machine learning with software engineering to create a product that can quickly extract important information from long 
                    verbose witness statements cutting down the time required for law enforcement to read and use them. The final product was a web app frontend 
                    connected to a backend which implemented an ML model that could perform named entity recognition on long witness which would be used to highlight 
                    the important information in the witness statement. A second feature utalizes Chat GPT's API to read the witness statements and allow the users to ask 
                    specific questions about the witness statements and Chat GPT will reply with the lines referenced in the witness statements that brought it to the answer. 
                    <br /><br />

                </Typography>

            </Box>
        </div>
    );
}

export default WitnessStatementProcessor;
