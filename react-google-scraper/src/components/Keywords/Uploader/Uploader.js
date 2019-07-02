import React from 'react';
import { Alert, Col, Form, FormGroup, FormText, Label, Button, Input } from 'reactstrap';
import styles from './Uploader.module.scss';

const uploader = (props) => {

  const color = !props.error ? 'success' : 'danger';

  return (
    <Form className={styles.Uploader} onSubmit={props.submit}>
      { props.displayMessage ? <Alert color={color}>{props.displayMessage}</Alert> : null }
      <FormGroup row>
        <Col sm={6}>
          <Label for="upload">CSV File</Label>
        </Col>
        <Col sm={6}>
          <Input id="upload" name="csv" type="file" onChange={props.changed} />
          <FormText color="muted">
            Please select a CSV file to upload
          </FormText>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Col sm={{size: 3, offset: 6}}>
          <Button block type="submit">Upload</Button>
        </Col>
      </FormGroup>
    </Form>
  )
};

export default uploader;
