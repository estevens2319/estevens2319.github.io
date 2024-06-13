import './App.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import megolf from './images/megolf.JPG';
import meski from './images/meski.JPG';
import mecamp from './images/mecamp.JPG'
function Home() {
    return (
        <div className="home">
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
                    About Eric Stevens
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
                        
                        <Typography variant="body1" component="div" textAlign='left' fontSize = '130%' marginLeft='10%' width='80%'>
                            Hello! And welcome to my website!
                            <br />
                            I am Eric Stevens, a 2024 graduate of University of Massachusetts, Amherst.
                            <br /><br />
                            I graduated from the Accelerated Masters program with a
                            Bachelor of Science and a Master of Science in Computer Science.
                        </Typography>
                    </Box>
                    <img
                        alt='Me'
                        style={{
                            marginLeft: '20px',
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
                        src={meski}
                    />
                    <Box sx={{ width: '60%' }}>
                        <Typography variant="body1" component="div" fontSize='130%' textAlign='left' marginLeft='10%' width='80%'>
                            In addition to programming I enjoy spending my time outdoors.
                            <br />
                            I have been an avid skier my whole life and enjoy frequent trips to Vermont and New Hampshire to find the best snow.
                            <br />
                            This is from an hike to Tuckerman's Ravine on Mount Washington. 
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
                            I also enjoy long hikes and camping!
                            <br />
                            While spending 2 summers in Glacier National Park in Montana, I would hike daily, and camp out as often as I could.
                            <br /><br />
                            
                        </Typography>
                    </Box>
                    <img
                        alt='Me'
                        style={{
                            marginLeft: '20px',
                            maxWidth: '30%',
                            borderRadius: '8px',
                            objectFit: 'cover'
                        }}
                        src={mecamp}
                    />
                </Box>
            </Box>
        </div>
    );
}

export default Home;
