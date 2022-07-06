import './App.css';
import Box from '@mui/system/Box';
import { Divider } from '@mui/material';
function App() {
  function MiniBar(props) {
    const { sx, ...other } = props;
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row-reverse',
          justifyContent: 'space-around',
          backgroundColor: 'red',
        }}
      >
        <ItemMiniBar>
          <h1>register</h1>
        </ItemMiniBar>
        <ItemMiniBar>
          <h1>Login</h1>
        </ItemMiniBar>
        <ItemMiniBar>
          <h1>+261 34 61 145 12</h1>
        </ItemMiniBar>
      </Box>
    );
  }
  function ItemMiniBar(props) {
    const { sx, ...other } = props;
    return (
      <Box
        sx={{
          p: 1,
          justifyContent: 'center',
          color: 'white',
          backgroundColor: 'black',
          fontSize: '0.4rem',
          ...sx,
        }}
        {...other}
      />
    );
  }
  function NavBar(props) {
    const { sx, ...other } = props;
    return (
      <Box
        sx={{
          bgcolor: (theme) =>
            theme.palette.mode === 'dark' ? '#101010' : '#fff',
          color: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
          border: '1px solid',
          borderColor: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
          p: 1,
          textAlign: 'center',
          fontSize: '0.875rem',
          fontWeight: '700',
          ...sx,
        }}
        {...other}
      />
    );
  }
  function AppContent(props) {
    const { sx, ...other } = props;
    return (
      <Box
        sx={{
          bgcolor: (theme) =>
            theme.palette.mode === 'dark' ? '#101010' : '#fff',
          color: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
          border: '1px solid',
          borderColor: (theme) =>
            theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
          p: 1,
          textAlign: 'center',
          fontSize: '0.875rem',
          fontWeight: '700',
          ...sx,
        }}
        {...other}
      />
    );
  }
  return (
    <div className="app">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <MiniBar />
        <NavBar>
          <h1>NavBar</h1>
        </NavBar>
        <AppContent>
          <h1>AppContent</h1>
        </AppContent>
      </Box>
    </div>
  );
}

export default App;
