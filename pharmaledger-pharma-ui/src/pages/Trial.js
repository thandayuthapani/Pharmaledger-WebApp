import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Grid,
  // Typography
} from '@material-ui/core';

import TrialTemplate from 'src/components/Trial/TrialTemplate';
import TrialCreation from 'src/components/Trial/TrialCreation';
// import LatestOrders from 'src/components/dashboard//LatestOrders';

const Trial = () => (
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
      <Container maxWidth="lg">
        <Grid
          container
          spacing={4}
        >
          <Grid
            item
            lg={4}
            md={6}
            xs={12}
          >
            <TrialTemplate />
          </Grid>
          <Grid
            item
            lg={8}
            md={6}
            xs={12}
          >
            <TrialCreation />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

export default Trial;
