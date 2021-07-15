import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Grid,
  Typography
} from '@material-ui/core';

// import LatestOrders from 'src/components/dashboard//LatestOrders';

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
          <Typography
            align="center"
            color="textPrimary"
            variant="subtitle2"
          >
            Shipment Data here
          </Typography>
        </Grid>
      </Container>
    </Box>
  </>
);

export default Shipment;
