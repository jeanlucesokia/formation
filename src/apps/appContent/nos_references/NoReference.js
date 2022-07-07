import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import ItemReferences from './ItemReferences';
import { data } from './data/data.js';
import nos_references from '../../../assets/nos_references.png';
import { makeStyles } from '@mui/styles';
const NoReference = () => {
  const classes = useStyles();
  return (
    <Box sx={styles.parent}>
      <Box sx={styles.child}>
        <Stack direction="column">
          <p className={classes.text_title}>NOS REFERENCES</p>
          <p className={classes.text_content}>
            Visitez votre "boutique digitale". Nous maitrisons l'ensemble des
            metiers du web
          </p>
          <Stack direction="row" spacing={4}>
            {data.map((item, index) => (
              <ItemReferences
                key={index}
                image={item.image}
                title={item.title}
                text={item.text}
              />
            ))}
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

const useStyles = makeStyles({
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
});
const styles = {
  parent: {
    display: 'flex',
    position: 'ralative',
    height: '400px',
    width: '100%',
    backgroundImage: `url(${process.env.PUBLIC_URL + nos_references})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  child: {
    display: 'flex',
    justifyContent: 'center',
    position: 'absolute',
    height: '400px',
    width: '100%',
    backgroundColor: 'rgba(50, 141, 168, 0.63)',
  },
};
export default NoReference;
