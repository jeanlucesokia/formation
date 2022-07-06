import Box from '@mui/material/Box';
import NavBarContent from './NavBarContent';
import shutterStock from '../../assets/shutterstock.png';
const NavBar = (props) => {
  const { sx } = props;
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        fontSize: '0.875rem',
        height: '700px',
        backgroundImage: `url(${shutterStock})`,
        ...sx,
      }}
    >
      <NavBarContent />
    </Box>
  );
};

export default NavBar;
