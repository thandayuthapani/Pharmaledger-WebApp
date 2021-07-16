import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Grid,
  // Typography
} from '@material-ui/core';

// import LatestOrders from 'src/components/dashboard//LatestOrders';
import PatientEvaluation from 'src/components/evaluation/PatientEvaluation';

const Evaluation = () => (
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
          <PatientEvaluation />
        </Grid>
      </Container>
    </Box>
  </>
);

export default Evaluation;
