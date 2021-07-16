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

const TrialTemplateDetails = (props) => {
  const [values, setValues] = useState({
    trialTemplateId: '',
    trialResult: 'None',
    trialDirection: '',
    toMedical: 'kg',
    templateMessage: '',
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
      trialTemplateID: values.trialTemplateId,
      trialResult: values.trialResult,
      trialDirection: values.trialDirection,
      toMedical: values.toMedical,
      fromPharma: pharmaAccount,
    }).toString();
    const trialTemplateUrl = `${pharmaUri}/trials/createtrialtemplate?${params}`;
    // axios.get(`${pharmaUri}/status`).then((response) => console.log(response.status));
    // eslint-disable-next-line no-unused-expressions
    axios.post(trialTemplateUrl).then(
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
          subheader="Please fill the template details"
          title="Create Trial Template"
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
                label="Other Details"
                name="trialResult"
                onChange={handleChange}
                required
                value={values.trialResult}
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
                label="Trial Directions"
                name="trialDirection"
                onChange={handleChange}
                required
                value={values.trialDirection}
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
            onClick={createTemplateTrial}
          >
            Create Trial Template
          </Button>
        </Box>
      </Card>
      <Typography
        color="textSecondary"
        gutterBottom
        variant="body2"
      >
        {values.templateMessage }
      </Typography>
    </form>
  );
};

export default TrialTemplateDetails;
