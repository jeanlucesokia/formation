import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ComputerIcon from '@mui/icons-material/Computer';
const CircleContent = (props) => {
  const { title, text, about } = props;
  return (
    <Stack position="relative" width={280} direction="column">
      <Stack height={50} />
      <Stack
        width="100%"
        height={280}
        borderRadius={9999}
        borderColor="rgb(66, 221, 245)"
        sx={{
          borderWidth: '2px',
          borderStyle: 'solid',
        }}
        direction="column"
        alignItems="center"
        justifyContent="space-around"
      >
        <Stack height="15px" />
        <Typography style={{ fontWeight: 'bold' }}>{title}</Typography>
        <Typography pr={1} pl={1}>
          {text}
        </Typography>
        <Typography>
          <Button
            variant="text"
            style={{ color: 'rgb(66, 221, 245)', fontWeight: 'bold' }}
          >
            {about}»
          </Button>
        </Typography>
      </Stack>
      <Stack
        direction="column"
        alignItems="center"
        position="absolute"
        top={0}
        left={0}
        width="100%"
        pt={3}
      >
        <Stack
          width={60}
          height={60}
          borderRadius={9999}
          sx={{
            backgroundColor: 'rgb(66, 221, 245)',
          }}
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Typography color="#fff" fontSize={24}>
            <ComputerIcon />
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};
export default CircleContent;
