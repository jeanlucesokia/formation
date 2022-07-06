import { Stack, Divider } from '@mui/material';
import { PhoneAndroid } from '@mui/icons-material';
import Box from '@mui/material/Box';
import ItemMiniBar from './ItemMiniBar';
const MiniBar = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        backgroundColor: 'black',
      }}
    >
      <Stack direction="row" spacing={1}>
        <Divider
          orientation="vertical"
          sx={{ backgroundColor: 'white' }}
          flexItem
        />
        <ItemMiniBar>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            <PhoneAndroid style={{ height: '18px' }} />
            <span style={{ fontSize: '10px', fontWeight: 'bold' }}>
              +261 34 61 145 12
            </span>
          </div>
        </ItemMiniBar>
        <Divider
          orientation="vertical"
          sx={{ backgroundColor: 'white' }}
          flexItem
        />
        <ItemMiniBar>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            <span style={{ fontSize: '10px', fontWeight: 'bold' }}>Login</span>
          </div>
        </ItemMiniBar>
        <Divider
          orientation="vertical"
          sx={{ backgroundColor: 'white' }}
          flexItem
        />
        <ItemMiniBar>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            <span style={{ fontSize: '10px', fontWeight: 'bold' }}>
              Register
            </span>
          </div>
        </ItemMiniBar>
        <Divider
          orientation="vertical"
          sx={{ backgroundColor: 'white' }}
          flexItem
        />
        <Box width={250} />
      </Stack>
    </Box>
  );
};

export default MiniBar;
