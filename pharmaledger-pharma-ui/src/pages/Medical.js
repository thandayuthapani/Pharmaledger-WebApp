import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Grid,
  // Typography
} from '@material-ui/core';

// import LatestOrders from 'src/components/dashboard//LatestOrders';
import MedicalStaff from 'src/components/Medical/MedicalStaff';

const Medical = () => (
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
          <MedicalStaff />
        </Grid>
      </Container>
    </Box>
  </>
);

export default Medical;
