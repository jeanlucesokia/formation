const index = () => {
  return (
    <Stack
      width="100%"
      height="100%"
      alignItems="center"
      justifyContent="center"
      sx={{ backgroundColor: '#dddddd' }}
    >
      <Stack position="relative" width={200} direction="column">
        <Stack height={50} />
        <Stack
          width="100%"
          height={200}
          borderRadius={_radiusNum}
          borderColor="#0000ff"
          sx={{
            borderWidth: '2px',
            borderStyle: 'solid',
          }}
          direction="column"
          alignItems="center"
          justifyContent="space-around"
        >
          <Stack height="15px" />
          <Typography>Title</Typography>
          <Typography>Body</Typography>
          <Typography>footer</Typography>
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
            borderRadius={_radiusNum}
            sx={{
              backgroundColor: '#00a099',
            }}
            direction="column"
            alignItems="center"
            justifyContent="center"
          >
            <Typography color="#fff" fontSize={24}>
              T
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default index;
