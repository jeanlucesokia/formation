import Box from '@mui/material/Box';
import MiniBar from '../minBar/MiniBar';
import NavBar from '../navBar/NavBar';
import AppContent from '../appContent/AppContent';
import Footer from '../footer/Footer';
const Home = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <MiniBar />
      <NavBar />
      <AppContent />
      <Footer />
    </Box>
  );
};
export default Home;
