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

const MedicalDetails = (props) => {
  const [values, setValues] = useState({
    staffId: '',
    staffName: '',
    proficiency: 'MD',
    toMedical: 'kg',
    medicalMessage: '',
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const createTrial = () => {
    // console.log(event);
    console.log(pharmaUri);
    // console.log(values);
    const params = new URLSearchParams({
      staffID: values.staffId,
      staffName: values.staffName,
      proficiency: values.proficiency,
      toMedical: values.toMedical,
      fromPharma: pharmaAccount,
    }).toString();
    const medicalStaffUrl = `${pharmaUri}/medical/createstaff?${params}`;
    // axios.get(`${pharmaUri}/status`).then((response) => console.log(response.status));
    // eslint-disable-next-line no-unused-expressions
    axios.post(medicalStaffUrl).then(
      (response) => {
        console.log(response.data);
        // setValues({ templateMessage: 'Template Creation Success' });
      }
    ).catch((err) => {
      // console.log('sc', err);
      // console.log('data', err.data);
      setValues({ templateMessage: 'Template Creation failed' });
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
          subheader="Please Create and approve Medical staff for Trial"
          title="Create Medical Staff"
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
                helperText="Please specify staff ID in format <medical-account><id> eg., medical001"
                label="Medical staff ID"
                name="staffId"
                onChange={handleChange}
                required
                value={values.staffId}
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
                label="Medical staff name"
                name="staffName"
                onChange={handleChange}
                required
                value={values.staffName}
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
                label="Medical staff Proficiency"
                name="proficiency"
                onChange={handleChange}
                required
                value={values.proficiency}
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
            Create Medical Staff
          </Button>
        </Box>
      </Card>
      <Typography
        color="textSecondary"
        gutterBottom
        variant="body2"
      >
        {values.medicalMessage }
      </Typography>
    </form>
  );
};

export default MedicalDetails;
