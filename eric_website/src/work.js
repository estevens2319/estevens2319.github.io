import './App.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import dataannotation from './images/dataannotation.png'
import makerspace from './images/makerspace.png'
import pursuit from './images/pursuit.jpg'
function Work() {
    return (
        <div className="work">
            <br />

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
                    gap: 4,
                }}
            >
                <Typography variant="h4" component="div" gutterBottom>
                    Work History
                </Typography>

                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: '100%',
                    }}
                >
                    <Box sx={{ width: '60%' }}>

                        <Typography variant="body1" component="div" textAlign='left' fontSize='110%' marginLeft='10%' width='80%'>
                            <Typography fontSize='130%' textAlign='left' fontWeight='bold'>
                                AI Trainer {"(2023 - Present)"}
                            </Typography>
                            <Typography fontSize='110%' fontStyle='italic' textAlign='left'>
                                Data Annotation Tech, New York, NY
                            </Typography>
                            Complete individual coding projects to improve the AI models' code generation as well as evaluate AI model outputs to improve the models' performance 
                        </Typography>
                    </Box>

                    <img
                        alt='Me'
                        style={{
                            marginRight: '20px',
                            maxWidth: '30%',
                            borderRadius: '8px',
                            objectFit: 'cover'
                        }}
                        src={dataannotation}
                    />
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: '100%',
                    }}
                >
                    <Box sx={{ width: '60%' }}>

                        <Typography variant="body1" component="div" textAlign='left' fontSize='110%' marginLeft='10%' width='80%'>
                            <Typography fontSize='130%' textAlign='left' fontWeight='bold'>
                                CICS Makerspace Associate {"(2022 - 2024)"}
                            </Typography>
                            <Typography fontSize='110%' fontStyle='italic' textAlign='left'>
                                University of Massachusetts Amherst, Amherst, MA
                            </Typography>
                            Oversee the use of various devices and components in the computer lab; students needing assistance,
                            tools, or advice for projects come into the lab and it is my responsibility to come up with solutions
                            to problems they are facing, demonstrate the use of new technologies, and offer advice for their projects
                        </Typography>
                    </Box>
                    <img
                        alt='Me'
                        style={{
                            marginRight: '20px',
                            maxWidth: '30%',
                            borderRadius: '8px',
                            objectFit: 'cover'
                        }}
                        src={makerspace}
                    />
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: '100%',
                    }}
                >
                    <Box sx={{ width: '60%' }}>

                        <Typography variant="body1" component="div" textAlign='left' fontSize='110%' marginLeft='10%' width='80%'>
                            <Typography fontSize='130%' textAlign='left' fontWeight='bold'>
                                Groundskeeping and Maintenance Associate {"(Summer 2021, 2022)"}
                            </Typography>
                            <Typography fontSize='110%' fontStyle='italic' textAlign='left'>
                                Pursuit Collection, Glacier National Park, MT
                            </Typography>
                            Responsible for responding to calls for safety risks and problems around the entire property, in addition to general construction, upkeep, and repairs

                        </Typography>
                    </Box>
                    <img
                        alt='Me'
                        style={{
                            marginRight: '20px',
                            maxWidth: '30%',
                            borderRadius: '8px',
                            objectFit: 'cover'
                        }}
                        src={pursuit}
                    />
                </Box>
            </Box>
            <br />

        </div>


    );
}

export default Work;
