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

import { pharmaUri, pharmaAccount } from '../../config';

const ShipmentRequestDetails = (props) => {
  const [values, setValues] = useState({
    packageId: '',
    shipmentMappingId: '',
    kitId: '',
    toMedical: 'kg',
    toLogistics: 'dhl',
    shipmentRequestMessage: '',
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const createShipmentRequest = () => {
    // console.log(event);
    // console.log(pharmaUri);
    // console.log(values);
    const params = new URLSearchParams({
      packageID: values.packageId,
      shipmentMappingID: values.shipmentMappingId,
      kitID: values.kitId,
      toMedical: values.toMedical,
      toLogistics: values.toLogistics,
      fromPharma: pharmaAccount,
    }).toString();
    const shipmentRequestUrl = `${pharmaUri}/kits/createshipment?${params}`;
    // axios.get(`${pharmaUri}/status`).then((response) => console.log(response.status));
    // eslint-disable-next-line no-unused-expressions
    axios.post(shipmentRequestUrl).then(
      (response) => {
        console.log(response.data);
        // setValues({ shipmentRequestMessage: 'Shipment request creation Success' });
      }
    ).catch((err) => {
      // console.log('sc', err);
      // console.log('data', err.data);
      setValues({ shipmentRequestMessage: 'Shipment request creation failed' });
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
                label="Shipment Mapping ID"
                name="shipmentMappingId"
                helperText="Obfuscated trial participant ID"
                onChange={handleChange}
                required
                value={values.shipmentMappingId}
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
                label="Kits inside package"
                helperText="Please specify the kit IDs inside package seperated by commas(,). Shared only with Medical"
                name="kitId"
                onChange={handleChange}
                required
                value={values.kitId}
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
                label="Medical Account"
                helperText="Please specify the Valid Medical account"
                name="toMedical"
                required
                onChange={handleChange}
                value={values.toMedical}
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
                label="Logistics Account"
                helperText="Please specify the Valid Logistics account"
                name="toLogistics"
                required
                onChange={handleChange}
                value={values.toLogistics}
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
            onClick={createShipmentRequest}
          >
            Send Shipment Request
          </Button>
        </Box>
      </Card>
      <Typography
        color="textSecondary"
        gutterBottom
        variant="body2"
      >
        {values.shipmentRequestMessage }
      </Typography>
    </form>
  );
};

export default ShipmentRequestDetails;
