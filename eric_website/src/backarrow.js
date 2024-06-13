import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';

const BackArrow = () => {
    const navigate = useNavigate();
    const goBack = () =>{
        navigate(-1);
    };
return(
    <Box sx={{ position: 'absolute', top: '10%', left: 16 }}>
        <IconButton
            edge="end"
            color="inherit"
            aria-label="back"
            onClick={goBack}
        >
            <ArrowBackIcon />
        </IconButton>
    </Box>
);
};

export default BackArrow;