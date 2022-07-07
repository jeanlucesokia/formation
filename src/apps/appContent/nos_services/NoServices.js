import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import CircleContent from './CircleContent';
import { data } from './data/data';

const NoServices = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        height: '520px',
        width: '100%',
      }}
    >
      <Stack direction="column">
        <p style={useStyles.text_title}>NOS SERVICES</p>
        <p style={useStyles.text_content}>
          Visitez votre "boutique digitale". Nous maitrisons l'ensemble des
          metiers du web
        </p>
        <Stack direction="row" spacing={4}>
          {data.map((item, index) => (
            <CircleContent
              key={index}
              title={item.title}
              text={item.text}
              about={item.about}
            />
          ))}
        </Stack>
      </Stack>
    </Box>
  );
};
const useStyles = {
  text_title: {
    fontStyle: 'italic',
    fontSize: '30px',
    fontFamily: 'Comic Sans MS bold',
    fontWeight: 'bold',
  },
  text_content: {
    marginTop: -20,
    fontSize: '2 rem',
  },
};
export default NoServices;
