import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import esokia_logo from '../../assets/esokia_logo.png';
const Footer = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        height: '350px',
        width: '100%',
        backgroundColor: '#161b1d',
      }}
    >
      <Stack direction="row">
        <Stack direction="column" style={useStyles.marge}>
          <img
            src={process.env.PUBLIC_URL + esokia_logo}
            alt="esokia_logo"
            style={{ width: '80px', height: '50px' }}
          />
          <Typography style={useStyles.text_typography}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            blanditiis tenetur unde suscipit, quam beatae rerum inventore
            consectetur, neque doloribus, cupiditate numquam dignissimos laborum
            fugiat deleniti? Eum quasi quidem quibusdam
          </Typography>
        </Stack>
        <Stack direction="column" style={useStyles.marge}>
          <Stack height={20} />
          <Typography style={useStyles.text_typography_liste}>
            Services
          </Typography>
          <Typography style={useStyles.text_typography_liste}>
            Réferences
          </Typography>
          <Typography style={useStyles.text_typography_liste}>
            Carrière
          </Typography>
          <Typography style={useStyles.text_typography_liste}>
            Actualités
          </Typography>
          <Typography style={useStyles.text_typography_liste}>Devis</Typography>
          <Typography style={useStyles.text_typography_liste}>
            Contact
          </Typography>
        </Stack>
        <Stack direction="column" style={useStyles.marge}>
          <Stack height={20} />
          <Typography style={useStyles.text_typography_liste}>
            Services
          </Typography>
          <Typography style={useStyles.text_typography_liste}>
            Réferences
          </Typography>
          <Typography style={useStyles.text_typography_liste}>
            Carrière
          </Typography>
          <Typography style={useStyles.text_typography_liste}>
            Actualités
          </Typography>
          <Typography style={useStyles.text_typography_liste}>Devis</Typography>
          <Typography style={useStyles.text_typography_liste}>
            Contact
          </Typography>
        </Stack>
        <Stack direction="column" style={useStyles.marge}>
          <Typography
            style={{
              color: '#fff',
              fontSize: '1 rem',
              textAlign: 'justify',
              marginLeft: '10%',
              marginRight: '10%',
              height: '40px',
            }}
          >
            Contacts
          </Typography>
          <Typography style={useStyles.text_typography_liste_group}>
            4th Floor Orbis Court
          </Typography>
          <Typography style={useStyles.text_typography_liste_group}>
            132 St Jean Road
          </Typography>
          <Typography style={useStyles.text_typography_liste_group}>
            Quatre Bornes, Mauritius
          </Typography>
          <Typography style={{ height: '20px' }} />
          <Typography style={useStyles.text_typography_liste_group}>
            Tél: +230 52 93 51 11
          </Typography>
          <Typography style={useStyles.text_typography_liste_group}>
            Mobile: +230 52 52 33 34
          </Typography>
          <Typography
            style={{ color: 'rgb(66, 221, 245)', fontWeight: 'bold' }}
          >
            contact@esokia.com
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};
const useStyles = {
  marge: {
    width: '25%',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text_typography: {
    color: '#818283',
    fontSize: '1 rem',
    textAlign: 'justify',
    marginLeft: '10%',
    marginRight: '10%',
  },
  text_typography_liste: {
    color: '#818283',
    fontSize: '1 rem',
    textAlign: 'justify',
    marginLeft: '10%',
    marginRight: '10%',
    height: '40px',
  },
  text_typography_liste_group: {
    color: '#818283',
    fontSize: '1 rem',
    textAlign: 'justify',
    marginLeft: '10%',
    marginRight: '10%',
    height: '30px',
  },
};
export default Footer;
