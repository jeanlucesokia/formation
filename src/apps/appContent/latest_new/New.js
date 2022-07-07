import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import ordi_portable from '../../../assets/ordi_portable.png';
import ItemNew from './ItemNew';
const New = () => {
  const classes = useStyles();
  return (
    <Box direction="row" sx={styles.container}>
      <Stack direction="column" className={classes.left_content}>
        <Typography></Typography>
      </Stack>
      <Stack direction="column" spacing={2} className={classes.right_content}>
        <ItemNew />
      </Stack>
    </Box>
  );
};
const useStyles = makeStyles({
  left_content: {
    width: '50%',
    backgroundImage: `url(${process.env.PUBLIC_URL + ordi_portable})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  right_content: {
    width: '50%',
    textAlign: 'left',
    marginLeft: '5%',
    justifyContent: 'center',
  },
});
const styles = {
  container: {
    display: 'flex',
    width: '100%',
    height: '410px',
    backgroundColor: 'rgb(2, 6, 41)',
  },
};
export default New;
