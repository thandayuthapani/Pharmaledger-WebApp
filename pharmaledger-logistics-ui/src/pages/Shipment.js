import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Grid,
  // Typography
} from '@material-ui/core';

// import LatestOrders from 'src/components/dashboard//LatestOrders';
import CreateShipment from 'src/components/shipment/CreateShipment';

const Shipment = () => (
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
          <CreateShipment />
        </Grid>
      </Container>
    </Box>
  </>
);

export default Shipment;
