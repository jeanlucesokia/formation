import Box from '@mui/material/Box';
import ItemContent from './ItemContent';
const AppContent = (props) => {
  const { sx } = props;
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: '0.875rem',
        height: '400px',
        ...sx,
      }}
    >
      <ItemContent />
    </Box>
  );
};
export default AppContent;
