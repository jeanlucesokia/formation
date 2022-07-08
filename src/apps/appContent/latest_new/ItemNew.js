import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
const ItemNew = () => {
  return (
    <>
      <Typography
        variant="h3"
        component="div"
        gutterBottom
        style={{ color: '#4ec1e0' }}
      >
        Latest News
      </Typography>
      <Stack direction="row">
        <Typography variant="body1" gutterBottom style={{ color: '#818283' }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam
        </Typography>
        <Stack width={10} />
      </Stack>
      <Typography>
        <Button variant="text" style={{ color: '#4ec1e0', fontWeight: 'bold' }}>
          Read more »
        </Button>
      </Typography>
    </>
  );
};
export default ItemNew;
