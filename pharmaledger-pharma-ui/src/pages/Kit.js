import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Grid,
  // Typography
} from '@material-ui/core';

// import LatestOrders from 'src/components/dashboard//LatestOrders';
import ShipmentRequest from 'src/components/Kit/ShipmentRequest';

const Kit = () => (
  <>
    <Helmet>
      <title>PharmaLedger</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'center'
      }}
    >
      <Container maxWidth={false}>
        <Grid
          container
          spacing={3}
        >
          <ShipmentRequest />
        </Grid>
      </Container>
    </Box>
  </>
);

export default Kit;
