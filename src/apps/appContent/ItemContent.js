import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ComputerIcon from '@mui/icons-material/Computer';
const data = [
  {
    title: 'Developpement web',
    text: 'Lorem ipsum dolor sit amet, co ctetuer adipiscing elit, sed di',
    about: 'Read more',
  },
  {
    title: 'Developpement mobile',
    text: 'Lorem ipsum dolor sit amet, co ctetuer adipiscing elit, sed di',
    about: 'Read more',
  },
  {
    title: 'Web design',
    text: 'Lorem ipsum dolor sit amet, co ctetuer adipiscing elit, sed di',
    about: 'Read more',
  },
  {
    title: 'Test qualité assurance',
    text: 'Lorem ipsum dolor sit amet, co ctetuer adipiscing elit, sed di',
    about: 'Read more',
  },
];
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
const ItemContent = () => {
  return (
    <Stack direction="column">
      <p style={useStyles.text_title}>NOS SERVICES</p>
      <p style={useStyles.text_content}>
        Visitez votre "boutique digitale". Nous maitrisons l'ensemble des
        metiers du web
      </p>
      <Stack direction="row" spacing={4}>
        {data.map((item) => (
          <CircleContent
            title={item.title}
            text={item.text}
            about={item.about}
          />
        ))}
      </Stack>
    </Stack>
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
export default ItemContent;
