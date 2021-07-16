import { useState } from 'react';
import axios from 'axios';

import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  Typography,
} from '@material-ui/core';

import { logisticsUri, logisticsAccount } from '../../config';

const ShipmentDetails = (props) => {
  const [values, setValues] = useState({
    packageId: '',
    status: 'PACKED',
    toPharma: 'moderna',
    shipmentMessage: '',
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const createTemplateTrial = () => {
    // console.log(event);
    // console.log(pharmaUri);
    // console.log(values);
    const params = new URLSearchParams({
      packageID: values.packageId,
      status: values.status,
      toPharma: values.toPharma,
      fromLogistics: logisticsAccount,
    }).toString();
    const shipmentUrl = `${logisticsUri}/package/createshipmenttracker?${params}`;
    // axios.get(`${pharmaUri}/status`).then((response) => console.log(response.status));
    // eslint-disable-next-line no-unused-expressions
    axios.post(shipmentUrl).then(
      (response) => {
        console.log(response.data);
        // setValues({ shipmentMessage: 'Shipment creation Success' });
      }
    ).catch((err) => {
      // console.log('sc', err);
      // console.log('data', err.data);
      setValues({ shipmentMessage: 'Shipment creation failed' });
      console.warn(err);
    });
  };

  return (
    <form
      autoComplete="off"
      noValidate
      {...props}
    >
      <Card>
        <CardHeader
          subheader="Please fill the Shipment request for logistics and kit details for medical"
          title="Create Shipment Request"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Package ID"
                name="packageId"
                helpertext="please specify the valid package ID"
                onChange={handleChange}
                required
                value={values.packageId}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Package Status"
                name="status"
                helperText="Current status of the package"
                onChange={handleChange}
                required
                value={values.status}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Pharma Account"
                helperText="Please specify the Valid Pharma account"
                name="toPharma"
                required
                onChange={handleChange}
                value={values.toPharma}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
          <Button
            color="primary"
            variant="contained"
            onClick={createTemplateTrial}
          >
            Create Shipment
          </Button>
        </Box>
      </Card>
      <Typography
        color="textSecondary"
        gutterBottom
        variant="body2"
      >
        {values.shipmentMessage }
      </Typography>
    </form>
  );
};

export default ShipmentDetails;
