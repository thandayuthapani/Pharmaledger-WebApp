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

const PatientEvaluationDetails = (props) => {
  const [values, setValues] = useState({
    patientId: '',
    symptoms: 'None',
    evaluationResult: '',
    evaluationDate: '2021-07-16',
    toPharma: 'moderna',
    evaluationMessage: '',
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const createTemplateTrial = () => {
    // console.log(event);
    console.log(medicalUri);

    const formatDate = (inputDate) => {
      const date = new Date(inputDate);
      return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    };

    const params = new URLSearchParams({
      patientID: values.patientId,
      symptoms: values.symptoms,
      evaluationResult: values.evaluationResult,
      evaluationDate: formatDate(values.evaluationDate),
      toPharma: values.toPharma,
      fromMedical: medicalAccount,
    }).toString();
    const patientEvaluationUrl = `${medicalUri}/patients/createpatientevaluation?${params}`;
    // axios.get(`${medicalUri}/status`).then((response) => console.log(response.status));
    // eslint-disable-next-line no-unused-expressions
    axios.post(patientEvaluationUrl).then(
      (response) => {
        console.log(response.data);
        setValues({ evaluationMessage: 'Evaluation sent Successfully' });
      }
    ).catch((err) => {
      // console.log('sc', err);
      // console.log('data', err.data);
      setValues({ evaluationMessage: 'Evaluation creation failed' });
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
          subheader="Please fill the Patient Evaluation details to pharma"
          title="Send Patient Evaluation"
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
                label="Symptoms"
                name="symptoms"
                onChange={handleChange}
                required
                value={values.symptoms}
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
                label="Evaluation Result"
                name="evaluationResult"
                onChange={handleChange}
                required
                value={values.evaluationResult}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                id="evaluationDate"
                name="evaluationDate"
                label="Evaluation Date"
                type="date"
                onChange={handleChange}
                value={values.evaluationDate}
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
            Send Patient Evaluation
          </Button>
        </Box>
      </Card>
      <Grid
        item
        md={6}
        xs={12}
      >
        <Typography
          color="textSecondary"
          gutterBottom
          variant="body2"
        >
          {values.evaluationMessage }
        </Typography>
      </Grid>
    </form>
  );
};

export default PatientEvaluationDetails;
