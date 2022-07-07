import './App.css';
import Box from '@mui/material/Box';
import MiniBar from './apps/minBar/MiniBar';
import NavBar from './apps/navBar/NavBar';
import AppContent from './apps/appContent/AppContent';
import Footer from './apps/footer/Footer';
function App() {
  return (
    <div className="app">
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
    </div>
  );
}

export default App;
