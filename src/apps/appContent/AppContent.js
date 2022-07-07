import Box from '@mui/material/Box';
import Inscription from './inscription/Inscription';
import New from './latest_new/New';
import NoReference from './nos_references/NoReference';
import NoServices from './nos_services/NoServices';
const AppContent = (props) => {
  const { sx } = props;
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        ...sx,
      }}
    >
      <NoServices />
      <NoReference />
      <New />
      <Inscription />
    </Box>
  );
};
export default AppContent;
