import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import esokia_logo from '../../assets/esokia_logo.png';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';
const NavBarContent = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        style={{ background: 'transparent', boxShadow: 'none' }}
      >
        <Toolbar>
          <Stack direction="column" spacing={10}>
            <Stack direction="row" spacing={1}>
              <Box width={120} />
              <img
                src={process.env.PUBLIC_URL + esokia_logo}
                alt="esokia_logo"
                className={{ width: 100, height: 100 }}
              />
              <Box width={420} />
              <Button
                onClick={() => window.alert('Esokia')}
                color="inherit"
                sx={useStyles.text_initial}
              >
                Esokia
              </Button>
              <Button
                onClick={() => navigate('/psd')}
                color="inherit"
                sx={useStyles.text_initial}
              >
                Services
              </Button>
              <Button
                onClick={() => navigate('/psd')}
                color="inherit"
                sx={useStyles.text_initial}
              >
                Références
              </Button>
              <Button
                onClick={() => navigate('/psd')}
                color="inherit"
                sx={useStyles.text_initial}
              >
                Carrières
              </Button>
              <Button
                onClick={() => navigate('/psd')}
                color="inherit"
                sx={useStyles.text_initial}
              >
                Actualités
              </Button>
              <Button
                onClick={() => navigate('/psd')}
                color="inherit"
                sx={useStyles.text_initial}
              >
                Devis
              </Button>
              <Button color="inherit" sx={useStyles.text_initial}>
                Contrat
              </Button>
            </Stack>
          </Stack>
        </Toolbar>
      </AppBar>
      <Stack height={70} />
      <Stack direction="row">
        <Box width={'15%'} />
        <Stack direction="column" style={{ width: '40%' }}>
          <div style={useStyles.text_title}>
            <p>
              L'agence digitale
              <br />
              offshore
            </p>
          </div>
          <Stack direction="column" style={useStyles.text_content}>
            <span>
              Nous développons pour vous le concept de "boutique digitale"
            </span>
            <span>en vous proposant une offre sur mesure</span>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};
const useStyles = {
  text_initial: {
    textTransform: 'initial',
    fontFamily: 'Arial',
    ':hover': {
      bgcolor: 'rgb(38, 158, 173)',
      color: 'white',
    },
  },
  text_title: {
    backgroundColor: 'transparent',
    color: 'white',
    fontStyle: 'italic',
    fontSize: '80px',
    fontFamily: 'Comic Sans MS',
  },
  text_content: {
    marginTop: -70,
    fontSize: '2 rem',
    color: 'white',
  },
};
export default NavBarContent;
