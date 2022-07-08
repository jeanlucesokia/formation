import './App.css';
import Container from '@mui/material/Container';
import RoutesApps from './routes/RoutesApps';
function App() {
  return (
    <Container maxWidth={false} style={useStyles.container}>
      <RoutesApps />
    </Container>
  );
}
const useStyles = {
  container: {
    paddingLeft: 0,
    paddingRight: 0,
  },
};

export default App;
