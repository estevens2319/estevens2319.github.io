import './App.css';
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import ProjectList from './projectlist';
import { useNavigate } from 'react-router-dom';
import foodchiveicon from './images/foodchiveicon.png'
import keyicon from './images/keyicon.jpg'
import asterixicon from './images/asterix.png'
import witnessicon from './images/witnessstatement.png'
import masonsicon from './images/masonsicon.png'
function Projects() {
    const spacing = 8;
    const navigate = useNavigate();

    const handleClick = (page) => {
            let path = '';
            switch (page) {
                case "Asterix's Store":
                    path = 'Asterix';
                    break;
                case "Mason's Maze":
                    path = 'Masonsmaze';
                    break;
                case "Diffie Hellman Example":
                    path = 'DiffieHellman';
                    break;
                case "Witness Statement Processor":
                    path = 'WitnessStatementProcessor';
                    break;
                case "FoodChive":
                    path = "FoodChive";
                    break;
                default:
                    path = 'Projects';
                    break;
            }
            navigate(path);
        };

    let projectListJson = {};
    let images = {};

    Object.keys(ProjectList).forEach((key) => {
        projectListJson[key]= ProjectList[key];
    });
    
    images["FoodChive"] = foodchiveicon;
    images["Mason's Maze"] = masonsicon;
    images["Asterix's Store"] = asterixicon;
    images["Diffie Hellman Example"] = keyicon;
    images["Witness Statement Processor"] = witnessicon;
    return (
        <div className="projects">
            <h2>This is a page of past and present projects I am proud of</h2>
                <Grid sx={{ flexGrow: 1 }} container spacing={2} justifyContent="center">
                <Grid item xs={8}>
                    <Grid container justifyContent="center" spacing={spacing}>
                        {Object.keys(projectListJson).map((value) => (
                            <Grid key={value} item>
                                <ButtonBase onClick={() => handleClick(value)}>
                                    <Paper
                                        sx={{
                                            height: 220,
                                            width: 200,
                                            backgroundColor: (theme) =>
                                                theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)', // Darker shadow
                                            border: '1px solid rgba(0, 0, 0, 0.5)', // Darker border
                                            padding: 2,
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}

                                    >
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                justifyContent: 'top',
                                                height: '100%',
                                                textAlign: 'center',
                                            }}
                                        >
                                            <img
                                                src={images[value]}
                                                style={{ marginBottom: 10, maxHeight:'30%', objectFit: 'cover' }}
                                                alt={value}
                                            />
                                            <Typography variant="h6" component="div">
                                                {value}
                                            </Typography>
                                            <Typography variant="body2" component="div">
                                                {projectListJson[value]}
                                            </Typography>
                                        </Box>
                                    </Paper>
                                </ButtonBase>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export default Projects;
