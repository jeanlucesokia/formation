import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Inscription = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        height: '350px',
        width: '100%',
        backgroundColor: '#e1e1e1',
      }}
    >
      <Stack direction="column" spacing={2}>
        <Stack height={20} />
        <Stack direction="row">
          <Stack direction="column" style={useStyles.marge} />
          <Stack direction="column">
            <Typography style={useStyles.text_title}>
              Inscrivez-vous à notre newsletter
            </Typography>
            <Typography variant="body1" gutterBottom component="div">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
              blanditiis tenetur unde suscipit, quam beatae rerum inventore
              consectetur, neque doloribus, cupiditate numquam dignissimos
              laborum fugiat deleniti? Eum quasi quidem quibusdam
            </Typography>
            <Box
              sx={{
                display: 'grid',
                gap: 2,
                justifyContent: 'center',
                justifyItems: 'center',
              }}
            >
              <TextField
                placeholder="Votre nom"
                id="outlined-size-small"
                size="small"
                style={{ width: '200%' }}
                sx={{
                  input: { textAlign: 'center', backgroundColor: 'white' },
                }}
              />
              <TextField
                placeholder="Votre adresse email"
                id="outlined-size-small"
                size="small"
                style={{
                  width: '200%',
                }}
                sx={{
                  input: { textAlign: 'center', backgroundColor: 'white' },
                }}
              />
              <Button
                variant="contained"
                style={{
                  backgroundColor: '#7fb618',
                  fontWeight: 'bold',
                  width: '60%',
                }}
              >
                Envoyez
              </Button>
            </Box>
          </Stack>
          <Stack direction="column" style={useStyles.marge} />
        </Stack>
      </Stack>
    </Box>
  );
};

const useStyles = {
  text_title: {
    fontStyle: 'normal',
    fontSize: '30px',
    fontFamily: 'Comic Sans MS bold',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  text_content: {
    marginTop: -20,
    fontSize: '2 rem',
  },
  marge: {
    width: '40%',
  },
};
export default Inscription;
