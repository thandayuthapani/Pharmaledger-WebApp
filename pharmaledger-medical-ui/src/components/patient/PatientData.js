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

import { medicalUri, medicalAccount } from '../../config';

const PatientDetails = (props) => {
  const [values, setValues] = useState({
    patientId: '',
    shipmentMappingId: '',
    patientAddress: '',
    patientAge: '',
    patientHeight: '',
    patientGender: '',
    patientWeight: '',
    patientEmail: '',
    toPharma: 'moderna',
    toLogistics: 'dhl',
    patientMessage: ' ',
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const createTrial = () => {
    // console.log(event);
    console.log(medicalUri);
    // console.log(values);
    const params = new URLSearchParams({
      patientID: values.patientId,
      shipmentMappingID: values.shipmentMappingId,
      Age: values.patientAge,
      Gender: values.patientGender,
      Weight: values.patientWeight,
      Height: values.patientHeight,
      patientMailID: values.patientEmail,
      patientAddress: values.patientAddress,
      toPharma: values.toPharma,
      toLogistics: values.toLogistics,
      fromMedical: medicalAccount,
      medicalStaff: values.medicalAccount
    }).toString();

    const patientDataUrl = `${medicalUri}/patients/createpatients?${params}`;
    // axios.get(`${medicalUri}/status`).then((response) => console.log(response.status));
    // eslint-disable-next-line no-unused-expressions
    console.log('patient data url', patientDataUrl);
    axios.post(patientDataUrl).then(
      (response) => {
        console.log(response.data);
        // setValues({ patientMessage: 'Patient creation Success' });
      }
    ).catch((err) => {
      // console.log('sc', err);
      // console.log('data', err.data);
      setValues({ patientMessage: 'Patient creation failed' });
      console.warn('API-warning-Error', err);
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
          subheader="Please enter patient biometric data for Pharma and address data for Logistics"
          title="Send patient biometric data and address"
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
                helperText="only visible for pharma"
                label="Patient ID"
                name="patientId"
                onChange={handleChange}
                required
                value={values.patientId}
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
                helperText="obfuscated patient ID that you and pharma agree to use for logistic purposes"
                name="shipmentMappingId"
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
                label="Patient Address"
                helperText="visible only to the specified Logistics account"
                name="patientAddress"
                onChange={handleChange}
                required
                value={values.patientAddress}
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
                label="Patient E-Mail ID"
                helperText="visible only to the specified Logistics account"
                name="patientEmail"
                onChange={handleChange}
                required
                value={values.patientEmail}
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
                label="Patient Weight"
                helperText="In Kilograms. visible only to the specified Pharma account"
                name="patientWeight"
                onChange={handleChange}
                required
                value={values.patientWeight}
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
                label="Patient Height"
                helperText="In Centimeters. visible only to the specified Pharma account"
                name="patientHeight"
                onChange={handleChange}
                required
                value={values.patientHeight}
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
                label="Patient Age"
                helperText="Visible only to the specified Pharma account"
                name="patientAge"
                onChange={handleChange}
                required
                value={values.patientAge}
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
                label="Patient Sex"
                helperText="Visible only to the specified Pharma account"
                name="patientGender"
                onChange={handleChange}
                required
                value={values.patientGender}
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
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Medical Staff ID"
                helperText="Please specify the Valid Medical Staff ID assigned to the patient"
                name="medicalStaff"
                required
                onChange={handleChange}
                value={values.medicalStaff}
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
            onClick={createTrial}
          >
            Send Patient Data
          </Button>
        </Box>
      </Card>
      <Typography
        color="textSecondary"
        gutterBottom
        variant="body2"
      >
        {values.patientMessage }
      </Typography>
    </form>
  );
};

export default PatientDetails;
