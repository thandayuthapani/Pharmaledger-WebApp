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

const TrialDetails = (props) => {
  const [values, setValues] = useState({
    trialTemplateId: '',
    trialId: '',
    trialStatus: 'Open',
    toMedical: 'kg',
    trialStartDate: '2021-07-16',
    trialEndDate: '2021-08-16',
    trialPatients: '',
    trialMessage: '',
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
    const formatDate = (inputDate) => {
      const date = new Date(inputDate);
      return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    };
    // console.log('trialStart', formatDate(values.trialStartDate));
    const params = new URLSearchParams({
      trialTemplateID: values.trialTemplateId,
      trialID: values.trialId,
      trialStatus: values.trialStatus,
      trialPatients: values.trialPatients,
      toMedical: values.toMedical,
      fromPharma: pharmaAccount,
      trialStartDate: formatDate(values.trialStartDate),
      trialEndDate: formatDate(values.trialEndDate),
    }).toString();
    console.log(params);
    const trialUrl = `${pharmaUri}/trials/createtrial?${params}`;
    // axios.get(`${pharmaUri}/status`).then((response) => console.log(response.status));
    // eslint-disable-next-line no-unused-expressions
    axios.post(trialUrl).then(
      (response) => {
        console.log(response.data);
        // setValues({ trialMessage: 'Template creation Success' });
      }
    ).catch((err) => {
      // console.log('sc', err);
      // console.log('data', err.data);
      setValues({ trialMessage: 'Trial creation failed' });
      console.warn(err.message);
      console.warn(err.data);
      console.warn(JSON.stringify(err));
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
          subheader="Please fill the trial details"
          title="Create Trial"
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
                helperText="Please specify the Valid Trial Template ID"
                label="Trial Template Id"
                name="trialTemplateId"
                onChange={handleChange}
                required
                value={values.trialTemplateId}
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
                label="Trial ID"
                name="trialId"
                onChange={handleChange}
                required
                value={values.trialId}
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
                label="Trial Status"
                name="trialStatus"
                onChange={handleChange}
                required
                value={values.trialStatus}
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
                id="trialStartDate"
                name="trialStartDate"
                label="Trial Start"
                type="date"
                onChange={handleChange}
                value={values.trialStartDate}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                id="trialEndDate"
                name="trialEndDate"
                label="Trial End"
                type="date"
                onChange={handleChange}
                value={values.trialEndDate}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Trial Participants List"
                helperText="Valid Participant IDs seperated by commas (,)"
                name="trialPatients"
                onChange={handleChange}
                required
                value={values.trialPatients}
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
            Create Trial
          </Button>
        </Box>
      </Card>
      <Typography
        color="textSecondary"
        gutterBottom
        variant="body2"
      >
        {values.trialMessage }
      </Typography>
    </form>
  );
};

export default TrialDetails;
