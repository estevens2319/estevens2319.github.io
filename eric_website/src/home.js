import './App.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import megolf from './images/megolf.JPG';
import meski from './images/meski.JPG';
import mecamp from './images/mecamp.JPG';
import umasslogo from './images/umasslogo.png';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="home">
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
                    Eric Stevens
                    <br />
                    <Typography variant='caption' fontSize='45%'>
                        Email: {" "}
                        <a href="mailto:estevens2319@gmail.com">Estevens2319@gmail.com</a>
                        {" "} Github:{" "}
                        <Link
                            to="https://github.com/estevens2319"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ marginLeft: '2px' }} // Add margin here
                        >
                            Github.com/estevens2319
                        </Link>
                    </Typography>
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

                        <Typography variant="body1" component="div" textAlign='left' fontSize='130%' marginLeft='10%' width='80%'>
                            <Typography fontSize='130%' textAlign='center' fontWeight='bold'>
                                Welcome!
                            </Typography>
                            Hello! And welcome to my website!
                            <br />
                            This website was made using React and is hosted on Github Pages. I made this to be a brief overview of myself and the projects I am proud of.

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
                        src={megolf}
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
                    <img
                        alt='Me'
                        style={{
                            marginLeft: '20px',
                            maxWidth: '30%',
                            borderRadius: '8px',
                            objectFit: 'cover'
                        }}
                        src={umasslogo}
                    />
                    <Box sx={{ width: '60%' }}>
                        <Typography variant="body1" component="div" fontSize='130%' textAlign='left' marginLeft='10%' width='80%'>

                            <Typography fontSize='130%' textAlign='center' fontWeight='bold'>
                                Education
                            </Typography>
                            In 2023 I graduated from the University of Massachusetts, Amherst with my Bachelor of Science in computer science.
                            <br />
                            I was accepted into the Accelerated Master's
                            program and in 2024 completed my Master of Science in computer science.
                        </Typography>
                    </Box>

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

                        <Typography variant="body1" component="div" textAlign='left' fontSize='130%' marginLeft='10%' width='80%'>
                            <Typography fontSize='130%' textAlign='center' fontWeight='bold'>
                                Interests
                            </Typography>
                            During my time at University of Massachusetts, I was exposed to many different aspects of computer science.
                            <br />
                            What interests me most post graduation is video game design and cyber security.
                            <br />
                            As an avid video game player, I have always wanted to pursue a career creating and designing video games. I took a very fun course during my time at school in which I was able to create my own video game with a small team. The end result was a success and I found that I enjoyed creating video games nearly as much as playing them.
                            <br />
                            I have taken a number of cryptography, networking, and security courses and hope to pursue a career along the same path.
                            <br />
                            My goal is to pursue a career in either video game design or cyber security.

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
                        src={mecamp}
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
                    <img
                        alt='Me'
                        style={{
                            marginLeft: '20px',
                            maxWidth: '30%',
                            borderRadius: '8px',
                            objectFit: 'cover'
                        }}
                        src={meski}
                    />
                    <Box sx={{ width: '60%' }}>
                        <Typography variant="body1" component="div" fontSize='130%' textAlign='left' marginLeft='10%' width='80%'>

                            <Typography fontSize='130%' textAlign='center' fontWeight='bold'>
                                Hobbies
                            </Typography>
                            In addition to programming I enjoy spending my time outdoors.
                            <br />
                            I have been an avid skier my whole life and enjoy frequent trips to Vermont and New Hampshire to find the best snow.
                            <br />
                            I also enjoy hiking and camping. During my 2 summers spent working in Glacier National Park in Montana, I would hike daily and camp out as often as I could.
                        </Typography>
                    </Box>

                </Box>
            </Box>
            <br />
        </div>
    );
}

export default Home;
